import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { ArticleScalarRelationFilterSchema } from './ArticleScalarRelationFilterSchema';
import { ArticleWhereInputSchema } from './ArticleWhereInputSchema';
import { TagScalarRelationFilterSchema } from './TagScalarRelationFilterSchema';
import { TagWhereInputSchema } from './TagWhereInputSchema';

export const ArticleTagRelationWhereInputSchema: z.ZodType<Prisma.ArticleTagRelationWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ArticleTagRelationWhereInputSchema),z.lazy(() => ArticleTagRelationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ArticleTagRelationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ArticleTagRelationWhereInputSchema),z.lazy(() => ArticleTagRelationWhereInputSchema).array() ]).optional(),
  articleId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  tagId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  article: z.union([ z.lazy(() => ArticleScalarRelationFilterSchema),z.lazy(() => ArticleWhereInputSchema) ]).optional(),
  tag: z.union([ z.lazy(() => TagScalarRelationFilterSchema),z.lazy(() => TagWhereInputSchema) ]).optional(),
}).strict();

export default ArticleTagRelationWhereInputSchema;
