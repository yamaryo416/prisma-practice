import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const ArticleTagRelationUncheckedUpdateManyWithoutTagInputSchema: z.ZodType<Prisma.ArticleTagRelationUncheckedUpdateManyWithoutTagInput> = z.object({
  articleId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default ArticleTagRelationUncheckedUpdateManyWithoutTagInputSchema;
