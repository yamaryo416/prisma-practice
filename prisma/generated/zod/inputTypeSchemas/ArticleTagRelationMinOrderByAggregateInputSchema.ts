import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ArticleTagRelationMinOrderByAggregateInputSchema: z.ZodType<Prisma.ArticleTagRelationMinOrderByAggregateInput> = z.object({
  articleId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ArticleTagRelationMinOrderByAggregateInputSchema;
