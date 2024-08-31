FROM node:20.17-alpine as base

FROM base as builder

WORKDIR /home/node/app
COPY package*.json ./

COPY . .
RUN yarn install && yarn build

FROM base as runtime
WORKDIR /home/node/app

ENV NODE_ENV=development
ENV PAYLOAD_SECRET ''
ENV DATABASE_URI ''
ENV PAYLOAD_PUBLIC_SERVER_URL ''
ENV NEXT_PUBLIC_SERVER_URL=$PAYLOAD_PUBLIC_SERVER_URL
ENV NEXT_PUBLIC_IS_LIVE ''
ENV PAYLOAD_PUBLIC_DRAFT_SECRET 'demo-draft-secret'
ENV NEXT_PRIVATE_DRAFT_SECRET 'demo-draft-secret'
ENV REVALIDATION_KEY 'demo-revalation-key'
ENV NEXT_PRIVATE_REVALIDATION_KEY 'demo-revalation-key'

COPY package*.json  ./

RUN yarn install

EXPOSE 3000
CMD ["yarn", "dev"]
