import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ArticleTagRelationScalarWhereInputSchema } from './ArticleTagRelationScalarWhereInputSchema';
import { ArticleTagRelationUpdateManyMutationInputSchema } from './ArticleTagRelationUpdateManyMutationInputSchema';
import { ArticleTagRelationUncheckedUpdateManyWithoutArticleInputSchema } from './ArticleTagRelationUncheckedUpdateManyWithoutArticleInputSchema';

export const ArticleTagRelationUpdateManyWithWhereWithoutArticleInputSchema: z.ZodType<Prisma.ArticleTagRelationUpdateManyWithWhereWithoutArticleInput> = z.object({
  where: z.lazy(() => ArticleTagRelationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ArticleTagRelationUpdateManyMutationInputSchema),z.lazy(() => ArticleTagRelationUncheckedUpdateManyWithoutArticleInputSchema) ]),
}).strict();

export default ArticleTagRelationUpdateManyWithWhereWithoutArticleInputSchema;
