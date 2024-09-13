FROM node:20.17-alpine
RUN apk add --no-cache libc6-compat
WORKDIR /home/node/app
COPY . .
RUN corepack enable pnpm && pnpm i

ENV NODE_ENV=development
ENV PAYLOAD_SECRET=''
ENV DATABASE_URI=''
ENV PAYLOAD_PUBLIC_SERVER_URL="https://${PROJECT_DOMAIN}/cms"
ENV NEXT_PUBLIC_SERVER_URL=$PAYLOAD_PUBLIC_SERVER_URL
ENV NEXT_PUBLIC_IS_LIVE=1
ENV PAYLOAD_PUBLIC_DRAFT_SECRET='demo-draft-secret'
ENV NEXT_PRIVATE_DRAFT_SECRET='demo-draft-secret'
ENV REVALIDATION_KEY='demo-revalation-key'
ENV NEXT_PRIVATE_REVALIDATION_KEY='demo-revalation-key'

EXPOSE 3000
CMD ["pnpm", "dev"]
