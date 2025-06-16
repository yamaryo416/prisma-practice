import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ArticleCreateWithoutTagsInputSchema } from './ArticleCreateWithoutTagsInputSchema';
import { ArticleUncheckedCreateWithoutTagsInputSchema } from './ArticleUncheckedCreateWithoutTagsInputSchema';
import { ArticleCreateOrConnectWithoutTagsInputSchema } from './ArticleCreateOrConnectWithoutTagsInputSchema';
import { ArticleUpsertWithoutTagsInputSchema } from './ArticleUpsertWithoutTagsInputSchema';
import { ArticleWhereUniqueInputSchema } from './ArticleWhereUniqueInputSchema';
import { ArticleUpdateToOneWithWhereWithoutTagsInputSchema } from './ArticleUpdateToOneWithWhereWithoutTagsInputSchema';
import { ArticleUpdateWithoutTagsInputSchema } from './ArticleUpdateWithoutTagsInputSchema';
import { ArticleUncheckedUpdateWithoutTagsInputSchema } from './ArticleUncheckedUpdateWithoutTagsInputSchema';

export const ArticleUpdateOneRequiredWithoutTagsNestedInputSchema: z.ZodType<Prisma.ArticleUpdateOneRequiredWithoutTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ArticleCreateWithoutTagsInputSchema),z.lazy(() => ArticleUncheckedCreateWithoutTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ArticleCreateOrConnectWithoutTagsInputSchema).optional(),
  upsert: z.lazy(() => ArticleUpsertWithoutTagsInputSchema).optional(),
  connect: z.lazy(() => ArticleWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ArticleUpdateToOneWithWhereWithoutTagsInputSchema),z.lazy(() => ArticleUpdateWithoutTagsInputSchema),z.lazy(() => ArticleUncheckedUpdateWithoutTagsInputSchema) ]).optional(),
}).strict();

export default ArticleUpdateOneRequiredWithoutTagsNestedInputSchema;
