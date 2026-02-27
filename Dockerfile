FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
# 🌟 这里的路径要对准你实际的 docs 位置
RUN npx vitepress build my-knowledge-base/docs

FROM nginx:alpine
# 🌟 这里的 COPY 路径要和上面 build 产出的路径一致
COPY --from=builder /app/my-knowledge-base/docs/.vitepress/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]