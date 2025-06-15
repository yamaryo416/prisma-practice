import { z } from "zod";

export const pathIdSchema = z
  .string()
  .refine(
    (id) => {
      const parsedId = parseInt(id);
      return !isNaN(parsedId) && parsedId > 0;
    },
    {
      message: "無効なIDです",
    }
  )
  .transform(Number);

export const PaginationQuerySchema = z
  .object({
    limit: z.string().transform(Number),
    offset: z.string().transform(Number),
  })
  .partial();

export const ArticleListQuerySchema = PaginationQuerySchema.extend({
  tagId: z.string().transform(Number).optional(),
});
