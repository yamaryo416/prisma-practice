import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserOrganizationRelationUncheckedCreateNestedManyWithoutUserInputSchema } from './UserOrganizationRelationUncheckedCreateNestedManyWithoutUserInputSchema';

export const UserUncheckedCreateWithoutArticlesInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutArticlesInput> = z.object({
  id: z.number().int().optional(),
  username: z.string(),
  email: z.string(),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  organizations: z.lazy(() => UserOrganizationRelationUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutArticlesInputSchema;
