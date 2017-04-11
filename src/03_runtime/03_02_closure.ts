/**
 * 闭包
 */
//Mozilla开发者文档的定义：闭包是指向独立变量的函数。即：在闭包中定义的函数会“记住”它创建时的环境。这里的【独立变量】可以理解为：在我们创建的字面作用域上持续存在的变量

function makeArmy(){
    var shootes = [];
    for(var i = 0; i < 10; i++){
        var shoote = function(){
            alert(i);
        }
        shootes.push(shoote);
    }
    return shootes;
}

var army = makeArmy();
console.log(army[0]());//10
console.log(army[5]());//10
/*
上述情况出现闭包错误：声明一个shoote函数时，创建了一个闭包，那么赋值给shoote的函数都是闭包。他们包含自身的函数定义并保存了makeArmy的作用域环境。
所以，一共创建了10个闭包，而且他们共享同一个环境。当shoote函被执行时，函数中的循环已经执行完毕。i的值也变为10.
*/

// 解决上述问题，可以使用更多的闭包,
// 使用自执行函数创建一个新的作用域环境，在其中，i指向的是对应的期望值。
function makeArmy1(){
    var shootes = [];
    for(var i = 0; i < 10; i++){
        (function(i){
            var shoote = function(){
                console.log(i)
            }
            shootes.push(shoote);
        })(i);
    }
    return shootes;
}

var army = makeArmy1();
console.log(army[0]());//0
console.log(army[5]());//5

// 闭包和静态变量，使用闭包可以实现单例模式的效果。
// 在typescript的类中设置静态变量
class Counter {
    private static _counter = 0;
    constructor(){}
    private _changeBy(val){
        Counter._counter += val;
    }
    public increment(){
        this._changeBy(1);
    }
    public decrement(){
        this._changeBy(-1);
    }
    public vlaue(){
        return Counter._counter;
    }
}

// 转换为javascript代码的效果是：
/*
var Counter = (function () {
    function Counter() {
    }
    Counter.prototype._changeBy = function (val) {
        Counter._counter += val;
    };
    Counter.prototype.increment = function () {
        this._changeBy(1);
    };
    Counter.prototype.decrement = function () {
        this._changeBy(-1);
    };
    Counter.prototype.vlaue = function () {
        return Counter._counter;
    };
    return Counter;
}());
Counter._counter = 0;
*/

// 使用闭包来模拟静态属性
var CounterClosure = (function () {
    var _counter = 0;

    function changeBy(val){
        _counter += val;
    }
    function CounterClosure() {}

    CounterClosure.prototype.increment = function () {
        changeBy(1);
    };
    CounterClosure.prototype.decrement = function () {
        changeBy(-1);
    };
    CounterClosure.prototype.value = function () {
        return _counter;
    };
    return CounterClosure;
}());

// 上述代码中，CounterClosure构造函数，本身就是闭包的一部分。所以，所有的CounterClosure类的实例都共享同一个闭包的上下文，这就意味着counter变量和changeBy函数将会表现得如单例一样。
// 比如：CounterClosure类实例对象counter_1和counter_2会共享同一个作用域下的变量和方法，这里指的是counter和changeBy。
var counter_1 = new CounterClosure();
var counter_2 = new CounterClosure();
console.log(counter_1.value())//0
console.log(counter_2.value())//0

counter_1.increment();
counter_1.increment();

console.log(counter_1.value())//2
console.log(counter_2.value())//2,期望值是：0

counter_2.decrement();

console.log(counter_1.value())//1
console.log(counter_2.value())//1,期望值是：-1

// 闭包模拟类的私有成员
//注意：这里makerCounter函数不是自执行函数，这样，每次调用函数都会创建一个新的maCounter的实例，每个实例都包含一个新的闭包。由于闭包上下文不能直接访问到，所以，可以说变量counter和changeBy为私有变量
var makerCounter = function () {
    var _counter = 0;

    function changeBy(val){
        _counter += val;
    }
    function maCounter() {}

    maCounter.prototype.increment = function () {
        changeBy(1);
    };
    maCounter.prototype.decrement = function () {
        changeBy(-1);
    };
    maCounter.prototype.value = function () {
        return _counter;
    };
    return new maCounter();
};

var counter_1 = makerCounter();
var counter_2 = makerCounter();
console.log(counter_1.value())//0
console.log(counter_2.value())//0

counter_1.increment();
counter_1.increment();

console.log(counter_1.value())//2
console.log(counter_2.value())//0