import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import isLogin from "../utils/is-login.js";
import StatusCode from "../constants/status-code.js";
import { ResponseResult } from "../utils/index.js";

const route = express.Router();
const upload = multer({ dest: "uploads/" });

/**
 * 单文件上传
 * upload.single('file') 函数中 `file` 为接收文件的参数名
 */
route.post("/uploadFile", [isLogin, upload.single("file")], (req, res) => {
    const file = req.file;
    if (file) {
        // 文件后缀
        const ext = path.parse(file.originalname).ext;
        // 重写文件名称
        fs.renameSync(file.path, file.path + ext);
        res.json(new ResponseResult(StatusCode.SUCCESS, "上传成功", { file }));
    } else {
        res.json(new ResponseResult(StatusCode.ERROR, "上传失败"));
    }
});

export default route;