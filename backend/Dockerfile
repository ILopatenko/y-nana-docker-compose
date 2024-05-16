FROM node:20-alpine
RUN mkdir -p /home/app
WORKDIR /home/app
COPY server.js .
COPY package.json .
COPY package-lock.json .
RUN npm install
CMD ["npm", "start"]
