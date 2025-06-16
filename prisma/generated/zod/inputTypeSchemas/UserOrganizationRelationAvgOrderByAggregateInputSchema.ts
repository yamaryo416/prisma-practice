import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const UserOrganizationRelationAvgOrderByAggregateInputSchema: z.ZodType<Prisma.UserOrganizationRelationAvgOrderByAggregateInput> = z.object({
  userId: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default UserOrganizationRelationAvgOrderByAggregateInputSchema;
