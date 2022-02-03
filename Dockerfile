FROM node:12-alpine

WORKDIR /usr/app/
COPY . .
RUN npm install
CMD ["node","app.js"]
