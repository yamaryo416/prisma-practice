import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserOrganizationRelationWhereUniqueInputSchema } from './UserOrganizationRelationWhereUniqueInputSchema';
import { UserOrganizationRelationUpdateWithoutUserInputSchema } from './UserOrganizationRelationUpdateWithoutUserInputSchema';
import { UserOrganizationRelationUncheckedUpdateWithoutUserInputSchema } from './UserOrganizationRelationUncheckedUpdateWithoutUserInputSchema';

export const UserOrganizationRelationUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.UserOrganizationRelationUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => UserOrganizationRelationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => UserOrganizationRelationUpdateWithoutUserInputSchema),z.lazy(() => UserOrganizationRelationUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default UserOrganizationRelationUpdateWithWhereUniqueWithoutUserInputSchema;
