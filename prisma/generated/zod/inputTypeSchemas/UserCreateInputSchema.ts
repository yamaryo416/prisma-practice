import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ArticleCreateNestedManyWithoutUserInputSchema } from './ArticleCreateNestedManyWithoutUserInputSchema';
import { UserOrganizationRelationCreateNestedManyWithoutUserInputSchema } from './UserOrganizationRelationCreateNestedManyWithoutUserInputSchema';

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  username: z.string(),
  email: z.string(),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  articles: z.lazy(() => ArticleCreateNestedManyWithoutUserInputSchema).optional(),
  organizations: z.lazy(() => UserOrganizationRelationCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserCreateInputSchema;
