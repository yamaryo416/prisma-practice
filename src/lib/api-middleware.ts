import { NextResponse } from "next/server";
import { getAuthToken, verifyJWT } from "./auth";

// JWTPayloadの型を修正
type ApiHandler = (payload: { userId: number }) => Promise<NextResponse>;

export async function withAuth(handler: ApiHandler): Promise<NextResponse> {
  try {
    const token = await getAuthToken();

    if (!token) {
      return NextResponse.json({ error: "認証が必要です" }, { status: 401 });
    }

    const payload = await verifyJWT(token);
    return await handler(payload);
  } catch (error) {
    console.error("認証エラー:", error);
    return NextResponse.json(
      { error: "認証処理中にエラーが発生しました" },
      { status: 401 }
    );
  }
}
