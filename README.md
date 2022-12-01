# simple-services

## 项目介绍
该项目是基于Node.js + Express开发的服务端API接口项目。在日常项目开发中，当后端接口还没写好的时候，我们可以自己在本地起一个服务，模拟一些数据进行调试。等后端接口开发完之后，直接替换域名即可。

## 项目启动
```
# 进入项目根目录
cd simple-services

# 安装依赖包
npm install 或 yarn install

# 启动项目
npm run dev 或 yarn dev
```

## 项目架构
```
├── src *重点, 项目工程入口
    ├── constants 常量
    ├── database 数据存放
    ├── middlewares 中间件
    ├── routes 接口
    ├── utils 工具库
    └── main.js 入口文件
├── .editorconfig 编辑器配置
├── .eslintrc.json eslint配置
├── nodemon.json 热更新配置
├── package.json
```


## 接口文档
| 接口名称       | 接口描述 |
| :------------- | :------- |
| `/login`       | 登录     |
| `/getDataList` | 获取数据 |
| `/uploadFile`  | 上传文件 |