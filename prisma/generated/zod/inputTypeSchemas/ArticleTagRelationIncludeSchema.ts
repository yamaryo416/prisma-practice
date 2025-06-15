import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ArticleArgsSchema } from "../outputTypeSchemas/ArticleArgsSchema"
import { TagArgsSchema } from "../outputTypeSchemas/TagArgsSchema"

export const ArticleTagRelationIncludeSchema: z.ZodType<Prisma.ArticleTagRelationInclude> = z.object({
  article: z.union([z.boolean(),z.lazy(() => ArticleArgsSchema)]).optional(),
  tag: z.union([z.boolean(),z.lazy(() => TagArgsSchema)]).optional(),
}).strict()

export default ArticleTagRelationIncludeSchema;
