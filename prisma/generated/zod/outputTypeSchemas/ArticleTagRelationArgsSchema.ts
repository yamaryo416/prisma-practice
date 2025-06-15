import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ArticleTagRelationSelectSchema } from '../inputTypeSchemas/ArticleTagRelationSelectSchema';
import { ArticleTagRelationIncludeSchema } from '../inputTypeSchemas/ArticleTagRelationIncludeSchema';

export const ArticleTagRelationArgsSchema: z.ZodType<Prisma.ArticleTagRelationDefaultArgs> = z.object({
  select: z.lazy(() => ArticleTagRelationSelectSchema).optional(),
  include: z.lazy(() => ArticleTagRelationIncludeSchema).optional(),
}).strict();

export default ArticleTagRelationArgsSchema;
