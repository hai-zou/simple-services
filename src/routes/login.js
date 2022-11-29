import express from 'express';
import jwt from "jsonwebtoken";

const route = express.Router();
// 模拟一个用户数据
const simulateUser = {
    email: "xxx@qq.com",
    password: "123456",
};

route.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (!email) {
        res.json({ code: 1, msg: "邮箱不能为空" });
    } else if (!password) {
        res.json({ code: 1, msg: "密码不能为空" });
    } else if (email !== simulateUser.email) {
        res.json({ code: 1, msg: "邮箱错误" });
    } else if (password !== simulateUser.password) {
        res.json({ code: 1, msg: "密码错误" });
    } else {
        //生成一个token值
        const token = jwt.sign({ email, password }, "Hizo", {
            expiresIn: "24h"
        });
        res.json({
            code: 200,
            data: { token },
        });
    }
});

export default route;