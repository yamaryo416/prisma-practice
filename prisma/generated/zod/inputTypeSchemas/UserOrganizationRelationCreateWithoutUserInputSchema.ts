import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { OrganizationCreateNestedOneWithoutUsersInputSchema } from './OrganizationCreateNestedOneWithoutUsersInputSchema';

export const UserOrganizationRelationCreateWithoutUserInputSchema: z.ZodType<Prisma.UserOrganizationRelationCreateWithoutUserInput> = z.object({
  role: z.lazy(() => RoleSchema),
  createdAt: z.coerce.date().optional(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutUsersInputSchema)
}).strict();

export default UserOrganizationRelationCreateWithoutUserInputSchema;
