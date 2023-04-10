FROM node

WORKDIR /usr/src/app

COPY yarn.lock package*.json ./

RUN yarn install

COPY . .