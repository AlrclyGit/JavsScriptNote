// 基础知识
const meArray = [1, 2, 3, [4, 5, 6], 7]
const meArrayA = new Array(4) // 创建 4 个空元素的数组
let meArrayLength = meArray.length // 长度
Array.of(1, 3); // 创建 `[1,3]` 数组
Array.isArray(meArray) // 判断 meArray 是否为数组
Array.from('love', (item) => itme + 'good', this) //使用 Array.from 可将类数组转换为数组，类数组指包含 length 属性或可迭代的对象。
meArray.join("-"); // 用 - 连接数组转成数组，1-2-3-4,5,6-7
// 管理元素
meArray.push('向军大叔', 'houdunren') //压入元素，直接改变元数组，返回值为数组元素数量
meArray.pop() // 从末尾弹出元素，直接改变元数组，返回值为弹出的元素
meArray.shift() // 从数组前面取出一个元素，返回值为取出的元素
meArray.unshift() // 从数组前面添加元素
meArray.fill("后盾人", 1, 3) // 用于将一个固定值替换数组的元素
meArray.slice(1, 3) // 方法可从已有的数组中返回选定的元素
meArray.splice() // 添加或删除数组中的元素
// 合并拆分
meArray.join('StringA'); // 数组转字符串，用 StringA 拼接。
meString.split('StringA'); // 字符串转数组，用 StringA 拆分。
meArray.concat(ArrayA, ArrayB) // 将数组 ArrayA,ArrayB 追加到 meArray 的后面。
meArray.copyWithin(NumberA, NumberB, NumberC) // 从数组 NumberB 的位置取 NumberC 个元素，插入到 NumberA 的位置。
// 查找元素
meArray.indexOf(MixedA, numberB) // 查找 MixedA 出现的位置，从 numberB 开始查找。找不到返回 -1，严格类型约束 A === B。
meArray.lastIndexOf(MixedA, numberB) //  从后向前查找 MixedA 出现的位置，从 numberB 开始查找。找不到返回 -1，严格类型约束 A === B。
meArray.includes(StringA) // 判断字符串是否包含 StringA，返回布尔。
meArray.find(StringA)
meArray.find(function (currentValue, index, arr) { }, this) // 返回通过测试（函数内判断）的数组的第一个元素的值。找不到返回 undefined
meArray.findindex(function (currentValue, index, arr) { }, this) // 返回通过测试（函数内判断）的数组的第一个元素的索引值。找不到返回 -1
// 数组排序
meArray.reverse() // 反转数组顺序
meArray.sort((元素A, 元素B) => 元素A.Number - 元素B.Number) // 排序。元素 A - 元素 B，生序。
// 循环遍历
for (let i = 0; i < meArray.length; i++) { } // 原始的 for 循环
for (const key in meArray) { } // for/in
for (const value of meArray) { } // for/of
meArray.forEach((currentValue, index, arr) => { }, this); // forEach
// 迭代器
meArray.keys() // 用于从数组创建一个包含数组键的可迭代对象，done 迭代是否完成
meArray.values() // 用于从数组创建一个包含数组值的可迭代对象，done 迭代是否完成
meArray.entries() // 用于从数组创建一个包含数组值的可迭代对象，done 迭代是否完成
// 优雅的方法
meArray.every(function (currentValue, index, arr) { }, this) // 用于检测数组所有元素是否都符合指定条件（通过函数提供）。如果不满足，返回 false，剩余不会检测。满足条件，则返回 true。
meArray.some(function (currentValue, index, arr) { }, this)  // 用于检测数组是否有元素符合指定条件（通过函数提供）。如果一个满足，返回 true，剩余不会检测。满足条件，则返回 true。
meArray.filter(function (currentValue, index, arr) { }, this) // 创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
meArray.map((valeu, key, meArray) => { return value }, this) // 返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
meArray.reduce(function (total, currentValue, currentIndex, arr) { }, initialValue) // 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。initialValue，total 的初始值。
