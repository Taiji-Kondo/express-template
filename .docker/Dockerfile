FROM node:14.17
ENV APP_ROOT /app/

WORKDIR $APP_ROOT

COPY package*.json $APP_ROOT
COPY yarn.lock $APP_ROOT
RUN yarn install

COPY .. $APP_ROOT
