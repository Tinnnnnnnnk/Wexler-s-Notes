# 阶段一：构建阶段
FROM node:18-alpine AS builder
WORKDIR /app

# 加速源与安装 git
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories && \
    apk add --no-cache git

# 安装依赖
COPY package.json package-lock.json ./
RUN npm config set registry https://mirrors.cloud.tencent.com/npm/ && npm install

# 复制全部代码
COPY . .

# 🌟 核心黑魔法：打包前，自动把 images 文件夹复制到 docs/public 里！
# 这样 VitePress 就能认出 /images/xxx.png，而你本地完全不需要改路径！
RUN mkdir -p my-knowledge-base/docs/public && \
    cp -r my-knowledge-base/images my-knowledge-base/docs/public/

# 执行打包
RUN npx vitepress build my-knowledge-base/docs

# 阶段二：部署阶段
FROM nginx:alpine
COPY --from=builder /app/my-knowledge-base/docs/.vitepress/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]