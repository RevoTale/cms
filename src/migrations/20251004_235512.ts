import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  //GPT 5 helped to fix this!
  await db.execute(sql`
   CREATE TYPE "public"."enum_payload_jobs_workflow_slug" AS ENUM('localizeRemainedDocuments');
  ALTER TABLE "payload_jobs_log" ALTER COLUMN "task_slug" SET DATA TYPE text;
  -- Remap legacy values to align with the new enum before casting
  UPDATE "payload_jobs_log" SET "task_slug" = 'translateDocument' WHERE "task_slug" = 'translatePost';
  DROP TYPE "public"."enum_payload_jobs_log_task_slug";
  CREATE TYPE "public"."enum_payload_jobs_log_task_slug" AS ENUM('inline', 'translateDocument');
  ALTER TABLE "payload_jobs_log" ALTER COLUMN "task_slug" SET DATA TYPE "public"."enum_payload_jobs_log_task_slug" USING "task_slug"::"public"."enum_payload_jobs_log_task_slug";
  ALTER TABLE "payload_jobs_log" ALTER COLUMN "parent_task_slug" SET DATA TYPE text;
  -- Remap legacy values to align with the new enum before casting
  UPDATE "payload_jobs_log" SET "parent_task_slug" = 'translateDocument' WHERE "parent_task_slug" = 'translatePost';
  DROP TYPE "public"."enum_payload_jobs_log_parent_task_slug";
  CREATE TYPE "public"."enum_payload_jobs_log_parent_task_slug" AS ENUM('inline', 'translateDocument');
  ALTER TABLE "payload_jobs_log" ALTER COLUMN "parent_task_slug" SET DATA TYPE "public"."enum_payload_jobs_log_parent_task_slug" USING "parent_task_slug"::"public"."enum_payload_jobs_log_parent_task_slug";
  ALTER TABLE "payload_jobs" ALTER COLUMN "task_slug" SET DATA TYPE text;
  -- Remap legacy values to align with the new enum before casting
  UPDATE "payload_jobs" SET "task_slug" = 'translateDocument' WHERE "task_slug" = 'translatePost';
  DROP TYPE "public"."enum_payload_jobs_task_slug";
  CREATE TYPE "public"."enum_payload_jobs_task_slug" AS ENUM('inline', 'translateDocument');
  ALTER TABLE "payload_jobs" ALTER COLUMN "task_slug" SET DATA TYPE "public"."enum_payload_jobs_task_slug" USING "task_slug"::"public"."enum_payload_jobs_task_slug";
  ALTER TABLE "ai_call_logs" ALTER COLUMN "user_id" DROP NOT NULL;
  ALTER TABLE "payload_jobs" ADD COLUMN "workflow_slug" "enum_payload_jobs_workflow_slug";
  CREATE INDEX "payload_jobs_workflow_slug_idx" ON "payload_jobs" USING btree ("workflow_slug");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "payload_jobs_log" ALTER COLUMN "task_slug" SET DATA TYPE text;
  -- Remap values to align with the older enum before casting
  UPDATE "payload_jobs_log" SET "task_slug" = 'translatePost' WHERE "task_slug" = 'translateDocument';
  DROP TYPE "public"."enum_payload_jobs_log_task_slug";
  CREATE TYPE "public"."enum_payload_jobs_log_task_slug" AS ENUM('inline', 'translatePost');
  ALTER TABLE "payload_jobs_log" ALTER COLUMN "task_slug" SET DATA TYPE "public"."enum_payload_jobs_log_task_slug" USING "task_slug"::"public"."enum_payload_jobs_log_task_slug";
  ALTER TABLE "payload_jobs_log" ALTER COLUMN "parent_task_slug" SET DATA TYPE text;
  -- Remap values to align with the older enum before casting
  UPDATE "payload_jobs_log" SET "parent_task_slug" = 'translatePost' WHERE "parent_task_slug" = 'translateDocument';
  DROP TYPE "public"."enum_payload_jobs_log_parent_task_slug";  
  CREATE TYPE "public"."enum_payload_jobs_log_parent_task_slug" AS ENUM('inline', 'translatePost');
  ALTER TABLE "payload_jobs_log" ALTER COLUMN "parent_task_slug" SET DATA TYPE "public"."enum_payload_jobs_log_parent_task_slug" USING "parent_task_slug"::"public"."enum_payload_jobs_log_parent_task_slug";
  ALTER TABLE "payload_jobs" ALTER COLUMN "task_slug" SET DATA TYPE text;
  -- Remap values to align with the older enum before casting
  UPDATE "payload_jobs" SET "task_slug" = 'translatePost' WHERE "task_slug" = 'translateDocument';
  DROP TYPE "public"."enum_payload_jobs_task_slug";
  CREATE TYPE "public"."enum_payload_jobs_task_slug" AS ENUM('inline', 'translatePost');
  ALTER TABLE "payload_jobs" ALTER COLUMN "task_slug" SET DATA TYPE "public"."enum_payload_jobs_task_slug" USING "task_slug"::"public"."enum_payload_jobs_task_slug";
  DROP INDEX "payload_jobs_workflow_slug_idx";
  ALTER TABLE "ai_call_logs" ALTER COLUMN "user_id" SET NOT NULL;
  ALTER TABLE "payload_jobs" DROP COLUMN "workflow_slug";
  DROP TYPE "public"."enum_payload_jobs_workflow_slug";`)
}
