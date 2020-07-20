# Egg + React + SSR 应用骨架

详细用法实现请查看[官方文档](http://ykfe.surge.sh)


### 部署

1. Build 一个 Docker Base 提交到自己的 Docker 镜像服务器上，路径`/ssrbase/Dockerfile`
2. 更改 `/Dockerfile` 中的 base 镜像，打包
3. 运行，设置域名的环境变量 `SITE_BASE`

``` bash
docker run -d --name wangcai -p 7001:7001 -e SITE_BASE=https://xxx.xxx.com registry.cn-hangzhou.aliyuncs.com/jackleeinst/wangcai
```
