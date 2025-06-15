import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { withAuth } from "@/lib/api-middleware";
import { OrganizationUpdateInputSchema } from "../../../../../prisma/generated/zod/inputTypeSchemas/OrganizationUpdateInputSchema";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const organization = await prisma.organization.findUnique({
      where: { id: parseInt(params.id) },
      include: {
        users: {
          include: {
            user: {
              select: {
                id: true,
                username: true,
                email: true,
              },
            },
          },
        },
        articles: true,
      },
    });

    if (!organization) {
      return NextResponse.json(
        { error: "組織が見つかりません" },
        { status: 404 }
      );
    }

    return NextResponse.json(organization);
  } catch (error) {
    console.error("組織取得エラー:", error);
    return NextResponse.json(
      { error: "組織の取得中にエラーが発生しました" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  return withAuth(async (payload) => {
    try {
      // 権限チェック
      const userOrg = await prisma.userOrganizationRelation.findUnique({
        where: {
          userId_organizationId: {
            userId: payload.userId,
            organizationId: parseInt(params.id),
          },
        },
      });

      if (!userOrg || userOrg.role !== "ADMIN") {
        return NextResponse.json(
          { error: "この操作を行う権限がありません" },
          { status: 403 }
        );
      }

      const data = await request.json();

      const bodyValidation = OrganizationUpdateInputSchema.safeParse(data);
      if (!bodyValidation.success) {
        return NextResponse.json(
          {
            error: "バリデーションエラー",
            details: bodyValidation.error.errors,
          },
          { status: 400 }
        );
      }

      const organization = await prisma.organization.update({
        where: { id: parseInt(params.id) },
        data: bodyValidation.data,
      });

      return NextResponse.json({
        message: "組織を更新しました",
        organization,
      });
    } catch (error) {
      console.error("組織更新エラー:", error);
      return NextResponse.json(
        { error: "組織の更新中にエラーが発生しました" },
        { status: 500 }
      );
    }
  });
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  return withAuth(async (payload) => {
    try {
      // 権限チェック
      const userOrg = await prisma.userOrganizationRelation.findUnique({
        where: {
          userId_organizationId: {
            userId: payload.userId,
            organizationId: parseInt(params.id),
          },
        },
      });

      if (!userOrg || userOrg.role !== "ADMIN") {
        return NextResponse.json(
          { error: "この操作を行う権限がありません" },
          { status: 403 }
        );
      }

      await prisma.organization.delete({
        where: { id: parseInt(params.id) },
      });

      return NextResponse.json(
        { message: "組織を削除しました" },
        { status: 200 }
      );
    } catch (error) {
      console.error("組織削除エラー:", error);
      return NextResponse.json(
        { error: "組織の削除中にエラーが発生しました" },
        { status: 500 }
      );
    }
  });
}
