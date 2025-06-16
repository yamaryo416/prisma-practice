import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ArticleUncheckedCreateWithoutTagsInputSchema: z.ZodType<Prisma.ArticleUncheckedCreateWithoutTagsInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  content: z.string(),
  userId: z.number().int(),
  organizationId: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default ArticleUncheckedCreateWithoutTagsInputSchema;
