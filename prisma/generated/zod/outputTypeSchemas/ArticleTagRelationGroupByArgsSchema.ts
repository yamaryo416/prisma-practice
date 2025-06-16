import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ArticleTagRelationWhereInputSchema } from '../inputTypeSchemas/ArticleTagRelationWhereInputSchema'
import { ArticleTagRelationOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ArticleTagRelationOrderByWithAggregationInputSchema'
import { ArticleTagRelationScalarFieldEnumSchema } from '../inputTypeSchemas/ArticleTagRelationScalarFieldEnumSchema'
import { ArticleTagRelationScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ArticleTagRelationScalarWhereWithAggregatesInputSchema'

export const ArticleTagRelationGroupByArgsSchema: z.ZodType<Prisma.ArticleTagRelationGroupByArgs> = z.object({
  where: ArticleTagRelationWhereInputSchema.optional(),
  orderBy: z.union([ ArticleTagRelationOrderByWithAggregationInputSchema.array(),ArticleTagRelationOrderByWithAggregationInputSchema ]).optional(),
  by: ArticleTagRelationScalarFieldEnumSchema.array(),
  having: ArticleTagRelationScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ArticleTagRelationGroupByArgsSchema;
