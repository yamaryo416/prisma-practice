import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationCreateWithoutUsersInputSchema } from './OrganizationCreateWithoutUsersInputSchema';
import { OrganizationUncheckedCreateWithoutUsersInputSchema } from './OrganizationUncheckedCreateWithoutUsersInputSchema';
import { OrganizationCreateOrConnectWithoutUsersInputSchema } from './OrganizationCreateOrConnectWithoutUsersInputSchema';
import { OrganizationUpsertWithoutUsersInputSchema } from './OrganizationUpsertWithoutUsersInputSchema';
import { OrganizationWhereUniqueInputSchema } from './OrganizationWhereUniqueInputSchema';
import { OrganizationUpdateToOneWithWhereWithoutUsersInputSchema } from './OrganizationUpdateToOneWithWhereWithoutUsersInputSchema';
import { OrganizationUpdateWithoutUsersInputSchema } from './OrganizationUpdateWithoutUsersInputSchema';
import { OrganizationUncheckedUpdateWithoutUsersInputSchema } from './OrganizationUncheckedUpdateWithoutUsersInputSchema';

export const OrganizationUpdateOneRequiredWithoutUsersNestedInputSchema: z.ZodType<Prisma.OrganizationUpdateOneRequiredWithoutUsersNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrganizationCreateWithoutUsersInputSchema),z.lazy(() => OrganizationUncheckedCreateWithoutUsersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutUsersInputSchema).optional(),
  upsert: z.lazy(() => OrganizationUpsertWithoutUsersInputSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => OrganizationUpdateToOneWithWhereWithoutUsersInputSchema),z.lazy(() => OrganizationUpdateWithoutUsersInputSchema),z.lazy(() => OrganizationUncheckedUpdateWithoutUsersInputSchema) ]).optional(),
}).strict();

export default OrganizationUpdateOneRequiredWithoutUsersNestedInputSchema;
