FROM node:20.17-alpine as base

FROM base as builder
WORKDIR /home/node/app
COPY package*.json ./
COPY . .
RUN yarn install && yarn build

FROM base as runtime
ENV NODE_ENV=production
ENV PAYLOAD_SECRET ''
ENV DATABASE_URI ''
ENV PAYLOAD_PUBLIC_SERVER_URL ''
ENV NEXT_PUBLIC_SERVER_URL=$PAYLOAD_PUBLIC_SERVER_URL
ENV NEXT_PUBLIC_IS_LIVE ''
ENV PAYLOAD_PUBLIC_DRAFT_SECRET ''
ENV NEXT_PRIVATE_DRAFT_SECRET ''
ENV REVALIDATION_KEY ''
ENV NEXT_PRIVATE_REVALIDATION_KEY ''

WORKDIR /home/node/app
COPY package*.json  ./
RUN yarn install --production

EXPOSE 3000

CMD ["node", "dist/server.js"]
