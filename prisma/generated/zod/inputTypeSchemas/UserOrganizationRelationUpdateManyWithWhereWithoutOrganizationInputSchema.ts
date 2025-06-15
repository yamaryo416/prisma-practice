import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserOrganizationRelationScalarWhereInputSchema } from './UserOrganizationRelationScalarWhereInputSchema';
import { UserOrganizationRelationUpdateManyMutationInputSchema } from './UserOrganizationRelationUpdateManyMutationInputSchema';
import { UserOrganizationRelationUncheckedUpdateManyWithoutOrganizationInputSchema } from './UserOrganizationRelationUncheckedUpdateManyWithoutOrganizationInputSchema';

export const UserOrganizationRelationUpdateManyWithWhereWithoutOrganizationInputSchema: z.ZodType<Prisma.UserOrganizationRelationUpdateManyWithWhereWithoutOrganizationInput> = z.object({
  where: z.lazy(() => UserOrganizationRelationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UserOrganizationRelationUpdateManyMutationInputSchema),z.lazy(() => UserOrganizationRelationUncheckedUpdateManyWithoutOrganizationInputSchema) ]),
}).strict();

export default UserOrganizationRelationUpdateManyWithWhereWithoutOrganizationInputSchema;
