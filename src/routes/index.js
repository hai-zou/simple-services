import express from "express";
import { datapager, ResponseResult } from "../utils/index.js";
import { DataList } from "../../database/mock.js";
import isLogin from "../middlewares/is-login.js";
import StatusCode from "../constants/status-code.js";

const route = express.Router();

route.get("/getDataList", isLogin, (req, res) => {
    const { page, size } = req.query;
    res.json(new ResponseResult(
        StatusCode.SUCCESS,
        "",
        {
            list: datapager(page, size, DataList),
            total: DataList.length
        }
    ));
});

export default route;