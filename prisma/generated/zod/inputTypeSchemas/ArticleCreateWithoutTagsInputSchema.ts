import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutArticlesInputSchema } from './UserCreateNestedOneWithoutArticlesInputSchema';
import { OrganizationCreateNestedOneWithoutArticlesInputSchema } from './OrganizationCreateNestedOneWithoutArticlesInputSchema';

export const ArticleCreateWithoutTagsInputSchema: z.ZodType<Prisma.ArticleCreateWithoutTagsInput> = z.object({
  title: z.string(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutArticlesInputSchema),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutArticlesInputSchema).optional()
}).strict();

export default ArticleCreateWithoutTagsInputSchema;
