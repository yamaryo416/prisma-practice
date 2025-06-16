import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const ArticleTagRelationUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ArticleTagRelationUncheckedUpdateManyInput> = z.object({
  articleId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tagId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default ArticleTagRelationUncheckedUpdateManyInputSchema;
