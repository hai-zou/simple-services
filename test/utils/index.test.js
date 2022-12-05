import { datapager } from "../../src/utils/index.js";

test("测试分页函数", () => {
    const list = [1, 2, 3, 4, 5];
    expect(datapager(1, 5, list)[0]).toBe(1);
    expect(datapager(2, 5, list)[0]).toBe(undefined);
    expect(datapager(2, 2, list)[0]).toBe(3);
});