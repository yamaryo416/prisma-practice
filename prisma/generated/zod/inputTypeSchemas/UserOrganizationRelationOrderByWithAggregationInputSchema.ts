import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { UserOrganizationRelationCountOrderByAggregateInputSchema } from './UserOrganizationRelationCountOrderByAggregateInputSchema';
import { UserOrganizationRelationAvgOrderByAggregateInputSchema } from './UserOrganizationRelationAvgOrderByAggregateInputSchema';
import { UserOrganizationRelationMaxOrderByAggregateInputSchema } from './UserOrganizationRelationMaxOrderByAggregateInputSchema';
import { UserOrganizationRelationMinOrderByAggregateInputSchema } from './UserOrganizationRelationMinOrderByAggregateInputSchema';
import { UserOrganizationRelationSumOrderByAggregateInputSchema } from './UserOrganizationRelationSumOrderByAggregateInputSchema';

export const UserOrganizationRelationOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrganizationRelationOrderByWithAggregationInput> = z.object({
  userId: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserOrganizationRelationCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => UserOrganizationRelationAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserOrganizationRelationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserOrganizationRelationMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => UserOrganizationRelationSumOrderByAggregateInputSchema).optional()
}).strict();

export default UserOrganizationRelationOrderByWithAggregationInputSchema;
