import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ArticleOrderByWithRelationInputSchema } from './ArticleOrderByWithRelationInputSchema';
import { TagOrderByWithRelationInputSchema } from './TagOrderByWithRelationInputSchema';

export const ArticleTagRelationOrderByWithRelationInputSchema: z.ZodType<Prisma.ArticleTagRelationOrderByWithRelationInput> = z.object({
  articleId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  article: z.lazy(() => ArticleOrderByWithRelationInputSchema).optional(),
  tag: z.lazy(() => TagOrderByWithRelationInputSchema).optional()
}).strict();

export default ArticleTagRelationOrderByWithRelationInputSchema;
