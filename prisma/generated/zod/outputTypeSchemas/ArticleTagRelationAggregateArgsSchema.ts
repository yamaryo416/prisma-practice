import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ArticleTagRelationWhereInputSchema } from '../inputTypeSchemas/ArticleTagRelationWhereInputSchema'
import { ArticleTagRelationOrderByWithRelationInputSchema } from '../inputTypeSchemas/ArticleTagRelationOrderByWithRelationInputSchema'
import { ArticleTagRelationWhereUniqueInputSchema } from '../inputTypeSchemas/ArticleTagRelationWhereUniqueInputSchema'

export const ArticleTagRelationAggregateArgsSchema: z.ZodType<Prisma.ArticleTagRelationAggregateArgs> = z.object({
  where: ArticleTagRelationWhereInputSchema.optional(),
  orderBy: z.union([ ArticleTagRelationOrderByWithRelationInputSchema.array(),ArticleTagRelationOrderByWithRelationInputSchema ]).optional(),
  cursor: ArticleTagRelationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ArticleTagRelationAggregateArgsSchema;
