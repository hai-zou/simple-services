import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import path  from "path";
import MockRoute from "./routes/index.js";
import UploadRoute from "./routes/upload.js";
import LoginRoute from "./routes/login.js";

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
app.use(MockRoute, UploadRoute, LoginRoute);

//开放静态资源
app.use("/uploads", express.static(__dirname + "/uploads"));

// 监听端口
const port = 3000;
app.listen(port, () => {
    const header = "Server is now running at:";
    const local = `- Local: http://localhost:${port}`;
    console.log([header, local].join("\n"));
});

export default app;