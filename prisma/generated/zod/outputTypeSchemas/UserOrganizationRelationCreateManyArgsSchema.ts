import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserOrganizationRelationCreateManyInputSchema } from '../inputTypeSchemas/UserOrganizationRelationCreateManyInputSchema'

export const UserOrganizationRelationCreateManyArgsSchema: z.ZodType<Prisma.UserOrganizationRelationCreateManyArgs> = z.object({
  data: z.union([ UserOrganizationRelationCreateManyInputSchema,UserOrganizationRelationCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default UserOrganizationRelationCreateManyArgsSchema;
