import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';

export const UserOrganizationRelationCreateManyOrganizationInputSchema: z.ZodType<Prisma.UserOrganizationRelationCreateManyOrganizationInput> = z.object({
  userId: z.number().int(),
  role: z.lazy(() => RoleSchema),
  createdAt: z.coerce.date().optional()
}).strict();

export default UserOrganizationRelationCreateManyOrganizationInputSchema;
