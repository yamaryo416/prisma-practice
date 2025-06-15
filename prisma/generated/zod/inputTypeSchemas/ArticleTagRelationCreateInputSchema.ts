import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ArticleCreateNestedOneWithoutTagsInputSchema } from './ArticleCreateNestedOneWithoutTagsInputSchema';
import { TagCreateNestedOneWithoutArticlesInputSchema } from './TagCreateNestedOneWithoutArticlesInputSchema';

export const ArticleTagRelationCreateInputSchema: z.ZodType<Prisma.ArticleTagRelationCreateInput> = z.object({
  article: z.lazy(() => ArticleCreateNestedOneWithoutTagsInputSchema),
  tag: z.lazy(() => TagCreateNestedOneWithoutArticlesInputSchema)
}).strict();

export default ArticleTagRelationCreateInputSchema;
