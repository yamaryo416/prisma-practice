import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserOrganizationRelationUncheckedCreateNestedManyWithoutOrganizationInputSchema } from './UserOrganizationRelationUncheckedCreateNestedManyWithoutOrganizationInputSchema';

export const OrganizationUncheckedCreateWithoutArticlesInputSchema: z.ZodType<Prisma.OrganizationUncheckedCreateWithoutArticlesInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  users: z.lazy(() => UserOrganizationRelationUncheckedCreateNestedManyWithoutOrganizationInputSchema).optional()
}).strict();

export default OrganizationUncheckedCreateWithoutArticlesInputSchema;
