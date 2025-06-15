import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';

export const UserOrganizationRelationCreateManyUserInputSchema: z.ZodType<Prisma.UserOrganizationRelationCreateManyUserInput> = z.object({
  organizationId: z.number().int(),
  role: z.lazy(() => RoleSchema),
  createdAt: z.coerce.date().optional()
}).strict();

export default UserOrganizationRelationCreateManyUserInputSchema;
