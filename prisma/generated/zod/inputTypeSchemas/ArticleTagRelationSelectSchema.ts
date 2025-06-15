import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ArticleArgsSchema } from "../outputTypeSchemas/ArticleArgsSchema"
import { TagArgsSchema } from "../outputTypeSchemas/TagArgsSchema"

export const ArticleTagRelationSelectSchema: z.ZodType<Prisma.ArticleTagRelationSelect> = z.object({
  articleId: z.boolean().optional(),
  tagId: z.boolean().optional(),
  article: z.union([z.boolean(),z.lazy(() => ArticleArgsSchema)]).optional(),
  tag: z.union([z.boolean(),z.lazy(() => TagArgsSchema)]).optional(),
}).strict()

export default ArticleTagRelationSelectSchema;
