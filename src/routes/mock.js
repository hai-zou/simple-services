import express from 'express';
import Mock from "mockjs";
import { datapager } from '../utils/index.js';

const route = express.Router();

/**
 * mockjs模拟数据
 * 语法规则参考示例：http://mockjs.com/examples.html
 */
route.get('/getBookList', (req, res) => {
    const { page, size } = req.query;
    const { list } = Mock.mock({
        'list|60': [
            {
                id: '@increment(1)',
                "version|1.1": 1,
                hash: "@string('upper', 10)",
                "isNew|1": [ 1, 0 ],
                describe: "@paragraph(1, 3)",
                activityNum: "@integer(10, 100)",
                author: "@cname",
                title: '@ctitle',
                content: '@cparagraph',
                url: "@url",
                bookId: "@id",
                create_time: '@date(yyyy-MM-dd hh:mm:ss)'
            }
        ],
    });
    res.json({
        code: 200,
        data: {
            list: datapager(page, size, list),
            total: list.length
        },
    })
});

export default route;