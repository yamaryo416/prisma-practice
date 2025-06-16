import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserOrganizationRelationIncludeSchema } from '../inputTypeSchemas/UserOrganizationRelationIncludeSchema'
import { UserOrganizationRelationWhereInputSchema } from '../inputTypeSchemas/UserOrganizationRelationWhereInputSchema'
import { UserOrganizationRelationOrderByWithRelationInputSchema } from '../inputTypeSchemas/UserOrganizationRelationOrderByWithRelationInputSchema'
import { UserOrganizationRelationWhereUniqueInputSchema } from '../inputTypeSchemas/UserOrganizationRelationWhereUniqueInputSchema'
import { UserOrganizationRelationScalarFieldEnumSchema } from '../inputTypeSchemas/UserOrganizationRelationScalarFieldEnumSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { OrganizationArgsSchema } from "../outputTypeSchemas/OrganizationArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserOrganizationRelationSelectSchema: z.ZodType<Prisma.UserOrganizationRelationSelect> = z.object({
  userId: z.boolean().optional(),
  organizationId: z.boolean().optional(),
  role: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  organization: z.union([z.boolean(),z.lazy(() => OrganizationArgsSchema)]).optional(),
}).strict()

export const UserOrganizationRelationFindFirstArgsSchema: z.ZodType<Prisma.UserOrganizationRelationFindFirstArgs> = z.object({
  select: UserOrganizationRelationSelectSchema.optional(),
  include: z.lazy(() => UserOrganizationRelationIncludeSchema).optional(),
  where: UserOrganizationRelationWhereInputSchema.optional(),
  orderBy: z.union([ UserOrganizationRelationOrderByWithRelationInputSchema.array(),UserOrganizationRelationOrderByWithRelationInputSchema ]).optional(),
  cursor: UserOrganizationRelationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserOrganizationRelationScalarFieldEnumSchema,UserOrganizationRelationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default UserOrganizationRelationFindFirstArgsSchema;
