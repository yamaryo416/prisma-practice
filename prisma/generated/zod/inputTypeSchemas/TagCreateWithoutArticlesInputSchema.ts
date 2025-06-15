import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TagCreateWithoutArticlesInputSchema: z.ZodType<Prisma.TagCreateWithoutArticlesInput> = z.object({
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default TagCreateWithoutArticlesInputSchema;
