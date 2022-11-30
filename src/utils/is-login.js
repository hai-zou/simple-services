/**
 * 判断用户是否登录的中间件
 */

import jwt from "jsonwebtoken";
import userList from '../database/users.js';

export default function isLogin(req, res, next) {
    const { token } = req.cookies;
    if (!token) {
        return res.json({ code: 3, msg: "用户未登录" });
    }
    jwt.verify(token, "Hizo", (err, decoded) => {
        if (err) {
            if (err.expiredAt) {
                res.clearCookie("token");
                res.json({ code: 3, msg: "token已过期" });
            } else {
                res.json({ code: 3, msg: "token错误" });
            }
        } else if (decoded) {
            const { email, password } = decoded;
            if (userList.find(item => item.email === email && item.password === password)) {
                next();
            } else {
                res.json({ code: 3, msg: "用户未登录" });
            }
        }
    });
};