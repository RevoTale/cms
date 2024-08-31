FROM node:20.17-alpine as base

FROM base as builder

WORKDIR /home/node/app
COPY package*.json ./

COPY . .
RUN yarn install && yarn build

FROM base as runtime

ENV NODE_ENV=development

WORKDIR /home/node/app
COPY package*.json  ./
COPY yarn.lock ./

RUN yarn install

EXPOSE 3000
CMD ["yarn", "dev"]
