import { type MigrateDownArgs, type MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
	await db.execute(sql`
   CREATE TABLE "ai_call_logs" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar NOT NULL,
  	"input" varchar NOT NULL,
  	"output" varchar NOT NULL,
  	"execution_time" numeric NOT NULL,
  	"user_id" uuid NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "ai_call_logs_id" uuid;
  ALTER TABLE "ai_call_logs" ADD CONSTRAINT "ai_call_logs_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "ai_call_logs_user_idx" ON "ai_call_logs" USING btree ("user_id");
  CREATE INDEX "ai_call_logs_updated_at_idx" ON "ai_call_logs" USING btree ("updated_at");
  CREATE INDEX "ai_call_logs_created_at_idx" ON "ai_call_logs" USING btree ("created_at");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_ai_call_logs_fk" FOREIGN KEY ("ai_call_logs_id") REFERENCES "public"."ai_call_logs"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_ai_call_logs_id_idx" ON "payload_locked_documents_rels" USING btree ("ai_call_logs_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
	await db.execute(sql`
   ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_ai_call_logs_fk";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_ai_call_logs_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "ai_call_logs_id";
  ALTER TABLE IF EXISTS "ai_call_logs" DISABLE ROW LEVEL SECURITY;
  DROP TABLE IF EXISTS "ai_call_logs" CASCADE;`)
}
