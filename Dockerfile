# Node runtime as parent image
FROM node:18
# working directory in container
WORKDIR /app
# copy package.json and package-lock.json
COPY package*.json ./
# install dependencies
RUN npm install
# copy  the rest of the apllication code
COPY . .
# Expose the running port
EXPOSE 3000
# Command to run the application
CMD ["node", "index.js"]


