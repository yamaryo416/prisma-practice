import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ArticleUncheckedCreateNestedManyWithoutOrganizationInputSchema } from './ArticleUncheckedCreateNestedManyWithoutOrganizationInputSchema';

export const OrganizationUncheckedCreateWithoutUsersInputSchema: z.ZodType<Prisma.OrganizationUncheckedCreateWithoutUsersInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  articles: z.lazy(() => ArticleUncheckedCreateNestedManyWithoutOrganizationInputSchema).optional()
}).strict();

export default OrganizationUncheckedCreateWithoutUsersInputSchema;
