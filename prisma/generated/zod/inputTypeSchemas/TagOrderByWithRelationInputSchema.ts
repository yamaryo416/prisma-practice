import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ArticleTagRelationOrderByRelationAggregateInputSchema } from './ArticleTagRelationOrderByRelationAggregateInputSchema';

export const TagOrderByWithRelationInputSchema: z.ZodType<Prisma.TagOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  articles: z.lazy(() => ArticleTagRelationOrderByRelationAggregateInputSchema).optional()
}).strict();

export default TagOrderByWithRelationInputSchema;
