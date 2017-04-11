// call apply bind

// 所有的函数都从Function.prototype中继承了call、apply、bind方法。可以通过这些方法来设置函数内部this的值。

// call和apply的主要区别
// apply：以数组的形式接受传递给函数的参数
// call：以单个分开参数

class PersonClass {
    public name : string;
    public surname : string;

    constructor(name : string, surname : string){
        this.name = name;
        this.surname = surname;
    }

    public greet(city : string, country : string){
        var msg = this.name + this.surname + city + country;
        console.log(msg);
    }
}

var person = new PersonClass('remo', 'jansen');
person.greet('dalian', 'liaoning');

// 使用call apply调用greet方法，需要将第一个参数指定为person对象，这是因为，我们希望greet方法的内部this执行对象person。如果指定person，那么greet中的this.name和this.surname是undefined
person.greet.call(person,'dalian', 'liaoning');
person.greet.apply(person,['dalian','liaoning']);
// call和apply只在希望函数内的this操作符指向其他值时才有意义

// bind方法可以为我们设置this的值，但不执行它 ，一旦使用bind方法为一个函数内的this进行绑定，就不能再次覆盖它
var person = new PersonClass('remo', 'jansen');
var greet = person.greet.bind(person);

var valueOfthis = {name : 'tom', surname : 'file'};
var greet = person.greet.bind(valueOfthis);

greet.call(valueOfthis,'dalian', 'liaoning');//remo jansen dalian liaoning
greet.apply(valueOfthis,['dalian','liaoning']);//remo jansen dalian liaoning


/**
 * 原型
 */
// 通过prototyped的方式为类（函数）添加方法、属性的方式，称之为原型声明
