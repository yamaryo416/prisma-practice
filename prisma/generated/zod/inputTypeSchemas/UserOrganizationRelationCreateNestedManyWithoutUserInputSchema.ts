import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserOrganizationRelationCreateWithoutUserInputSchema } from './UserOrganizationRelationCreateWithoutUserInputSchema';
import { UserOrganizationRelationUncheckedCreateWithoutUserInputSchema } from './UserOrganizationRelationUncheckedCreateWithoutUserInputSchema';
import { UserOrganizationRelationCreateOrConnectWithoutUserInputSchema } from './UserOrganizationRelationCreateOrConnectWithoutUserInputSchema';
import { UserOrganizationRelationCreateManyUserInputEnvelopeSchema } from './UserOrganizationRelationCreateManyUserInputEnvelopeSchema';
import { UserOrganizationRelationWhereUniqueInputSchema } from './UserOrganizationRelationWhereUniqueInputSchema';

export const UserOrganizationRelationCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.UserOrganizationRelationCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => UserOrganizationRelationCreateWithoutUserInputSchema),z.lazy(() => UserOrganizationRelationCreateWithoutUserInputSchema).array(),z.lazy(() => UserOrganizationRelationUncheckedCreateWithoutUserInputSchema),z.lazy(() => UserOrganizationRelationUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserOrganizationRelationCreateOrConnectWithoutUserInputSchema),z.lazy(() => UserOrganizationRelationCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserOrganizationRelationCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserOrganizationRelationWhereUniqueInputSchema),z.lazy(() => UserOrganizationRelationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default UserOrganizationRelationCreateNestedManyWithoutUserInputSchema;
