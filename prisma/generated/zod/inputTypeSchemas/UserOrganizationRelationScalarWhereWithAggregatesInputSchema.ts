import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { EnumRoleWithAggregatesFilterSchema } from './EnumRoleWithAggregatesFilterSchema';
import { RoleSchema } from './RoleSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const UserOrganizationRelationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserOrganizationRelationScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserOrganizationRelationScalarWhereWithAggregatesInputSchema),z.lazy(() => UserOrganizationRelationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserOrganizationRelationScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserOrganizationRelationScalarWhereWithAggregatesInputSchema),z.lazy(() => UserOrganizationRelationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  organizationId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  role: z.union([ z.lazy(() => EnumRoleWithAggregatesFilterSchema),z.lazy(() => RoleSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default UserOrganizationRelationScalarWhereWithAggregatesInputSchema;
