import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserOrganizationRelationWhereInputSchema } from '../inputTypeSchemas/UserOrganizationRelationWhereInputSchema'
import { UserOrganizationRelationOrderByWithAggregationInputSchema } from '../inputTypeSchemas/UserOrganizationRelationOrderByWithAggregationInputSchema'
import { UserOrganizationRelationScalarFieldEnumSchema } from '../inputTypeSchemas/UserOrganizationRelationScalarFieldEnumSchema'
import { UserOrganizationRelationScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/UserOrganizationRelationScalarWhereWithAggregatesInputSchema'

export const UserOrganizationRelationGroupByArgsSchema: z.ZodType<Prisma.UserOrganizationRelationGroupByArgs> = z.object({
  where: UserOrganizationRelationWhereInputSchema.optional(),
  orderBy: z.union([ UserOrganizationRelationOrderByWithAggregationInputSchema.array(),UserOrganizationRelationOrderByWithAggregationInputSchema ]).optional(),
  by: UserOrganizationRelationScalarFieldEnumSchema.array(),
  having: UserOrganizationRelationScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default UserOrganizationRelationGroupByArgsSchema;
