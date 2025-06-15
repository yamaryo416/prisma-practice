import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ArticleTagRelationCreateManyArticleInputSchema: z.ZodType<Prisma.ArticleTagRelationCreateManyArticleInput> = z.object({
  tagId: z.number().int()
}).strict();

export default ArticleTagRelationCreateManyArticleInputSchema;
