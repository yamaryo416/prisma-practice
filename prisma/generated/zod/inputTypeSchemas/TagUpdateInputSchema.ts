import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ArticleTagRelationUpdateManyWithoutTagNestedInputSchema } from './ArticleTagRelationUpdateManyWithoutTagNestedInputSchema';

export const TagUpdateInputSchema: z.ZodType<Prisma.TagUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  articles: z.lazy(() => ArticleTagRelationUpdateManyWithoutTagNestedInputSchema).optional()
}).strict();

export default TagUpdateInputSchema;
