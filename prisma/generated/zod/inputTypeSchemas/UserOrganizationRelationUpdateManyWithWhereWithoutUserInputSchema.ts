import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserOrganizationRelationScalarWhereInputSchema } from './UserOrganizationRelationScalarWhereInputSchema';
import { UserOrganizationRelationUpdateManyMutationInputSchema } from './UserOrganizationRelationUpdateManyMutationInputSchema';
import { UserOrganizationRelationUncheckedUpdateManyWithoutUserInputSchema } from './UserOrganizationRelationUncheckedUpdateManyWithoutUserInputSchema';

export const UserOrganizationRelationUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.UserOrganizationRelationUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => UserOrganizationRelationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UserOrganizationRelationUpdateManyMutationInputSchema),z.lazy(() => UserOrganizationRelationUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export default UserOrganizationRelationUpdateManyWithWhereWithoutUserInputSchema;
