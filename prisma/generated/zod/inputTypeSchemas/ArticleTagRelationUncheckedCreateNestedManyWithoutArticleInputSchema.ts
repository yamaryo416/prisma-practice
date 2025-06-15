import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ArticleTagRelationCreateWithoutArticleInputSchema } from './ArticleTagRelationCreateWithoutArticleInputSchema';
import { ArticleTagRelationUncheckedCreateWithoutArticleInputSchema } from './ArticleTagRelationUncheckedCreateWithoutArticleInputSchema';
import { ArticleTagRelationCreateOrConnectWithoutArticleInputSchema } from './ArticleTagRelationCreateOrConnectWithoutArticleInputSchema';
import { ArticleTagRelationCreateManyArticleInputEnvelopeSchema } from './ArticleTagRelationCreateManyArticleInputEnvelopeSchema';
import { ArticleTagRelationWhereUniqueInputSchema } from './ArticleTagRelationWhereUniqueInputSchema';

export const ArticleTagRelationUncheckedCreateNestedManyWithoutArticleInputSchema: z.ZodType<Prisma.ArticleTagRelationUncheckedCreateNestedManyWithoutArticleInput> = z.object({
  create: z.union([ z.lazy(() => ArticleTagRelationCreateWithoutArticleInputSchema),z.lazy(() => ArticleTagRelationCreateWithoutArticleInputSchema).array(),z.lazy(() => ArticleTagRelationUncheckedCreateWithoutArticleInputSchema),z.lazy(() => ArticleTagRelationUncheckedCreateWithoutArticleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ArticleTagRelationCreateOrConnectWithoutArticleInputSchema),z.lazy(() => ArticleTagRelationCreateOrConnectWithoutArticleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ArticleTagRelationCreateManyArticleInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ArticleTagRelationWhereUniqueInputSchema),z.lazy(() => ArticleTagRelationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ArticleTagRelationUncheckedCreateNestedManyWithoutArticleInputSchema;
