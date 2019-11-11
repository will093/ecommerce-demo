# Specify a base image
FROM node:alpine

WORKDIR "/app"
COPY ./package.json ./
COPY ./package-lock.json ./
# Install some dependencies
RUN npm install
COPY ./ ./

# Default command
CMD ["npm", "run", "dev"]