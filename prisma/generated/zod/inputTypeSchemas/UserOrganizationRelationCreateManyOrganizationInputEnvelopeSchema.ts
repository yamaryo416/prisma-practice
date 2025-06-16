import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserOrganizationRelationCreateManyOrganizationInputSchema } from './UserOrganizationRelationCreateManyOrganizationInputSchema';

export const UserOrganizationRelationCreateManyOrganizationInputEnvelopeSchema: z.ZodType<Prisma.UserOrganizationRelationCreateManyOrganizationInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => UserOrganizationRelationCreateManyOrganizationInputSchema),z.lazy(() => UserOrganizationRelationCreateManyOrganizationInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default UserOrganizationRelationCreateManyOrganizationInputEnvelopeSchema;
