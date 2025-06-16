import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ArticleTagRelationCreateNestedManyWithoutTagInputSchema } from './ArticleTagRelationCreateNestedManyWithoutTagInputSchema';

export const TagCreateInputSchema: z.ZodType<Prisma.TagCreateInput> = z.object({
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  articles: z.lazy(() => ArticleTagRelationCreateNestedManyWithoutTagInputSchema).optional()
}).strict();

export default TagCreateInputSchema;
