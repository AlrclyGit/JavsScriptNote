// 基本知识
/*
 * 用于存储任何类型的唯一值，无论是基本类型还是对象引用。
 * 只能保存值没有键名
 * 严格类型检测如字符串数字不等于数值型数字
 * 值是唯一的
 * 遍历顺序是添加的顺序，方便保存回调函数
 * Set 理解一下就是集合
 */
let mySetA = new set('123456789') // 使用字符串做初始数据，会打散
let mySetB = new Set(['后盾人', 'hdcms']); // 使用数组做初始数据
mySetB.add('houdunren'); // 使用 add() 添加元素，重复添加的值会被覆盖
mySetB.size; // 使用 .size 获取元素个数
mySetB.has('hdcms') // 使用 has() 检测元素是否存在
mySetB.delete("hdcms") // 使用 delete() 删除元素，返回布尔
mySetB.clear(); // 使用 clear() 删除所有元素

// 数组转换
// 可以使用点语法 ... 或 Array.form 静态方法将 Set 类型转为数组，这样就可以使用数组处理函数了
const mySetC = new Set(["hdcms", "houdunren"]);
[...mySetC]; // set 转 数组
Array.from(mySetC); // set 转 数组
hd = new Set([...new Set("123456789")].filter(item => item < 5)); // set 转 数组，然后调用数组的方法，最后数组 转 set
dd = [...new Set("houdunren")].join(""); //  set 转 数组，然后调用数组的方法，最后数组 转 字符串

// 迭代器
// 使用 keys()/values()/entries() 都可以返回迭代对象，因为 set 类型只有值所以 keys 与 values 方法结果一致。
const mySetD = new Set(["hdcms", "houdunren"]);
mySetD.values(); //SetIterator {"hdcms", "houdunren"}
mySetD.keys(); //SetIterator {"hdcms", "houdunren"}
mySetD.entries(); //SetIterator {"hdcms" => "hdcms", "houdunren" => "houdunren"}

// 实现集合
let mySetE = new Set(['hdcms', 'houdunren']);
let mySetF = new Set(['后盾人', 'hdcms']);
// 交集
let mySetG = new Set(
    [...mySetE].filter(item => mySetF.has(item))
);
// 差集
let mySetH = new Set(
    [...mySetE].filter(item => !mySetF.has(item))
);
// 并集
let mySetJ = [...mySetE, ...mySetF];

// 基础知识
/*
 * WeakSet 结构同样不会存储重复的值，它的成员必须只能是对象类型的值。
 * 垃圾回收不考虑 WeakSet，即被 WeakSet 引用时引用计数器不加一，所以对象不被引用时不管 WeakSet 是否在使用都将删除
 * 因为 WeakSet 是弱引用，由于其他地方操作成员可能会不存在，所以不可以进行 forEach() 遍历等操作
 * 也是因为弱引用，WeakSet 结构没有 keys()，values()，entries() 等方法和 size 属性
 * 因为是弱引用所以当外部引用删除时，希望自动删除数据时使用 WeakMap
 */
const hd = new WeakSet();
const arr = ["hdcms"];
hd.add(arr);// 添加操作
hd.has(arr)// 检查是否存在;
hd.delete(arr);// 删除操作





