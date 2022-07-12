/* 基础知识
 * 标准语法是使用函数声明来定义函数
 * 标准声明的函数优先级更高，解析器会优先提取函数并放在代码树顶端，
 * 所以标准声明函数位置不限制，所以下面的代码可以正常执行。
 * 标准声明优先级高于赋值声明
 */
// 函数是一个对象，可以用 New 关键字实例化
new Function("title", "console.log(title)");
// 准语法是使用函数声明来定义函数，但类似 funA() 这样的全局函数会声明在 window 对象中
function funA() {
    return 'funA'
}
// 类似 funB() 这样使用 let/const 时就不会压入 window
const funB = function () {
    return 'funB'
}
// 对象字面量属性函数简写
let ObjA = {
    funC(value) {
        this.name = value;
    }
}

/* 私有作用域
 * 以前为了防止污染全局会使用私有作用域
 * 1. 在第三方包使用立即执行函数
 * 2. 使用 {} 和 let 构建
 */
/*
(function (window) {
    function funD() {
        return 'funD'
    }
    window.bao = { funD }
})(window);
*/
{
    const funE = function () {
        return 'funE'
    }
    window.bao = { funE }
}

/* arguments
 * arguments 接收函数所有传递过来的参数
 * arguments 是一个对象，可以直接循环操作，
 * 但是如果想调用数组的方法需要用 [...arguments] 转成数组 ,funF
 * 所以不如直接使用点语法接收变量，funG
 */
function funF() {
    return [...arguments].reduce((total, num) => {
        return (total += num);
    }, 0);
}
function funG(...args) {
    return args.reduce((a, b) => a + b);
}

/*
 * 箭头函数
 * 箭头函数是函数声明的简写形式，在使用递归调用、构造函数、事件处理器时不建议使用箭头函数。
 * 无参数时使用空扩号即可，函数体为单一表达式时不需要 return 返回处理，系统会自动返回表达式计算结果。
 * 多参数传递与普通声明函数一样使用逗号分隔，只有一个参数时可以省略括号
 * 箭头函数没有 this, 也可以理解为箭头函数中的 this 会继承定义函数时的上下文，可以理解为和外层函数指向同一个 this。
 * 如果想使用函数定义时的上下文中的 this，那就使用箭头函数
 */
const funH = () => { }

/* 递归调用
 * 递归指函数内部调用自身的方式。
 * 主要用于数量不确定的循环操作
 * 要有退出时机否则会陷入死循环
 */
function funI(num = 3) {
    return num == 1 ? num : num * funI(--num);
}
funI(5); //120

/* 回调函数
 * 在某个时刻被其他函数调用的函数称为回调函数，比如处理键盘、鼠标事件的函数。
 */
<button id='hd'>button</button>
document.getElementById('hd').addEventListener('click', () => alert('通过回调函数调用'));

/* 展开语法
 * 展示语法或称点语法体现的就是收/放特性，做为值时是放，做为接收变量时是收。
 * 使用展示语法可以替代 arguments 来接收任意数量的参数，funG
 * 也可以用于接收部分参数，多个参数时...参数必须放后面
 */
function funJ(site, ...args) {
    console.log(site, args);
}
funJ("后盾人", 1, 2, 3);


/* this
 * 调用函数时 this 会隐式传递给函数 指函数调用时的关联对象，也称之为函数的上下文。
 * 函数调用：全局环境下 this 就是 window 对象的引用，使用严格模式时在全局函数内 this 为 undefined
 * 方法调用：函数为对象的方法时 this 指向该对象，不属于对象方法所以指向 window
 */

/* apply/call/bind
 * 构造函数中的 this 默认是一个空对象，然后构造函数处理后把这个空对象变得有值。
 * 可以改变构造函数中的空对象，即让构造函数 this 指向到另一个对象。
 */
function show(title) {
    alert(`${title + this.name}`);
}
let lisi = {
    name: '李四'
};
show.call(lisi, 'call'); // 分别传参，立即执行
show.apply(lisi, ['apply']); // 数组传参，立即执行
let newFunc = show.bind(lisi, 'bind'); // 分别传参，返回新函数
newFunc()



