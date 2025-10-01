import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   DROP INDEX "payload_locked_documents_rels_micro_post_internal_links_id_idx";
  DROP INDEX "payload_locked_documents_rels_micro_post_external_links_id_idx";
  CREATE INDEX "payload_locked_documents_rels_micro_post_internal_links__idx" ON "payload_locked_documents_rels" USING btree ("micro_post_internal_links_id");
  CREATE INDEX "payload_locked_documents_rels_micro_post_external_links__idx" ON "payload_locked_documents_rels" USING btree ("micro_post_external_links_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP INDEX "payload_locked_documents_rels_micro_post_internal_links__idx";
  DROP INDEX "payload_locked_documents_rels_micro_post_external_links__idx";
  CREATE INDEX "payload_locked_documents_rels_micro_post_internal_links_id_idx" ON "payload_locked_documents_rels" USING btree ("micro_post_internal_links_id");
  CREATE INDEX "payload_locked_documents_rels_micro_post_external_links_id_idx" ON "payload_locked_documents_rels" USING btree ("micro_post_external_links_id");`)
}
