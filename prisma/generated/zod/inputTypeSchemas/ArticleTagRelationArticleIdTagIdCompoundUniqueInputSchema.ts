import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ArticleTagRelationArticleIdTagIdCompoundUniqueInputSchema: z.ZodType<Prisma.ArticleTagRelationArticleIdTagIdCompoundUniqueInput> = z.object({
  articleId: z.number(),
  tagId: z.number()
}).strict();

export default ArticleTagRelationArticleIdTagIdCompoundUniqueInputSchema;
