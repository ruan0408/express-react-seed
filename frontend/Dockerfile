FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --silent

ENTRYPOINT ["npm", "start"]