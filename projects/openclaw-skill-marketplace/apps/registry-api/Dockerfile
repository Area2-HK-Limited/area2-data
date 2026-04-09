FROM node:22-alpine AS builder

WORKDIR /app

# Copy monorepo root
COPY package.json ./
COPY tsconfig.base.json ./

# Copy workspace manifests
COPY packages/shared/package.json ./packages/shared/
COPY apps/registry-api/package.json ./apps/registry-api/

# Install all deps
RUN npm install --workspaces

# Copy source
COPY packages/shared/ ./packages/shared/
COPY apps/registry-api/ ./apps/registry-api/

# Build shared first, then API
RUN npm run build --workspace=packages/shared
RUN npm run build --workspace=apps/registry-api

# ── Production image ─────────────────────────────────────────
FROM node:22-alpine AS runner

WORKDIR /app

COPY --from=builder /app/package.json ./
COPY --from=builder /app/packages/shared/dist ./packages/shared/dist
COPY --from=builder /app/packages/shared/package.json ./packages/shared/package.json
COPY --from=builder /app/apps/registry-api/dist ./apps/registry-api/dist
COPY --from=builder /app/apps/registry-api/src/db/schema.sql ./apps/registry-api/dist/db/schema.sql
COPY --from=builder /app/apps/registry-api/package.json ./apps/registry-api/package.json

# Install production deps only
RUN npm install --workspaces --omit=dev

# Add wget for healthcheck
RUN apk add --no-cache wget

EXPOSE 3721

CMD ["node", "apps/registry-api/dist/index.js"]
