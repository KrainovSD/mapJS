# syntax = docker/dockerfile:1.2

FROM node:20.15.0-slim as build

WORKDIR /app

RUN npm i -g pnpm@9.4.0

ADD package.json pnpm-lock.yaml ./
RUN pnpm install --ignore-scripts

ADD vite.config.ts tsconfig.node.json tsconfig.json index.html ./
ADD ./src ./src
ADD ./public ./public
RUN pnpm build

FROM nginx:1.13-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /app