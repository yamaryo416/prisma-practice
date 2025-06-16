import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ArticleTagRelationCreateWithoutTagInputSchema } from './ArticleTagRelationCreateWithoutTagInputSchema';
import { ArticleTagRelationUncheckedCreateWithoutTagInputSchema } from './ArticleTagRelationUncheckedCreateWithoutTagInputSchema';
import { ArticleTagRelationCreateOrConnectWithoutTagInputSchema } from './ArticleTagRelationCreateOrConnectWithoutTagInputSchema';
import { ArticleTagRelationUpsertWithWhereUniqueWithoutTagInputSchema } from './ArticleTagRelationUpsertWithWhereUniqueWithoutTagInputSchema';
import { ArticleTagRelationCreateManyTagInputEnvelopeSchema } from './ArticleTagRelationCreateManyTagInputEnvelopeSchema';
import { ArticleTagRelationWhereUniqueInputSchema } from './ArticleTagRelationWhereUniqueInputSchema';
import { ArticleTagRelationUpdateWithWhereUniqueWithoutTagInputSchema } from './ArticleTagRelationUpdateWithWhereUniqueWithoutTagInputSchema';
import { ArticleTagRelationUpdateManyWithWhereWithoutTagInputSchema } from './ArticleTagRelationUpdateManyWithWhereWithoutTagInputSchema';
import { ArticleTagRelationScalarWhereInputSchema } from './ArticleTagRelationScalarWhereInputSchema';

export const ArticleTagRelationUpdateManyWithoutTagNestedInputSchema: z.ZodType<Prisma.ArticleTagRelationUpdateManyWithoutTagNestedInput> = z.object({
  create: z.union([ z.lazy(() => ArticleTagRelationCreateWithoutTagInputSchema),z.lazy(() => ArticleTagRelationCreateWithoutTagInputSchema).array(),z.lazy(() => ArticleTagRelationUncheckedCreateWithoutTagInputSchema),z.lazy(() => ArticleTagRelationUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ArticleTagRelationCreateOrConnectWithoutTagInputSchema),z.lazy(() => ArticleTagRelationCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ArticleTagRelationUpsertWithWhereUniqueWithoutTagInputSchema),z.lazy(() => ArticleTagRelationUpsertWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ArticleTagRelationCreateManyTagInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ArticleTagRelationWhereUniqueInputSchema),z.lazy(() => ArticleTagRelationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ArticleTagRelationWhereUniqueInputSchema),z.lazy(() => ArticleTagRelationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ArticleTagRelationWhereUniqueInputSchema),z.lazy(() => ArticleTagRelationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ArticleTagRelationWhereUniqueInputSchema),z.lazy(() => ArticleTagRelationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ArticleTagRelationUpdateWithWhereUniqueWithoutTagInputSchema),z.lazy(() => ArticleTagRelationUpdateWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ArticleTagRelationUpdateManyWithWhereWithoutTagInputSchema),z.lazy(() => ArticleTagRelationUpdateManyWithWhereWithoutTagInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ArticleTagRelationScalarWhereInputSchema),z.lazy(() => ArticleTagRelationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ArticleTagRelationUpdateManyWithoutTagNestedInputSchema;
