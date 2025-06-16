import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ArticleTagRelationUncheckedCreateWithoutTagInputSchema: z.ZodType<Prisma.ArticleTagRelationUncheckedCreateWithoutTagInput> = z.object({
  articleId: z.number().int()
}).strict();

export default ArticleTagRelationUncheckedCreateWithoutTagInputSchema;
