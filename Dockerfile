ARG NODE_VERSION=22.20.0

FROM node:${NODE_VERSION}-alpine

WORKDIR /src

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]