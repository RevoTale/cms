import { type MigrateDownArgs, type MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
	await db.execute(sql`
   CREATE TYPE "public"."enum_payload_jobs_log_parent_task_slug" AS ENUM('inline', 'translatePost');
  ALTER TABLE "payload_jobs_log" ADD COLUMN "parent_task_slug" "enum_payload_jobs_log_parent_task_slug";
  ALTER TABLE "payload_jobs_log" ADD COLUMN "parent_task_i_d" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
	await db.execute(sql`
   ALTER TABLE "payload_jobs_log" DROP COLUMN "parent_task_slug";
  ALTER TABLE "payload_jobs_log" DROP COLUMN "parent_task_i_d";
  DROP TYPE "public"."enum_payload_jobs_log_parent_task_slug";`)
}
