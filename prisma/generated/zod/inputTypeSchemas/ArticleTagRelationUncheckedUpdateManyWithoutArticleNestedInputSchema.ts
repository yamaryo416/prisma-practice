import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ArticleTagRelationCreateWithoutArticleInputSchema } from './ArticleTagRelationCreateWithoutArticleInputSchema';
import { ArticleTagRelationUncheckedCreateWithoutArticleInputSchema } from './ArticleTagRelationUncheckedCreateWithoutArticleInputSchema';
import { ArticleTagRelationCreateOrConnectWithoutArticleInputSchema } from './ArticleTagRelationCreateOrConnectWithoutArticleInputSchema';
import { ArticleTagRelationUpsertWithWhereUniqueWithoutArticleInputSchema } from './ArticleTagRelationUpsertWithWhereUniqueWithoutArticleInputSchema';
import { ArticleTagRelationCreateManyArticleInputEnvelopeSchema } from './ArticleTagRelationCreateManyArticleInputEnvelopeSchema';
import { ArticleTagRelationWhereUniqueInputSchema } from './ArticleTagRelationWhereUniqueInputSchema';
import { ArticleTagRelationUpdateWithWhereUniqueWithoutArticleInputSchema } from './ArticleTagRelationUpdateWithWhereUniqueWithoutArticleInputSchema';
import { ArticleTagRelationUpdateManyWithWhereWithoutArticleInputSchema } from './ArticleTagRelationUpdateManyWithWhereWithoutArticleInputSchema';
import { ArticleTagRelationScalarWhereInputSchema } from './ArticleTagRelationScalarWhereInputSchema';

export const ArticleTagRelationUncheckedUpdateManyWithoutArticleNestedInputSchema: z.ZodType<Prisma.ArticleTagRelationUncheckedUpdateManyWithoutArticleNestedInput> = z.object({
  create: z.union([ z.lazy(() => ArticleTagRelationCreateWithoutArticleInputSchema),z.lazy(() => ArticleTagRelationCreateWithoutArticleInputSchema).array(),z.lazy(() => ArticleTagRelationUncheckedCreateWithoutArticleInputSchema),z.lazy(() => ArticleTagRelationUncheckedCreateWithoutArticleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ArticleTagRelationCreateOrConnectWithoutArticleInputSchema),z.lazy(() => ArticleTagRelationCreateOrConnectWithoutArticleInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ArticleTagRelationUpsertWithWhereUniqueWithoutArticleInputSchema),z.lazy(() => ArticleTagRelationUpsertWithWhereUniqueWithoutArticleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ArticleTagRelationCreateManyArticleInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ArticleTagRelationWhereUniqueInputSchema),z.lazy(() => ArticleTagRelationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ArticleTagRelationWhereUniqueInputSchema),z.lazy(() => ArticleTagRelationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ArticleTagRelationWhereUniqueInputSchema),z.lazy(() => ArticleTagRelationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ArticleTagRelationWhereUniqueInputSchema),z.lazy(() => ArticleTagRelationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ArticleTagRelationUpdateWithWhereUniqueWithoutArticleInputSchema),z.lazy(() => ArticleTagRelationUpdateWithWhereUniqueWithoutArticleInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ArticleTagRelationUpdateManyWithWhereWithoutArticleInputSchema),z.lazy(() => ArticleTagRelationUpdateManyWithWhereWithoutArticleInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ArticleTagRelationScalarWhereInputSchema),z.lazy(() => ArticleTagRelationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ArticleTagRelationUncheckedUpdateManyWithoutArticleNestedInputSchema;
