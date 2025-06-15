import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ArticleCreateManyUserInputSchema: z.ZodType<Prisma.ArticleCreateManyUserInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  content: z.string(),
  organizationId: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default ArticleCreateManyUserInputSchema;
