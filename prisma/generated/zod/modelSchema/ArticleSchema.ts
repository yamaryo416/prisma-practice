import { z } from 'zod';
import { UserWithRelationsSchema, UserPartialWithRelationsSchema, UserOptionalDefaultsWithRelationsSchema } from './UserSchema'
import type { UserWithRelations, UserPartialWithRelations, UserOptionalDefaultsWithRelations } from './UserSchema'
import { OrganizationWithRelationsSchema, OrganizationPartialWithRelationsSchema, OrganizationOptionalDefaultsWithRelationsSchema } from './OrganizationSchema'
import type { OrganizationWithRelations, OrganizationPartialWithRelations, OrganizationOptionalDefaultsWithRelations } from './OrganizationSchema'
import { ArticleTagRelationWithRelationsSchema, ArticleTagRelationPartialWithRelationsSchema, ArticleTagRelationOptionalDefaultsWithRelationsSchema } from './ArticleTagRelationSchema'
import type { ArticleTagRelationWithRelations, ArticleTagRelationPartialWithRelations, ArticleTagRelationOptionalDefaultsWithRelations } from './ArticleTagRelationSchema'

/////////////////////////////////////////
// ARTICLE SCHEMA
/////////////////////////////////////////

export const ArticleSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  content: z.string(),
  userId: z.number().int(),
  organizationId: z.number().int().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Article = z.infer<typeof ArticleSchema>

/////////////////////////////////////////
// ARTICLE PARTIAL SCHEMA
/////////////////////////////////////////

export const ArticlePartialSchema = ArticleSchema.partial()

export type ArticlePartial = z.infer<typeof ArticlePartialSchema>

/////////////////////////////////////////
// ARTICLE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ArticleOptionalDefaultsSchema = ArticleSchema.merge(z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type ArticleOptionalDefaults = z.infer<typeof ArticleOptionalDefaultsSchema>

/////////////////////////////////////////
// ARTICLE RELATION SCHEMA
/////////////////////////////////////////

export type ArticleRelations = {
  user: UserWithRelations;
  organization?: OrganizationWithRelations | null;
  tags: ArticleTagRelationWithRelations[];
};

export type ArticleWithRelations = z.infer<typeof ArticleSchema> & ArticleRelations

export const ArticleWithRelationsSchema: z.ZodType<ArticleWithRelations> = ArticleSchema.merge(z.object({
  user: z.lazy(() => UserWithRelationsSchema),
  organization: z.lazy(() => OrganizationWithRelationsSchema).nullable(),
  tags: z.lazy(() => ArticleTagRelationWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// ARTICLE OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type ArticleOptionalDefaultsRelations = {
  user: UserOptionalDefaultsWithRelations;
  organization?: OrganizationOptionalDefaultsWithRelations | null;
  tags: ArticleTagRelationOptionalDefaultsWithRelations[];
};

export type ArticleOptionalDefaultsWithRelations = z.infer<typeof ArticleOptionalDefaultsSchema> & ArticleOptionalDefaultsRelations

export const ArticleOptionalDefaultsWithRelationsSchema: z.ZodType<ArticleOptionalDefaultsWithRelations> = ArticleOptionalDefaultsSchema.merge(z.object({
  user: z.lazy(() => UserOptionalDefaultsWithRelationsSchema),
  organization: z.lazy(() => OrganizationOptionalDefaultsWithRelationsSchema).nullable(),
  tags: z.lazy(() => ArticleTagRelationOptionalDefaultsWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// ARTICLE PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type ArticlePartialRelations = {
  user?: UserPartialWithRelations;
  organization?: OrganizationPartialWithRelations | null;
  tags?: ArticleTagRelationPartialWithRelations[];
};

export type ArticlePartialWithRelations = z.infer<typeof ArticlePartialSchema> & ArticlePartialRelations

export const ArticlePartialWithRelationsSchema: z.ZodType<ArticlePartialWithRelations> = ArticlePartialSchema.merge(z.object({
  user: z.lazy(() => UserPartialWithRelationsSchema),
  organization: z.lazy(() => OrganizationPartialWithRelationsSchema).nullable(),
  tags: z.lazy(() => ArticleTagRelationPartialWithRelationsSchema).array(),
})).partial()

export type ArticleOptionalDefaultsWithPartialRelations = z.infer<typeof ArticleOptionalDefaultsSchema> & ArticlePartialRelations

export const ArticleOptionalDefaultsWithPartialRelationsSchema: z.ZodType<ArticleOptionalDefaultsWithPartialRelations> = ArticleOptionalDefaultsSchema.merge(z.object({
  user: z.lazy(() => UserPartialWithRelationsSchema),
  organization: z.lazy(() => OrganizationPartialWithRelationsSchema).nullable(),
  tags: z.lazy(() => ArticleTagRelationPartialWithRelationsSchema).array(),
}).partial())

export type ArticleWithPartialRelations = z.infer<typeof ArticleSchema> & ArticlePartialRelations

export const ArticleWithPartialRelationsSchema: z.ZodType<ArticleWithPartialRelations> = ArticleSchema.merge(z.object({
  user: z.lazy(() => UserPartialWithRelationsSchema),
  organization: z.lazy(() => OrganizationPartialWithRelationsSchema).nullable(),
  tags: z.lazy(() => ArticleTagRelationPartialWithRelationsSchema).array(),
}).partial())

export default ArticleSchema;
