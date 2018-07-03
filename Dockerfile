FROM node:8.11.3-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . /app
EXPOSE 8081
CMD ["npm", "start"]
