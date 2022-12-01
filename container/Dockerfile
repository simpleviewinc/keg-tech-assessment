FROM node:16
LABEL description="Keg Tech Assessment"
LABEL contact="jkennedy"
LABEL version="1.0"
WORKDIR /app
COPY . ./
RUN yarn install
CMD ["yarn", "start"]
EXPOSE 5005
EXPOSE 3000