import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutArticlesInputSchema } from './UserCreateNestedOneWithoutArticlesInputSchema';
import { ArticleTagRelationCreateNestedManyWithoutArticleInputSchema } from './ArticleTagRelationCreateNestedManyWithoutArticleInputSchema';

export const ArticleCreateWithoutOrganizationInputSchema: z.ZodType<Prisma.ArticleCreateWithoutOrganizationInput> = z.object({
  title: z.string(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutArticlesInputSchema),
  tags: z.lazy(() => ArticleTagRelationCreateNestedManyWithoutArticleInputSchema).optional()
}).strict();

export default ArticleCreateWithoutOrganizationInputSchema;
