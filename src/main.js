import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";
import MockRoute from "./routes/mock.js";

const app = express();

/**
 * 启用所有cors请求
 * 详细配置参考：https://github.com/expressjs/cors
 */
app.use(cors());
/**
 * 解析请求体
 * 详细配置参考：https://github.com/expressjs/body-parser
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
// 注册路由
app.use(MockRoute);

/* 监听端口 */
app.listen(3000, () => {
    console.log('——————————服务已启动——————————');
});