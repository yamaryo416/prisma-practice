import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ArticleTagRelationWhereUniqueInputSchema } from './ArticleTagRelationWhereUniqueInputSchema';
import { ArticleTagRelationUpdateWithoutTagInputSchema } from './ArticleTagRelationUpdateWithoutTagInputSchema';
import { ArticleTagRelationUncheckedUpdateWithoutTagInputSchema } from './ArticleTagRelationUncheckedUpdateWithoutTagInputSchema';
import { ArticleTagRelationCreateWithoutTagInputSchema } from './ArticleTagRelationCreateWithoutTagInputSchema';
import { ArticleTagRelationUncheckedCreateWithoutTagInputSchema } from './ArticleTagRelationUncheckedCreateWithoutTagInputSchema';

export const ArticleTagRelationUpsertWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.ArticleTagRelationUpsertWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => ArticleTagRelationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ArticleTagRelationUpdateWithoutTagInputSchema),z.lazy(() => ArticleTagRelationUncheckedUpdateWithoutTagInputSchema) ]),
  create: z.union([ z.lazy(() => ArticleTagRelationCreateWithoutTagInputSchema),z.lazy(() => ArticleTagRelationUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export default ArticleTagRelationUpsertWithWhereUniqueWithoutTagInputSchema;
