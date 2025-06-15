import { NextResponse } from "next/server";
import { getAuthToken, verifyJWT } from "./lib/auth";

export async function middleware() {
  try {
    const token = await getAuthToken();

    if (!token) {
      return NextResponse.json({ error: "認証が必要です" }, { status: 401 });
    }

    // トークンの検証
    verifyJWT(token);

    return NextResponse.next();
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "無効なトークンです" }, { status: 401 });
  }
}

export const config = {
  matcher: [
    "/api/articles/:path*",
    "/api/organizations/:path*",
    // 他の保護したいAPIパス
  ],
};
