import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ArticleUpdateWithoutTagsInputSchema } from './ArticleUpdateWithoutTagsInputSchema';
import { ArticleUncheckedUpdateWithoutTagsInputSchema } from './ArticleUncheckedUpdateWithoutTagsInputSchema';
import { ArticleCreateWithoutTagsInputSchema } from './ArticleCreateWithoutTagsInputSchema';
import { ArticleUncheckedCreateWithoutTagsInputSchema } from './ArticleUncheckedCreateWithoutTagsInputSchema';
import { ArticleWhereInputSchema } from './ArticleWhereInputSchema';

export const ArticleUpsertWithoutTagsInputSchema: z.ZodType<Prisma.ArticleUpsertWithoutTagsInput> = z.object({
  update: z.union([ z.lazy(() => ArticleUpdateWithoutTagsInputSchema),z.lazy(() => ArticleUncheckedUpdateWithoutTagsInputSchema) ]),
  create: z.union([ z.lazy(() => ArticleCreateWithoutTagsInputSchema),z.lazy(() => ArticleUncheckedCreateWithoutTagsInputSchema) ]),
  where: z.lazy(() => ArticleWhereInputSchema).optional()
}).strict();

export default ArticleUpsertWithoutTagsInputSchema;
