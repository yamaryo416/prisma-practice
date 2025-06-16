import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ArticleTagRelationWhereUniqueInputSchema } from './ArticleTagRelationWhereUniqueInputSchema';
import { ArticleTagRelationUpdateWithoutArticleInputSchema } from './ArticleTagRelationUpdateWithoutArticleInputSchema';
import { ArticleTagRelationUncheckedUpdateWithoutArticleInputSchema } from './ArticleTagRelationUncheckedUpdateWithoutArticleInputSchema';

export const ArticleTagRelationUpdateWithWhereUniqueWithoutArticleInputSchema: z.ZodType<Prisma.ArticleTagRelationUpdateWithWhereUniqueWithoutArticleInput> = z.object({
  where: z.lazy(() => ArticleTagRelationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ArticleTagRelationUpdateWithoutArticleInputSchema),z.lazy(() => ArticleTagRelationUncheckedUpdateWithoutArticleInputSchema) ]),
}).strict();

export default ArticleTagRelationUpdateWithWhereUniqueWithoutArticleInputSchema;
