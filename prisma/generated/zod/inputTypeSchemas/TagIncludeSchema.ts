import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ArticleTagRelationFindManyArgsSchema } from "../outputTypeSchemas/ArticleTagRelationFindManyArgsSchema"
import { TagCountOutputTypeArgsSchema } from "../outputTypeSchemas/TagCountOutputTypeArgsSchema"

export const TagIncludeSchema: z.ZodType<Prisma.TagInclude> = z.object({
  articles: z.union([z.boolean(),z.lazy(() => ArticleTagRelationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TagCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default TagIncludeSchema;
