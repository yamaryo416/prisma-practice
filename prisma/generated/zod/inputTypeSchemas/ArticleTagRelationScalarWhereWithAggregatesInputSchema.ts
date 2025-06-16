import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const ArticleTagRelationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ArticleTagRelationScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ArticleTagRelationScalarWhereWithAggregatesInputSchema),z.lazy(() => ArticleTagRelationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ArticleTagRelationScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ArticleTagRelationScalarWhereWithAggregatesInputSchema),z.lazy(() => ArticleTagRelationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  articleId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  tagId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default ArticleTagRelationScalarWhereWithAggregatesInputSchema;
