import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserOrganizationRelationCreateWithoutUserInputSchema } from './UserOrganizationRelationCreateWithoutUserInputSchema';
import { UserOrganizationRelationUncheckedCreateWithoutUserInputSchema } from './UserOrganizationRelationUncheckedCreateWithoutUserInputSchema';
import { UserOrganizationRelationCreateOrConnectWithoutUserInputSchema } from './UserOrganizationRelationCreateOrConnectWithoutUserInputSchema';
import { UserOrganizationRelationUpsertWithWhereUniqueWithoutUserInputSchema } from './UserOrganizationRelationUpsertWithWhereUniqueWithoutUserInputSchema';
import { UserOrganizationRelationCreateManyUserInputEnvelopeSchema } from './UserOrganizationRelationCreateManyUserInputEnvelopeSchema';
import { UserOrganizationRelationWhereUniqueInputSchema } from './UserOrganizationRelationWhereUniqueInputSchema';
import { UserOrganizationRelationUpdateWithWhereUniqueWithoutUserInputSchema } from './UserOrganizationRelationUpdateWithWhereUniqueWithoutUserInputSchema';
import { UserOrganizationRelationUpdateManyWithWhereWithoutUserInputSchema } from './UserOrganizationRelationUpdateManyWithWhereWithoutUserInputSchema';
import { UserOrganizationRelationScalarWhereInputSchema } from './UserOrganizationRelationScalarWhereInputSchema';

export const UserOrganizationRelationUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.UserOrganizationRelationUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserOrganizationRelationCreateWithoutUserInputSchema),z.lazy(() => UserOrganizationRelationCreateWithoutUserInputSchema).array(),z.lazy(() => UserOrganizationRelationUncheckedCreateWithoutUserInputSchema),z.lazy(() => UserOrganizationRelationUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserOrganizationRelationCreateOrConnectWithoutUserInputSchema),z.lazy(() => UserOrganizationRelationCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserOrganizationRelationUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => UserOrganizationRelationUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserOrganizationRelationCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserOrganizationRelationWhereUniqueInputSchema),z.lazy(() => UserOrganizationRelationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserOrganizationRelationWhereUniqueInputSchema),z.lazy(() => UserOrganizationRelationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserOrganizationRelationWhereUniqueInputSchema),z.lazy(() => UserOrganizationRelationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserOrganizationRelationWhereUniqueInputSchema),z.lazy(() => UserOrganizationRelationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserOrganizationRelationUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => UserOrganizationRelationUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserOrganizationRelationUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => UserOrganizationRelationUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserOrganizationRelationScalarWhereInputSchema),z.lazy(() => UserOrganizationRelationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default UserOrganizationRelationUpdateManyWithoutUserNestedInputSchema;
