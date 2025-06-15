import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyJWT, getAuthToken } from "@/lib/auth";
import { PaginationQuerySchema } from "@/types/request";
import { withAuth } from "@/lib/api-middleware";

export async function GET(request: Request) {
  return withAuth(async () => {
    try {
      const token = await getAuthToken();

      console.log({ token });

      if (!token) {
        return NextResponse.json({ error: "認証が必要です" }, { status: 401 });
      }

      const payload = await verifyJWT(token);

      console.log({ payload });

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

      const articles = await prisma.article.findMany({
        where: {
          userId: payload.userId,
        },
        include: {
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
    } catch {
      return NextResponse.json(
        { error: "記事の取得中にエラーが発生しました" },
        { status: 500 }
      );
    }
  });
}
