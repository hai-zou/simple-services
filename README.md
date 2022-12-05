# simple-services

## 项目介绍
该项目是基于Node.js + Express开发的服务端API接口项目。

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
├── __tests__ 单元测试
├── database 数据存放
├── src *重点, 项目工程入口
    ├── constants 常量
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