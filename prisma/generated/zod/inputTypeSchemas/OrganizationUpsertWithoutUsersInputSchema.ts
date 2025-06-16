import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationUpdateWithoutUsersInputSchema } from './OrganizationUpdateWithoutUsersInputSchema';
import { OrganizationUncheckedUpdateWithoutUsersInputSchema } from './OrganizationUncheckedUpdateWithoutUsersInputSchema';
import { OrganizationCreateWithoutUsersInputSchema } from './OrganizationCreateWithoutUsersInputSchema';
import { OrganizationUncheckedCreateWithoutUsersInputSchema } from './OrganizationUncheckedCreateWithoutUsersInputSchema';
import { OrganizationWhereInputSchema } from './OrganizationWhereInputSchema';

export const OrganizationUpsertWithoutUsersInputSchema: z.ZodType<Prisma.OrganizationUpsertWithoutUsersInput> = z.object({
  update: z.union([ z.lazy(() => OrganizationUpdateWithoutUsersInputSchema),z.lazy(() => OrganizationUncheckedUpdateWithoutUsersInputSchema) ]),
  create: z.union([ z.lazy(() => OrganizationCreateWithoutUsersInputSchema),z.lazy(() => OrganizationUncheckedCreateWithoutUsersInputSchema) ]),
  where: z.lazy(() => OrganizationWhereInputSchema).optional()
}).strict();

export default OrganizationUpsertWithoutUsersInputSchema;
