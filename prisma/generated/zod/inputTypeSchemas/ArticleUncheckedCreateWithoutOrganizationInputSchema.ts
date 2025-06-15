import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ArticleTagRelationUncheckedCreateNestedManyWithoutArticleInputSchema } from './ArticleTagRelationUncheckedCreateNestedManyWithoutArticleInputSchema';

export const ArticleUncheckedCreateWithoutOrganizationInputSchema: z.ZodType<Prisma.ArticleUncheckedCreateWithoutOrganizationInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  content: z.string(),
  userId: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tags: z.lazy(() => ArticleTagRelationUncheckedCreateNestedManyWithoutArticleInputSchema).optional()
}).strict();

export default ArticleUncheckedCreateWithoutOrganizationInputSchema;
