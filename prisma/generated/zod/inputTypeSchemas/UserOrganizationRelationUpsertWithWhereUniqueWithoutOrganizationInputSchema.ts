import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserOrganizationRelationWhereUniqueInputSchema } from './UserOrganizationRelationWhereUniqueInputSchema';
import { UserOrganizationRelationUpdateWithoutOrganizationInputSchema } from './UserOrganizationRelationUpdateWithoutOrganizationInputSchema';
import { UserOrganizationRelationUncheckedUpdateWithoutOrganizationInputSchema } from './UserOrganizationRelationUncheckedUpdateWithoutOrganizationInputSchema';
import { UserOrganizationRelationCreateWithoutOrganizationInputSchema } from './UserOrganizationRelationCreateWithoutOrganizationInputSchema';
import { UserOrganizationRelationUncheckedCreateWithoutOrganizationInputSchema } from './UserOrganizationRelationUncheckedCreateWithoutOrganizationInputSchema';

export const UserOrganizationRelationUpsertWithWhereUniqueWithoutOrganizationInputSchema: z.ZodType<Prisma.UserOrganizationRelationUpsertWithWhereUniqueWithoutOrganizationInput> = z.object({
  where: z.lazy(() => UserOrganizationRelationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => UserOrganizationRelationUpdateWithoutOrganizationInputSchema),z.lazy(() => UserOrganizationRelationUncheckedUpdateWithoutOrganizationInputSchema) ]),
  create: z.union([ z.lazy(() => UserOrganizationRelationCreateWithoutOrganizationInputSchema),z.lazy(() => UserOrganizationRelationUncheckedCreateWithoutOrganizationInputSchema) ]),
}).strict();

export default UserOrganizationRelationUpsertWithWhereUniqueWithoutOrganizationInputSchema;
