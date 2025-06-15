import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';

export const UserOrganizationRelationCreateManyInputSchema: z.ZodType<Prisma.UserOrganizationRelationCreateManyInput> = z.object({
  userId: z.number().int(),
  organizationId: z.number().int(),
  role: z.lazy(() => RoleSchema),
  createdAt: z.coerce.date().optional()
}).strict();

export default UserOrganizationRelationCreateManyInputSchema;
