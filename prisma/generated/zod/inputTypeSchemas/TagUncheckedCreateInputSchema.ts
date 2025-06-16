import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ArticleTagRelationUncheckedCreateNestedManyWithoutTagInputSchema } from './ArticleTagRelationUncheckedCreateNestedManyWithoutTagInputSchema';

export const TagUncheckedCreateInputSchema: z.ZodType<Prisma.TagUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  articles: z.lazy(() => ArticleTagRelationUncheckedCreateNestedManyWithoutTagInputSchema).optional()
}).strict();

export default TagUncheckedCreateInputSchema;
