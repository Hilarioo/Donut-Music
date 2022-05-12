# Multi-Stage Docker build

# importing the base image: node-ubuntu
FROM node:14.17.3-buster as build

# working directory is /server
WORKDIR /server

# copy the files to the container
COPY package.json package.json
COPY package-lock.json package-lock.json

# clean install of dependencies - https://docs.npmjs.com/cli/v6/commands/npm-ci
RUN npm ci --production

# copy all local directory files to the container
COPY . .

# port defined in Server.ts
EXPOSE 3001

# run the container (when image is started)
CMD ["nginx"]