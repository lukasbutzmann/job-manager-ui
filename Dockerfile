FROM nginx:1.17.1-alpine
# uses the configuration file 'nginx.conf' in this project
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/angular-wacodis-job-scheduler /usr/share/nginx/html
