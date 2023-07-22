import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import path  from "path";
import MockRoute from "./src/routes/index.js";
// import UploadRoute from "./src/routes/upload.js";
import LoginRoute from "./src/routes/login.js";
import process from "node:process";

const app = express();
const __dirname = path.resolve();

/**
 * 启用所有cors请求
 * 详细配置参考：https://github.com/expressjs/cors
 */
app.use(cors({ "origin": true, "credentials": true }));

/**
 * 解析请求体
 * 详细配置参考：https://github.com/expressjs/body-parser
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * 解析Cookies
 * 详细配置参考：https://github.com/expressjs/cookie-parser
 */
app.use(cookieParser());

// 注册路由
app.use(MockRoute, LoginRoute);

//开放静态资源
app.use("/uploads", express.static(__dirname + "/database/uploads"));
app.use("/", express.static(__dirname + "/public"));

// 监听端口
const port = process.env.PORT || 4000;
app.listen(port, () => {
    const header = "Server is now running at:";
    const local = `- Local: http://localhost:${port}`;
    console.log([header, local].join("\n"));
});

export default app;