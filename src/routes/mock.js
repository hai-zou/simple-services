import express from 'express';
import Mock from "mockjs";

const route = express.Router();

route.get('/getBookList', (req, res) => {
    res.json({
        code: 200,
        data: Mock.mock({
            'list|10-60': [
                {
                    id: '@increment(1)',
                    author: "@cname",
                    title: '@ctitle',
                    content: '@cparagraph',
                    url: "@url",
                    bookId: "@id",
                    create_time: '@date(yyyy-MM-dd hh:mm:ss)'
                }
            ],
            'total|60-120': 120
        }),
    })
});

export default route;