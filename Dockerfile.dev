FROM node:20-alpine

WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose port
EXPOSE 5173

# Use a different approach to handle volume mounts
CMD ["sh", "-c", "npm run dev -- --host 0.0.0.0"]
