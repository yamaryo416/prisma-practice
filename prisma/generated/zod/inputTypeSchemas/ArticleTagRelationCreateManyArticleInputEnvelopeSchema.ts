import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ArticleTagRelationCreateManyArticleInputSchema } from './ArticleTagRelationCreateManyArticleInputSchema';

export const ArticleTagRelationCreateManyArticleInputEnvelopeSchema: z.ZodType<Prisma.ArticleTagRelationCreateManyArticleInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ArticleTagRelationCreateManyArticleInputSchema),z.lazy(() => ArticleTagRelationCreateManyArticleInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ArticleTagRelationCreateManyArticleInputEnvelopeSchema;
