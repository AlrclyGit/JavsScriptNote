// 基本知识
/*
 * Map 是一组键值对的结构，用于解决以往不能用对象做为键的问题
 * 具有极快的查找速度，函数、对象、基本类型都可以作为键或值
 * 我的理解是：键值对组成的 Set。
 */
let myMap = new Map([['houdunren', '后盾人'], ['hdcms', '开源系统']]); // 可以接受一个数组作为参数，该数组的成员是一个表示键值对的数组。
let obj = ['abcdefg']
myMap.set(obj, "houdunren.com").set("name", "hdcms"); // 使用 set 方法添加元素，支持链式操作
myMap.has(obj) // 检测元素是否存在
myMap.delete(obj); // 使用 delete() 方法删除单个元素
myMap.clear() // 使用 clear 方法清除 Map 所有元素
myMap.size // 获取数据数量

// 对于键是对象的 Map，键保存的是内存地址，值相同但内存地址不同的视为两个键。
let array = ["后盾人"];
const myMpaA = new Map();
myMpaA.set(array, "houdunren.com");
myMpaA.get(array); //houdunren.com
myMpaA.get(["后盾人"]); //undefined

// 迭代器
// 使用 keys()/values()/entries() 都可以返回可遍历的迭代对象。
let myMapB = new Map([["houdunren", "后盾人"], ["hdcms", "开源系统"]]);
myMapB.keys(); //MapIterator {"houdunren", "hdcms"}
myMapB.values(); //MapIterator {"后盾人", "开源系统"}
myMapB.entries(); //MapIterator {"houdunren" => "后盾人", "hdcms" => "开源系统"}

// 使用 forEach 遍历操作
// 使用 for/of 遍历操作，直播遍历 Map 等同于使用 entries() 函数
let myMapC = new Map([["houdunren", "后盾人"], ["hdcms", "开源系统"]]);
myMapC.forEach((value, key) => {
    console.log(`${key}=>${value}`);
});
for (const [key, value] of myMapC) {
    console.log(`${key}=>${value}`);
}

// 数组转换
// 可以使用点语法 ... 或 Array.form 静态方法将 Set 类型转为数组，这样就可以使用数组处理函数了
let mySetC = new Map([["houdunren", "后盾人"], ["hdcms", "开源系统"]]);
[...mySetC]; // set 转 数组
Array.from(mySetC); // set 转 数组
let AAA = new Map([...mySetC].filter(item => item[1].includes("后盾人"))); // 检索包含后盾人的值组成新 Map

