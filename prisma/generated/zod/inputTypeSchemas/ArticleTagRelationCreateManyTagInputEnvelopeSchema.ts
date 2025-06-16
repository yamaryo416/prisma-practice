import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ArticleTagRelationCreateManyTagInputSchema } from './ArticleTagRelationCreateManyTagInputSchema';

export const ArticleTagRelationCreateManyTagInputEnvelopeSchema: z.ZodType<Prisma.ArticleTagRelationCreateManyTagInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ArticleTagRelationCreateManyTagInputSchema),z.lazy(() => ArticleTagRelationCreateManyTagInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ArticleTagRelationCreateManyTagInputEnvelopeSchema;
