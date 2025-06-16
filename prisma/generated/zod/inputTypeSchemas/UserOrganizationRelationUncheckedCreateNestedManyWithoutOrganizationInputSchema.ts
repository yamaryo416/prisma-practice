import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserOrganizationRelationCreateWithoutOrganizationInputSchema } from './UserOrganizationRelationCreateWithoutOrganizationInputSchema';
import { UserOrganizationRelationUncheckedCreateWithoutOrganizationInputSchema } from './UserOrganizationRelationUncheckedCreateWithoutOrganizationInputSchema';
import { UserOrganizationRelationCreateOrConnectWithoutOrganizationInputSchema } from './UserOrganizationRelationCreateOrConnectWithoutOrganizationInputSchema';
import { UserOrganizationRelationCreateManyOrganizationInputEnvelopeSchema } from './UserOrganizationRelationCreateManyOrganizationInputEnvelopeSchema';
import { UserOrganizationRelationWhereUniqueInputSchema } from './UserOrganizationRelationWhereUniqueInputSchema';

export const UserOrganizationRelationUncheckedCreateNestedManyWithoutOrganizationInputSchema: z.ZodType<Prisma.UserOrganizationRelationUncheckedCreateNestedManyWithoutOrganizationInput> = z.object({
  create: z.union([ z.lazy(() => UserOrganizationRelationCreateWithoutOrganizationInputSchema),z.lazy(() => UserOrganizationRelationCreateWithoutOrganizationInputSchema).array(),z.lazy(() => UserOrganizationRelationUncheckedCreateWithoutOrganizationInputSchema),z.lazy(() => UserOrganizationRelationUncheckedCreateWithoutOrganizationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserOrganizationRelationCreateOrConnectWithoutOrganizationInputSchema),z.lazy(() => UserOrganizationRelationCreateOrConnectWithoutOrganizationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserOrganizationRelationCreateManyOrganizationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserOrganizationRelationWhereUniqueInputSchema),z.lazy(() => UserOrganizationRelationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default UserOrganizationRelationUncheckedCreateNestedManyWithoutOrganizationInputSchema;
