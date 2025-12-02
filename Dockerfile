FROM node:20

WORKDIR /app
COPY package*.json ./

# Use official npm registry and install dependencies
RUN npm config set registry https://registry.npmjs.org/ \
	&& npm install

# Copy source
COPY . .

# Build the Nest application
RUN npm run build

EXPOSE 3000

# Run in production mode (change to start:dev for dev)
CMD ["npm", "run", "start:dev"]