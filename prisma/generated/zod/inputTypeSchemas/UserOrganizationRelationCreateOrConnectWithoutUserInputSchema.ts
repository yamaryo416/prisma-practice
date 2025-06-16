import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserOrganizationRelationWhereUniqueInputSchema } from './UserOrganizationRelationWhereUniqueInputSchema';
import { UserOrganizationRelationCreateWithoutUserInputSchema } from './UserOrganizationRelationCreateWithoutUserInputSchema';
import { UserOrganizationRelationUncheckedCreateWithoutUserInputSchema } from './UserOrganizationRelationUncheckedCreateWithoutUserInputSchema';

export const UserOrganizationRelationCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.UserOrganizationRelationCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => UserOrganizationRelationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserOrganizationRelationCreateWithoutUserInputSchema),z.lazy(() => UserOrganizationRelationUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default UserOrganizationRelationCreateOrConnectWithoutUserInputSchema;
