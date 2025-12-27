FROM node:24.9.0-alpine as builder
WORKDIR /app

COPY package.json .
RUN npm install

COPY . .
RUN npm run build



FROM nginx

COPY --from=builder /app/build /usr/share/nginx/html