import { z } from 'zod';

export const RoleSchema = z.enum(['ADMIN','EDITOR','VIEWER']);

export type RoleType = `${z.infer<typeof RoleSchema>}`

export default RoleSchema;
