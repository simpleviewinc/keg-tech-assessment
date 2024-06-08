FROM node:22-alpine3.19

WORKDIR /Users/armando.jimenez/Documents/gitRel4/keg-tech-assessment

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]