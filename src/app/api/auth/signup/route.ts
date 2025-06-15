import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";
import { setAuthToken, signJWT, verifyJWT } from "@/lib/auth";
import { Prisma } from "@prisma/client";
import { USER_FIELD_NAMES } from "@/constants/user";
import { validateRequest } from "@/lib/api/validation";
import UserCreateInputSchema from "../../../../../prisma/generated/zod/inputTypeSchemas/UserCreateInputSchema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const bodyValidation = validateRequest(body, UserCreateInputSchema);

    if (!bodyValidation.success) {
      return NextResponse.json(
        { error: bodyValidation.error },
        { status: 400 }
      );
    }
    const { username, email, password } = bodyValidation.data;

    // バリデーション
    if (!username || !email || !password) {
      return NextResponse.json(
        { error: "必須項目が入力されていません" },
        { status: 400 }
      );
    }

    // メールアドレスとユーザー名の重複チェック
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "このメールアドレスまたはユーザー名は既に使用されています" },
        { status: 400 }
      );
    }

    // パスワードのハッシュ化
    const hashedPassword = await bcrypt.hash(password, 12);

    // ユーザーの作成
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
      select: {
        id: true,
        username: true,
        email: true,
      },
    });

    // JWTトークンの生成
    const token = await signJWT({
      userId: user.id,
      username: user.username,
      email: user.email,
    });

    console.log({ token });

    const verifyToken = await verifyJWT(token);
    console.log({ verifyToken });

    await setAuthToken(token);

    return NextResponse.json(
      {
        message: "ユーザーが正常に作成されました",
        user,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("サインアップエラー:", error);

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        const fieldNames =
          (error.meta?.target as string[])
            .map(
              (name) =>
                USER_FIELD_NAMES[name as keyof typeof USER_FIELD_NAMES] ?? name
            )
            .join(",") ?? "特定のフィールド名";
        return NextResponse.json(
          { error: `${fieldNames}は既に使用されています` },
          { status: 400 }
        );
      }

      return NextResponse.json(
        { error: "バリデーションエラー", details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "ユーザーの作成中にエラーが発生しました" },
      { status: 500 }
    );
  }
}
