import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { UserCreateNestedOneWithoutOrganizationsInputSchema } from './UserCreateNestedOneWithoutOrganizationsInputSchema';

export const UserOrganizationRelationCreateWithoutOrganizationInputSchema: z.ZodType<Prisma.UserOrganizationRelationCreateWithoutOrganizationInput> = z.object({
  role: z.lazy(() => RoleSchema),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutOrganizationsInputSchema)
}).strict();

export default UserOrganizationRelationCreateWithoutOrganizationInputSchema;
