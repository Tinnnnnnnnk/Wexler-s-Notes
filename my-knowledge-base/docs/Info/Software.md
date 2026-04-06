## Elasticsearch
- 配置项
	用户名：elastic
	密码：Kasumi1234
- 怎么用
	进入链接 `https://localhost:9201` 即可使用

## Redis
- 配置项
	密码：toyamakasumi
	端口号：6379
- 怎么启动
	在 D:\develop\Redis-x64-3.2.100 中启动cmd
	输入redis-server.exe redis.windows.conf
## MySQL
- 配置项
	用户名：root
	密码：toyamakasumi
	端口号：3306
## GitCode
- 令牌
	名称：PaiSmart
	密码：ifaG-hGfHomvDgvm2H6PWb5K

## MinIO
- 怎么启动
	在其命令行界面会直接告诉启动的网址以及用户名密码

## 阿里云
- 相关配置
	密码：PrimeRadian@
- 相关指令
	打包数据：npm run docs:build
	上传数据：scp -r docs/.vitepress/dist/* root@8.135.49.76:/root/html
	本地测试：npm run docs:dev
	上传数据大清洗版：ssh root@8.135.49.76 "rm -rf /root/html/*" && scp -r docs/.vitepress/dist/* root@8.135.49.76:/root/html
- 更新流程
	- 修改目录，也就是config.mjs中的目录
	- 在vscode中全局搜索，将public/images/替换成 /images/（有图片的插入就这样换）
	- 打包数据：npm run docs:build
	- 上传数据：scp -r docs/.vitepress/dist/* root@8.135.49.76:/root/html
### WSL
- toyamakasumi
- 0714
