import { z } from 'zod';
import { ArticleWithRelationsSchema, ArticlePartialWithRelationsSchema, ArticleOptionalDefaultsWithRelationsSchema } from './ArticleSchema'
import type { ArticleWithRelations, ArticlePartialWithRelations, ArticleOptionalDefaultsWithRelations } from './ArticleSchema'
import { UserOrganizationRelationWithRelationsSchema, UserOrganizationRelationPartialWithRelationsSchema, UserOrganizationRelationOptionalDefaultsWithRelationsSchema } from './UserOrganizationRelationSchema'
import type { UserOrganizationRelationWithRelations, UserOrganizationRelationPartialWithRelations, UserOrganizationRelationOptionalDefaultsWithRelations } from './UserOrganizationRelationSchema'

/////////////////////////////////////////
// ORGANIZATION SCHEMA
/////////////////////////////////////////

export const OrganizationSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Organization = z.infer<typeof OrganizationSchema>

/////////////////////////////////////////
// ORGANIZATION PARTIAL SCHEMA
/////////////////////////////////////////

export const OrganizationPartialSchema = OrganizationSchema.partial()

export type OrganizationPartial = z.infer<typeof OrganizationPartialSchema>

/////////////////////////////////////////
// ORGANIZATION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const OrganizationOptionalDefaultsSchema = OrganizationSchema.merge(z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type OrganizationOptionalDefaults = z.infer<typeof OrganizationOptionalDefaultsSchema>

/////////////////////////////////////////
// ORGANIZATION RELATION SCHEMA
/////////////////////////////////////////

export type OrganizationRelations = {
  articles: ArticleWithRelations[];
  users: UserOrganizationRelationWithRelations[];
};

export type OrganizationWithRelations = z.infer<typeof OrganizationSchema> & OrganizationRelations

export const OrganizationWithRelationsSchema: z.ZodType<OrganizationWithRelations> = OrganizationSchema.merge(z.object({
  articles: z.lazy(() => ArticleWithRelationsSchema).array(),
  users: z.lazy(() => UserOrganizationRelationWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// ORGANIZATION OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type OrganizationOptionalDefaultsRelations = {
  articles: ArticleOptionalDefaultsWithRelations[];
  users: UserOrganizationRelationOptionalDefaultsWithRelations[];
};

export type OrganizationOptionalDefaultsWithRelations = z.infer<typeof OrganizationOptionalDefaultsSchema> & OrganizationOptionalDefaultsRelations

export const OrganizationOptionalDefaultsWithRelationsSchema: z.ZodType<OrganizationOptionalDefaultsWithRelations> = OrganizationOptionalDefaultsSchema.merge(z.object({
  articles: z.lazy(() => ArticleOptionalDefaultsWithRelationsSchema).array(),
  users: z.lazy(() => UserOrganizationRelationOptionalDefaultsWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// ORGANIZATION PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type OrganizationPartialRelations = {
  articles?: ArticlePartialWithRelations[];
  users?: UserOrganizationRelationPartialWithRelations[];
};

export type OrganizationPartialWithRelations = z.infer<typeof OrganizationPartialSchema> & OrganizationPartialRelations

export const OrganizationPartialWithRelationsSchema: z.ZodType<OrganizationPartialWithRelations> = OrganizationPartialSchema.merge(z.object({
  articles: z.lazy(() => ArticlePartialWithRelationsSchema).array(),
  users: z.lazy(() => UserOrganizationRelationPartialWithRelationsSchema).array(),
})).partial()

export type OrganizationOptionalDefaultsWithPartialRelations = z.infer<typeof OrganizationOptionalDefaultsSchema> & OrganizationPartialRelations

export const OrganizationOptionalDefaultsWithPartialRelationsSchema: z.ZodType<OrganizationOptionalDefaultsWithPartialRelations> = OrganizationOptionalDefaultsSchema.merge(z.object({
  articles: z.lazy(() => ArticlePartialWithRelationsSchema).array(),
  users: z.lazy(() => UserOrganizationRelationPartialWithRelationsSchema).array(),
}).partial())

export type OrganizationWithPartialRelations = z.infer<typeof OrganizationSchema> & OrganizationPartialRelations

export const OrganizationWithPartialRelationsSchema: z.ZodType<OrganizationWithPartialRelations> = OrganizationSchema.merge(z.object({
  articles: z.lazy(() => ArticlePartialWithRelationsSchema).array(),
  users: z.lazy(() => UserOrganizationRelationPartialWithRelationsSchema).array(),
}).partial())

export default OrganizationSchema;
