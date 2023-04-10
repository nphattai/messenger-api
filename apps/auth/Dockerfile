FROM node:18-alpine

WORKDIR /usr/src/app

COPY yarn.lock  package*.json ./

RUN yarn install

COPY . .