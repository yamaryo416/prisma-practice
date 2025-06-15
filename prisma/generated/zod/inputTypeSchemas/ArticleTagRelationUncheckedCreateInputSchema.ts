import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ArticleTagRelationUncheckedCreateInputSchema: z.ZodType<Prisma.ArticleTagRelationUncheckedCreateInput> = z.object({
  articleId: z.number().int(),
  tagId: z.number().int()
}).strict();

export default ArticleTagRelationUncheckedCreateInputSchema;
