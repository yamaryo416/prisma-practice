import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';

export const UserOrganizationRelationUncheckedCreateWithoutOrganizationInputSchema: z.ZodType<Prisma.UserOrganizationRelationUncheckedCreateWithoutOrganizationInput> = z.object({
  userId: z.number().int(),
  role: z.lazy(() => RoleSchema),
  createdAt: z.coerce.date().optional()
}).strict();

export default UserOrganizationRelationUncheckedCreateWithoutOrganizationInputSchema;
