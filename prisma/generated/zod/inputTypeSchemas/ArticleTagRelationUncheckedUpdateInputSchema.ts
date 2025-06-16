import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const ArticleTagRelationUncheckedUpdateInputSchema: z.ZodType<Prisma.ArticleTagRelationUncheckedUpdateInput> = z.object({
  articleId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tagId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default ArticleTagRelationUncheckedUpdateInputSchema;
