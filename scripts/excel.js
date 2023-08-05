import fs from "fs";
import xlsx from "node-xlsx";

export default class ExcelGenerator {
    constructor(data) {
        this.data = data || [];
    }

    // 生成Excel文件
    generate(filename) {
        if (this.data.length === 0) {
            throw new Error("No data to generate Excel.");
        }

        // 获取表格标题行
        const header = Object.keys(this.data[0]);

        // 将数据对象数组转换为二维数组
        const tableData = this.data.map(item => header.map(key => item[key]));

        // 生成Excel文件
        const buffer = xlsx.build([{ name: "Sheet1", data: [header, ...tableData] }]);
        fs.writeFileSync(filename, buffer);
    }
}

