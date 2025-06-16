import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserOrganizationRelationCreateManyUserInputSchema } from './UserOrganizationRelationCreateManyUserInputSchema';

export const UserOrganizationRelationCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.UserOrganizationRelationCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => UserOrganizationRelationCreateManyUserInputSchema),z.lazy(() => UserOrganizationRelationCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default UserOrganizationRelationCreateManyUserInputEnvelopeSchema;
