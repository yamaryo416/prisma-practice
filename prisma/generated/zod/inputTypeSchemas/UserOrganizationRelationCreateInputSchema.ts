import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { UserCreateNestedOneWithoutOrganizationsInputSchema } from './UserCreateNestedOneWithoutOrganizationsInputSchema';
import { OrganizationCreateNestedOneWithoutUsersInputSchema } from './OrganizationCreateNestedOneWithoutUsersInputSchema';

export const UserOrganizationRelationCreateInputSchema: z.ZodType<Prisma.UserOrganizationRelationCreateInput> = z.object({
  role: z.lazy(() => RoleSchema),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutOrganizationsInputSchema),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutUsersInputSchema)
}).strict();

export default UserOrganizationRelationCreateInputSchema;
