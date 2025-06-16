import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ArticleWhereUniqueInputSchema } from './ArticleWhereUniqueInputSchema';
import { ArticleCreateWithoutTagsInputSchema } from './ArticleCreateWithoutTagsInputSchema';
import { ArticleUncheckedCreateWithoutTagsInputSchema } from './ArticleUncheckedCreateWithoutTagsInputSchema';

export const ArticleCreateOrConnectWithoutTagsInputSchema: z.ZodType<Prisma.ArticleCreateOrConnectWithoutTagsInput> = z.object({
  where: z.lazy(() => ArticleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ArticleCreateWithoutTagsInputSchema),z.lazy(() => ArticleUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();

export default ArticleCreateOrConnectWithoutTagsInputSchema;
