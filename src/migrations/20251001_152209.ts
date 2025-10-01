import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   DROP INDEX "payload_locked_documents_rels_micro_post_internal_links__idx";
  DROP INDEX "payload_locked_documents_rels_micro_post_external_links__idx";
  ALTER TABLE "micro_posts" ADD COLUMN "slug" varchar;
  ALTER TABLE "_micro_posts_v" ADD COLUMN "version_slug" varchar;
  CREATE UNIQUE INDEX "micro_posts_slug_idx" ON "micro_posts" USING btree ("slug");
  CREATE INDEX "_micro_posts_v_version_version_slug_idx" ON "_micro_posts_v" USING btree ("version_slug");
  CREATE INDEX "payload_locked_documents_rels_micro_post_internal_links_id_idx" ON "payload_locked_documents_rels" USING btree ("micro_post_internal_links_id");
  CREATE INDEX "payload_locked_documents_rels_micro_post_external_links_id_idx" ON "payload_locked_documents_rels" USING btree ("micro_post_external_links_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP INDEX "micro_posts_slug_idx";
  DROP INDEX "_micro_posts_v_version_version_slug_idx";
  DROP INDEX "payload_locked_documents_rels_micro_post_internal_links_id_idx";
  DROP INDEX "payload_locked_documents_rels_micro_post_external_links_id_idx";
  CREATE INDEX "payload_locked_documents_rels_micro_post_internal_links__idx" ON "payload_locked_documents_rels" USING btree ("micro_post_internal_links_id");
  CREATE INDEX "payload_locked_documents_rels_micro_post_external_links__idx" ON "payload_locked_documents_rels" USING btree ("micro_post_external_links_id");
  ALTER TABLE "micro_posts" DROP COLUMN "slug";
  ALTER TABLE "_micro_posts_v" DROP COLUMN "version_slug";`)
}
