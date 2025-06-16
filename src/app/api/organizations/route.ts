import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { PaginationQuerySchema } from "@/types/request";
import { withAuth } from "@/lib/api-middleware";
import { OrganizationCreateInputSchema } from "../../../../prisma/generated/zod/inputTypeSchemas/OrganizationCreateInputSchema";

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

      const organizations = await prisma.organization.findMany({
        take: queryValidation.data?.limit,
        skip: queryValidation.data?.offset,
        orderBy: {
          createdAt: "desc",
        },
      });

      return NextResponse.json(organizations);
    } catch (error) {
      console.error("組織一覧取得エラー:", error);
      return NextResponse.json(
        { error: "組織一覧の取得中にエラーが発生しました" },
        { status: 500 }
      );
    }
  });
}

export async function POST(request: Request) {
  return withAuth(async (payload) => {
    try {
      const data = await request.json();

      const bodyValidation = OrganizationCreateInputSchema.safeParse(data);
      if (!bodyValidation.success) {
        return NextResponse.json(
          {
            error: "バリデーションエラー",
            details: bodyValidation.error.errors,
          },
          { status: 400 }
        );
      }

      const organization = await prisma.organization.create({
        data: {
          ...bodyValidation.data,
          users: {
            create: {
              userId: payload.userId,
              role: "ADMIN",
            },
          },
        },
      });
      return NextResponse.json(
        {
          message: "組織を作成しました",
          organization,
        },
        { status: 201 }
      );
    } catch (error) {
      console.error("組織作成エラー:", error);
      return NextResponse.json(
        { error: "組織の作成中にエラーが発生しました" },
        { status: 500 }
      );
    }
  });
}
