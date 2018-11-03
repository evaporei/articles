FROM node:alpine

COPY package.json package.json

COPY server.js server.js

RUN npm install

EXPOSE 8000

CMD ["node", "server.js"]
