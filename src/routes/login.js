import express from 'express';
import jwt from "jsonwebtoken";
import userList from '../database/users.js';

const route = express.Router();

route.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (!email) {
        return res.json({ code: 1, msg: "邮箱不能为空" });
    }
    if (!password) {
        return res.json({ code: 1, msg: "密码不能为空" });
    }
    const findUser = userList.find(item => item.email === email);
    if (!findUser) {
        res.json({ code: 1, msg: "邮箱错误" });
    } else if (findUser.password !== password) {
        res.json({ code: 1, msg: "密码错误" });
    } else {
        //生成一个token值
        const token = jwt.sign(
            { email, password },
            "Hizo",
            { expiresIn: "24h" }
        );
        res.cookie("token", token);
        res.json({ code: 200, msg: "登录成功" });
    }
});

export default route;