FROM oven/bun:1-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Install dependencies with Bun
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile --linker=isolated


# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production
RUN bun run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next media
RUN chown nextjs:nodejs .next media

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV NODE_ENV=production
ENV APP_URL=''
ENV GRAPHQL_URL=''
ENV GRAPHQL_SERVER_URL=''
ENV LOVELY_EYE_SCRIPT_URL=''
ENV LOVELY_EYE_SITE_ID=''
ENV PAYLOAD_SECRET=''
ENV DATABASE_URI=''
ENV PAYLOAD_PUBLIC_SERVER_URL=''
ENV PAYLOAD_AUTH_COOKIE_DOMAIN=''
ENV NEXT_PUBLIC_IS_LIVE=1
ENV PAYLOAD_PUBLIC_DRAFT_SECRET=''
ENV NEXT_PRIVATE_DRAFT_SECRET=''
ENV REVALIDATION_KEY=''
ENV S3_BUCKET=''
ENV S3_ENDPOINT=''
ENV ENABLE_CRON=0
ENV S3_ACCESS_KEY_ID=''
ENV S3_SECRET_ACCESS_KEY=''
ENV S3_REGION=''
ENV NEXT_PRIVATE_REVALIDATION_KEY=''
ENV GENERATE_IMAGE_INSTRUCTIONS='Generate a OpenGraph preview image based on the provided content.'
ENV NODE_ENV=production
# Uncomment the following line in case you want to disable telemetry during runtime.
ENV NEXT_TELEMETRY_DISABLED=1
# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
CMD HOSTNAME="0.0.0.0" bun run server.js
