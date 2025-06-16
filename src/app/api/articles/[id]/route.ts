import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { pathIdSchema } from "@/types/request";
import { ArticlePartialSchema } from "../../../../../prisma/generated/zod/modelSchema/ArticleSchema";
import { TagIdsSchema } from "@/types/tag";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const idValidation = pathIdSchema.safeParse(params.id);
  if (!idValidation.success) {
    return NextResponse.json({ error: idValidation.error }, { status: 400 });
  }

  try {
    const article = await prisma.article.findUnique({
      where: { id: idValidation.data },
      include: {
        user: true,
        organization: true,
        tags: {
          include: {
            tag: true,
          },
        },
      },
    });

    if (!article) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 });
    }

    return NextResponse.json(article);
  } catch {
    return NextResponse.json(
      { error: "記事の取得中にエラーが発生しました" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const idValidation = NumberIdSchema.safeParse(params.id);
  if (!idValidation.success) {
    return NextResponse.json({ error: idValidation.error }, { status: 400 });
  }

  try {
    const { tagIds, ...body } = await request.json();

    const tagIdsValidation = TagIdsSchema.safeParse(tagIds);
    if (!tagIdsValidation.success) {
      return NextResponse.json(
        { error: tagIdsValidation.error },
        { status: 400 }
      );
    }

    const bodyValidation = ArticlePartialSchema.safeParse(body);
    if (!bodyValidation.success) {
      return NextResponse.json(
        { error: bodyValidation.error },
        { status: 400 }
      );
    }

    // ... existing code ...

    const hoge = await prisma.article.update({
      where: { id: idValidation.data },
      data: {
        ...bodyValidation.data,
        tags: {
          set: tagIdsValidation.data.map((tagId) => ({
            articleId_tagId: { articleId: idValidation.data, tagId },
          })),
        },
      },
    });

    // ... existing code ...

    const article = await prisma.$transaction(async (tx) => {
      await tx.articleTagRelation.deleteMany({
        where: { articleId: idValidation.data },
      });

      return await prisma.article.update({
        where: { id: idValidation.data },
        data: {
          ...bodyValidation.data,
          tags: {
            create: tagIdsValidation.data.map((tagId) => ({
              tagId,
            })),
          },
        },
      });
    });

    return NextResponse.json(article);
  } catch (error) {
    console.error("Article update error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.article.delete({
      where: { id: parseInt(params.id) },
    });

    return NextResponse.json({ message: "Article deleted successfully" });
  } catch {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
