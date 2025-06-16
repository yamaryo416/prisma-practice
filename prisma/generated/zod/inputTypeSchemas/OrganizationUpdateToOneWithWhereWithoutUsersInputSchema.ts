import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationWhereInputSchema } from './OrganizationWhereInputSchema';
import { OrganizationUpdateWithoutUsersInputSchema } from './OrganizationUpdateWithoutUsersInputSchema';
import { OrganizationUncheckedUpdateWithoutUsersInputSchema } from './OrganizationUncheckedUpdateWithoutUsersInputSchema';

export const OrganizationUpdateToOneWithWhereWithoutUsersInputSchema: z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutUsersInput> = z.object({
  where: z.lazy(() => OrganizationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => OrganizationUpdateWithoutUsersInputSchema),z.lazy(() => OrganizationUncheckedUpdateWithoutUsersInputSchema) ]),
}).strict();

export default OrganizationUpdateToOneWithWhereWithoutUsersInputSchema;
