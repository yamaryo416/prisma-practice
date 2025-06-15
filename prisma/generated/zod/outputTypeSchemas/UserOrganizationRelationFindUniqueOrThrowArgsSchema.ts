import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserOrganizationRelationIncludeSchema } from '../inputTypeSchemas/UserOrganizationRelationIncludeSchema'
import { UserOrganizationRelationWhereUniqueInputSchema } from '../inputTypeSchemas/UserOrganizationRelationWhereUniqueInputSchema'
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

export const UserOrganizationRelationFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserOrganizationRelationFindUniqueOrThrowArgs> = z.object({
  select: UserOrganizationRelationSelectSchema.optional(),
  include: z.lazy(() => UserOrganizationRelationIncludeSchema).optional(),
  where: UserOrganizationRelationWhereUniqueInputSchema,
}).strict() ;

export default UserOrganizationRelationFindUniqueOrThrowArgsSchema;
