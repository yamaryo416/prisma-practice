import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutArticlesInputSchema } from './UserCreateNestedOneWithoutArticlesInputSchema';
import { OrganizationCreateNestedOneWithoutArticlesInputSchema } from './OrganizationCreateNestedOneWithoutArticlesInputSchema';
import { ArticleTagRelationCreateNestedManyWithoutArticleInputSchema } from './ArticleTagRelationCreateNestedManyWithoutArticleInputSchema';

export const ArticleCreateInputSchema: z.ZodType<Prisma.ArticleCreateInput> = z.object({
  title: z.string(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutArticlesInputSchema),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutArticlesInputSchema).optional(),
  tags: z.lazy(() => ArticleTagRelationCreateNestedManyWithoutArticleInputSchema).optional()
}).strict();

export default ArticleCreateInputSchema;
