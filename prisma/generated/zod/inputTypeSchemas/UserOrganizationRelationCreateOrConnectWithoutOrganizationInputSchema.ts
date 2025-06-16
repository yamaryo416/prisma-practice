import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserOrganizationRelationWhereUniqueInputSchema } from './UserOrganizationRelationWhereUniqueInputSchema';
import { UserOrganizationRelationCreateWithoutOrganizationInputSchema } from './UserOrganizationRelationCreateWithoutOrganizationInputSchema';
import { UserOrganizationRelationUncheckedCreateWithoutOrganizationInputSchema } from './UserOrganizationRelationUncheckedCreateWithoutOrganizationInputSchema';

export const UserOrganizationRelationCreateOrConnectWithoutOrganizationInputSchema: z.ZodType<Prisma.UserOrganizationRelationCreateOrConnectWithoutOrganizationInput> = z.object({
  where: z.lazy(() => UserOrganizationRelationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserOrganizationRelationCreateWithoutOrganizationInputSchema),z.lazy(() => UserOrganizationRelationUncheckedCreateWithoutOrganizationInputSchema) ]),
}).strict();

export default UserOrganizationRelationCreateOrConnectWithoutOrganizationInputSchema;
