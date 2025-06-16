import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateWithoutArticlesInputSchema } from './TagCreateWithoutArticlesInputSchema';
import { TagUncheckedCreateWithoutArticlesInputSchema } from './TagUncheckedCreateWithoutArticlesInputSchema';
import { TagCreateOrConnectWithoutArticlesInputSchema } from './TagCreateOrConnectWithoutArticlesInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';

export const TagCreateNestedOneWithoutArticlesInputSchema: z.ZodType<Prisma.TagCreateNestedOneWithoutArticlesInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutArticlesInputSchema),z.lazy(() => TagUncheckedCreateWithoutArticlesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutArticlesInputSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputSchema).optional()
}).strict();

export default TagCreateNestedOneWithoutArticlesInputSchema;
