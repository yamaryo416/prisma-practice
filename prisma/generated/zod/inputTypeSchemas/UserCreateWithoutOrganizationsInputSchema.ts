import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ArticleCreateNestedManyWithoutUserInputSchema } from './ArticleCreateNestedManyWithoutUserInputSchema';

export const UserCreateWithoutOrganizationsInputSchema: z.ZodType<Prisma.UserCreateWithoutOrganizationsInput> = z.object({
  username: z.string(),
  email: z.string(),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  articles: z.lazy(() => ArticleCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserCreateWithoutOrganizationsInputSchema;
