import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ArticleTagRelationCreateWithoutTagInputSchema } from './ArticleTagRelationCreateWithoutTagInputSchema';
import { ArticleTagRelationUncheckedCreateWithoutTagInputSchema } from './ArticleTagRelationUncheckedCreateWithoutTagInputSchema';
import { ArticleTagRelationCreateOrConnectWithoutTagInputSchema } from './ArticleTagRelationCreateOrConnectWithoutTagInputSchema';
import { ArticleTagRelationCreateManyTagInputEnvelopeSchema } from './ArticleTagRelationCreateManyTagInputEnvelopeSchema';
import { ArticleTagRelationWhereUniqueInputSchema } from './ArticleTagRelationWhereUniqueInputSchema';

export const ArticleTagRelationUncheckedCreateNestedManyWithoutTagInputSchema: z.ZodType<Prisma.ArticleTagRelationUncheckedCreateNestedManyWithoutTagInput> = z.object({
  create: z.union([ z.lazy(() => ArticleTagRelationCreateWithoutTagInputSchema),z.lazy(() => ArticleTagRelationCreateWithoutTagInputSchema).array(),z.lazy(() => ArticleTagRelationUncheckedCreateWithoutTagInputSchema),z.lazy(() => ArticleTagRelationUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ArticleTagRelationCreateOrConnectWithoutTagInputSchema),z.lazy(() => ArticleTagRelationCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ArticleTagRelationCreateManyTagInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ArticleTagRelationWhereUniqueInputSchema),z.lazy(() => ArticleTagRelationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ArticleTagRelationUncheckedCreateNestedManyWithoutTagInputSchema;
