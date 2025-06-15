import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';

export const UserOrganizationRelationUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.UserOrganizationRelationUncheckedCreateWithoutUserInput> = z.object({
  organizationId: z.number().int(),
  role: z.lazy(() => RoleSchema),
  createdAt: z.coerce.date().optional()
}).strict();

export default UserOrganizationRelationUncheckedCreateWithoutUserInputSchema;
