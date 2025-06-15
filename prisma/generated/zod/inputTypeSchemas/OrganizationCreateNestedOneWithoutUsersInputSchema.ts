import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationCreateWithoutUsersInputSchema } from './OrganizationCreateWithoutUsersInputSchema';
import { OrganizationUncheckedCreateWithoutUsersInputSchema } from './OrganizationUncheckedCreateWithoutUsersInputSchema';
import { OrganizationCreateOrConnectWithoutUsersInputSchema } from './OrganizationCreateOrConnectWithoutUsersInputSchema';
import { OrganizationWhereUniqueInputSchema } from './OrganizationWhereUniqueInputSchema';

export const OrganizationCreateNestedOneWithoutUsersInputSchema: z.ZodType<Prisma.OrganizationCreateNestedOneWithoutUsersInput> = z.object({
  create: z.union([ z.lazy(() => OrganizationCreateWithoutUsersInputSchema),z.lazy(() => OrganizationUncheckedCreateWithoutUsersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutUsersInputSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputSchema).optional()
}).strict();

export default OrganizationCreateNestedOneWithoutUsersInputSchema;
