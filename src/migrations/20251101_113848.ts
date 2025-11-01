import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   DROP INDEX "micro_posts_rels_tags_id_idx";
  DROP INDEX "micro_posts_rels_micro_posts_id_idx";
  DROP INDEX "micro_posts_rels_micro_post_external_links_id_idx";
  DROP INDEX "micro_posts_rels_authors_id_idx";
  DROP INDEX "_micro_posts_v_rels_tags_id_idx";
  DROP INDEX "_micro_posts_v_rels_micro_posts_id_idx";
  DROP INDEX "_micro_posts_v_rels_micro_post_external_links_id_idx";
  DROP INDEX "_micro_posts_v_rels_authors_id_idx";
  ALTER TABLE "micro_posts_rels" ADD COLUMN "locale" "_locales";
  ALTER TABLE "_micro_posts_v_rels" ADD COLUMN "locale" "_locales";`)

  await db.execute(sql`
   UPDATE "micro_posts_rels"
  SET "locale" = matches.locale,
      "path" = matches.path
  FROM (
    SELECT
      id,
      ((regexp_match("path", '[.](en-US|uk-UA|de-DE|hi-IN|ja-JP|ru-RU|fr-FR|es-ES)$'))[1])::"_locales" AS locale,
      regexp_replace("path", '[.](en-US|uk-UA|de-DE|hi-IN|ja-JP|ru-RU|fr-FR|es-ES)$', '') AS path
    FROM "micro_posts_rels"
  ) AS matches
  WHERE matches.locale IS NOT NULL
    AND matches.id = "micro_posts_rels"."id";
  
  UPDATE "_micro_posts_v_rels"
  SET "locale" = matches.locale,
      "path" = matches.path
  FROM (
    SELECT
      id,
      ((regexp_match("path", '[.](en-US|uk-UA|de-DE|hi-IN|ja-JP|ru-RU|fr-FR|es-ES)$'))[1])::"_locales" AS locale,
      regexp_replace("path", '[.](en-US|uk-UA|de-DE|hi-IN|ja-JP|ru-RU|fr-FR|es-ES)$', '') AS path
    FROM "_micro_posts_v_rels"
  ) AS matches
  WHERE matches.locale IS NOT NULL
    AND matches.id = "_micro_posts_v_rels"."id";`)

  await db.execute(sql`
   CREATE INDEX "micro_posts_rels_locale_idx" ON "micro_posts_rels" USING btree ("locale");
  CREATE INDEX "_micro_posts_v_rels_locale_idx" ON "_micro_posts_v_rels" USING btree ("locale");
  CREATE INDEX "micro_posts_rels_tags_id_idx" ON "micro_posts_rels" USING btree ("tags_id","locale");
  CREATE UNIQUE INDEX "micro_posts_rels_micro_posts_id_idx" ON "micro_posts_rels" USING btree ("micro_posts_id","path","locale");
  CREATE INDEX "micro_posts_rels_micro_post_external_links_id_idx" ON "micro_posts_rels" USING btree ("micro_post_external_links_id","locale");
  CREATE INDEX "micro_posts_rels_authors_id_idx" ON "micro_posts_rels" USING btree ("authors_id","locale");
  CREATE INDEX "_micro_posts_v_rels_tags_id_idx" ON "_micro_posts_v_rels" USING btree ("tags_id","locale");
  CREATE INDEX "_micro_posts_v_rels_micro_posts_id_idx" ON "_micro_posts_v_rels" USING btree ("micro_posts_id","locale");
  CREATE INDEX "_micro_posts_v_rels_micro_post_external_links_id_idx" ON "_micro_posts_v_rels" USING btree ("micro_post_external_links_id","locale");
  CREATE INDEX "_micro_posts_v_rels_authors_id_idx" ON "_micro_posts_v_rels" USING btree ("authors_id","locale");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP INDEX "micro_posts_rels_locale_idx";
  DROP INDEX "_micro_posts_v_rels_locale_idx";
  DROP INDEX "micro_posts_rels_tags_id_idx";
  DROP INDEX "micro_posts_rels_micro_posts_id_idx";
  DROP INDEX "micro_posts_rels_micro_post_external_links_id_idx";
  DROP INDEX "micro_posts_rels_authors_id_idx";
  DROP INDEX "_micro_posts_v_rels_tags_id_idx";
  DROP INDEX "_micro_posts_v_rels_micro_posts_id_idx";
  DROP INDEX "_micro_posts_v_rels_micro_post_external_links_id_idx";
  DROP INDEX "_micro_posts_v_rels_authors_id_idx";
  UPDATE "micro_posts_rels"
  SET "path" = CASE
    WHEN "locale" IS NOT NULL AND "path" NOT LIKE '%.' || "locale"::text THEN "path" || '.' || "locale"::text
    ELSE "path"
  END
  WHERE "locale" IS NOT NULL;
  UPDATE "_micro_posts_v_rels"
  SET "path" = CASE
    WHEN "locale" IS NOT NULL AND "path" NOT LIKE '%.' || "locale"::text THEN "path" || '.' || "locale"::text
    ELSE "path"
  END
  WHERE "locale" IS NOT NULL;
  CREATE INDEX "micro_posts_rels_tags_id_idx" ON "micro_posts_rels" USING btree ("tags_id");
  CREATE UNIQUE INDEX "micro_posts_rels_micro_posts_id_idx" ON "micro_posts_rels" USING btree ("micro_posts_id","path");
  CREATE INDEX "micro_posts_rels_micro_post_external_links_id_idx" ON "micro_posts_rels" USING btree ("micro_post_external_links_id");
  CREATE INDEX "micro_posts_rels_authors_id_idx" ON "micro_posts_rels" USING btree ("authors_id");
  CREATE INDEX "_micro_posts_v_rels_tags_id_idx" ON "_micro_posts_v_rels" USING btree ("tags_id");
  CREATE INDEX "_micro_posts_v_rels_micro_posts_id_idx" ON "_micro_posts_v_rels" USING btree ("micro_posts_id");
  CREATE INDEX "_micro_posts_v_rels_micro_post_external_links_id_idx" ON "_micro_posts_v_rels" USING btree ("micro_post_external_links_id");
  CREATE INDEX "_micro_posts_v_rels_authors_id_idx" ON "_micro_posts_v_rels" USING btree ("authors_id");
  ALTER TABLE "micro_posts_rels" DROP COLUMN "locale";
  ALTER TABLE "_micro_posts_v_rels" DROP COLUMN "locale";`)
}
