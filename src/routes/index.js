import express from 'express';
import { datapager } from '../utils/index.js';
import { versionList } from "../database/mock.js";
import isLogin from '../utils/is-login.js';

const route = express.Router();

route.get('/getVersionList', isLogin, (req, res) => {
    const { page, size } = req.query;
    res.json({
        code: 200,
        data: {
            list: datapager(page, size, versionList),
            total: versionList.length
        },
    })
});

export default route;