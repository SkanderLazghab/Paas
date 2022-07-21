# stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
# stage 2
FROM nginx:alpine
RUN ng build
COPY --from=node /app/dist/BookStore /usr/share/nginx/html