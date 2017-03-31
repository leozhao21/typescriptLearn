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
// 函数调用Person
var pel = new Person('测试');
pel.greet();
pel.greetDelay(2000);
pel.greetDelay1(3000);
// 回调地狱的代码，未完成

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy8wMV9mdW5jdGlvbi8wMV8wMy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUdILDhCQUE4QjtBQUU5QixJQUFJLEdBQUcsR0FBRztJQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdkIsQ0FBQyxDQUFBO0FBRUQsY0FBYyxFQUFlO0lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEIsRUFBRSxFQUFFLENBQUM7QUFDVCxDQUFDO0FBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCO0FBRTNCLE9BQU87QUFDUCw4REFBOEQ7QUFFOUQ7SUFFSSxnQkFBWSxJQUFhO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxzQkFBSyxHQUFMO1FBQ0ksS0FBSyxDQUFDLHFEQUFXLElBQUksQ0FBQyxJQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0Qsd0RBQXdEO0lBQ3hELDJCQUFVLEdBQVYsVUFBVyxJQUFhO1FBQXhCLGlCQUlDO1FBSEcsVUFBVSxDQUFDO1lBQ1AsS0FBSyxDQUFDLGdEQUFZLEtBQUksQ0FBQyxJQUFNLENBQUMsQ0FBQTtRQUNsQyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDRCw0QkFBVyxHQUFYLFVBQVksSUFBYTtRQUNyQixVQUFVLENBQUM7WUFDUCxLQUFLLENBQUMsZ0RBQVksSUFBSSxDQUFDLElBQU0sQ0FBQyxDQUFBO1FBQ2xDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNMLGFBQUM7QUFBRCxDQW5CQSxBQW1CQyxJQUFBO0FBQ0QsYUFBYTtBQUNiLElBQUksR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzNCLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtBQUNYLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUV0QixjQUFjIiwiZmlsZSI6IjAxX2Z1bmN0aW9uLzAxXzAzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFR5cGVzY3JpcHTnmoTlvILmraXnvJbnqItcclxuICovXHJcblxyXG5cclxuLy8g5Zue6LCD5ZKM6auY6Zi25Ye95pWw77yI5o6l5Y+X5Ye95pWw5Li65Y+C5pWw5oiW6L+U5Zue5Y+m5LiA5Liq5Ye95pWw55qE5Ye95pWw77yJXHJcblxyXG52YXIgZm9vID0gZnVuY3Rpb24oKXsvL+Wbnuiwg1xyXG4gICAgY29uc29sZS5sb2coJ2ZvbycpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBiYXIxKGNiIDogKCkgPT4gdm9pZCkgOiB2b2lkeyAvL+mrmOmYtuWHveaVsFxyXG4gICAgY29uc29sZS5sb2coJ2JhcjEnKTtcclxuICAgIGNiKCk7XHJcbn1cclxuXHJcbmJhcjEoZm9vKTsgLy/ovpPlh7rpobrluo/vvIxiYXIxIGJvbztcclxuXHJcbi8vIOeureWktOWHveaVsFxyXG4vLyDlnKh0eXBlc2NyaXB05Lit77yMIOaIkeS7rOWPr+S7peS9v+eUqGZ1bmN0aW9u6KGo6L6+5byP5oiW566t5aS05Ye95pWw6aG25LiA5Liq5Ye95pWw77yM566t5aS05Ye95pWw5pivZnVuY3Rpb27nmoTnvKnlhpnjgIJcclxuXHJcbmNsYXNzIFBlcnNvbiB7XHJcbiAgICBuYW1lIDogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IobmFtZSA6IHN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH1cclxuICAgIGdyZWV0KCl7XHJcbiAgICAgICAgYWxlcnQoYOWImui+k+WFpeeahOWQjeWtl+aYr++8miR7dGhpcy5uYW1lfWApO1xyXG4gICAgfVxyXG4gICAgLy8g6YCa6L+H5L2/55So566t5aS05Ye95pWw77yM5Y+v5Lul5L+d6K+BdGhpc+aTjeS9nOespuaMh+WQkeeahOaYr1BlcnNvbueahOWunuS+i++8jOiAjOS4jeaYr3NldFRpbWVvdXTnmoTlm57osIPlh73mlbDjgIJcclxuICAgIGdyZWV0RGVsYXkodGltZSA6IG51bWJlcikge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBhbGVydChgMVxc6L6T5YWl55qE5L+h5oGv5piv77yaJHt0aGlzLm5hbWV9YClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgZ3JlZXREZWxheTEodGltZSA6IG51bWJlcikge1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgYWxlcnQoYDJcXOi+k+WFpeeahOS/oeaBr+aYr++8miR7dGhpcy5uYW1lfWApXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4vLyDlh73mlbDosIPnlKhQZXJzb25cclxudmFyIHBlbCA9IG5ldyBQZXJzb24oJ+a1i+ivlScpO1xyXG5wZWwuZ3JlZXQoKVxyXG5wZWwuZ3JlZXREZWxheSgyMDAwKTtcclxucGVsLmdyZWV0RGVsYXkxKDMwMDApO1xyXG5cclxuLy8g5Zue6LCD5Zyw54ux55qE5Luj56CB77yM5pyq5a6M5oiQXHJcbiJdfQ==
