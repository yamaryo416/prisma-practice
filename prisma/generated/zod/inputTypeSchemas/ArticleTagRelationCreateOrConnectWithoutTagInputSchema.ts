import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ArticleTagRelationWhereUniqueInputSchema } from './ArticleTagRelationWhereUniqueInputSchema';
import { ArticleTagRelationCreateWithoutTagInputSchema } from './ArticleTagRelationCreateWithoutTagInputSchema';
import { ArticleTagRelationUncheckedCreateWithoutTagInputSchema } from './ArticleTagRelationUncheckedCreateWithoutTagInputSchema';

export const ArticleTagRelationCreateOrConnectWithoutTagInputSchema: z.ZodType<Prisma.ArticleTagRelationCreateOrConnectWithoutTagInput> = z.object({
  where: z.lazy(() => ArticleTagRelationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ArticleTagRelationCreateWithoutTagInputSchema),z.lazy(() => ArticleTagRelationUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export default ArticleTagRelationCreateOrConnectWithoutTagInputSchema;
