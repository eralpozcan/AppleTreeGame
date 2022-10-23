FROM nginx:1.22.1-alpine

WORKDIR /usr/share/nginx/html

COPY ./dist .

EXPOSE 80