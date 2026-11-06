FROM node:26.12.1-trixie@sha256:97fa0f1b59035c6072721a88d55be1371c7cb1cc942b521e1cc5c72ec87655f4 AS base

RUN npm install -g pnpm@11.23.0

WORKDIR /app

FROM base AS dev
COPY . ./
COPY docker/docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh

ENV NEXT_PUBLIC_SERVER_URL=""
ENV NODE_ENV=development
ENV APP_URL=""
ENV ROOT_WEBSITE_URL="https://revotale.com"
ENV GRAPHQL_URL=""
ENV GRAPHQL_SERVER_URL=""
ENV LOVELY_EYE_SCRIPT_URL=""
ENV LOVELY_EYE_SITE_ID=""
ENV PAYLOAD_SECRET=''
ENV DATABASE_URI=''
ENV PAYLOAD_AUTH_COOKIE_DOMAIN=''
ENV NEXT_PUBLIC_IS_LIVE=1
ENV PAYLOAD_PUBLIC_DRAFT_SECRET='demo-draft-secret'
ENV NEXT_PRIVATE_DRAFT_SECRET='demo-draft-secret'
ENV REVALIDATION_KEY='demo-revalation-key'
ENV NEXT_PRIVATE_REVALIDATION_KEY='demo-revalation-key'
ENV S3_BUCKET=''
ENV S3_ENDPOINT=''

ENV S3_ACCESS_KEY_ID=''
ENV S3_SECRET_ACCESS_KEY=''
ENV S3_REGION=''
ENV ENABLE_CRON=0
ENV NODE_ENV=development

EXPOSE 3000

RUN chmod +x /usr/local/bin/docker-entrypoint.sh

ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
CMD ["pnpm", "dev"]
