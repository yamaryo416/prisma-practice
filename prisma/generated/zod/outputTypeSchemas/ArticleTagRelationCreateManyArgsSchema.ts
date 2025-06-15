import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ArticleTagRelationCreateManyInputSchema } from '../inputTypeSchemas/ArticleTagRelationCreateManyInputSchema'

export const ArticleTagRelationCreateManyArgsSchema: z.ZodType<Prisma.ArticleTagRelationCreateManyArgs> = z.object({
  data: z.union([ ArticleTagRelationCreateManyInputSchema,ArticleTagRelationCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default ArticleTagRelationCreateManyArgsSchema;
