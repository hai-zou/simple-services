import axios from "axios";
import cheerio from "cheerio";
import ExcelGenerator from "./excel.js";

// 目标网页的URL，这里使用 下厨房 这个美食网站作为测试
const targetUrl = "https://www.xiachufang.com/category/40076/";

// 请求目标网页，获取HTML内容
const getHtml = async () => {
    const response = await axios.get(targetUrl);

    if (response.status !== 200) {
        throw new Error("请求失败");
    }

    return response.data;
};

// 解析HTML内容，获取菜品的标题和图片链接
const getData = async html => {
    const $ = cheerio.load(html);
    const list = [];
    $(".normal-recipe-list li").each((i, elem) => {
        const imgUrl = $(elem).find("img").attr("src");
        const title = $(elem).find("p.name a").text();
        list.push({
            title: title.replace(/[\n\s]+/g, ""),
            imgUrl
        });
    });
    return list;
};

const writeExcel = list => {
    const excel = new ExcelGenerator(list);
    excel.generate("./菜谱.xlsx");
};

(async () => {
    const html = await getHtml();
    const list = await getData(html);
    await writeExcel(list);
    console.log("执行完毕");
})();