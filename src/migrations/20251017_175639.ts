import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE IF EXISTS "micro_post_internal_links" DISABLE ROW LEVEL SECURITY;
    ALTER TABLE IF EXISTS "micro_post_internal_links_locales" DISABLE ROW LEVEL SECURITY;
    DROP TABLE IF EXISTS "micro_post_internal_links" CASCADE;
    DROP TABLE IF EXISTS "micro_post_internal_links_locales" CASCADE;
    ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_micro_post_internal_links_fk";
    DROP INDEX IF EXISTS "payload_locked_documents_rels_micro_post_internal_links__idx";
    ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "micro_post_internal_links_id";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
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
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "micro_post_internal_links_id" uuid;
  ALTER TABLE "micro_post_internal_links" ADD CONSTRAINT "micro_post_internal_links_source_note_id_micro_posts_id_fk" FOREIGN KEY ("source_note_id") REFERENCES "public"."micro_posts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "micro_post_internal_links" ADD CONSTRAINT "micro_post_internal_links_target_note_id_micro_posts_id_fk" FOREIGN KEY ("target_note_id") REFERENCES "public"."micro_posts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "micro_post_internal_links_locales" ADD CONSTRAINT "micro_post_internal_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."micro_post_internal_links"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "micro_post_internal_links_source_note_idx" ON "micro_post_internal_links" USING btree ("source_note_id");
  CREATE INDEX "micro_post_internal_links_target_note_idx" ON "micro_post_internal_links" USING btree ("target_note_id");
  CREATE INDEX "micro_post_internal_links_updated_at_idx" ON "micro_post_internal_links" USING btree ("updated_at");
  CREATE INDEX "micro_post_internal_links_created_at_idx" ON "micro_post_internal_links" USING btree ("created_at");
  CREATE UNIQUE INDEX "micro_post_internal_links_locales_locale_parent_id_unique" ON "micro_post_internal_links_locales" USING btree ("_locale","_parent_id");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_micro_post_internal_links_fk" FOREIGN KEY ("micro_post_internal_links_id") REFERENCES "public"."micro_post_internal_links"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_micro_post_internal_links__idx" ON "payload_locked_documents_rels" USING btree ("micro_post_internal_links_id");`)
}
