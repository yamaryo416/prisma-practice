import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserOrganizationRelationWhereInputSchema } from './UserOrganizationRelationWhereInputSchema';

export const UserOrganizationRelationListRelationFilterSchema: z.ZodType<Prisma.UserOrganizationRelationListRelationFilter> = z.object({
  every: z.lazy(() => UserOrganizationRelationWhereInputSchema).optional(),
  some: z.lazy(() => UserOrganizationRelationWhereInputSchema).optional(),
  none: z.lazy(() => UserOrganizationRelationWhereInputSchema).optional()
}).strict();

export default UserOrganizationRelationListRelationFilterSchema;
