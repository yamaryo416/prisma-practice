import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ArticleWhereInputSchema } from './ArticleWhereInputSchema';
import { ArticleUpdateWithoutTagsInputSchema } from './ArticleUpdateWithoutTagsInputSchema';
import { ArticleUncheckedUpdateWithoutTagsInputSchema } from './ArticleUncheckedUpdateWithoutTagsInputSchema';

export const ArticleUpdateToOneWithWhereWithoutTagsInputSchema: z.ZodType<Prisma.ArticleUpdateToOneWithWhereWithoutTagsInput> = z.object({
  where: z.lazy(() => ArticleWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ArticleUpdateWithoutTagsInputSchema),z.lazy(() => ArticleUncheckedUpdateWithoutTagsInputSchema) ]),
}).strict();

export default ArticleUpdateToOneWithWhereWithoutTagsInputSchema;
