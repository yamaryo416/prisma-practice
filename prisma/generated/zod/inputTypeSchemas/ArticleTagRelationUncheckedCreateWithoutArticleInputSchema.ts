import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ArticleTagRelationUncheckedCreateWithoutArticleInputSchema: z.ZodType<Prisma.ArticleTagRelationUncheckedCreateWithoutArticleInput> = z.object({
  tagId: z.number().int()
}).strict();

export default ArticleTagRelationUncheckedCreateWithoutArticleInputSchema;
