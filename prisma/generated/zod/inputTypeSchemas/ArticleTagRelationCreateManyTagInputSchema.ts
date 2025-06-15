import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ArticleTagRelationCreateManyTagInputSchema: z.ZodType<Prisma.ArticleTagRelationCreateManyTagInput> = z.object({
  articleId: z.number().int()
}).strict();

export default ArticleTagRelationCreateManyTagInputSchema;
