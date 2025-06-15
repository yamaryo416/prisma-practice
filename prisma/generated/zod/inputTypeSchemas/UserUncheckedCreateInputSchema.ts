import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ArticleUncheckedCreateNestedManyWithoutUserInputSchema } from './ArticleUncheckedCreateNestedManyWithoutUserInputSchema';
import { UserOrganizationRelationUncheckedCreateNestedManyWithoutUserInputSchema } from './UserOrganizationRelationUncheckedCreateNestedManyWithoutUserInputSchema';

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  username: z.string(),
  email: z.string(),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  articles: z.lazy(() => ArticleUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  organizations: z.lazy(() => UserOrganizationRelationUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserUncheckedCreateInputSchema;
