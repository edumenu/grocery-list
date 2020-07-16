# Setting the base image for our container
FROM node:10

# Setting the working directory
WORKDIR '/app'

# Installing react app dependencies
COPY ./package*.json ./
COPY ./yarn.lock ./

RUN yarn install --silent
RUN yarn add react-scripts@3.4.1 --silent
RUN yarn add tailwindcss --silent

# Add a copy to the root of the app
COPY . . 

# Start the app
EXPOSE 3000
CMD ["yarn", "start"]