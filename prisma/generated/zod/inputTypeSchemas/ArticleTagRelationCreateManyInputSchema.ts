import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ArticleTagRelationCreateManyInputSchema: z.ZodType<Prisma.ArticleTagRelationCreateManyInput> = z.object({
  articleId: z.number().int(),
  tagId: z.number().int()
}).strict();

export default ArticleTagRelationCreateManyInputSchema;
