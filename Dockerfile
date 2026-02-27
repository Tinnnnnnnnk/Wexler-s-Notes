FROM node:18-alpine AS builder
WORKDIR /app

# 1. 🌟 关键的一步：在 alpine 系统里安装 git，否则 VitePress 打包会报错
RUN apk add --no-cache git

COPY package.json package-lock.json ./
RUN npm install
COPY . .

# 2. 🌟 路径对准：执行打包
RUN npx vitepress build my-knowledge-base/docs

FROM nginx:alpine
# 3. 🌟 路径再次对准：把生成的 dist 搬到 Nginx 目录下
COPY --from=builder /app/my-knowledge-base/docs/.vitepress/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]