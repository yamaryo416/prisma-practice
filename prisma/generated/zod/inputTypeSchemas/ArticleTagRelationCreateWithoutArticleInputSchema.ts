import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateNestedOneWithoutArticlesInputSchema } from './TagCreateNestedOneWithoutArticlesInputSchema';

export const ArticleTagRelationCreateWithoutArticleInputSchema: z.ZodType<Prisma.ArticleTagRelationCreateWithoutArticleInput> = z.object({
  tag: z.lazy(() => TagCreateNestedOneWithoutArticlesInputSchema)
}).strict();

export default ArticleTagRelationCreateWithoutArticleInputSchema;
