import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutArticlesNestedInputSchema } from './UserUpdateOneRequiredWithoutArticlesNestedInputSchema';
import { OrganizationUpdateOneWithoutArticlesNestedInputSchema } from './OrganizationUpdateOneWithoutArticlesNestedInputSchema';
import { ArticleTagRelationUpdateManyWithoutArticleNestedInputSchema } from './ArticleTagRelationUpdateManyWithoutArticleNestedInputSchema';

export const ArticleUpdateInputSchema: z.ZodType<Prisma.ArticleUpdateInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutArticlesNestedInputSchema).optional(),
  organization: z.lazy(() => OrganizationUpdateOneWithoutArticlesNestedInputSchema).optional(),
  tags: z.lazy(() => ArticleTagRelationUpdateManyWithoutArticleNestedInputSchema).optional()
}).strict();

export default ArticleUpdateInputSchema;
