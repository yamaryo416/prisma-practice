import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagUpdateWithoutArticlesInputSchema } from './TagUpdateWithoutArticlesInputSchema';
import { TagUncheckedUpdateWithoutArticlesInputSchema } from './TagUncheckedUpdateWithoutArticlesInputSchema';
import { TagCreateWithoutArticlesInputSchema } from './TagCreateWithoutArticlesInputSchema';
import { TagUncheckedCreateWithoutArticlesInputSchema } from './TagUncheckedCreateWithoutArticlesInputSchema';
import { TagWhereInputSchema } from './TagWhereInputSchema';

export const TagUpsertWithoutArticlesInputSchema: z.ZodType<Prisma.TagUpsertWithoutArticlesInput> = z.object({
  update: z.union([ z.lazy(() => TagUpdateWithoutArticlesInputSchema),z.lazy(() => TagUncheckedUpdateWithoutArticlesInputSchema) ]),
  create: z.union([ z.lazy(() => TagCreateWithoutArticlesInputSchema),z.lazy(() => TagUncheckedCreateWithoutArticlesInputSchema) ]),
  where: z.lazy(() => TagWhereInputSchema).optional()
}).strict();

export default TagUpsertWithoutArticlesInputSchema;
