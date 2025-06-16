import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ArticleTagRelationUncheckedCreateNestedManyWithoutArticleInputSchema } from './ArticleTagRelationUncheckedCreateNestedManyWithoutArticleInputSchema';

export const ArticleUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.ArticleUncheckedCreateWithoutUserInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  content: z.string(),
  organizationId: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tags: z.lazy(() => ArticleTagRelationUncheckedCreateNestedManyWithoutArticleInputSchema).optional()
}).strict();

export default ArticleUncheckedCreateWithoutUserInputSchema;
