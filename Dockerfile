FROM node:20-alpine AS builder

# কাজের ডিরেক্টরি তৈরি

WORKDIR /app

# শুধু package ফাইলগুলো কপি করে dependency install
COPY package*.json ./

RUN npm i --force

# এখন পুরো প্রজেক্ট কপি
COPY . .

# Next.js build
RUN npm run build


# Stage 2: Production stage
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Production dependencies ইনস্টল করার জন্য package ফাইল কপি
COPY package*.json ./
RUN npm ci --omit=dev

# Build output এবং public assets কপি
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/package.json ./

# Next.js ডিফল্ট পোর্ট
EXPOSE 8113

# Container start হলে এই কমান্ড চলবে
CMD ["npm", "start"]
