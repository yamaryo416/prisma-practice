import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TagUncheckedCreateWithoutArticlesInputSchema: z.ZodType<Prisma.TagUncheckedCreateWithoutArticlesInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default TagUncheckedCreateWithoutArticlesInputSchema;
