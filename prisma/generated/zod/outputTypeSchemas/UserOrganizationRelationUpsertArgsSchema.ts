import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserOrganizationRelationIncludeSchema } from '../inputTypeSchemas/UserOrganizationRelationIncludeSchema'
import { UserOrganizationRelationWhereUniqueInputSchema } from '../inputTypeSchemas/UserOrganizationRelationWhereUniqueInputSchema'
import { UserOrganizationRelationCreateInputSchema } from '../inputTypeSchemas/UserOrganizationRelationCreateInputSchema'
import { UserOrganizationRelationUncheckedCreateInputSchema } from '../inputTypeSchemas/UserOrganizationRelationUncheckedCreateInputSchema'
import { UserOrganizationRelationUpdateInputSchema } from '../inputTypeSchemas/UserOrganizationRelationUpdateInputSchema'
import { UserOrganizationRelationUncheckedUpdateInputSchema } from '../inputTypeSchemas/UserOrganizationRelationUncheckedUpdateInputSchema'
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

export const UserOrganizationRelationUpsertArgsSchema: z.ZodType<Prisma.UserOrganizationRelationUpsertArgs> = z.object({
  select: UserOrganizationRelationSelectSchema.optional(),
  include: z.lazy(() => UserOrganizationRelationIncludeSchema).optional(),
  where: UserOrganizationRelationWhereUniqueInputSchema,
  create: z.union([ UserOrganizationRelationCreateInputSchema,UserOrganizationRelationUncheckedCreateInputSchema ]),
  update: z.union([ UserOrganizationRelationUpdateInputSchema,UserOrganizationRelationUncheckedUpdateInputSchema ]),
}).strict() ;

export default UserOrganizationRelationUpsertArgsSchema;
