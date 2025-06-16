import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ArticleUpdateOneRequiredWithoutTagsNestedInputSchema } from './ArticleUpdateOneRequiredWithoutTagsNestedInputSchema';

export const ArticleTagRelationUpdateWithoutTagInputSchema: z.ZodType<Prisma.ArticleTagRelationUpdateWithoutTagInput> = z.object({
  article: z.lazy(() => ArticleUpdateOneRequiredWithoutTagsNestedInputSchema).optional()
}).strict();

export default ArticleTagRelationUpdateWithoutTagInputSchema;
