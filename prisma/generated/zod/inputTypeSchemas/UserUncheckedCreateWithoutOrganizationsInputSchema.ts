import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ArticleUncheckedCreateNestedManyWithoutUserInputSchema } from './ArticleUncheckedCreateNestedManyWithoutUserInputSchema';

export const UserUncheckedCreateWithoutOrganizationsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutOrganizationsInput> = z.object({
  id: z.number().int().optional(),
  username: z.string(),
  email: z.string(),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  articles: z.lazy(() => ArticleUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutOrganizationsInputSchema;
