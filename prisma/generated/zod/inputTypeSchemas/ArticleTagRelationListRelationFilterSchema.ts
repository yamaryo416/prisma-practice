import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ArticleTagRelationWhereInputSchema } from './ArticleTagRelationWhereInputSchema';

export const ArticleTagRelationListRelationFilterSchema: z.ZodType<Prisma.ArticleTagRelationListRelationFilter> = z.object({
  every: z.lazy(() => ArticleTagRelationWhereInputSchema).optional(),
  some: z.lazy(() => ArticleTagRelationWhereInputSchema).optional(),
  none: z.lazy(() => ArticleTagRelationWhereInputSchema).optional()
}).strict();

export default ArticleTagRelationListRelationFilterSchema;
