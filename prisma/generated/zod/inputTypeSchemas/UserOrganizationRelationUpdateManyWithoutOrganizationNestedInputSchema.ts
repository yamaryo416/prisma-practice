import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserOrganizationRelationCreateWithoutOrganizationInputSchema } from './UserOrganizationRelationCreateWithoutOrganizationInputSchema';
import { UserOrganizationRelationUncheckedCreateWithoutOrganizationInputSchema } from './UserOrganizationRelationUncheckedCreateWithoutOrganizationInputSchema';
import { UserOrganizationRelationCreateOrConnectWithoutOrganizationInputSchema } from './UserOrganizationRelationCreateOrConnectWithoutOrganizationInputSchema';
import { UserOrganizationRelationUpsertWithWhereUniqueWithoutOrganizationInputSchema } from './UserOrganizationRelationUpsertWithWhereUniqueWithoutOrganizationInputSchema';
import { UserOrganizationRelationCreateManyOrganizationInputEnvelopeSchema } from './UserOrganizationRelationCreateManyOrganizationInputEnvelopeSchema';
import { UserOrganizationRelationWhereUniqueInputSchema } from './UserOrganizationRelationWhereUniqueInputSchema';
import { UserOrganizationRelationUpdateWithWhereUniqueWithoutOrganizationInputSchema } from './UserOrganizationRelationUpdateWithWhereUniqueWithoutOrganizationInputSchema';
import { UserOrganizationRelationUpdateManyWithWhereWithoutOrganizationInputSchema } from './UserOrganizationRelationUpdateManyWithWhereWithoutOrganizationInputSchema';
import { UserOrganizationRelationScalarWhereInputSchema } from './UserOrganizationRelationScalarWhereInputSchema';

export const UserOrganizationRelationUpdateManyWithoutOrganizationNestedInputSchema: z.ZodType<Prisma.UserOrganizationRelationUpdateManyWithoutOrganizationNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserOrganizationRelationCreateWithoutOrganizationInputSchema),z.lazy(() => UserOrganizationRelationCreateWithoutOrganizationInputSchema).array(),z.lazy(() => UserOrganizationRelationUncheckedCreateWithoutOrganizationInputSchema),z.lazy(() => UserOrganizationRelationUncheckedCreateWithoutOrganizationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserOrganizationRelationCreateOrConnectWithoutOrganizationInputSchema),z.lazy(() => UserOrganizationRelationCreateOrConnectWithoutOrganizationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserOrganizationRelationUpsertWithWhereUniqueWithoutOrganizationInputSchema),z.lazy(() => UserOrganizationRelationUpsertWithWhereUniqueWithoutOrganizationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserOrganizationRelationCreateManyOrganizationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserOrganizationRelationWhereUniqueInputSchema),z.lazy(() => UserOrganizationRelationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserOrganizationRelationWhereUniqueInputSchema),z.lazy(() => UserOrganizationRelationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserOrganizationRelationWhereUniqueInputSchema),z.lazy(() => UserOrganizationRelationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserOrganizationRelationWhereUniqueInputSchema),z.lazy(() => UserOrganizationRelationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserOrganizationRelationUpdateWithWhereUniqueWithoutOrganizationInputSchema),z.lazy(() => UserOrganizationRelationUpdateWithWhereUniqueWithoutOrganizationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserOrganizationRelationUpdateManyWithWhereWithoutOrganizationInputSchema),z.lazy(() => UserOrganizationRelationUpdateManyWithWhereWithoutOrganizationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserOrganizationRelationScalarWhereInputSchema),z.lazy(() => UserOrganizationRelationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default UserOrganizationRelationUpdateManyWithoutOrganizationNestedInputSchema;
