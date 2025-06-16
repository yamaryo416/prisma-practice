import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ArticleTagRelationFindManyArgsSchema } from "../outputTypeSchemas/ArticleTagRelationFindManyArgsSchema"
import { TagCountOutputTypeArgsSchema } from "../outputTypeSchemas/TagCountOutputTypeArgsSchema"

export const TagSelectSchema: z.ZodType<Prisma.TagSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  articles: z.union([z.boolean(),z.lazy(() => ArticleTagRelationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TagCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default TagSelectSchema;
