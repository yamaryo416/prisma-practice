import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ArticleTagRelationWhereUniqueInputSchema } from './ArticleTagRelationWhereUniqueInputSchema';
import { ArticleTagRelationCreateWithoutArticleInputSchema } from './ArticleTagRelationCreateWithoutArticleInputSchema';
import { ArticleTagRelationUncheckedCreateWithoutArticleInputSchema } from './ArticleTagRelationUncheckedCreateWithoutArticleInputSchema';

export const ArticleTagRelationCreateOrConnectWithoutArticleInputSchema: z.ZodType<Prisma.ArticleTagRelationCreateOrConnectWithoutArticleInput> = z.object({
  where: z.lazy(() => ArticleTagRelationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ArticleTagRelationCreateWithoutArticleInputSchema),z.lazy(() => ArticleTagRelationUncheckedCreateWithoutArticleInputSchema) ]),
}).strict();

export default ArticleTagRelationCreateOrConnectWithoutArticleInputSchema;
