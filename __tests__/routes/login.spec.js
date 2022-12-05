import server from "../server.js";

test('测试登录接口', async () => {
    const res = await server.post('/login').send({
        email: "xiaomin@qq.com",
        password: "123456"
    });
    expect(res.body.code).toBe(0);
})