import { type MigrateDownArgs, type MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
	await db.execute(sql`
   CREATE TYPE "public"."_locales" AS ENUM('en-US', 'uk-UA', 'de-DE', 'hi-IN', 'ja-JP', 'ru-RU', 'fr-FR', 'es-ES');
  CREATE TYPE "public"."enum_posts_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__posts_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__posts_v_published_locale" AS ENUM('en-US', 'uk-UA', 'de-DE', 'hi-IN', 'ja-JP', 'ru-RU', 'fr-FR', 'es-ES');
  CREATE TYPE "public"."enum_micro_posts_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__micro_posts_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__micro_posts_v_published_locale" AS ENUM('en-US', 'uk-UA', 'de-DE', 'hi-IN', 'ja-JP', 'ru-RU', 'fr-FR', 'es-ES');
  CREATE TABLE "posts" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"featured_image_id" uuid,
  	"meta_nofollow" boolean DEFAULT false,
  	"meta_noindex" boolean DEFAULT false,
  	"author_slug" varchar,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_posts_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "posts_locales" (
  	"title" varchar,
  	"subtitle" varchar,
  	"content" varchar,
  	"meta_title" varchar,
  	"meta_image_id" uuid,
  	"meta_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE "posts_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"posts_id" uuid,
  	"tags_id" uuid,
  	"authors_id" uuid
  );
  
  CREATE TABLE "_posts_v" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"parent_id" uuid,
  	"version_featured_image_id" uuid,
  	"version_meta_nofollow" boolean DEFAULT false,
  	"version_meta_noindex" boolean DEFAULT false,
  	"version_author_slug" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__posts_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__posts_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_posts_v_locales" (
  	"version_title" varchar,
  	"version_subtitle" varchar,
  	"version_content" varchar,
  	"version_meta_title" varchar,
  	"version_meta_image_id" uuid,
  	"version_meta_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE "_posts_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"posts_id" uuid,
  	"tags_id" uuid,
  	"authors_id" uuid
  );
  
  CREATE TABLE "media" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE "media_locales" (
  	"alt" varchar NOT NULL,
  	"description" varchar,
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"name" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "tags" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"name" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "tags_locales" (
  	"title" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE "authors" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"slug" varchar NOT NULL,
  	"twitter_api_key" varchar,
  	"avatar_id" uuid,
  	"user_id" uuid NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "authors_locales" (
  	"name" varchar NOT NULL,
  	"bio" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE "micro_posts" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"attachment_id" uuid,
  	"social_x_auto_post" boolean DEFAULT false,
  	"social_x_auto_posted" boolean DEFAULT false,
  	"social_x_auto_posted_at" timestamp(3) with time zone,
  	"published_at" timestamp(3) with time zone,
  	"author_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_micro_posts_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "micro_posts_locales" (
  	"title" varchar,
  	"content" varchar,
  	"meta_title" varchar,
  	"meta_image_id" uuid,
  	"meta_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE "micro_posts_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"tags_id" uuid,
  	"micro_post_external_links_id" uuid,
  	"authors_id" uuid
  );
  
  CREATE TABLE "_micro_posts_v" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"parent_id" uuid,
  	"version_attachment_id" uuid,
  	"version_social_x_auto_post" boolean DEFAULT false,
  	"version_social_x_auto_posted" boolean DEFAULT false,
  	"version_social_x_auto_posted_at" timestamp(3) with time zone,
  	"version_published_at" timestamp(3) with time zone,
  	"version_author_slug" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__micro_posts_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__micro_posts_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_micro_posts_v_locales" (
  	"version_title" varchar,
  	"version_content" varchar,
  	"version_meta_title" varchar,
  	"version_meta_image_id" uuid,
  	"version_meta_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE "_micro_posts_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"tags_id" uuid,
  	"micro_post_external_links_id" uuid,
  	"authors_id" uuid
  );
  
  CREATE TABLE "micro_post_internal_links" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"source_note_id" uuid NOT NULL,
  	"target_note_id" uuid NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "micro_post_internal_links_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE "micro_post_external_links" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"target_url" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "micro_post_external_links_locales" (
  	"title" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"posts_id" uuid,
  	"media_id" uuid,
  	"users_id" uuid,
  	"tags_id" uuid,
  	"authors_id" uuid,
  	"micro_posts_id" uuid,
  	"micro_post_internal_links_id" uuid,
  	"micro_post_external_links_id" uuid
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" uuid
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "posts" ADD CONSTRAINT "posts_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_locales" ADD CONSTRAINT "posts_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_locales" ADD CONSTRAINT "posts_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_tags_fk" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_authors_fk" FOREIGN KEY ("authors_id") REFERENCES "public"."authors"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_parent_id_posts_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_featured_image_id_media_id_fk" FOREIGN KEY ("version_featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v_locales" ADD CONSTRAINT "_posts_v_locales_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v_locales" ADD CONSTRAINT "_posts_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_tags_fk" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_authors_fk" FOREIGN KEY ("authors_id") REFERENCES "public"."authors"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "media_locales" ADD CONSTRAINT "media_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "tags_locales" ADD CONSTRAINT "tags_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "authors" ADD CONSTRAINT "authors_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "authors" ADD CONSTRAINT "authors_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "authors_locales" ADD CONSTRAINT "authors_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."authors"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "micro_posts" ADD CONSTRAINT "micro_posts_attachment_id_media_id_fk" FOREIGN KEY ("attachment_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "micro_posts_locales" ADD CONSTRAINT "micro_posts_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "micro_posts_locales" ADD CONSTRAINT "micro_posts_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."micro_posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "micro_posts_rels" ADD CONSTRAINT "micro_posts_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."micro_posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "micro_posts_rels" ADD CONSTRAINT "micro_posts_rels_tags_fk" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "micro_posts_rels" ADD CONSTRAINT "micro_posts_rels_micro_post_external_links_fk" FOREIGN KEY ("micro_post_external_links_id") REFERENCES "public"."micro_post_external_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "micro_posts_rels" ADD CONSTRAINT "micro_posts_rels_authors_fk" FOREIGN KEY ("authors_id") REFERENCES "public"."authors"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_micro_posts_v" ADD CONSTRAINT "_micro_posts_v_parent_id_micro_posts_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."micro_posts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_micro_posts_v" ADD CONSTRAINT "_micro_posts_v_version_attachment_id_media_id_fk" FOREIGN KEY ("version_attachment_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_micro_posts_v_locales" ADD CONSTRAINT "_micro_posts_v_locales_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_micro_posts_v_locales" ADD CONSTRAINT "_micro_posts_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_micro_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_micro_posts_v_rels" ADD CONSTRAINT "_micro_posts_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_micro_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_micro_posts_v_rels" ADD CONSTRAINT "_micro_posts_v_rels_tags_fk" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_micro_posts_v_rels" ADD CONSTRAINT "_micro_posts_v_rels_micro_post_external_links_fk" FOREIGN KEY ("micro_post_external_links_id") REFERENCES "public"."micro_post_external_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_micro_posts_v_rels" ADD CONSTRAINT "_micro_posts_v_rels_authors_fk" FOREIGN KEY ("authors_id") REFERENCES "public"."authors"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "micro_post_internal_links" ADD CONSTRAINT "micro_post_internal_links_source_note_id_micro_posts_id_fk" FOREIGN KEY ("source_note_id") REFERENCES "public"."micro_posts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "micro_post_internal_links" ADD CONSTRAINT "micro_post_internal_links_target_note_id_micro_posts_id_fk" FOREIGN KEY ("target_note_id") REFERENCES "public"."micro_posts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "micro_post_internal_links_locales" ADD CONSTRAINT "micro_post_internal_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."micro_post_internal_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "micro_post_external_links_locales" ADD CONSTRAINT "micro_post_external_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."micro_post_external_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_tags_fk" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_authors_fk" FOREIGN KEY ("authors_id") REFERENCES "public"."authors"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_micro_posts_fk" FOREIGN KEY ("micro_posts_id") REFERENCES "public"."micro_posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_micro_post_internal_links_fk" FOREIGN KEY ("micro_post_internal_links_id") REFERENCES "public"."micro_post_internal_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_micro_post_external_links_fk" FOREIGN KEY ("micro_post_external_links_id") REFERENCES "public"."micro_post_external_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "posts_featured_image_idx" ON "posts" USING btree ("featured_image_id");
  CREATE UNIQUE INDEX "posts_slug_idx" ON "posts" USING btree ("slug");
  CREATE INDEX "posts_updated_at_idx" ON "posts" USING btree ("updated_at");
  CREATE INDEX "posts_created_at_idx" ON "posts" USING btree ("created_at");
  CREATE INDEX "posts__status_idx" ON "posts" USING btree ("_status");
  CREATE INDEX "posts_meta_meta_image_idx" ON "posts_locales" USING btree ("meta_image_id","_locale");
  CREATE UNIQUE INDEX "posts_locales_locale_parent_id_unique" ON "posts_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_rels_order_idx" ON "posts_rels" USING btree ("order");
  CREATE INDEX "posts_rels_parent_idx" ON "posts_rels" USING btree ("parent_id");
  CREATE INDEX "posts_rels_path_idx" ON "posts_rels" USING btree ("path");
  CREATE INDEX "posts_rels_posts_id_idx" ON "posts_rels" USING btree ("posts_id");
  CREATE INDEX "posts_rels_tags_id_idx" ON "posts_rels" USING btree ("tags_id");
  CREATE INDEX "posts_rels_authors_id_idx" ON "posts_rels" USING btree ("authors_id");
  CREATE INDEX "_posts_v_parent_idx" ON "_posts_v" USING btree ("parent_id");
  CREATE INDEX "_posts_v_version_version_featured_image_idx" ON "_posts_v" USING btree ("version_featured_image_id");
  CREATE INDEX "_posts_v_version_version_slug_idx" ON "_posts_v" USING btree ("version_slug");
  CREATE INDEX "_posts_v_version_version_updated_at_idx" ON "_posts_v" USING btree ("version_updated_at");
  CREATE INDEX "_posts_v_version_version_created_at_idx" ON "_posts_v" USING btree ("version_created_at");
  CREATE INDEX "_posts_v_version_version__status_idx" ON "_posts_v" USING btree ("version__status");
  CREATE INDEX "_posts_v_created_at_idx" ON "_posts_v" USING btree ("created_at");
  CREATE INDEX "_posts_v_updated_at_idx" ON "_posts_v" USING btree ("updated_at");
  CREATE INDEX "_posts_v_snapshot_idx" ON "_posts_v" USING btree ("snapshot");
  CREATE INDEX "_posts_v_published_locale_idx" ON "_posts_v" USING btree ("published_locale");
  CREATE INDEX "_posts_v_latest_idx" ON "_posts_v" USING btree ("latest");
  CREATE INDEX "_posts_v_autosave_idx" ON "_posts_v" USING btree ("autosave");
  CREATE INDEX "_posts_v_version_meta_version_meta_image_idx" ON "_posts_v_locales" USING btree ("version_meta_image_id","_locale");
  CREATE UNIQUE INDEX "_posts_v_locales_locale_parent_id_unique" ON "_posts_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_posts_v_rels_order_idx" ON "_posts_v_rels" USING btree ("order");
  CREATE INDEX "_posts_v_rels_parent_idx" ON "_posts_v_rels" USING btree ("parent_id");
  CREATE INDEX "_posts_v_rels_path_idx" ON "_posts_v_rels" USING btree ("path");
  CREATE INDEX "_posts_v_rels_posts_id_idx" ON "_posts_v_rels" USING btree ("posts_id");
  CREATE INDEX "_posts_v_rels_tags_id_idx" ON "_posts_v_rels" USING btree ("tags_id");
  CREATE INDEX "_posts_v_rels_authors_id_idx" ON "_posts_v_rels" USING btree ("authors_id");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE UNIQUE INDEX "media_locales_locale_parent_id_unique" ON "media_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "tags_updated_at_idx" ON "tags" USING btree ("updated_at");
  CREATE INDEX "tags_created_at_idx" ON "tags" USING btree ("created_at");
  CREATE UNIQUE INDEX "tags_locales_locale_parent_id_unique" ON "tags_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "authors_slug_idx" ON "authors" USING btree ("slug");
  CREATE INDEX "authors_avatar_idx" ON "authors" USING btree ("avatar_id");
  CREATE INDEX "authors_user_idx" ON "authors" USING btree ("user_id");
  CREATE INDEX "authors_updated_at_idx" ON "authors" USING btree ("updated_at");
  CREATE INDEX "authors_created_at_idx" ON "authors" USING btree ("created_at");
  CREATE UNIQUE INDEX "authors_locales_locale_parent_id_unique" ON "authors_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "micro_posts_attachment_idx" ON "micro_posts" USING btree ("attachment_id");
  CREATE INDEX "micro_posts_updated_at_idx" ON "micro_posts" USING btree ("updated_at");
  CREATE INDEX "micro_posts_created_at_idx" ON "micro_posts" USING btree ("created_at");
  CREATE INDEX "micro_posts__status_idx" ON "micro_posts" USING btree ("_status");
  CREATE INDEX "micro_posts_meta_meta_image_idx" ON "micro_posts_locales" USING btree ("meta_image_id","_locale");
  CREATE UNIQUE INDEX "micro_posts_locales_locale_parent_id_unique" ON "micro_posts_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "micro_posts_rels_order_idx" ON "micro_posts_rels" USING btree ("order");
  CREATE INDEX "micro_posts_rels_parent_idx" ON "micro_posts_rels" USING btree ("parent_id");
  CREATE INDEX "micro_posts_rels_path_idx" ON "micro_posts_rels" USING btree ("path");
  CREATE INDEX "micro_posts_rels_tags_id_idx" ON "micro_posts_rels" USING btree ("tags_id");
  CREATE INDEX "micro_posts_rels_micro_post_external_links_id_idx" ON "micro_posts_rels" USING btree ("micro_post_external_links_id");
  CREATE INDEX "micro_posts_rels_authors_id_idx" ON "micro_posts_rels" USING btree ("authors_id");
  CREATE INDEX "_micro_posts_v_parent_idx" ON "_micro_posts_v" USING btree ("parent_id");
  CREATE INDEX "_micro_posts_v_version_version_attachment_idx" ON "_micro_posts_v" USING btree ("version_attachment_id");
  CREATE INDEX "_micro_posts_v_version_version_updated_at_idx" ON "_micro_posts_v" USING btree ("version_updated_at");
  CREATE INDEX "_micro_posts_v_version_version_created_at_idx" ON "_micro_posts_v" USING btree ("version_created_at");
  CREATE INDEX "_micro_posts_v_version_version__status_idx" ON "_micro_posts_v" USING btree ("version__status");
  CREATE INDEX "_micro_posts_v_created_at_idx" ON "_micro_posts_v" USING btree ("created_at");
  CREATE INDEX "_micro_posts_v_updated_at_idx" ON "_micro_posts_v" USING btree ("updated_at");
  CREATE INDEX "_micro_posts_v_snapshot_idx" ON "_micro_posts_v" USING btree ("snapshot");
  CREATE INDEX "_micro_posts_v_published_locale_idx" ON "_micro_posts_v" USING btree ("published_locale");
  CREATE INDEX "_micro_posts_v_latest_idx" ON "_micro_posts_v" USING btree ("latest");
  CREATE INDEX "_micro_posts_v_autosave_idx" ON "_micro_posts_v" USING btree ("autosave");
  CREATE INDEX "_micro_posts_v_version_meta_version_meta_image_idx" ON "_micro_posts_v_locales" USING btree ("version_meta_image_id","_locale");
  CREATE UNIQUE INDEX "_micro_posts_v_locales_locale_parent_id_unique" ON "_micro_posts_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_micro_posts_v_rels_order_idx" ON "_micro_posts_v_rels" USING btree ("order");
  CREATE INDEX "_micro_posts_v_rels_parent_idx" ON "_micro_posts_v_rels" USING btree ("parent_id");
  CREATE INDEX "_micro_posts_v_rels_path_idx" ON "_micro_posts_v_rels" USING btree ("path");
  CREATE INDEX "_micro_posts_v_rels_tags_id_idx" ON "_micro_posts_v_rels" USING btree ("tags_id");
  CREATE INDEX "_micro_posts_v_rels_micro_post_external_links_id_idx" ON "_micro_posts_v_rels" USING btree ("micro_post_external_links_id");
  CREATE INDEX "_micro_posts_v_rels_authors_id_idx" ON "_micro_posts_v_rels" USING btree ("authors_id");
  CREATE INDEX "micro_post_internal_links_source_note_idx" ON "micro_post_internal_links" USING btree ("source_note_id");
  CREATE INDEX "micro_post_internal_links_target_note_idx" ON "micro_post_internal_links" USING btree ("target_note_id");
  CREATE INDEX "micro_post_internal_links_updated_at_idx" ON "micro_post_internal_links" USING btree ("updated_at");
  CREATE INDEX "micro_post_internal_links_created_at_idx" ON "micro_post_internal_links" USING btree ("created_at");
  CREATE UNIQUE INDEX "micro_post_internal_links_locales_locale_parent_id_unique" ON "micro_post_internal_links_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "micro_post_external_links_target_url_idx" ON "micro_post_external_links" USING btree ("target_url");
  CREATE INDEX "micro_post_external_links_updated_at_idx" ON "micro_post_external_links" USING btree ("updated_at");
  CREATE INDEX "micro_post_external_links_created_at_idx" ON "micro_post_external_links" USING btree ("created_at");
  CREATE UNIQUE INDEX "micro_post_external_links_locales_locale_parent_id_unique" ON "micro_post_external_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_posts_id_idx" ON "payload_locked_documents_rels" USING btree ("posts_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_tags_id_idx" ON "payload_locked_documents_rels" USING btree ("tags_id");
  CREATE INDEX "payload_locked_documents_rels_authors_id_idx" ON "payload_locked_documents_rels" USING btree ("authors_id");
  CREATE INDEX "payload_locked_documents_rels_micro_posts_id_idx" ON "payload_locked_documents_rels" USING btree ("micro_posts_id");
  CREATE INDEX "payload_locked_documents_rels_micro_post_internal_links__idx" ON "payload_locked_documents_rels" USING btree ("micro_post_internal_links_id");
  CREATE INDEX "payload_locked_documents_rels_micro_post_external_links__idx" ON "payload_locked_documents_rels" USING btree ("micro_post_external_links_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
	await db.execute(sql`
   DROP TABLE "posts" CASCADE;
  DROP TABLE "posts_locales" CASCADE;
  DROP TABLE "posts_rels" CASCADE;
  DROP TABLE "_posts_v" CASCADE;
  DROP TABLE "_posts_v_locales" CASCADE;
  DROP TABLE "_posts_v_rels" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "media_locales" CASCADE;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "tags" CASCADE;
  DROP TABLE "tags_locales" CASCADE;
  DROP TABLE "authors" CASCADE;
  DROP TABLE "authors_locales" CASCADE;
  DROP TABLE "micro_posts" CASCADE;
  DROP TABLE "micro_posts_locales" CASCADE;
  DROP TABLE "micro_posts_rels" CASCADE;
  DROP TABLE "_micro_posts_v" CASCADE;
  DROP TABLE "_micro_posts_v_locales" CASCADE;
  DROP TABLE "_micro_posts_v_rels" CASCADE;
  DROP TABLE "micro_post_internal_links" CASCADE;
  DROP TABLE "micro_post_internal_links_locales" CASCADE;
  DROP TABLE "micro_post_external_links" CASCADE;
  DROP TABLE "micro_post_external_links_locales" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TYPE "public"."_locales";
  DROP TYPE "public"."enum_posts_status";
  DROP TYPE "public"."enum__posts_v_version_status";
  DROP TYPE "public"."enum__posts_v_published_locale";
  DROP TYPE "public"."enum_micro_posts_status";
  DROP TYPE "public"."enum__micro_posts_v_version_status";
  DROP TYPE "public"."enum__micro_posts_v_published_locale";`)
}
