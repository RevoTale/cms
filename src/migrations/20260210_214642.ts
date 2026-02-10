import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "micro_posts_locales" ADD COLUMN "auto_translated" boolean DEFAULT false;
  ALTER TABLE "_micro_posts_v_locales" ADD COLUMN "version_auto_translated" boolean DEFAULT false;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "micro_posts_locales" DROP COLUMN "auto_translated";
  ALTER TABLE "_micro_posts_v_locales" DROP COLUMN "version_auto_translated";`)
}
