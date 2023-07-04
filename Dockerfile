# Stage 1: Build the React application
FROM node:14 as builder
WORKDIR /app
COPY package*.json /app/
RUN npm ci
COPY . /app
RUN npm run build

# Stage 2: Create a lightweight image to serve the built application
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
