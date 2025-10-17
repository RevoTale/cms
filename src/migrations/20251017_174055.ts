import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "micro_posts_rels" ADD COLUMN "micro_posts_id" uuid;
  ALTER TABLE "_micro_posts_v_rels" ADD COLUMN "micro_posts_id" uuid;
  ALTER TABLE "micro_posts_rels" ADD CONSTRAINT "micro_posts_rels_micro_posts_fk" FOREIGN KEY ("micro_posts_id") REFERENCES "public"."micro_posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_micro_posts_v_rels" ADD CONSTRAINT "_micro_posts_v_rels_micro_posts_fk" FOREIGN KEY ("micro_posts_id") REFERENCES "public"."micro_posts"("id") ON DELETE cascade ON UPDATE no action;
  CREATE UNIQUE INDEX "micro_posts_rels_micro_posts_id_idx" ON "micro_posts_rels" USING btree ("micro_posts_id","path");
  CREATE INDEX "_micro_posts_v_rels_micro_posts_id_idx" ON "_micro_posts_v_rels" USING btree ("micro_posts_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "micro_posts_rels" DROP CONSTRAINT "micro_posts_rels_micro_posts_fk";
  
  ALTER TABLE "_micro_posts_v_rels" DROP CONSTRAINT "_micro_posts_v_rels_micro_posts_fk";
  
  DROP INDEX "micro_posts_rels_micro_posts_id_idx";
  DROP INDEX "_micro_posts_v_rels_micro_posts_id_idx";
  ALTER TABLE "micro_posts_rels" DROP COLUMN "micro_posts_id";
  ALTER TABLE "_micro_posts_v_rels" DROP COLUMN "micro_posts_id";`)
}
