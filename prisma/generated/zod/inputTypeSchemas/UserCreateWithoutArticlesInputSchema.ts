import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserOrganizationRelationCreateNestedManyWithoutUserInputSchema } from './UserOrganizationRelationCreateNestedManyWithoutUserInputSchema';

export const UserCreateWithoutArticlesInputSchema: z.ZodType<Prisma.UserCreateWithoutArticlesInput> = z.object({
  username: z.string(),
  email: z.string(),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  organizations: z.lazy(() => UserOrganizationRelationCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserCreateWithoutArticlesInputSchema;
