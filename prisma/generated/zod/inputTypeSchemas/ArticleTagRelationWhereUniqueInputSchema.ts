import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ArticleTagRelationArticleIdTagIdCompoundUniqueInputSchema } from './ArticleTagRelationArticleIdTagIdCompoundUniqueInputSchema';
import { ArticleTagRelationWhereInputSchema } from './ArticleTagRelationWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { ArticleScalarRelationFilterSchema } from './ArticleScalarRelationFilterSchema';
import { ArticleWhereInputSchema } from './ArticleWhereInputSchema';
import { TagScalarRelationFilterSchema } from './TagScalarRelationFilterSchema';
import { TagWhereInputSchema } from './TagWhereInputSchema';

export const ArticleTagRelationWhereUniqueInputSchema: z.ZodType<Prisma.ArticleTagRelationWhereUniqueInput> = z.object({
  articleId_tagId: z.lazy(() => ArticleTagRelationArticleIdTagIdCompoundUniqueInputSchema)
})
.and(z.object({
  articleId_tagId: z.lazy(() => ArticleTagRelationArticleIdTagIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => ArticleTagRelationWhereInputSchema),z.lazy(() => ArticleTagRelationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ArticleTagRelationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ArticleTagRelationWhereInputSchema),z.lazy(() => ArticleTagRelationWhereInputSchema).array() ]).optional(),
  articleId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  tagId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  article: z.union([ z.lazy(() => ArticleScalarRelationFilterSchema),z.lazy(() => ArticleWhereInputSchema) ]).optional(),
  tag: z.union([ z.lazy(() => TagScalarRelationFilterSchema),z.lazy(() => TagWhereInputSchema) ]).optional(),
}).strict());

export default ArticleTagRelationWhereUniqueInputSchema;
