import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserOrganizationRelationWhereUniqueInputSchema } from './UserOrganizationRelationWhereUniqueInputSchema';
import { UserOrganizationRelationUpdateWithoutOrganizationInputSchema } from './UserOrganizationRelationUpdateWithoutOrganizationInputSchema';
import { UserOrganizationRelationUncheckedUpdateWithoutOrganizationInputSchema } from './UserOrganizationRelationUncheckedUpdateWithoutOrganizationInputSchema';

export const UserOrganizationRelationUpdateWithWhereUniqueWithoutOrganizationInputSchema: z.ZodType<Prisma.UserOrganizationRelationUpdateWithWhereUniqueWithoutOrganizationInput> = z.object({
  where: z.lazy(() => UserOrganizationRelationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => UserOrganizationRelationUpdateWithoutOrganizationInputSchema),z.lazy(() => UserOrganizationRelationUncheckedUpdateWithoutOrganizationInputSchema) ]),
}).strict();

export default UserOrganizationRelationUpdateWithWhereUniqueWithoutOrganizationInputSchema;
