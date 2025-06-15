import { z } from 'zod';

export const UserOrganizationRelationScalarFieldEnumSchema = z.enum(['userId','organizationId','role','createdAt']);

export default UserOrganizationRelationScalarFieldEnumSchema;
