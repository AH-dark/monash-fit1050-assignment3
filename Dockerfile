# syntax=docker/dockerfile:1

FROM oven/bun:1-alpine AS builder

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build

FROM caddy:2-alpine

COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=builder /app/index.html /srv/index.html
COPY --from=builder /app/assets/css /srv/assets/css
COPY --from=builder /app/assets/images /srv/assets/images
COPY --from=builder /app/assets/js /srv/assets/js
COPY --from=builder /app/assets/webfonts /srv/assets/webfonts
