import * as jose from "jose";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET ?? "invalid";

const ISSUER = "prisma-practice";
const AUDIENCE = "prisma-practice-web";

export interface JWTPayload {
  userId: number;
  username: string;
  email: string;
}

export async function signJWT(payload: JWTPayload): Promise<string> {
  const secret = new TextEncoder().encode(JWT_SECRET);
  const alg = "HS256";

  return await new jose.SignJWT({
    ...payload,
  })
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setIssuer(ISSUER)
    .setAudience(AUDIENCE)
    .setExpirationTime("24h")
    .sign(secret);
}

export async function verifyJWT(token: string): Promise<JWTPayload> {
  try {
    const secret = new TextEncoder().encode(JWT_SECRET);
    const { payload } = await jose.jwtVerify(token, secret, {
      issuer: ISSUER,
      audience: AUDIENCE,
    });
    console.log({ payload });
    return {
      userId: payload.userId as number,
      username: payload.username as string,
      email: payload.email as string,
    };
  } catch {
    throw new Error("Invalid token");
  }
}

export const setAuthToken = async (token: string) => {
  const cookieStore = await cookies();
  cookieStore.set("auth-token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24, // 24時間
  });
};

export const getAuthToken = async (): Promise<string | null> => {
  const cookieStore = await cookies();
  return cookieStore.get("auth-token")?.value || null;
};
