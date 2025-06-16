import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserOrganizationRelationUpdateManyMutationInputSchema } from '../inputTypeSchemas/UserOrganizationRelationUpdateManyMutationInputSchema'
import { UserOrganizationRelationUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/UserOrganizationRelationUncheckedUpdateManyInputSchema'
import { UserOrganizationRelationWhereInputSchema } from '../inputTypeSchemas/UserOrganizationRelationWhereInputSchema'

export const UserOrganizationRelationUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.UserOrganizationRelationUpdateManyAndReturnArgs> = z.object({
  data: z.union([ UserOrganizationRelationUpdateManyMutationInputSchema,UserOrganizationRelationUncheckedUpdateManyInputSchema ]),
  where: UserOrganizationRelationWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default UserOrganizationRelationUpdateManyAndReturnArgsSchema;
