/**
 * 分页函数
 * @param {*} page 页码
 * @param {*} size 条数
 * @param {*} list 列表数据
 */
export function datapager(page = 1, size = 10, list = []) {
    const pageNum = Number(page);
    const pageSize = Number(size);
    const startIndex = (pageNum - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return list.slice(startIndex, endIndex);
};