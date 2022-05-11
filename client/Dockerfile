# Multi-Stage Docker build

# importing the base image: node-ubuntu
FROM node:14.17.3-buster as build

# working directory is /client
WORKDIR /client

# this copy is not "required" but it allows docker to know where 
# changes were made (package.json or directory) for optimization
COPY package.json package.json
COPY package-lock.json package-lock.json

# clean install of dependencies - https://docs.npmjs.com/cli/v6/commands/npm-ci
RUN npm ci --production

# copy all local directory files to the container
COPY . .

RUN npm run build

# NGINX Web Server - minify and compress files
FROM nginx:1.12-alpine as prod

# copy build and share onto nginx default location where it serves files
COPY --from=build /client/build /usr/share/nginx/html

EXPOSE 3000

# run the container (when image is started)
CMD ["nginx", "-g", "daemon off;"]