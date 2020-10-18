FROM node:alpine
WORKDIR /usr/src
COPY package*.json ./
RUN npm install
EXPOSE 3000
CMD [ "node", "./app/index.js" ]
