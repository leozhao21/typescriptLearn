/**
 * 命名空间：主要用于组织代码
 */
var kkdaiApp;
(function (kkdaiApp) {
    // 使用export导出功能或命名空间
    var UserModel = (function () {
        function UserModel() {
        }
        return UserModel;
    }());
    kkdaiApp.UserModel = UserModel;
    var model;
    (function (model) {
        var PeopleModel = (function () {
            function PeopleModel() {
            }
            return PeopleModel;
        }());
        model.PeopleModel = PeopleModel;
    })(model = kkdaiApp.model || (kkdaiApp.model = {}));
})(kkdaiApp || (kkdaiApp = {}));
var user = new kkdaiApp.UserModel();
var people = new kkdaiApp.model.PeopleModel();
var testUser = kkdaiApp.model;
var poe = new testUser.PeopleModel();
/**
 * 模块
 */
// 和命名空间的区别：声明了模块后，不需要通过<script>引入，而是通过模块加载器来加载。
// ES6之前的版本不支持模块。现有模块加载器：
/*
1、RequireJS(AMD)：异步模块定义的语法
2、Browserify：使用的语法被称为CommonJS
3、SystemJS：SystemJS是一个通用模块加载器，它支持所有的模块定义语法（es6,CommonJS,AMD和UMD);

不做记录。可查询网络资料

 */ 

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy8wMl9PT1AvMDJfMDMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFDSCxJQUFVLFFBQVEsQ0FZakI7QUFaRCxXQUFVLFFBQVE7SUFDZCxvQkFBb0I7SUFDcEI7UUFBQTtRQUVBLENBQUM7UUFBRCxnQkFBQztJQUFELENBRkEsQUFFQyxJQUFBO0lBRlksa0JBQVMsWUFFckIsQ0FBQTtJQUVELElBQWlCLEtBQUssQ0FJckI7SUFKRCxXQUFpQixLQUFLO1FBQ2xCO1lBQUE7WUFFQSxDQUFDO1lBQUQsa0JBQUM7UUFBRCxDQUZBLEFBRUMsSUFBQTtRQUZZLGlCQUFXLGNBRXZCLENBQUE7SUFDTCxDQUFDLEVBSmdCLEtBQUssR0FBTCxjQUFLLEtBQUwsY0FBSyxRQUlyQjtBQUVMLENBQUMsRUFaUyxRQUFRLEtBQVIsUUFBUSxRQVlqQjtBQUVELElBQUksSUFBSSxHQUFHLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQ3BDLElBQUksTUFBTSxHQUFHLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUU5QyxJQUFPLFFBQVEsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO0FBQ2pDLElBQUksR0FBRyxHQUFHLElBQUksUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBRXJDOztHQUVHO0FBRUgsZ0RBQWdEO0FBQ2hELHlCQUF5QjtBQUN6Qjs7Ozs7OztHQU9HIiwiZmlsZSI6IjAyX09PUC8wMl8wMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDlkb3lkI3nqbrpl7TvvJrkuLvopoHnlKjkuo7nu4Tnu4fku6PnoIFcclxuICovXHJcbm5hbWVzcGFjZSBra2RhaUFwcCB7XHJcbiAgICAvLyDkvb/nlKhleHBvcnTlr7zlh7rlip/og73miJblkb3lkI3nqbrpl7RcclxuICAgIGV4cG9ydCBjbGFzcyBVc2VyTW9kZWx7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgbW9kZWx7IFxyXG4gICAgICAgIGV4cG9ydCBjbGFzcyBQZW9wbGVNb2RlbHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxudmFyIHVzZXIgPSBuZXcga2tkYWlBcHAuVXNlck1vZGVsKCk7XHJcbnZhciBwZW9wbGUgPSBuZXcga2tkYWlBcHAubW9kZWwuUGVvcGxlTW9kZWwoKTtcclxuXHJcbmltcG9ydCB0ZXN0VXNlciA9IGtrZGFpQXBwLm1vZGVsO1xyXG52YXIgcG9lID0gbmV3IHRlc3RVc2VyLlBlb3BsZU1vZGVsKCk7XHJcblxyXG4vKipcclxuICog5qih5Z2XXHJcbiAqL1xyXG5cclxuLy8g5ZKM5ZG95ZCN56m66Ze055qE5Yy65Yir77ya5aOw5piO5LqG5qih5Z2X5ZCO77yM5LiN6ZyA6KaB6YCa6L+HPHNjcmlwdD7lvJXlhaXvvIzogIzmmK/pgJrov4fmqKHlnZfliqDovb3lmajmnaXliqDovb3jgIJcclxuLy8gRVM25LmL5YmN55qE54mI5pys5LiN5pSv5oyB5qih5Z2X44CC546w5pyJ5qih5Z2X5Yqg6L295Zmo77yaXHJcbi8qXHJcbjHjgIFSZXF1aXJlSlMoQU1EKe+8muW8guatpeaooeWdl+WumuS5ieeahOivreazlVxyXG4y44CBQnJvd3Nlcmlmee+8muS9v+eUqOeahOivreazleiiq+ensOS4ukNvbW1vbkpTXHJcbjPjgIFTeXN0ZW1KU++8mlN5c3RlbUpT5piv5LiA5Liq6YCa55So5qih5Z2X5Yqg6L295Zmo77yM5a6D5pSv5oyB5omA5pyJ55qE5qih5Z2X5a6a5LmJ6K+t5rOV77yIZXM2LENvbW1vbkpTLEFNROWSjFVNRCk7XHJcblxyXG7kuI3lgZrorrDlvZXjgILlj6/mn6Xor6LnvZHnu5zotYTmlplcclxuXHJcbiAqLyJdfQ==
