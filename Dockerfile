# 阶段一：构建阶段
FROM node:18-alpine AS builder
WORKDIR /app

# 🌟 核心加速 1：将 Alpine 源换成阿里云镜像源，解决 apk add 慢的问题
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories && \
    apk add --no-cache git

# 复制清单
COPY package.json package-lock.json ./

# 🌟 核心加速 2：使用腾讯云/淘宝 NPM 镜像，解决依赖安装慢的问题
RUN npm config set registry https://mirrors.cloud.tencent.com/npm/ && npm install

# 复制全部代码
COPY . .

# 执行打包（确保路径指向你的 docs）
RUN npx vitepress build my-knowledge-base/docs

# 阶段二：部署阶段
FROM nginx:alpine
# 确保 COPY 路径正确
COPY --from=builder /app/my-knowledge-base/docs/.vitepress/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]