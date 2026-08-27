# syntax=docker.io/docker/dockerfile:1

FROM node:25.9.0-trixie AS base
RUN npm install -g pnpm@11.23.0
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

# 1. Install dependencies only for the builder
FROM base AS deps

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

# 2. Build compile-mode standalone output
FROM base AS builder

ENV NODE_ENV=production
ARG NEXT_BUILD_MODE=compile
ARG ROOT_WEBSITE_URL="https://revotale.com"
ENV ROOT_WEBSITE_URL=$ROOT_WEBSITE_URL

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm run "build:${NEXT_BUILD_MODE}"

# 3. Lightweight production image with standalone output only
FROM node:25.9.0-trixie AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
ARG ROOT_WEBSITE_URL="https://revotale.com"

ENV ROOT_WEBSITE_URL=$ROOT_WEBSITE_URL

ENV ENABLE_CRON=0

COPY --from=builder --chown=node:node /app/public ./public
COPY --from=builder --chown=node:node /app/.next/static ./.next/static
COPY --from=builder --chown=node:node /app/.next/standalone ./

USER node

EXPOSE 3000

CMD ["node", "server.js"]
