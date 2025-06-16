import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { EnumRoleFilterSchema } from './EnumRoleFilterSchema';
import { RoleSchema } from './RoleSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const UserOrganizationRelationScalarWhereInputSchema: z.ZodType<Prisma.UserOrganizationRelationScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserOrganizationRelationScalarWhereInputSchema),z.lazy(() => UserOrganizationRelationScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserOrganizationRelationScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserOrganizationRelationScalarWhereInputSchema),z.lazy(() => UserOrganizationRelationScalarWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  organizationId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  role: z.union([ z.lazy(() => EnumRoleFilterSchema),z.lazy(() => RoleSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default UserOrganizationRelationScalarWhereInputSchema;
