import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ArticleUpdateManyWithoutOrganizationNestedInputSchema } from './ArticleUpdateManyWithoutOrganizationNestedInputSchema';
import { UserOrganizationRelationUpdateManyWithoutOrganizationNestedInputSchema } from './UserOrganizationRelationUpdateManyWithoutOrganizationNestedInputSchema';

export const OrganizationUpdateInputSchema: z.ZodType<Prisma.OrganizationUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  articles: z.lazy(() => ArticleUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  users: z.lazy(() => UserOrganizationRelationUpdateManyWithoutOrganizationNestedInputSchema).optional()
}).strict();

export default OrganizationUpdateInputSchema;
