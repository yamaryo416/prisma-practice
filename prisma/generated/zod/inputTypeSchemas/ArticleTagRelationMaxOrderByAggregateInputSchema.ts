import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ArticleTagRelationMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ArticleTagRelationMaxOrderByAggregateInput> = z.object({
  articleId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ArticleTagRelationMaxOrderByAggregateInputSchema;
