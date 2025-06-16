import { z } from 'zod';
import { ArticleWithRelationsSchema, ArticlePartialWithRelationsSchema, ArticleOptionalDefaultsWithRelationsSchema } from './ArticleSchema'
import type { ArticleWithRelations, ArticlePartialWithRelations, ArticleOptionalDefaultsWithRelations } from './ArticleSchema'
import { TagWithRelationsSchema, TagPartialWithRelationsSchema, TagOptionalDefaultsWithRelationsSchema } from './TagSchema'
import type { TagWithRelations, TagPartialWithRelations, TagOptionalDefaultsWithRelations } from './TagSchema'

/////////////////////////////////////////
// ARTICLE TAG RELATION SCHEMA
/////////////////////////////////////////

export const ArticleTagRelationSchema = z.object({
  articleId: z.number().int(),
  tagId: z.number().int(),
})

export type ArticleTagRelation = z.infer<typeof ArticleTagRelationSchema>

/////////////////////////////////////////
// ARTICLE TAG RELATION PARTIAL SCHEMA
/////////////////////////////////////////

export const ArticleTagRelationPartialSchema = ArticleTagRelationSchema.partial()

export type ArticleTagRelationPartial = z.infer<typeof ArticleTagRelationPartialSchema>

/////////////////////////////////////////
// ARTICLE TAG RELATION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ArticleTagRelationOptionalDefaultsSchema = ArticleTagRelationSchema.merge(z.object({
}))

export type ArticleTagRelationOptionalDefaults = z.infer<typeof ArticleTagRelationOptionalDefaultsSchema>

/////////////////////////////////////////
// ARTICLE TAG RELATION RELATION SCHEMA
/////////////////////////////////////////

export type ArticleTagRelationRelations = {
  article: ArticleWithRelations;
  tag: TagWithRelations;
};

export type ArticleTagRelationWithRelations = z.infer<typeof ArticleTagRelationSchema> & ArticleTagRelationRelations

export const ArticleTagRelationWithRelationsSchema: z.ZodType<ArticleTagRelationWithRelations> = ArticleTagRelationSchema.merge(z.object({
  article: z.lazy(() => ArticleWithRelationsSchema),
  tag: z.lazy(() => TagWithRelationsSchema),
}))

/////////////////////////////////////////
// ARTICLE TAG RELATION OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type ArticleTagRelationOptionalDefaultsRelations = {
  article: ArticleOptionalDefaultsWithRelations;
  tag: TagOptionalDefaultsWithRelations;
};

export type ArticleTagRelationOptionalDefaultsWithRelations = z.infer<typeof ArticleTagRelationOptionalDefaultsSchema> & ArticleTagRelationOptionalDefaultsRelations

export const ArticleTagRelationOptionalDefaultsWithRelationsSchema: z.ZodType<ArticleTagRelationOptionalDefaultsWithRelations> = ArticleTagRelationOptionalDefaultsSchema.merge(z.object({
  article: z.lazy(() => ArticleOptionalDefaultsWithRelationsSchema),
  tag: z.lazy(() => TagOptionalDefaultsWithRelationsSchema),
}))

/////////////////////////////////////////
// ARTICLE TAG RELATION PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type ArticleTagRelationPartialRelations = {
  article?: ArticlePartialWithRelations;
  tag?: TagPartialWithRelations;
};

export type ArticleTagRelationPartialWithRelations = z.infer<typeof ArticleTagRelationPartialSchema> & ArticleTagRelationPartialRelations

export const ArticleTagRelationPartialWithRelationsSchema: z.ZodType<ArticleTagRelationPartialWithRelations> = ArticleTagRelationPartialSchema.merge(z.object({
  article: z.lazy(() => ArticlePartialWithRelationsSchema),
  tag: z.lazy(() => TagPartialWithRelationsSchema),
})).partial()

export type ArticleTagRelationOptionalDefaultsWithPartialRelations = z.infer<typeof ArticleTagRelationOptionalDefaultsSchema> & ArticleTagRelationPartialRelations

export const ArticleTagRelationOptionalDefaultsWithPartialRelationsSchema: z.ZodType<ArticleTagRelationOptionalDefaultsWithPartialRelations> = ArticleTagRelationOptionalDefaultsSchema.merge(z.object({
  article: z.lazy(() => ArticlePartialWithRelationsSchema),
  tag: z.lazy(() => TagPartialWithRelationsSchema),
}).partial())

export type ArticleTagRelationWithPartialRelations = z.infer<typeof ArticleTagRelationSchema> & ArticleTagRelationPartialRelations

export const ArticleTagRelationWithPartialRelationsSchema: z.ZodType<ArticleTagRelationWithPartialRelations> = ArticleTagRelationSchema.merge(z.object({
  article: z.lazy(() => ArticlePartialWithRelationsSchema),
  tag: z.lazy(() => TagPartialWithRelationsSchema),
}).partial())

export default ArticleTagRelationSchema;
