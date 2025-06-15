import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ArticleTagRelationScalarWhereInputSchema } from './ArticleTagRelationScalarWhereInputSchema';
import { ArticleTagRelationUpdateManyMutationInputSchema } from './ArticleTagRelationUpdateManyMutationInputSchema';
import { ArticleTagRelationUncheckedUpdateManyWithoutTagInputSchema } from './ArticleTagRelationUncheckedUpdateManyWithoutTagInputSchema';

export const ArticleTagRelationUpdateManyWithWhereWithoutTagInputSchema: z.ZodType<Prisma.ArticleTagRelationUpdateManyWithWhereWithoutTagInput> = z.object({
  where: z.lazy(() => ArticleTagRelationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ArticleTagRelationUpdateManyMutationInputSchema),z.lazy(() => ArticleTagRelationUncheckedUpdateManyWithoutTagInputSchema) ]),
}).strict();

export default ArticleTagRelationUpdateManyWithWhereWithoutTagInputSchema;
