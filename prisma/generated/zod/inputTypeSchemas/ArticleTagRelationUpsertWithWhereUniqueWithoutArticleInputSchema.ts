import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ArticleTagRelationWhereUniqueInputSchema } from './ArticleTagRelationWhereUniqueInputSchema';
import { ArticleTagRelationUpdateWithoutArticleInputSchema } from './ArticleTagRelationUpdateWithoutArticleInputSchema';
import { ArticleTagRelationUncheckedUpdateWithoutArticleInputSchema } from './ArticleTagRelationUncheckedUpdateWithoutArticleInputSchema';
import { ArticleTagRelationCreateWithoutArticleInputSchema } from './ArticleTagRelationCreateWithoutArticleInputSchema';
import { ArticleTagRelationUncheckedCreateWithoutArticleInputSchema } from './ArticleTagRelationUncheckedCreateWithoutArticleInputSchema';

export const ArticleTagRelationUpsertWithWhereUniqueWithoutArticleInputSchema: z.ZodType<Prisma.ArticleTagRelationUpsertWithWhereUniqueWithoutArticleInput> = z.object({
  where: z.lazy(() => ArticleTagRelationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ArticleTagRelationUpdateWithoutArticleInputSchema),z.lazy(() => ArticleTagRelationUncheckedUpdateWithoutArticleInputSchema) ]),
  create: z.union([ z.lazy(() => ArticleTagRelationCreateWithoutArticleInputSchema),z.lazy(() => ArticleTagRelationUncheckedCreateWithoutArticleInputSchema) ]),
}).strict();

export default ArticleTagRelationUpsertWithWhereUniqueWithoutArticleInputSchema;
