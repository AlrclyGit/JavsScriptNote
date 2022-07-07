//基础知识
/*
 * Symbol 用于防止属性名冲突而产生的，比如向第三方对象中添加属性时。
 * Symbol 对象不可以添加属性。
 */
let mySymbolA = Symbol();

// 描述参数
let mySymbolB = Symbol("这是一个测试"); // 创建一个 Symbol 并添加描述
mySymbolB.description // 获取 Symbol 的描述
/*
 * 和 Symbol() 不同的是，用 Symbol.for() 方法创建的的 symbol 会被放入一个全局 symbol 注册表中。
 * Symbol.for() 并不是每次都会创建一个新的 symbol，它会首先检查给定的 key 是否已经在注册表中了。
 * 假如是，则会直接返回上次存储的那个。否则，它会再新建一个。
 */
let mySymbolC = Symbol.for('这是 key');
Symbol.keyFor(mySymbolC) // 查询 Symbol.for 设置的 Symbol 变量的描述

// 对象属性
/*
 * 对象 的 key 默认当作字符串处理，[key] 会当作变量处理
 * ymbol 声明和访问使用 []（变量）形式操作
 * 也不能使用 . 语法因为 .语法是操作字符串属性的。
 */
let mySymbolD = Symbol();
let obj = {
    name: 'alrcly',
    [mySymbolD]: "www.alrcly.com"
};
console.log(obj[mySymbolD]);

// 遍历属性
// Symbol 不能使用 for/in、for/of 遍历操作
// 可以使用 Object.getOwnPropertySymbols 获取所有 Symbol 属性
for (const key of Object.getOwnPropertySymbols(obj)) {
    console.log(key);
}
// 也可以使用 Reflect.ownKeys(obj) 获取所有属性包括 Symbol
for (const key of Reflect.ownKeys(obj)) {
    console.log(key);
}
