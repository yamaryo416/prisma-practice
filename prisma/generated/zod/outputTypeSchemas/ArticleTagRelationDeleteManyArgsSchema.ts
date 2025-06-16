import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ArticleTagRelationWhereInputSchema } from '../inputTypeSchemas/ArticleTagRelationWhereInputSchema'

export const ArticleTagRelationDeleteManyArgsSchema: z.ZodType<Prisma.ArticleTagRelationDeleteManyArgs> = z.object({
  where: ArticleTagRelationWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default ArticleTagRelationDeleteManyArgsSchema;
