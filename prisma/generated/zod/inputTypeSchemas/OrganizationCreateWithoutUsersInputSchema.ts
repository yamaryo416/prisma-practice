import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ArticleCreateNestedManyWithoutOrganizationInputSchema } from './ArticleCreateNestedManyWithoutOrganizationInputSchema';

export const OrganizationCreateWithoutUsersInputSchema: z.ZodType<Prisma.OrganizationCreateWithoutUsersInput> = z.object({
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  articles: z.lazy(() => ArticleCreateNestedManyWithoutOrganizationInputSchema).optional()
}).strict();

export default OrganizationCreateWithoutUsersInputSchema;
