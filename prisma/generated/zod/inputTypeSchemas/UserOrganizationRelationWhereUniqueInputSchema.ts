import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserOrganizationRelationUserIdOrganizationIdCompoundUniqueInputSchema } from './UserOrganizationRelationUserIdOrganizationIdCompoundUniqueInputSchema';
import { UserOrganizationRelationWhereInputSchema } from './UserOrganizationRelationWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { EnumRoleFilterSchema } from './EnumRoleFilterSchema';
import { RoleSchema } from './RoleSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserScalarRelationFilterSchema } from './UserScalarRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { OrganizationScalarRelationFilterSchema } from './OrganizationScalarRelationFilterSchema';
import { OrganizationWhereInputSchema } from './OrganizationWhereInputSchema';

export const UserOrganizationRelationWhereUniqueInputSchema: z.ZodType<Prisma.UserOrganizationRelationWhereUniqueInput> = z.object({
  userId_organizationId: z.lazy(() => UserOrganizationRelationUserIdOrganizationIdCompoundUniqueInputSchema)
})
.and(z.object({
  userId_organizationId: z.lazy(() => UserOrganizationRelationUserIdOrganizationIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => UserOrganizationRelationWhereInputSchema),z.lazy(() => UserOrganizationRelationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserOrganizationRelationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserOrganizationRelationWhereInputSchema),z.lazy(() => UserOrganizationRelationWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  organizationId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  role: z.union([ z.lazy(() => EnumRoleFilterSchema),z.lazy(() => RoleSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  organization: z.union([ z.lazy(() => OrganizationScalarRelationFilterSchema),z.lazy(() => OrganizationWhereInputSchema) ]).optional(),
}).strict());

export default UserOrganizationRelationWhereUniqueInputSchema;
