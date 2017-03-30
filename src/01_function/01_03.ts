/**
 * Typescript的异步编程
 */


// 回调和高阶函数（接受函数为参数或返回另一个函数的函数）

var foo = function(){//回调
    console.log('foo');
}

function bar1(cb : () => void) : void{ //高阶函数
    console.log('bar1');
    cb();
}

bar1(foo); //输出顺序，bar1 boo;

// 箭头函数
// 在typescript中， 我们可以使用function表达式或箭头函数顶一个函数，箭头函数是function的缩写。

class Person {
    name : string;
    constructor(name : string){
        this.name = name;
    }
    greet(){
        alert(`刚输入的名字是：${this.name}`);
    }
    // 通过使用箭头函数，可以保证this操作符指向的是Person的实例，而不是setTimeout的回调函数。
    greetDelay(time : number) {
        setTimeout(() => {
            alert(`1\输入的信息是：${this.name}`)
        })
    }
    greetDelay1(time : number) {
        setTimeout(function(){
            alert(`2\输入的信息是：${this.name}`)
        })
    }
}
// 函数调用Person
var pel = new Person('测试');
pel.greet()
pel.greetDelay(2000);
pel.greetDelay1(3000);

// 回调地狱的代码，未完成
