import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationCreateNestedOneWithoutArticlesInputSchema } from './OrganizationCreateNestedOneWithoutArticlesInputSchema';
import { ArticleTagRelationCreateNestedManyWithoutArticleInputSchema } from './ArticleTagRelationCreateNestedManyWithoutArticleInputSchema';

export const ArticleCreateWithoutUserInputSchema: z.ZodType<Prisma.ArticleCreateWithoutUserInput> = z.object({
  title: z.string(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutArticlesInputSchema).optional(),
  tags: z.lazy(() => ArticleTagRelationCreateNestedManyWithoutArticleInputSchema).optional()
}).strict();

export default ArticleCreateWithoutUserInputSchema;
