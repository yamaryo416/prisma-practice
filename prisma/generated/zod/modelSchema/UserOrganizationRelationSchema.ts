import { z } from 'zod';
import { RoleSchema } from '../inputTypeSchemas/RoleSchema'
import { UserWithRelationsSchema, UserPartialWithRelationsSchema, UserOptionalDefaultsWithRelationsSchema } from './UserSchema'
import type { UserWithRelations, UserPartialWithRelations, UserOptionalDefaultsWithRelations } from './UserSchema'
import { OrganizationWithRelationsSchema, OrganizationPartialWithRelationsSchema, OrganizationOptionalDefaultsWithRelationsSchema } from './OrganizationSchema'
import type { OrganizationWithRelations, OrganizationPartialWithRelations, OrganizationOptionalDefaultsWithRelations } from './OrganizationSchema'

/////////////////////////////////////////
// USER ORGANIZATION RELATION SCHEMA
/////////////////////////////////////////

export const UserOrganizationRelationSchema = z.object({
  role: RoleSchema,
  userId: z.number().int(),
  organizationId: z.number().int(),
  createdAt: z.coerce.date(),
})

export type UserOrganizationRelation = z.infer<typeof UserOrganizationRelationSchema>

/////////////////////////////////////////
// USER ORGANIZATION RELATION PARTIAL SCHEMA
/////////////////////////////////////////

export const UserOrganizationRelationPartialSchema = UserOrganizationRelationSchema.partial()

export type UserOrganizationRelationPartial = z.infer<typeof UserOrganizationRelationPartialSchema>

/////////////////////////////////////////
// USER ORGANIZATION RELATION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const UserOrganizationRelationOptionalDefaultsSchema = UserOrganizationRelationSchema.merge(z.object({
  createdAt: z.coerce.date().optional(),
}))

export type UserOrganizationRelationOptionalDefaults = z.infer<typeof UserOrganizationRelationOptionalDefaultsSchema>

/////////////////////////////////////////
// USER ORGANIZATION RELATION RELATION SCHEMA
/////////////////////////////////////////

export type UserOrganizationRelationRelations = {
  user: UserWithRelations;
  organization: OrganizationWithRelations;
};

export type UserOrganizationRelationWithRelations = z.infer<typeof UserOrganizationRelationSchema> & UserOrganizationRelationRelations

export const UserOrganizationRelationWithRelationsSchema: z.ZodType<UserOrganizationRelationWithRelations> = UserOrganizationRelationSchema.merge(z.object({
  user: z.lazy(() => UserWithRelationsSchema),
  organization: z.lazy(() => OrganizationWithRelationsSchema),
}))

/////////////////////////////////////////
// USER ORGANIZATION RELATION OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type UserOrganizationRelationOptionalDefaultsRelations = {
  user: UserOptionalDefaultsWithRelations;
  organization: OrganizationOptionalDefaultsWithRelations;
};

export type UserOrganizationRelationOptionalDefaultsWithRelations = z.infer<typeof UserOrganizationRelationOptionalDefaultsSchema> & UserOrganizationRelationOptionalDefaultsRelations

export const UserOrganizationRelationOptionalDefaultsWithRelationsSchema: z.ZodType<UserOrganizationRelationOptionalDefaultsWithRelations> = UserOrganizationRelationOptionalDefaultsSchema.merge(z.object({
  user: z.lazy(() => UserOptionalDefaultsWithRelationsSchema),
  organization: z.lazy(() => OrganizationOptionalDefaultsWithRelationsSchema),
}))

/////////////////////////////////////////
// USER ORGANIZATION RELATION PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type UserOrganizationRelationPartialRelations = {
  user?: UserPartialWithRelations;
  organization?: OrganizationPartialWithRelations;
};

export type UserOrganizationRelationPartialWithRelations = z.infer<typeof UserOrganizationRelationPartialSchema> & UserOrganizationRelationPartialRelations

export const UserOrganizationRelationPartialWithRelationsSchema: z.ZodType<UserOrganizationRelationPartialWithRelations> = UserOrganizationRelationPartialSchema.merge(z.object({
  user: z.lazy(() => UserPartialWithRelationsSchema),
  organization: z.lazy(() => OrganizationPartialWithRelationsSchema),
})).partial()

export type UserOrganizationRelationOptionalDefaultsWithPartialRelations = z.infer<typeof UserOrganizationRelationOptionalDefaultsSchema> & UserOrganizationRelationPartialRelations

export const UserOrganizationRelationOptionalDefaultsWithPartialRelationsSchema: z.ZodType<UserOrganizationRelationOptionalDefaultsWithPartialRelations> = UserOrganizationRelationOptionalDefaultsSchema.merge(z.object({
  user: z.lazy(() => UserPartialWithRelationsSchema),
  organization: z.lazy(() => OrganizationPartialWithRelationsSchema),
}).partial())

export type UserOrganizationRelationWithPartialRelations = z.infer<typeof UserOrganizationRelationSchema> & UserOrganizationRelationPartialRelations

export const UserOrganizationRelationWithPartialRelationsSchema: z.ZodType<UserOrganizationRelationWithPartialRelations> = UserOrganizationRelationSchema.merge(z.object({
  user: z.lazy(() => UserPartialWithRelationsSchema),
  organization: z.lazy(() => OrganizationPartialWithRelationsSchema),
}).partial())

export default UserOrganizationRelationSchema;
