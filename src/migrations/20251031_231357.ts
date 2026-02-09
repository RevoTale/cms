import { type MigrateDownArgs, type MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
	await db.execute(sql`
   ALTER TABLE "payload_jobs_stats" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "payload_jobs_stats" CASCADE;
  DROP INDEX "payload_jobs_workflow_slug_idx";
  ALTER TABLE "payload_jobs" DROP COLUMN "workflow_slug";
  ALTER TABLE "payload_jobs" DROP COLUMN "meta";
  DROP TYPE "public"."enum_payload_jobs_workflow_slug";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
	await db.execute(sql`
   CREATE TYPE "public"."enum_payload_jobs_workflow_slug" AS ENUM('localizeRemainedDocuments');
  CREATE TABLE "payload_jobs_stats" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"stats" jsonb,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "payload_jobs" ADD COLUMN "workflow_slug" "enum_payload_jobs_workflow_slug";
  ALTER TABLE "payload_jobs" ADD COLUMN "meta" jsonb;
  CREATE INDEX "payload_jobs_workflow_slug_idx" ON "payload_jobs" USING btree ("workflow_slug");`)
}
