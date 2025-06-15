import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { PaginationQuerySchema } from "@/types/request";
import { withAuth } from "@/lib/api-middleware";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
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

      // 組織の存在確認
      const organization = await prisma.organization.findUnique({
        where: { id: parseInt(params.id) },
      });

      if (!organization) {
        return NextResponse.json(
          { error: "組織が見つかりません" },
          { status: 404 }
        );
      }

      const articles = await prisma.article.findMany({
        where: {
          organizationId: parseInt(params.id),
        },
        include: {
          user: {
            select: {
              id: true,
              username: true,
              email: true,
            },
          },
          tags: {
            include: {
              tag: true,
            },
          },
        },
        take: queryValidation.data?.limit,
        skip: queryValidation.data?.offset,
        orderBy: {
          createdAt: "desc",
        },
      });

      return NextResponse.json(articles);
    } catch (error) {
      console.error("組織記事一覧取得エラー:", error);
      return NextResponse.json(
        { error: "組織記事一覧の取得中にエラーが発生しました" },
        { status: 500 }
      );
    }
  });
}
