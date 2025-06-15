import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserOrganizationRelationWhereUniqueInputSchema } from './UserOrganizationRelationWhereUniqueInputSchema';
import { UserOrganizationRelationUpdateWithoutUserInputSchema } from './UserOrganizationRelationUpdateWithoutUserInputSchema';
import { UserOrganizationRelationUncheckedUpdateWithoutUserInputSchema } from './UserOrganizationRelationUncheckedUpdateWithoutUserInputSchema';
import { UserOrganizationRelationCreateWithoutUserInputSchema } from './UserOrganizationRelationCreateWithoutUserInputSchema';
import { UserOrganizationRelationUncheckedCreateWithoutUserInputSchema } from './UserOrganizationRelationUncheckedCreateWithoutUserInputSchema';

export const UserOrganizationRelationUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.UserOrganizationRelationUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => UserOrganizationRelationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => UserOrganizationRelationUpdateWithoutUserInputSchema),z.lazy(() => UserOrganizationRelationUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => UserOrganizationRelationCreateWithoutUserInputSchema),z.lazy(() => UserOrganizationRelationUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default UserOrganizationRelationUpsertWithWhereUniqueWithoutUserInputSchema;
