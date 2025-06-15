import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ArticleOrderByRelationAggregateInputSchema } from './ArticleOrderByRelationAggregateInputSchema';
import { UserOrganizationRelationOrderByRelationAggregateInputSchema } from './UserOrganizationRelationOrderByRelationAggregateInputSchema';

export const OrganizationOrderByWithRelationInputSchema: z.ZodType<Prisma.OrganizationOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  articles: z.lazy(() => ArticleOrderByRelationAggregateInputSchema).optional(),
  users: z.lazy(() => UserOrganizationRelationOrderByRelationAggregateInputSchema).optional()
}).strict();

export default OrganizationOrderByWithRelationInputSchema;
