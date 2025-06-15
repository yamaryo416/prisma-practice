import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ArticleTagRelationUpdateManyMutationInputSchema } from '../inputTypeSchemas/ArticleTagRelationUpdateManyMutationInputSchema'
import { ArticleTagRelationUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ArticleTagRelationUncheckedUpdateManyInputSchema'
import { ArticleTagRelationWhereInputSchema } from '../inputTypeSchemas/ArticleTagRelationWhereInputSchema'

export const ArticleTagRelationUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ArticleTagRelationUpdateManyAndReturnArgs> = z.object({
  data: z.union([ ArticleTagRelationUpdateManyMutationInputSchema,ArticleTagRelationUncheckedUpdateManyInputSchema ]),
  where: ArticleTagRelationWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default ArticleTagRelationUpdateManyAndReturnArgsSchema;
