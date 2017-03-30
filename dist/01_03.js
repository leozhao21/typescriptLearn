/**
 * Typescript的异步编程
 */
// 回调和高阶函数（接受函数为参数或返回另一个函数的函数）
var foo = function () {
    console.log('foo');
};
function bar1(cb) {
    console.log('bar1');
    cb();
}
bar1(foo); //输出顺序，bar1 boo;
// 箭头函数
// 在typescript中， 我们可以使用function表达式或箭头函数顶一个函数，箭头函数是function的缩写。
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        alert("\u521A\u8F93\u5165\u7684\u540D\u5B57\u662F\uFF1A" + this.name);
    };
    // 通过使用箭头函数，可以保证this操作符指向的是Person的实例，而不是setTimeout的回调函数。
    Person.prototype.greetDelay = function (time) {
        var _this = this;
        setTimeout(function () {
            alert("1\u8F93\u5165\u7684\u4FE1\u606F\u662F\uFF1A" + _this.name);
        });
    };
    Person.prototype.greetDelay1 = function (time) {
        setTimeout(function () {
            alert("2\u8F93\u5165\u7684\u4FE1\u606F\u662F\uFF1A" + this.name);
        });
    };
    return Person;
}());
var pel = new Person('测试');
pel.greet();
pel.greetDelay(2000);
pel.greetDelay1(3000);
// 回调地狱 

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy8wMV9mdW5jdGlvbi8wMV8wMy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUdILDhCQUE4QjtBQUU5QixJQUFJLEdBQUcsR0FBRztJQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdkIsQ0FBQyxDQUFBO0FBRUQsY0FBYyxFQUFlO0lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEIsRUFBRSxFQUFFLENBQUM7QUFDVCxDQUFDO0FBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCO0FBRTNCLE9BQU87QUFDUCw4REFBOEQ7QUFFOUQ7SUFFSSxnQkFBWSxJQUFhO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxzQkFBSyxHQUFMO1FBQ0ksS0FBSyxDQUFDLHFEQUFXLElBQUksQ0FBQyxJQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0Qsd0RBQXdEO0lBQ3hELDJCQUFVLEdBQVYsVUFBVyxJQUFhO1FBQXhCLGlCQUlDO1FBSEcsVUFBVSxDQUFDO1lBQ1AsS0FBSyxDQUFDLGdEQUFZLEtBQUksQ0FBQyxJQUFNLENBQUMsQ0FBQTtRQUNsQyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDRCw0QkFBVyxHQUFYLFVBQVksSUFBYTtRQUNyQixVQUFVLENBQUM7WUFDUCxLQUFLLENBQUMsZ0RBQVksSUFBSSxDQUFDLElBQU0sQ0FBQyxDQUFBO1FBQ2xDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNMLGFBQUM7QUFBRCxDQW5CQSxBQW1CQyxJQUFBO0FBQ0QsSUFBSSxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDM0IsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFBO0FBQ1gsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNyQixHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRXRCLE9BQU8iLCJmaWxlIjoiMDFfMDMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogVHlwZXNjcmlwdOeahOW8guatpee8lueoi1xyXG4gKi9cclxuXHJcblxyXG4vLyDlm57osIPlkozpq5jpmLblh73mlbDvvIjmjqXlj5flh73mlbDkuLrlj4LmlbDmiJbov5Tlm57lj6bkuIDkuKrlh73mlbDnmoTlh73mlbDvvIlcclxuXHJcbnZhciBmb28gPSBmdW5jdGlvbigpey8v5Zue6LCDXHJcbiAgICBjb25zb2xlLmxvZygnZm9vJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJhcjEoY2IgOiAoKSA9PiB2b2lkKSA6IHZvaWR7IC8v6auY6Zi25Ye95pWwXHJcbiAgICBjb25zb2xlLmxvZygnYmFyMScpO1xyXG4gICAgY2IoKTtcclxufVxyXG5cclxuYmFyMShmb28pOyAvL+i+k+WHuumhuuW6j++8jGJhcjEgYm9vO1xyXG5cclxuLy8g566t5aS05Ye95pWwXHJcbi8vIOWcqHR5cGVzY3JpcHTkuK3vvIwg5oiR5Lus5Y+v5Lul5L2/55SoZnVuY3Rpb27ooajovr7lvI/miJbnrq3lpLTlh73mlbDpobbkuIDkuKrlh73mlbDvvIznrq3lpLTlh73mlbDmmK9mdW5jdGlvbueahOe8qeWGmeOAglxyXG5cclxuY2xhc3MgUGVyc29uIHtcclxuICAgIG5hbWUgOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lIDogc3RyaW5nKXtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG4gICAgZ3JlZXQoKXtcclxuICAgICAgICBhbGVydChg5Yia6L6T5YWl55qE5ZCN5a2X5piv77yaJHt0aGlzLm5hbWV9YCk7XHJcbiAgICB9XHJcbiAgICAvLyDpgJrov4fkvb/nlKjnrq3lpLTlh73mlbDvvIzlj6/ku6Xkv53or4F0aGlz5pON5L2c56ym5oyH5ZCR55qE5pivUGVyc29u55qE5a6e5L6L77yM6ICM5LiN5pivc2V0VGltZW91dOeahOWbnuiwg+WHveaVsOOAglxyXG4gICAgZ3JlZXREZWxheSh0aW1lIDogbnVtYmVyKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGFsZXJ0KGAxXFzovpPlhaXnmoTkv6Hmga/mmK/vvJoke3RoaXMubmFtZX1gKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBncmVldERlbGF5MSh0aW1lIDogbnVtYmVyKSB7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBhbGVydChgMlxc6L6T5YWl55qE5L+h5oGv5piv77yaJHt0aGlzLm5hbWV9YClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbnZhciBwZWwgPSBuZXcgUGVyc29uKCfmtYvor5UnKTtcclxucGVsLmdyZWV0KClcclxucGVsLmdyZWV0RGVsYXkoMjAwMCk7XHJcbnBlbC5ncmVldERlbGF5MSgzMDAwKTtcclxuXHJcbi8vIOWbnuiwg+WcsOeLsSJdfQ==
