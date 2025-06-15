import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ArticleTagRelationWhereUniqueInputSchema } from './ArticleTagRelationWhereUniqueInputSchema';
import { ArticleTagRelationUpdateWithoutTagInputSchema } from './ArticleTagRelationUpdateWithoutTagInputSchema';
import { ArticleTagRelationUncheckedUpdateWithoutTagInputSchema } from './ArticleTagRelationUncheckedUpdateWithoutTagInputSchema';

export const ArticleTagRelationUpdateWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.ArticleTagRelationUpdateWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => ArticleTagRelationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ArticleTagRelationUpdateWithoutTagInputSchema),z.lazy(() => ArticleTagRelationUncheckedUpdateWithoutTagInputSchema) ]),
}).strict();

export default ArticleTagRelationUpdateWithWhereUniqueWithoutTagInputSchema;
