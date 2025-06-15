import { ZodSchema } from "zod";

export const validateRequest = <T>(
  data: unknown,
  schema: ZodSchema<T>
): { success: true; data: T } | { success: false; error: Response } => {
  const validation = schema.safeParse(data);

  if (!validation.success) {
    const errorResponse = Response.json(
      {
        error: validation.error.errors.map((err) => err.message).join(","),
      },
      {
        status: 400,
      }
    );
    return { success: false, error: errorResponse };
  }

  return { success: true, data: validation.data };
};
