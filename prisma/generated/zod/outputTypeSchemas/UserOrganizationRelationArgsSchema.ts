import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserOrganizationRelationSelectSchema } from '../inputTypeSchemas/UserOrganizationRelationSelectSchema';
import { UserOrganizationRelationIncludeSchema } from '../inputTypeSchemas/UserOrganizationRelationIncludeSchema';

export const UserOrganizationRelationArgsSchema: z.ZodType<Prisma.UserOrganizationRelationDefaultArgs> = z.object({
  select: z.lazy(() => UserOrganizationRelationSelectSchema).optional(),
  include: z.lazy(() => UserOrganizationRelationIncludeSchema).optional(),
}).strict();

export default UserOrganizationRelationArgsSchema;
