
# Stage 1: Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# sharp বা অন্য native dependencies এর জন্য
RUN apk add --no-cache libc6-compat

# Dependencies install
COPY package*.json ./
RUN npm i --force

# Source কপি
COPY . .

# Build
RUN npm run build


# Stage 2: Production stage
FROM node:20-alpine AS runner

WORKDIR /app

RUN apk add --no-cache libc6-compat

ENV NODE_ENV=production

COPY package*.json ./
RUN npm install --omit=dev

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/package.json ./

EXPOSE 8113

CMD ["npm", "start"]
