import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const ArticleTagRelationUncheckedUpdateWithoutTagInputSchema: z.ZodType<Prisma.ArticleTagRelationUncheckedUpdateWithoutTagInput> = z.object({
  articleId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default ArticleTagRelationUncheckedUpdateWithoutTagInputSchema;
