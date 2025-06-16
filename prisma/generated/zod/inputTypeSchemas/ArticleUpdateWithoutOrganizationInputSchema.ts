import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutArticlesNestedInputSchema } from './UserUpdateOneRequiredWithoutArticlesNestedInputSchema';
import { ArticleTagRelationUpdateManyWithoutArticleNestedInputSchema } from './ArticleTagRelationUpdateManyWithoutArticleNestedInputSchema';

export const ArticleUpdateWithoutOrganizationInputSchema: z.ZodType<Prisma.ArticleUpdateWithoutOrganizationInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutArticlesNestedInputSchema).optional(),
  tags: z.lazy(() => ArticleTagRelationUpdateManyWithoutArticleNestedInputSchema).optional()
}).strict();

export default ArticleUpdateWithoutOrganizationInputSchema;
