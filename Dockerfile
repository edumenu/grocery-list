# Setting the base image for our container
FROM node:10-alpine

# Setting the working directory
WORKDIR '/app'

# Installing react app dependencies
COPY ./package*.json ./
COPY ./yarn.lock ./

# Install npm into the container
RUN yarn install --silent
RUN yarn add cors --silent

# Add a copy to the root of the app
COPY . . 

# Start the app
EXPOSE 5000
CMD ["yarn", "run", "dev"]