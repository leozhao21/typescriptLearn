// 函数声明和函数表达式

function funcName (param : string) : string {
  return 'result';
}

var funcName1 = function(param : string) : string{
  return "sres";
}


//函数类型 

// 显式声明
function funcName2 (param : string) : string {
  return 'result';
}


var greetUnnamed : (name : string) => string;

greetUnnamed = function(param : string) : string{
  return "sres";
}


var greetUnnamed1 : (name : string) => string = function(param : string) : string{
  return "sres";
}


// 可选参数
function add(foo : number, foo1 : number, foo2? : number){
  return foo + foo1 + foo2;
}

console.log(add(2,2))
console.log(add(2,3,2))

// 包含默认参数
function add1(foo : number, foo1 : number, foo2 : number = 1){
  return foo + foo1 + foo2;
}

console.log(add1(2,2))
console.log(add1(2,3,2))


// 剩余参数

function add2(...foo : number[]) : number {
  var result = 0;
  for(var i = 0; i < foo.length; i++){
    result += foo[i];
  }
  return result;
}
console.log(add2(2,2))
console.log(add2(2,3,2))

//函数重载

//function test(name : string) : string;
function test(age : number) : string{return ""};

// 特定重载签名

interface testInterface {
  createElement(tagName : "div") : HTMLDivElement;//特定重载签名
  createElement(tagName : string) : HTMLElement;//非特定重载签名
}

// 立即调用函数

// js代码
var bar = 0;
(function() {
  var foo : number = 0; //函数作用域
  bar = 1;//全局作用域
  console.log(bar);//1
  console.log(foo);//0
})();

console.log(bar);//1
//console.log(foo);//报错
//--------------------------------------------------
var bar = 0;
(function(global) {
  var foo : number = 0; //函数作用域
  bar = 1;//全局作用域
  console.log(global.bar);//1
  console.log(foo);//0
})(this);
console.log(bar);//1
//console.log(foo);//报错

// 类的定义
class counter {
  // 通常使用 _ 开始作为私有变量的命名
  private _i : number;
  constructor (){
    this._i = 0;
  }

  get() : number {
    return this._i;
  }

  set(val : number) : void {
    this._i = val;
  }

  increment() : void {
    this._i++;
  }
}

var counter1 = new counter();
console.log(counter1.get());
counter1.set(2);
console.log(counter1.get());
counter1.increment();
console.log(counter1.get());

