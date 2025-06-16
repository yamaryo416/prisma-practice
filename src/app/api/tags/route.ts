import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { PaginationQuerySchema } from "@/types/request";
import { withAuth } from "@/lib/api-middleware";
import { TagCreateInputSchema } from "../../../../prisma/generated/zod/inputTypeSchemas/TagCreateInputSchema";

/**
 * タグ一覧取得
 * query: {
 *  limit: number,
 *  offset: number,
 * }
 * response: Tag[]
 */
export async function GET(request: Request) {
  return withAuth(async () => {
    try {
      const { searchParams } = new URL(request.url);
      const queryValidation = PaginationQuerySchema.safeParse(
        Object.fromEntries(searchParams)
      );

      if (!queryValidation.success) {
        return NextResponse.json(
          {
            error: "クエリパラメータが無効です",
            details: queryValidation.error.errors,
          },
          { status: 400 }
        );
      }

      const tags = await prisma.tag.findMany({
        include: {
          _count: {
            select: {
              articles: true,
            },
          },
        },
        take: queryValidation.data?.limit,
        skip: queryValidation.data?.offset,
        orderBy: {
          createdAt: "desc",
        },
      });

      return NextResponse.json(tags);
    } catch (error) {
      console.error("タグ一覧取得エラー:", error);
      return NextResponse.json(
        { error: "タグ一覧の取得中にエラーが発生しました" },
        { status: 500 }
      );
    }
  });
}

/**
 * タグ作成
 * body: {
 *  name: string,
 * }
 * response: Tag
 */
export async function POST(request: Request) {
  return withAuth(async () => {
    try {
      const data = await request.json();

      const bodyValidation = TagCreateInputSchema.safeParse(data);
      if (!bodyValidation.success) {
        return NextResponse.json(
          {
            error: "バリデーションエラー",
            details: bodyValidation.error.errors,
          },
          { status: 400 }
        );
      }

      const tag = await prisma.tag.create({
        data: bodyValidation.data,
      });

      return NextResponse.json(tag, { status: 201 });
    } catch (error) {
      console.error("タグ作成エラー:", error);
      return NextResponse.json(
        { error: "タグの作成中にエラーが発生しました" },
        { status: 500 }
      );
    }
  });
}
