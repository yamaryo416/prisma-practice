import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserOrganizationRelationWhereInputSchema } from '../inputTypeSchemas/UserOrganizationRelationWhereInputSchema'
import { UserOrganizationRelationOrderByWithRelationInputSchema } from '../inputTypeSchemas/UserOrganizationRelationOrderByWithRelationInputSchema'
import { UserOrganizationRelationWhereUniqueInputSchema } from '../inputTypeSchemas/UserOrganizationRelationWhereUniqueInputSchema'

export const UserOrganizationRelationAggregateArgsSchema: z.ZodType<Prisma.UserOrganizationRelationAggregateArgs> = z.object({
  where: UserOrganizationRelationWhereInputSchema.optional(),
  orderBy: z.union([ UserOrganizationRelationOrderByWithRelationInputSchema.array(),UserOrganizationRelationOrderByWithRelationInputSchema ]).optional(),
  cursor: UserOrganizationRelationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default UserOrganizationRelationAggregateArgsSchema;
