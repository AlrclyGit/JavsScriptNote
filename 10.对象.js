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

