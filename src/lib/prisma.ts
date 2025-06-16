import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
import { z } from "zod";

const FIELD_NAMES: Record<string, string> = {
  username: "ユーザー名",
  email: "メールアドレス",
  password: "パスワード",
  // 必要に応じて他のフィールドも追加
};

// zodのデフォルトエラーメッセージを設定
z.setErrorMap((issue, ctx) => {
  const filedName = issue.path.map(
    (name) => FIELD_NAMES[name as keyof typeof FIELD_NAMES] ?? name
  );
  if (issue.code === z.ZodIssueCode.invalid_type) {
    return {
      message: `${filedName}は${issue.expected}型で入力してください`,
    };
  }
  if (issue.code === z.ZodIssueCode.invalid_string) {
    return {
      message: `${filedName}の形式が異なります`,
    };
  }
  if (issue.code === z.ZodIssueCode.too_small) {
    return {
      message: `${filedName}は${issue.minimum}文字以上入力してください`,
    };
  }
  if (issue.code === z.ZodIssueCode.too_big) {
    return {
      message: `${filedName}は${issue.maximum}文字以内入力してください`,
    };
  }

  return { message: ctx.defaultError };
});

const prisma = new PrismaClient().$extends(withAccelerate());

const globalForPrisma = global as unknown as { prisma: typeof prisma };

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
