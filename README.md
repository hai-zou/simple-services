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
npm run start 或 yarn start
```

## 项目架构
```bash
├── .husky                  # "git hooks"工具
├── __tests__               # 单元测试
├── database                # 数据存放
├── src                     # 项目工程入口
    ├── constants               # 常量
    ├── middlewares             # 中间件
    ├── routes                  # 接口
    ├── utils                   # 工具库
    └── main.js                 # 入口文件
├── .commitlintrc.cjs       # git日志提交规范
├── .editorconfig           # 编辑器配置
├── .eslintignore           # eslint忽略文件
├── .eslintrc.json          # eslint配置
├── .gitignore              # git忽略文件
├── jest.config.mjs         # 单元测试配置文件
├── nodemon.json            # 热更新配置
├── package.json            # npm 包
```


## 接口文档
| 接口名称       | 接口描述  | 接口功能                                                     |
| :------------- | :------- | :----------------------------------------------------------- |
| `/login`       | 登录     | 登录成功后会根据用户名和密码生成一个`token`保存在cookie中    |
| `/getDataList` | 获取数据 | 通过`mockjs`模拟出任意格式的数据并返回                       |
| `/uploadFile`  | 上传文件 | 上传成功后保存在`database/uploads/`，可通过`域名+路径+文件名`访问 |
