FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

ENTRYPOINT npm run sequelize db:migrate && npm start