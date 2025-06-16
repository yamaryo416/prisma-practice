import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ArticleTagRelationCreateManyInputSchema } from '../inputTypeSchemas/ArticleTagRelationCreateManyInputSchema'

export const ArticleTagRelationCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ArticleTagRelationCreateManyAndReturnArgs> = z.object({
  data: z.union([ ArticleTagRelationCreateManyInputSchema,ArticleTagRelationCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default ArticleTagRelationCreateManyAndReturnArgsSchema;
