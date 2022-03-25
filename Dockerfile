FROM node
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i -y
COPY . .
EXPOSE 3000
CMD ["npm","run","dev"]