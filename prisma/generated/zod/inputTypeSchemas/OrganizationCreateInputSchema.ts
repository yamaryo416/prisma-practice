import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ArticleCreateNestedManyWithoutOrganizationInputSchema } from './ArticleCreateNestedManyWithoutOrganizationInputSchema';
import { UserOrganizationRelationCreateNestedManyWithoutOrganizationInputSchema } from './UserOrganizationRelationCreateNestedManyWithoutOrganizationInputSchema';

export const OrganizationCreateInputSchema: z.ZodType<Prisma.OrganizationCreateInput> = z.object({
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  articles: z.lazy(() => ArticleCreateNestedManyWithoutOrganizationInputSchema).optional(),
  users: z.lazy(() => UserOrganizationRelationCreateNestedManyWithoutOrganizationInputSchema).optional()
}).strict();

export default OrganizationCreateInputSchema;
