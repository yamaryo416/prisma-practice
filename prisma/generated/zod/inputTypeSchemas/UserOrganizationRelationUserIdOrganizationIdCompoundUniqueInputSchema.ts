import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const UserOrganizationRelationUserIdOrganizationIdCompoundUniqueInputSchema: z.ZodType<Prisma.UserOrganizationRelationUserIdOrganizationIdCompoundUniqueInput> = z.object({
  userId: z.number(),
  organizationId: z.number()
}).strict();

export default UserOrganizationRelationUserIdOrganizationIdCompoundUniqueInputSchema;
