import { type MigrateUpArgs, type MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_micro_posts_cron_translation_locales_queued" AS ENUM('en-US', 'uk-UA', 'de-DE', 'hi-IN', 'ja-JP', 'ru-RU', 'fr-FR', 'es-ES');
  CREATE TYPE "public"."enum__micro_posts_v_version_cron_translation_locales_queued" AS ENUM('en-US', 'uk-UA', 'de-DE', 'hi-IN', 'ja-JP', 'ru-RU', 'fr-FR', 'es-ES');
  CREATE TABLE "micro_posts_cron_translation_locales_queued" (
  	"order" integer NOT NULL,
  	"parent_id" uuid NOT NULL,
  	"value" "enum_micro_posts_cron_translation_locales_queued",
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL
  );
  
  CREATE TABLE "_micro_posts_v_version_cron_translation_locales_queued" (
  	"order" integer NOT NULL,
  	"parent_id" uuid NOT NULL,
  	"value" "enum__micro_posts_v_version_cron_translation_locales_queued",
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL
  );
  
  ALTER TABLE "micro_posts_cron_translation_locales_queued" ADD CONSTRAINT "micro_posts_cron_translation_locales_queued_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."micro_posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_micro_posts_v_version_cron_translation_locales_queued" ADD CONSTRAINT "_micro_posts_v_version_cron_translation_locales_queued_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_micro_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "micro_posts_cron_translation_locales_queued_order_idx" ON "micro_posts_cron_translation_locales_queued" USING btree ("order");
  CREATE INDEX "micro_posts_cron_translation_locales_queued_parent_idx" ON "micro_posts_cron_translation_locales_queued" USING btree ("parent_id");
  CREATE INDEX "_micro_posts_v_version_cron_translation_locales_queued_order_idx" ON "_micro_posts_v_version_cron_translation_locales_queued" USING btree ("order");
  CREATE INDEX "_micro_posts_v_version_cron_translation_locales_queued_parent_idx" ON "_micro_posts_v_version_cron_translation_locales_queued" USING btree ("parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "micro_posts_cron_translation_locales_queued" CASCADE;
  DROP TABLE "_micro_posts_v_version_cron_translation_locales_queued" CASCADE;
  DROP TYPE "public"."enum_micro_posts_cron_translation_locales_queued";
  DROP TYPE "public"."enum__micro_posts_v_version_cron_translation_locales_queued";`)
}
