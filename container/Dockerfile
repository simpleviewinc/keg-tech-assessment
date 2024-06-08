FROM node:22-alpine3.19

WORKDIR /

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]