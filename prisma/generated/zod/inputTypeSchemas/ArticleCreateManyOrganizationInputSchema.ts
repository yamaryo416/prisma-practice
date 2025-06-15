import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ArticleCreateManyOrganizationInputSchema: z.ZodType<Prisma.ArticleCreateManyOrganizationInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  content: z.string(),
  userId: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default ArticleCreateManyOrganizationInputSchema;
