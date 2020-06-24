### STAGE 1: Build ###
FROM node:12-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx:1.17.8-alpine
# uses the configuration file 'nginx.conf' in this project
COPY nginx/default.conf /etc/nginx/nginx.conf.d
COPY --from=builder /app/dist/angular-wacodis-job-scheduler /usr/share/nginx/html
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
