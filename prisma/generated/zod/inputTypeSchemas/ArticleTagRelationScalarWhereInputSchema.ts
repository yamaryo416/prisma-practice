import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';

export const ArticleTagRelationScalarWhereInputSchema: z.ZodType<Prisma.ArticleTagRelationScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ArticleTagRelationScalarWhereInputSchema),z.lazy(() => ArticleTagRelationScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ArticleTagRelationScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ArticleTagRelationScalarWhereInputSchema),z.lazy(() => ArticleTagRelationScalarWhereInputSchema).array() ]).optional(),
  articleId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  tagId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default ArticleTagRelationScalarWhereInputSchema;
