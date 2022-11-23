/* 引入express框架 */
const express = require('express');
const app = express();

/* 引入cors */
const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

/* 监听端口 */
app.listen(3000, () => {
    console.log('——————————服务已启动——————————');
});