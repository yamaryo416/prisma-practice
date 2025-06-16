import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationWhereUniqueInputSchema } from './OrganizationWhereUniqueInputSchema';
import { OrganizationCreateWithoutUsersInputSchema } from './OrganizationCreateWithoutUsersInputSchema';
import { OrganizationUncheckedCreateWithoutUsersInputSchema } from './OrganizationUncheckedCreateWithoutUsersInputSchema';

export const OrganizationCreateOrConnectWithoutUsersInputSchema: z.ZodType<Prisma.OrganizationCreateOrConnectWithoutUsersInput> = z.object({
  where: z.lazy(() => OrganizationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrganizationCreateWithoutUsersInputSchema),z.lazy(() => OrganizationUncheckedCreateWithoutUsersInputSchema) ]),
}).strict();

export default OrganizationCreateOrConnectWithoutUsersInputSchema;
