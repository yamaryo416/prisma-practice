import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateWithoutArticlesInputSchema } from './TagCreateWithoutArticlesInputSchema';
import { TagUncheckedCreateWithoutArticlesInputSchema } from './TagUncheckedCreateWithoutArticlesInputSchema';
import { TagCreateOrConnectWithoutArticlesInputSchema } from './TagCreateOrConnectWithoutArticlesInputSchema';
import { TagUpsertWithoutArticlesInputSchema } from './TagUpsertWithoutArticlesInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateToOneWithWhereWithoutArticlesInputSchema } from './TagUpdateToOneWithWhereWithoutArticlesInputSchema';
import { TagUpdateWithoutArticlesInputSchema } from './TagUpdateWithoutArticlesInputSchema';
import { TagUncheckedUpdateWithoutArticlesInputSchema } from './TagUncheckedUpdateWithoutArticlesInputSchema';

export const TagUpdateOneRequiredWithoutArticlesNestedInputSchema: z.ZodType<Prisma.TagUpdateOneRequiredWithoutArticlesNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutArticlesInputSchema),z.lazy(() => TagUncheckedCreateWithoutArticlesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutArticlesInputSchema).optional(),
  upsert: z.lazy(() => TagUpsertWithoutArticlesInputSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TagUpdateToOneWithWhereWithoutArticlesInputSchema),z.lazy(() => TagUpdateWithoutArticlesInputSchema),z.lazy(() => TagUncheckedUpdateWithoutArticlesInputSchema) ]).optional(),
}).strict();

export default TagUpdateOneRequiredWithoutArticlesNestedInputSchema;
