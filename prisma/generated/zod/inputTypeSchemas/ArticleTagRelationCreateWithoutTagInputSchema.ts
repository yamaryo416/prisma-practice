import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ArticleCreateNestedOneWithoutTagsInputSchema } from './ArticleCreateNestedOneWithoutTagsInputSchema';

export const ArticleTagRelationCreateWithoutTagInputSchema: z.ZodType<Prisma.ArticleTagRelationCreateWithoutTagInput> = z.object({
  article: z.lazy(() => ArticleCreateNestedOneWithoutTagsInputSchema)
}).strict();

export default ArticleTagRelationCreateWithoutTagInputSchema;
