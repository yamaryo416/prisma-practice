import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ArticleTagRelationCountOrderByAggregateInputSchema } from './ArticleTagRelationCountOrderByAggregateInputSchema';
import { ArticleTagRelationAvgOrderByAggregateInputSchema } from './ArticleTagRelationAvgOrderByAggregateInputSchema';
import { ArticleTagRelationMaxOrderByAggregateInputSchema } from './ArticleTagRelationMaxOrderByAggregateInputSchema';
import { ArticleTagRelationMinOrderByAggregateInputSchema } from './ArticleTagRelationMinOrderByAggregateInputSchema';
import { ArticleTagRelationSumOrderByAggregateInputSchema } from './ArticleTagRelationSumOrderByAggregateInputSchema';

export const ArticleTagRelationOrderByWithAggregationInputSchema: z.ZodType<Prisma.ArticleTagRelationOrderByWithAggregationInput> = z.object({
  articleId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ArticleTagRelationCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ArticleTagRelationAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ArticleTagRelationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ArticleTagRelationMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ArticleTagRelationSumOrderByAggregateInputSchema).optional()
}).strict();

export default ArticleTagRelationOrderByWithAggregationInputSchema;
