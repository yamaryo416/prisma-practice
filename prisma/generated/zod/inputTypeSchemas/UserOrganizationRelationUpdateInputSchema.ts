import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { EnumRoleFieldUpdateOperationsInputSchema } from './EnumRoleFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutOrganizationsNestedInputSchema } from './UserUpdateOneRequiredWithoutOrganizationsNestedInputSchema';
import { OrganizationUpdateOneRequiredWithoutUsersNestedInputSchema } from './OrganizationUpdateOneRequiredWithoutUsersNestedInputSchema';

export const UserOrganizationRelationUpdateInputSchema: z.ZodType<Prisma.UserOrganizationRelationUpdateInput> = z.object({
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutOrganizationsNestedInputSchema).optional(),
  organization: z.lazy(() => OrganizationUpdateOneRequiredWithoutUsersNestedInputSchema).optional()
}).strict();

export default UserOrganizationRelationUpdateInputSchema;
