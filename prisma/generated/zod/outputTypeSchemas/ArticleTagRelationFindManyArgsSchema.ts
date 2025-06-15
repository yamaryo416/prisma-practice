import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ArticleTagRelationIncludeSchema } from '../inputTypeSchemas/ArticleTagRelationIncludeSchema'
import { ArticleTagRelationWhereInputSchema } from '../inputTypeSchemas/ArticleTagRelationWhereInputSchema'
import { ArticleTagRelationOrderByWithRelationInputSchema } from '../inputTypeSchemas/ArticleTagRelationOrderByWithRelationInputSchema'
import { ArticleTagRelationWhereUniqueInputSchema } from '../inputTypeSchemas/ArticleTagRelationWhereUniqueInputSchema'
import { ArticleTagRelationScalarFieldEnumSchema } from '../inputTypeSchemas/ArticleTagRelationScalarFieldEnumSchema'
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

export const ArticleTagRelationFindManyArgsSchema: z.ZodType<Prisma.ArticleTagRelationFindManyArgs> = z.object({
  select: ArticleTagRelationSelectSchema.optional(),
  include: z.lazy(() => ArticleTagRelationIncludeSchema).optional(),
  where: ArticleTagRelationWhereInputSchema.optional(),
  orderBy: z.union([ ArticleTagRelationOrderByWithRelationInputSchema.array(),ArticleTagRelationOrderByWithRelationInputSchema ]).optional(),
  cursor: ArticleTagRelationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ArticleTagRelationScalarFieldEnumSchema,ArticleTagRelationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default ArticleTagRelationFindManyArgsSchema;
