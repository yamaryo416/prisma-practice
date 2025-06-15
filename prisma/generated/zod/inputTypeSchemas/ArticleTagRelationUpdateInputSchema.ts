import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ArticleUpdateOneRequiredWithoutTagsNestedInputSchema } from './ArticleUpdateOneRequiredWithoutTagsNestedInputSchema';
import { TagUpdateOneRequiredWithoutArticlesNestedInputSchema } from './TagUpdateOneRequiredWithoutArticlesNestedInputSchema';

export const ArticleTagRelationUpdateInputSchema: z.ZodType<Prisma.ArticleTagRelationUpdateInput> = z.object({
  article: z.lazy(() => ArticleUpdateOneRequiredWithoutTagsNestedInputSchema).optional(),
  tag: z.lazy(() => TagUpdateOneRequiredWithoutArticlesNestedInputSchema).optional()
}).strict();

export default ArticleTagRelationUpdateInputSchema;
