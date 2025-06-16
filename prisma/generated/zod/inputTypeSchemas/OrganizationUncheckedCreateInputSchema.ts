import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ArticleUncheckedCreateNestedManyWithoutOrganizationInputSchema } from './ArticleUncheckedCreateNestedManyWithoutOrganizationInputSchema';
import { UserOrganizationRelationUncheckedCreateNestedManyWithoutOrganizationInputSchema } from './UserOrganizationRelationUncheckedCreateNestedManyWithoutOrganizationInputSchema';

export const OrganizationUncheckedCreateInputSchema: z.ZodType<Prisma.OrganizationUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  articles: z.lazy(() => ArticleUncheckedCreateNestedManyWithoutOrganizationInputSchema).optional(),
  users: z.lazy(() => UserOrganizationRelationUncheckedCreateNestedManyWithoutOrganizationInputSchema).optional()
}).strict();

export default OrganizationUncheckedCreateInputSchema;
