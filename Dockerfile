# syntax=docker.io/docker/dockerfile:1

FROM oven/bun:1-alpine AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app

# 1. Install dependencies only for the builder
FROM base AS deps

COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile --linker=isolated

# 2. Build compile-mode standalone output
FROM base AS builder

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ARG NEXT_BUILD_MODE=compile

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN if [ "$NEXT_BUILD_MODE" = "default" ]; then \
		bun --bun --disable-transpile next build; \
	else \
		bun --bun --disable-transpile next build --experimental-build-mode="$NEXT_BUILD_MODE"; \
	fi

# 3. Lightweight production image with standalone output only
FROM base AS runner

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
