FROM node:24-alpine AS base

RUN apk add --no-cache libc6-compat

ENV PNPM_HOME="/pnpm"
ENV PNPM_STORE_PATH="/pnpm/store"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable pnpm

WORKDIR /app

FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm fetch --frozen-lockfile

FROM base AS dev
COPY --from=deps /pnpm /pnpm
COPY . ./


ENV NEXT_PUBLIC_SERVER_URL=""
ENV NODE_ENV=development
ENV PAYLOAD_SECRET=''
ENV DATABASE_URI=''
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

CMD ["sh", "-c", "pnpm install --force && pnpm dev"]





