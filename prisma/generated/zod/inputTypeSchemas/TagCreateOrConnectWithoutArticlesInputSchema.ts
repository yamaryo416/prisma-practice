import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagCreateWithoutArticlesInputSchema } from './TagCreateWithoutArticlesInputSchema';
import { TagUncheckedCreateWithoutArticlesInputSchema } from './TagUncheckedCreateWithoutArticlesInputSchema';

export const TagCreateOrConnectWithoutArticlesInputSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutArticlesInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagCreateWithoutArticlesInputSchema),z.lazy(() => TagUncheckedCreateWithoutArticlesInputSchema) ]),
}).strict();

export default TagCreateOrConnectWithoutArticlesInputSchema;
