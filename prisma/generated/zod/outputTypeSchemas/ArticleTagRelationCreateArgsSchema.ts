import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ArticleTagRelationIncludeSchema } from '../inputTypeSchemas/ArticleTagRelationIncludeSchema'
import { ArticleTagRelationCreateInputSchema } from '../inputTypeSchemas/ArticleTagRelationCreateInputSchema'
import { ArticleTagRelationUncheckedCreateInputSchema } from '../inputTypeSchemas/ArticleTagRelationUncheckedCreateInputSchema'
import { ArticleArgsSchema } from "../outputTypeSchemas/ArticleArgsSchema"
import { TagArgsSchema } from "../outputTypeSchemas/TagArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ArticleTagRelationSelectSchema: z.ZodType<Prisma.ArticleTagRelationSelect> = z.object({
  articleId: z.boolean().optional(),
  tagId: z.boolean().optional(),
  article: z.union([z.boolean(),z.lazy(() => ArticleArgsSchema)]).optional(),
  tag: z.union([z.boolean(),z.lazy(() => TagArgsSchema)]).optional(),
}).strict()

export const ArticleTagRelationCreateArgsSchema: z.ZodType<Prisma.ArticleTagRelationCreateArgs> = z.object({
  select: ArticleTagRelationSelectSchema.optional(),
  include: z.lazy(() => ArticleTagRelationIncludeSchema).optional(),
  data: z.union([ ArticleTagRelationCreateInputSchema,ArticleTagRelationUncheckedCreateInputSchema ]),
}).strict() ;

export default ArticleTagRelationCreateArgsSchema;
