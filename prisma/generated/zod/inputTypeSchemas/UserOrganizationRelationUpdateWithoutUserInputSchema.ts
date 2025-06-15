import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { EnumRoleFieldUpdateOperationsInputSchema } from './EnumRoleFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { OrganizationUpdateOneRequiredWithoutUsersNestedInputSchema } from './OrganizationUpdateOneRequiredWithoutUsersNestedInputSchema';

export const UserOrganizationRelationUpdateWithoutUserInputSchema: z.ZodType<Prisma.UserOrganizationRelationUpdateWithoutUserInput> = z.object({
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  organization: z.lazy(() => OrganizationUpdateOneRequiredWithoutUsersNestedInputSchema).optional()
}).strict();

export default UserOrganizationRelationUpdateWithoutUserInputSchema;
