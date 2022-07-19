/*
 * 对象是属性和方法的集合即封装
 * 将复杂功能隐藏在内部，只开放给外部少量方法，更改对象内部的复杂逻辑不会对外部调用造成影响即抽象
 * 继承是通过代码复用减少冗余代码
 * 根据不同形态的对象产生不同结果即多态
 */
// 字面量形式声明
let objA = {
    name: '俊介',
    get: function () {
        return this.name;
    }
}
// 属性与方法简写
let nameB = "后盾人";
let objB = {
    nameB,
    get() {
        return this.name;
    }
};

/*
 * 操作属性
 * 可以使用点语法获取，也可以使用 [] 获取
 * 如果属性名不是合法变量名就必须使用扩号的形式了
 * 对象和方法的属性可以动态的添加或删除
 */
objB.nameB
objB["nameB"]
objB.show = function () {
    return `show`;
};
delete objB.show;
//  hasOwnProperty 检测对象自身是否包含指定的属性，不检测原型链上继承的属性
objB.hasOwnProperty('name')
// 使用 in 可以在原型对象上检测
"XXX" in objB
// 使用 Object.getOwnPropertyNames 可以获取对象的属性名集合
Object.getOwnPropertyNames(objB)
// 使用 Object.assign 静态方法从一个或多个对象复制属性，到第一个对象参数
Object.assign(objB, { f: 1 }, { m: 9 })
// 对象属性可以通过表达式计算定义，这在动态设置属性或执行属性方法时很好用。
let id = 0;
const user = {
    [`id-${id++}`]: id,
    [`id-${id++}`]: id,
    [`id-${id++}`]: id
};

/*
 * 对象方法
 * 定义在对象中的函数我们称为方法
 * 对象和函数、数组一样是引用类型，即复制只会复制引用地址。
 * 对象做为函数参数使用时也不会产生完全赋值，内外共用一个对象。
 * 对象的比较是对内存地址的比较所以使用 == 或 === 一样。
 * this 指当前对象的引用，始终建议在代码内部使用 this 而不要使用对象名，不同对象的 this 只指向当前对象。
 * 和函数一样可以使用 ... 语法
 */

/*
 * 对象转换
 * 对象直接参与计算时，系统会根据计算的场景在 string/number/default 间转换。
 * 如果声明需要字符串类型，调用顺序为 toString > valueOf
 * 如果场景需要数值类型，调用顺序为 valueOf > toString
 * 声明不确定时使用 default，大部分对象的 default 会当数值使用
 */
// Symbol.toPrimitive：内部自定义 Symbol.toPrimitive 方法用来处理所有的转换场景
let objC = {
    num: 1,
    [Symbol.toPrimitive]: function () {
        return this.num;
    }
};
console.log(objC + 3);
// valueOf/toString：可以自定义valueOf 与 toString 方法用来转换，转换并不限制返回类型。
let objD = {
    name: "俊介历险记",
    num: 1,
    valueOf: function () {
        console.log("valueOf");
        return this.num;
    },
    toString: function () {
        console.log("toString");
        return this.name;
    }
};
console.log(objD + 3);
console.log(`${objD}俊介`);

/*
 * 解构赋值
 * 解构是一种更简洁的赋值特性，可以理解为分解一个数据的结构，在数组章节已经介绍过。
 * 建设使用 var/let/const 声明
 * 函数在接收对象的时候也可以用解构赋值
 * 非严格模式可以不使用声明指令，严格模式下必须使用声明。所以建议使用 let 等声明。
 */
let { nameAA: n, urlAA: u } = { nameAA: '俊介 A', urlAA: 'www.alrcly.com' }
console.log(n)
let { nameBB, urlBB } = { nameBB: '俊介 B', urlBB: 'www.alrcly.com' };
console.log(myName)
const hd = {
    nameCC: '后盾人',
    lessons: {
        title: 'JS'
    }
}
const { nameCC, lessons: { title: titleA } } = hd;
console.log(nameA, titleA);
let { nameDD, urlDD, userDD = '向军大叔' } = { nameDD: '后盾人', urlDD: 'houdunren.com' };
console.log(nameDD, userDD);






class Star {
    // 构造函数
    constructor(uname) {
        this.uname = uname
    }
    // 方法
    sing() {
        console.log('唱歌')
    }
}

// 继承父类
class ManStar extends Star() {
    // 构造函数
    constructor(uname) {
        super(uname) // 调用父类的构造函数
    }
    sing() {
        super.sing() // 可以调用父类的方法
    }
}

