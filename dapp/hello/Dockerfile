FROM node:12.20.1-alpine3.10

RUN mkdir -p /app/src
COPY ./ /app/src
WORKDIR /app/src

ENV HOST "0.0.0.0"
RUN echo "http://mirrors.aliyun.com/alpine/v3.9/main/" > /etc/apk/repositories
#RUN echo "http://dl-cdn.alpinelinux.org/alpine/v3.9/main/" > /etc/apk/repositories

RUN apk add --no-cache make gcc g++ python

RUN npm install
RUN npm run build:beta
RUN npm cache clean --force

RUN apk del make gcc g++ python

EXPOSE 3333
CMD ["npm", "start"]
