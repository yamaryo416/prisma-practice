import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const ArticleTagRelationUncheckedUpdateWithoutArticleInputSchema: z.ZodType<Prisma.ArticleTagRelationUncheckedUpdateWithoutArticleInput> = z.object({
  tagId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default ArticleTagRelationUncheckedUpdateWithoutArticleInputSchema;
