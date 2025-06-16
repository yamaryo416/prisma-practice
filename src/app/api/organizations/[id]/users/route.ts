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

      if (organization != null) {
        return NextResponse.json(
          { error: "組織が見つかりません" },
          { status: 404 }
        );
      }

      const users = await prisma.userOrganizationRelation.findMany({
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
        },
        take: queryValidation.data?.limit,
        skip: queryValidation.data?.offset,
        orderBy: {
          createdAt: "desc",
        },
      });

      return NextResponse.json(users);
    } catch (error) {
      console.error("組織ユーザー一覧取得エラー:", error);
      return NextResponse.json(
        { error: "組織ユーザー一覧の取得中にエラーが発生しました" },
        { status: 500 }
      );
    }
  });
}

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  return withAuth(async (session) => {
    try {
      // リクエストボディの取得
      const body = await request.json();
      const { userId } = body;

      if (!userId) {
        return NextResponse.json(
          { error: "ユーザーIDは必須です" },
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

      // 招待者が管理者権限を持っているか確認
      const inviterRole = await prisma.userOrganizationRelation.findUnique({
        where: {
          userId_organizationId: {
            userId: 1,
            // userId: ,
            organizationId: parseInt(params.id),
          },
        },
      });

      if (!inviterRole || inviterRole.role !== "ADMIN") {
        return NextResponse.json(
          { error: "組織の管理者のみがユーザーを招待できます" },
          { status: 403 }
        );
      }

      // 招待するユーザーの存在確認
      const userToInvite = await prisma.user.findUnique({
        where: { id: userId },
      });

      if (!userToInvite) {
        return NextResponse.json(
          { error: "招待するユーザーが見つかりません" },
          { status: 404 }
        );
      }

      // すでに組織に所属しているか確認
      const existingMembership =
        await prisma.userOrganizationRelation.findUnique({
          where: {
            userId_organizationId: {
              userId: userId,
              organizationId: parseInt(params.id),
            },
          },
        });

      if (existingMembership) {
        return NextResponse.json(
          { error: "このユーザーはすでに組織に所属しています" },
          { status: 400 }
        );
      }

      // ユーザーを組織に追加（デフォルトでVIEWER権限を付与）
      const newMember = await prisma.userOrganizationRelation.create({
        data: {
          userId: userId,
          organizationId: parseInt(params.id),
          role: "VIEWER",
        },
      });

      return NextResponse.json(newMember);
    } catch (error) {
      console.error("ユーザー招待エラー:", error);
      return NextResponse.json(
        { error: "ユーザーの招待中にエラーが発生しました" },
        { status: 500 }
      );
    }
  });
}
