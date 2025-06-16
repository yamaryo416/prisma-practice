import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserOrganizationRelationCreateNestedManyWithoutOrganizationInputSchema } from './UserOrganizationRelationCreateNestedManyWithoutOrganizationInputSchema';

export const OrganizationCreateWithoutArticlesInputSchema: z.ZodType<Prisma.OrganizationCreateWithoutArticlesInput> = z.object({
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  users: z.lazy(() => UserOrganizationRelationCreateNestedManyWithoutOrganizationInputSchema).optional()
}).strict();

export default OrganizationCreateWithoutArticlesInputSchema;
