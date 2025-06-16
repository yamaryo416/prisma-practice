import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import ArticleCreateManyInputSchema from "../../../../prisma/generated/zod/inputTypeSchemas/ArticleCreateManyInputSchema";
import { ArticleListQuerySchema } from "@/types/request";
import { TagIdsSchema } from "@/types/tag";
import { withAuth } from "@/lib/api-middleware";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const queryValidation = ArticleListQuerySchema.safeParse(
      Object.fromEntries(searchParams)
    );

    if (!queryValidation.success) {
      return NextResponse.json(
        {
          error: "リクエストが無効です",
          details: queryValidation.error.errors,
        },
        { status: 400 }
      );
    }
    const validationData = queryValidation.data;

    // タグIDが指定されている場合のwhere条件を作成
    const where =
      validationData?.tagId != null
        ? {
            tags: {
              some: {
                tagId: validationData.tagId,
              },
            },
          }
        : {};

    const articles = await prisma.article.findMany({
      where,
      include: {
        user: {
          select: {
            id: true,
            username: true,
            email: true,
          },
        },
        organization: {
          select: {
            id: true,
            name: true,
          },
        },
        tags: {
          include: {
            tag: true,
          },
        },
      },
      take: validationData?.limit ?? undefined,
      skip: validationData?.offset ?? undefined,
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(articles);
  } catch (error) {
    console.error("記事一覧取得エラー:", error);
    return NextResponse.json(
      { error: "記事一覧の取得中にエラーが発生しました" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  return withAuth(async (payload) => {
    try {
      const { tagIds, ...data } = await request.json();

      const tagIdsValidation = TagIdsSchema.safeParse(tagIds);
      if (!tagIdsValidation.success) {
        return NextResponse.json(
          { error: tagIdsValidation.error },
          { status: 400 }
        );
      }

      const bodyValidation = ArticleCreateManyInputSchema.safeParse({
        ...data,
        userId: payload.userId,
      });
      if (!bodyValidation.success) {
        return NextResponse.json(
          {
            error: "バリデーションエラー",
            details: bodyValidation.error.errors,
          },
          { status: 400 }
        );
      }

      const article = await prisma.article.create({
        data: {
          ...bodyValidation.data,
          userId: payload.userId,
          tags: {
            create: tagIds.map((tagId: number) => ({
              tagId,
            })),
          },
        },
      });

      return NextResponse.json(article, { status: 201 });
    } catch (error) {
      console.error("記事作成エラー:", error);
      return NextResponse.json(
        { error: "記事の作成中にエラーが発生しました" },
        { status: 500 }
      );
    }
  });
}
