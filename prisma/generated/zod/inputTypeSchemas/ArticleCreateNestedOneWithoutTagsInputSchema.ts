import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ArticleCreateWithoutTagsInputSchema } from './ArticleCreateWithoutTagsInputSchema';
import { ArticleUncheckedCreateWithoutTagsInputSchema } from './ArticleUncheckedCreateWithoutTagsInputSchema';
import { ArticleCreateOrConnectWithoutTagsInputSchema } from './ArticleCreateOrConnectWithoutTagsInputSchema';
import { ArticleWhereUniqueInputSchema } from './ArticleWhereUniqueInputSchema';

export const ArticleCreateNestedOneWithoutTagsInputSchema: z.ZodType<Prisma.ArticleCreateNestedOneWithoutTagsInput> = z.object({
  create: z.union([ z.lazy(() => ArticleCreateWithoutTagsInputSchema),z.lazy(() => ArticleUncheckedCreateWithoutTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ArticleCreateOrConnectWithoutTagsInputSchema).optional(),
  connect: z.lazy(() => ArticleWhereUniqueInputSchema).optional()
}).strict();

export default ArticleCreateNestedOneWithoutTagsInputSchema;
