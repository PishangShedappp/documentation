# Stage 1: Build the static files
FROM node:25.7.0-alpine3.23 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the Docusaurus site
RUN npm run build

# Stage 2: Serve the static files using Nginx
FROM nginx:alpine

# Copy the built static files from the builder stage to Nginx's default public directory
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
