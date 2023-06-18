/*
 * @Description: 判断用户是否登录的中间件
 * @Author: Hizo
 * @Date: 2022-12-06 09:50:13
 * @LastEditors: Hizo
 * @LastEditTime: 2023-01-12 15:32:42
 */

import jwt from "jsonwebtoken";
import userList from "../../database/users.js";
import StatusCode from "../constants/status-code.js";
import { ResponseResult } from "../utils/index.js";

export default function isLogin(req, res, next) {
    const { token } = req.cookies;
    if (!token) {
        return res.json(new ResponseResult(StatusCode.NO_LOGIN, "用户未登录"));
    }
    jwt.verify(token, "Hizo", (err, decoded) => {
        if (err) {
            if (err.expiredAt) {
                res.clearCookie("token");
                res.json(new ResponseResult(StatusCode.ERROR, "token已过期"));
            } else {
                res.json(new ResponseResult(StatusCode.ERROR, "token错误"));
            }
        } else if (decoded) {
            const { email, password } = decoded;
            if (userList.find(item => item.email === email && item.password === password)) {
                next();
            } else {
                res.json(new ResponseResult(StatusCode.NO_LOGIN, "用户未登录"));
            }
        }
    });
}