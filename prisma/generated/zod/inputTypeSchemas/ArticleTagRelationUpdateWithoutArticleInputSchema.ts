import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagUpdateOneRequiredWithoutArticlesNestedInputSchema } from './TagUpdateOneRequiredWithoutArticlesNestedInputSchema';

export const ArticleTagRelationUpdateWithoutArticleInputSchema: z.ZodType<Prisma.ArticleTagRelationUpdateWithoutArticleInput> = z.object({
  tag: z.lazy(() => TagUpdateOneRequiredWithoutArticlesNestedInputSchema).optional()
}).strict();

export default ArticleTagRelationUpdateWithoutArticleInputSchema;
