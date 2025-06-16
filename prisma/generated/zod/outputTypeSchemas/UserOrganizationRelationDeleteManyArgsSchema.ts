import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserOrganizationRelationWhereInputSchema } from '../inputTypeSchemas/UserOrganizationRelationWhereInputSchema'

export const UserOrganizationRelationDeleteManyArgsSchema: z.ZodType<Prisma.UserOrganizationRelationDeleteManyArgs> = z.object({
  where: UserOrganizationRelationWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default UserOrganizationRelationDeleteManyArgsSchema;
