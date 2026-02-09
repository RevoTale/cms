import { type MigrateDownArgs, type MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
	await db.execute(sql`
   CREATE TYPE "public"."enum_micro_posts_post_type" AS ENUM('short', 'long');
  CREATE TYPE "public"."enum__micro_posts_v_version_post_type" AS ENUM('short', 'long');
  ALTER TABLE "micro_posts_locales" ADD COLUMN "post_type" "enum_micro_posts_post_type" DEFAULT 'long';
  ALTER TABLE "_micro_posts_v_locales" ADD COLUMN "version_post_type" "enum__micro_posts_v_version_post_type" DEFAULT 'long';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
	await db.execute(sql`
   ALTER TABLE "micro_posts_locales" DROP COLUMN "post_type";
  ALTER TABLE "_micro_posts_v_locales" DROP COLUMN "version_post_type";
  DROP TYPE "public"."enum_micro_posts_post_type";
  DROP TYPE "public"."enum__micro_posts_v_version_post_type";`)
}
