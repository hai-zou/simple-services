import express from 'express';
import multer from "multer";
import path from "path";
import fs from "fs";

const route = express.Router();
const upload = multer({ dest: 'uploads/' });

/**
 * 单文件上传
 * upload.single('file') 函数中 `file` 为接收文件的参数名
 */
route.post('/uploadFile', upload.single('file'), (req, res) => {
    const file = req.file;
    // 文件后缀
    const ext = path.parse(file.originalname).ext;
    // 重写文件名称
    fs.renameSync(file.path, file.path + ext);
    res.json({
        code: 200,
        data: { file },
    })
});

export default route;