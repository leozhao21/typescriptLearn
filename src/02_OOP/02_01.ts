/** 
OOP开发者需要遵守的5个规则 : 即：SOLID原则
1、SRP(单一职责原则)：表明软件组件（函数、类、模块）必须专注于单一的任务（只有单一的职责）
2、OCP(开/闭原则)：表明软件设计时必须时刻考虑到（代码）可能的发展（具有扩展性），但是程序的发展必须最少地修改已有的代码（对已有的修改封闭）。
3、LSP(里氏替换原则)：表明只要继承的是同一接口，程序里任意一个类都可以被其他的类代替。在替换完成后，不需要其他额外的工作程序就能像原来一样运行。
4、ISP(接口隔离原则)：表明我们应该将那些非常大的接口（大而全的接口）拆分成一些小的更具体的接口（特定客户端接口），这样客户端就只需关心它们需要用到的接口。
5、DIP(依赖反转原则)：表明一个方法应该遵从依赖于抽象（接口）而不是一个实例（类）的概念。
*/

// ************ 类 class *******************
class PersonClass{
    public name : string;
    private age : number;
    protected address : string;
    constructor(name : string){

    }
    greet(){
        alert('hi');
    }
}

// ************ 接口 interfaces *******************
/*
在typescript中，接口与传统面向对象的接口有2处不同：
1、接口可以扩展其他接口或者类
2、可以定义数据和行为而不只是行为
一个类可以继承多个接口
*/
// >>>>>>>>>>>> 略过

// ************ 继承 interfaces ******************* 
//子类只能继承一个父类
class Teacher extends PersonClass{
    teach() {
        alert('teacher name');
    }
}

// 方法、构造函数重写
class Teacher1 extends PersonClass{
    constructor(name : string, age : number){
        super(name);
    }
    greet(){
        super.greet();
        alert('hi');
    }
    teach() {
        alert('teacher name');
    }
}
//多重继承
class School extends  Teacher1{

}

// ************ 混合 ******************* 
class Mammal{
    breathe() : string {
        return "ss";
    }
}
class WingedAnimal{
    fly() : string {
        return "ss";
    }
}
class bat implements Mammal, WingedAnimal{
    breathe : () => string;
    fly : () => string;
}
/**
 * 混合函数
 * @param derivedCtor 实行多个类的类，比如：bat
 * @param baseCtors 通过implements实现的多个类
 */
function applyMixins(derivedCtor : any, baseCtors: any[]){
    //循环需要实现的多个类
    baseCtors.forEach(baseCtor => {
        //Object.getOwnPropertyNames()方法返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性）组成的数组。
        //Object.prototype 属性表示对象 Object 的原型对象.baseCtor.prototype表示数组中的每个对象
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            // 如果属性的名称不是构造函数，则在新类bat中，为这些方法赋值。
            if(name !== 'constructor'){
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            }
        })
    })
}

// ************ 范型类 ******************* 
import Q  from "q";
import $ from "jquery";
class User {
    public name : string;
    public password : string;
}

class GenericRepository<T> {
    private _url : string;

    constructor(url : string){
        this._url = url;
    }

    public getAsync(){
        return Q.Promise((resolve : (entities : T[]) => void, reject) => {
            $.ajax({
                url: this._url,
                type: "GET",
                dataType: "json",
                success: (data) => {
                    var list = <T[]>data.items;
                    resolve(list);
                },
                error: (e) => {
                    reject(e);
                }
            });
        });
    }
}

var userRepository = new GenericRepository<User>('../action/user');
userRepository.getAsync().then(
    (users : User[]) => {
        console.log(users);
    }
)

// ************ 范型约束 ******************* 

// 通过实现接口起到约束的效果。
interface ValidtatbleInterface{
    isValid() : boolean;
}
// 创建GenericRepository1类必须实现接口ValidtatbleInterface
class GenericRepository1<T extends ValidtatbleInterface> {
    private _url : string;

    constructor(url : string){
        this._url = url;
    }

    public getAsync(){
        return Q.Promise((resolve : (entities : T[]) => void, reject) => {
            $.ajax({
                url: this._url,
                type: "GET",
                dataType: "json",
                success: (data) => {
                    var list : T[];
                    var items = <T[]>data.items;
                    for (var i = 0; i < items.length; i++) {
                        if(items[i].isValid()){
                            list.push(items[i])
                        }
                    }
                    resolve(list);
                },
                error: (e) => {
                    reject(e);
                }
            });
        });
    }
}


class User1 implements ValidtatbleInterface {
    public name : string;
    public password : string;

    public isValid() : boolean {
        return true;
    }
}

var userRepository1 = new GenericRepository1<User1>('../action/user');
userRepository.getAsync().then(
    (users : User[]) => {
        console.log(users);
    }
)

// ************ 在范型约束中使用多重类型 ******************* 

interface ValidtatbleInterface1{
    isValid1() : boolean;
}

interface allInterface extends ValidtatbleInterface, ValidtatbleInterface{
}


// 通过子接口实现多个接口类型
class GenericRepository2<T extends allInterface> {
    private _url : string;

    constructor(url : string){
        this._url = url;
    }
}

// ************ 范型中的new操作 *******************

function factory<T>() : T {
    var type : {new() : T;}
    return new type();
} 

var myUser:User = factory<User>();
