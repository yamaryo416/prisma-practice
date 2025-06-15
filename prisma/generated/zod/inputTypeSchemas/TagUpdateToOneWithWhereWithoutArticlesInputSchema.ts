import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereInputSchema } from './TagWhereInputSchema';
import { TagUpdateWithoutArticlesInputSchema } from './TagUpdateWithoutArticlesInputSchema';
import { TagUncheckedUpdateWithoutArticlesInputSchema } from './TagUncheckedUpdateWithoutArticlesInputSchema';

export const TagUpdateToOneWithWhereWithoutArticlesInputSchema: z.ZodType<Prisma.TagUpdateToOneWithWhereWithoutArticlesInput> = z.object({
  where: z.lazy(() => TagWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TagUpdateWithoutArticlesInputSchema),z.lazy(() => TagUncheckedUpdateWithoutArticlesInputSchema) ]),
}).strict();

export default TagUpdateToOneWithWhereWithoutArticlesInputSchema;
