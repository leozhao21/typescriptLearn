/**
OOP开发者需要遵守的5个规则 : 即：SOLID原则
1、SRP(单一职责原则)：表明软件组件（函数、类、模块）必须专注于单一的任务（只有单一的职责）
2、OCP(开/闭原则)：表明软件设计时必须时刻考虑到（代码）可能的发展（具有扩展性），但是程序的发展必须最少地修改已有的代码（对已有的修改封闭）。
3、LSP(里氏替换原则)：表明只要继承的是同一接口，程序里任意一个类都可以被其他的类代替。在替换完成后，不需要其他额外的工作程序就能像原来一样运行。
4、ISP(接口隔离原则)：表明我们应该将那些非常大的接口（大而全的接口）拆分成一些小的更具体的接口（特定客户端接口），这样客户端就只需关心它们需要用到的接口。
5、DIP(依赖反转原则)：表明一个方法应该遵从依赖于抽象（接口）而不是一个实例（类）的概念。
*/
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// ************ 类 class *******************
var PersonClass = (function () {
    function PersonClass(name) {
    }
    PersonClass.prototype.greet = function () {
        alert('hi');
    };
    return PersonClass;
}());
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
var Teacher = (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Teacher.prototype.teach = function () {
        alert('teacher name');
    };
    return Teacher;
}(PersonClass));
// 方法、构造函数重写
var Teacher1 = (function (_super) {
    __extends(Teacher1, _super);
    function Teacher1(name, age) {
        return _super.call(this, name) || this;
    }
    Teacher1.prototype.greet = function () {
        _super.prototype.greet.call(this);
        alert('hi');
    };
    Teacher1.prototype.teach = function () {
        alert('teacher name');
    };
    return Teacher1;
}(PersonClass));
//多重继承
var School = (function (_super) {
    __extends(School, _super);
    function School() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return School;
}(Teacher1));
// ************ 混合 ******************* 
var Mammal = (function () {
    function Mammal() {
    }
    Mammal.prototype.breathe = function () {
        return "ss";
    };
    return Mammal;
}());
var WingedAnimal = (function () {
    function WingedAnimal() {
    }
    WingedAnimal.prototype.fly = function () {
        return "ss";
    };
    return WingedAnimal;
}());
var bat = (function () {
    function bat() {
    }
    return bat;
}());
/**
 * 混合函数
 * @param derivedCtor 实行多个类的类，比如：bat
 * @param baseCtors 通过implements实现的多个类
 */
function applyMixins(derivedCtor, baseCtors) {
    //循环需要实现的多个类
    baseCtors.forEach(function (baseCtor) {
        //Object.getOwnPropertyNames()方法返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性）组成的数组。
        //Object.prototype 属性表示对象 Object 的原型对象.baseCtor.prototype表示数组中的每个对象
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            // 如果属性的名称不是构造函数，则在新类bat中，为这些方法赋值。
            if (name !== 'constructor') {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            }
        });
    });
}
// ************ 范型类 ******************* 
var q_1 = require("q");
var jquery_1 = require("jquery");
var User = (function () {
    function User() {
    }
    return User;
}());
var GenericRepository = (function () {
    function GenericRepository(url) {
        this._url = url;
    }
    GenericRepository.prototype.getAsync = function () {
        var _this = this;
        return q_1.default.Promise(function (resolve, reject) {
            jquery_1.default.ajax({
                url: _this._url,
                type: "GET",
                dataType: "json",
                success: function (data) {
                    var list = data.items;
                    resolve(list);
                },
                error: function (e) {
                    reject(e);
                }
            });
        });
    };
    return GenericRepository;
}());
var userRepository = new GenericRepository('../action/user');
userRepository.getAsync().then(function (users) {
    console.log(users);
});
// 创建GenericRepository1类必须实现接口ValidtatbleInterface
var GenericRepository1 = (function () {
    function GenericRepository1(url) {
        this._url = url;
    }
    GenericRepository1.prototype.getAsync = function () {
        var _this = this;
        return q_1.default.Promise(function (resolve, reject) {
            jquery_1.default.ajax({
                url: _this._url,
                type: "GET",
                dataType: "json",
                success: function (data) {
                    var list;
                    var items = data.items;
                    for (var i = 0; i < items.length; i++) {
                        if (items[i].isValid()) {
                            list.push(items[i]);
                        }
                    }
                    resolve(list);
                },
                error: function (e) {
                    reject(e);
                }
            });
        });
    };
    return GenericRepository1;
}());
var User1 = (function () {
    function User1() {
    }
    User1.prototype.isValid = function () {
        return true;
    };
    return User1;
}());
var userRepository1 = new GenericRepository1('../action/user');
userRepository.getAsync().then(function (users) {
    console.log(users);
});
// 通过子接口实现多个接口类型
var GenericRepository2 = (function () {
    function GenericRepository2(url) {
        this._url = url;
    }
    return GenericRepository2;
}());
// ************ 范型中的new操作 *******************
function factory() {
    var type;
    return new type();
}
var myUser = factory();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy8wMl9PT1AvMDJfMDEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7RUFPRTs7Ozs7Ozs7Ozs7OztBQUVGLDJDQUEyQztBQUMzQztJQUlJLHFCQUFZLElBQWE7SUFFekIsQ0FBQztJQUNELDJCQUFLLEdBQUw7UUFDSSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFFRCxpREFBaUQ7QUFDakQ7Ozs7O0VBS0U7QUFDRixrQkFBa0I7QUFFbEIsa0RBQWtEO0FBQ2xELFlBQVk7QUFDWjtJQUFzQiwyQkFBVztJQUFqQzs7SUFJQSxDQUFDO0lBSEcsdUJBQUssR0FBTDtRQUNJLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0wsY0FBQztBQUFELENBSkEsQUFJQyxDQUpxQixXQUFXLEdBSWhDO0FBRUQsWUFBWTtBQUNaO0lBQXVCLDRCQUFXO0lBQzlCLGtCQUFZLElBQWEsRUFBRSxHQUFZO2VBQ25DLGtCQUFNLElBQUksQ0FBQztJQUNmLENBQUM7SUFDRCx3QkFBSyxHQUFMO1FBQ0ksaUJBQU0sS0FBSyxXQUFFLENBQUM7UUFDZCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUNELHdCQUFLLEdBQUw7UUFDSSxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQVhBLEFBV0MsQ0FYc0IsV0FBVyxHQVdqQztBQUNELE1BQU07QUFDTjtJQUFzQiwwQkFBUTtJQUE5Qjs7SUFFQSxDQUFDO0lBQUQsYUFBQztBQUFELENBRkEsQUFFQyxDQUZxQixRQUFRLEdBRTdCO0FBRUQsdUNBQXVDO0FBQ3ZDO0lBQUE7SUFJQSxDQUFDO0lBSEcsd0JBQU8sR0FBUDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQUpBLEFBSUMsSUFBQTtB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Q0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBLENBQUM7NEJBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7d0JBQ3ZCLENBQUM7b0JBQ0wsQ0FBQztvQkFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xCLENBQUM7Z0JBQ0QsS0FBSyxFQUFFLFVBQUMsQ0FBQztvQkFDTCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsQ0FBQzthQUNKLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0E3QkEsQUE2QkMsSUFBQTtBQUdEO0lBQUE7SUFPQSxDQUFDO0lBSFUsdUJBQU8sR0FBZDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQUVELElBQUksZUFBZSxHQUFHLElBQUksa0JBQWtCLENBQVEsZ0JBQWdCLENBQUMsQ0FBQztBQUN0RSxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUMxQixVQUFDLEtBQWM7SUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3ZCLENBQUMsQ0FDSixDQUFBO0FBWUQsZ0JBQWdCO0FBQ2hCO0lBR0ksNEJBQVksR0FBWTtRQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztJQUNwQixDQUFDO0lBQ0wseUJBQUM7QUFBRCxDQU5BLEFBTUMsSUFBQTtBQUVELDZDQUE2QztBQUU3QztJQUNJLElBQUksSUFBbUIsQ0FBQTtJQUN2QixNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUN0QixDQUFDO0FBRUQsSUFBSSxNQUFNLEdBQVEsT0FBTyxFQUFRLENBQUMiLCJmaWxlIjoiMDJfT09QLzAyXzAxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIFxyXG5PT1DlvIDlj5HogIXpnIDopoHpgbXlrojnmoQ15Liq6KeE5YiZIDog5Y2z77yaU09MSUTljp/liJlcclxuMeOAgVNSUCjljZXkuIDogYzotKPljp/liJkp77ya6KGo5piO6L2v5Lu257uE5Lu277yI5Ye95pWw44CB57G744CB5qih5Z2X77yJ5b+F6aG75LiT5rOo5LqO5Y2V5LiA55qE5Lu75Yqh77yI5Y+q5pyJ5Y2V5LiA55qE6IGM6LSj77yJXHJcbjLjgIFPQ1Ao5byAL+mXreWOn+WImSnvvJrooajmmI7ova/ku7borr7orqHml7blv4Xpobvml7bliLvogIPomZHliLDvvIjku6PnoIHvvInlj6/og73nmoTlj5HlsZXvvIjlhbfmnInmianlsZXmgKfvvInvvIzkvYbmmK/nqIvluo/nmoTlj5HlsZXlv4XpobvmnIDlsJHlnLDkv67mlLnlt7LmnInnmoTku6PnoIHvvIjlr7nlt7LmnInnmoTkv67mlLnlsIHpl63vvInjgIJcclxuM+OAgUxTUCjph4zmsI/mm7/mjaLljp/liJkp77ya6KGo5piO5Y+q6KaB57un5om/55qE5piv5ZCM5LiA5o6l5Y+j77yM56iL5bqP6YeM5Lu75oSP5LiA5Liq57G76YO95Y+v5Lul6KKr5YW25LuW55qE57G75Luj5pu/44CC5Zyo5pu/5o2i5a6M5oiQ5ZCO77yM5LiN6ZyA6KaB5YW25LuW6aKd5aSW55qE5bel5L2c56iL5bqP5bCx6IO95YOP5Y6f5p2l5LiA5qC36L+Q6KGM44CCXHJcbjTjgIFJU1Ao5o6l5Y+j6ZqU56a75Y6f5YiZKe+8muihqOaYjuaIkeS7rOW6lOivpeWwhumCo+S6m+mdnuW4uOWkp+eahOaOpeWPo++8iOWkp+iAjOWFqOeahOaOpeWPo++8ieaLhuWIhuaIkOS4gOS6m+Wwj+eahOabtOWFt+S9k+eahOaOpeWPo++8iOeJueWumuWuouaIt+err+aOpeWPo++8ie+8jOi/meagt+WuouaIt+err+WwseWPqumcgOWFs+W/g+Wug+S7rOmcgOimgeeUqOWIsOeahOaOpeWPo+OAglxyXG4144CBRElQKOS+nei1luWPjei9rOWOn+WImSnvvJrooajmmI7kuIDkuKrmlrnms5XlupTor6XpgbXku47kvp3otZbkuo7mir3osaHvvIjmjqXlj6PvvInogIzkuI3mmK/kuIDkuKrlrp7kvovvvIjnsbvvvInnmoTmpoLlv7XjgIJcclxuKi9cclxuXHJcbi8vICoqKioqKioqKioqKiDnsbsgY2xhc3MgKioqKioqKioqKioqKioqKioqKlxyXG5jbGFzcyBQZXJzb25DbGFzc3tcclxuICAgIHB1YmxpYyBuYW1lIDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBhZ2UgOiBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgYWRkcmVzcyA6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUgOiBzdHJpbmcpe1xyXG5cclxuICAgIH1cclxuICAgIGdyZWV0KCl7XHJcbiAgICAgICAgYWxlcnQoJ2hpJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vICoqKioqKioqKioqKiDmjqXlj6MgaW50ZXJmYWNlcyAqKioqKioqKioqKioqKioqKioqXHJcbi8qXHJcbuWcqHR5cGVzY3JpcHTkuK3vvIzmjqXlj6PkuI7kvKDnu5/pnaLlkJHlr7nosaHnmoTmjqXlj6PmnIky5aSE5LiN5ZCM77yaXHJcbjHjgIHmjqXlj6Plj6/ku6XmianlsZXlhbbku5bmjqXlj6PmiJbogIXnsbtcclxuMuOAgeWPr+S7peWumuS5ieaVsOaNruWSjOihjOS4uuiAjOS4jeWPquaYr+ihjOS4ulxyXG7kuIDkuKrnsbvlj6/ku6Xnu6fmib/lpJrkuKrmjqXlj6NcclxuKi9cclxuLy8gPj4+Pj4+Pj4+Pj4+IOeVpei/h1xyXG5cclxuLy8gKioqKioqKioqKioqIOe7p+aJvyBpbnRlcmZhY2VzICoqKioqKioqKioqKioqKioqKiogXHJcbi8v5a2Q57G75Y+q6IO957un5om/5LiA5Liq54i257G7XHJcbmNsYXNzIFRlYWNoZXIgZXh0ZW5kcyBQZXJzb25DbGFzc3tcclxuICAgIHRlYWNoKCkge1xyXG4gICAgICAgIGFsZXJ0KCd0ZWFjaGVyIG5hbWUnKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8g5pa55rOV44CB5p6E6YCg5Ye95pWw6YeN5YaZXHJcbmNsYXNzIFRlYWNoZXIxIGV4dGVuZHMgUGVyc29uQ2xhc3N7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lIDogc3RyaW5nLCBhZ2UgOiBudW1iZXIpe1xyXG4gICAgICAgIHN1cGVyKG5hbWUpO1xyXG4gICAgfVxyXG4gICAgZ3JlZXQoKXtcclxuICAgICAgICBzdXBlci5ncmVldCgpO1xyXG4gICAgICAgIGFsZXJ0KCdoaScpO1xyXG4gICAgfVxyXG4gICAgdGVhY2goKSB7XHJcbiAgICAgICAgYWxlcnQoJ3RlYWNoZXIgbmFtZScpO1xyXG4gICAgfVxyXG59XHJcbi8v5aSa6YeN57un5om/XHJcbmNsYXNzIFNjaG9vbCBleHRlbmRzICBUZWFjaGVyMXtcclxuXHJcbn1cclxuXHJcbi8vICoqKioqKioqKioqKiDmt7flkIggKioqKioqKioqKioqKioqKioqKiBcclxuY2xhc3MgTWFtbWFse1xyXG4gICAgYnJlYXRoZSgpIDogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJzc1wiO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIFdpbmdlZEFuaW1hbHtcclxuICAgIGZseSgpIDogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJzc1wiO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIGJhdCBpbXBsZW1lbnRzIE1hbW1hbCwgV2luZ2VkQW5pbWFse1xyXG4gICAgYnJlYXRoZSA6ICgpID0+IHN0cmluZztcclxuICAgIGZseSA6ICgpID0+IHN0cmluZztcclxufVxyXG4vKipcclxuICog5re35ZCI5Ye95pWwXHJcbiAqIEBwYXJhbSBkZXJpdmVkQ3RvciDlrp7ooYzlpJrkuKrnsbvnmoTnsbvvvIzmr5TlpoLvvJpiYXRcclxuICogQHBhcmFtIGJhc2VDdG9ycyDpgJrov4dpbXBsZW1lbnRz5a6e546w55qE5aSa5Liq57G7XHJcbiAqL1xyXG5mdW5jdGlvbiBhcHBseU1peGlucyhkZXJpdmVkQ3RvciA6IGFueSwgYmFzZUN0b3JzOiBhbnlbXSl7XHJcbiAgICAvL+W+queOr+mcgOimgeWunueOsOeahOWkmuS4quexu1xyXG4gICAgYmFzZUN0b3JzLmZvckVhY2goYmFzZUN0b3IgPT4ge1xyXG4gICAgICAgIC8vT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoKeaWueazlei/lOWbnuS4gOS4queUseaMh+WumuWvueixoeeahOaJgOacieiHqui6q+WxnuaAp+eahOWxnuaAp+WQje+8iOWMheaLrOS4jeWPr+aemuS4vuWxnuaAp++8iee7hOaIkOeahOaVsOe7hOOAglxyXG4gICAgICAgIC8vT2JqZWN0LnByb3RvdHlwZSDlsZ7mgKfooajnpLrlr7nosaEgT2JqZWN0IOeahOWOn+Wei+WvueixoS5iYXNlQ3Rvci5wcm90b3R5cGXooajnpLrmlbDnu4TkuK3nmoTmr4/kuKrlr7nosaFcclxuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhiYXNlQ3Rvci5wcm90b3R5cGUpLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgICAgICAgIC8vIOWmguaenOWxnuaAp+eahOWQjeensOS4jeaYr+aehOmAoOWHveaVsO+8jOWImeWcqOaWsOexu2JhdOS4re+8jOS4uui/meS6m+aWueazlei1i+WAvOOAglxyXG4gICAgICAgICAgICBpZihuYW1lICE9PSAnY29uc3RydWN0b3InKXtcclxuICAgICAgICAgICAgICAgIGRlcml2ZWRDdG9yLnByb3RvdHlwZVtuYW1lXSA9IGJhc2VDdG9yLnByb3RvdHlwZVtuYW1lXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG4vLyAqKioqKioqKioqKiog6IyD5Z6L57G7ICoqKioqKioqKioqKioqKioqKiogXHJcbmltcG9ydCBRICBmcm9tIFwicVwiO1xyXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcbmNsYXNzIFVzZXIge1xyXG4gICAgcHVibGljIG5hbWUgOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcGFzc3dvcmQgOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNsYXNzIEdlbmVyaWNSZXBvc2l0b3J5PFQ+IHtcclxuICAgIHByaXZhdGUgX3VybCA6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih1cmwgOiBzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuX3VybCA9IHVybDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0QXN5bmMoKXtcclxuICAgICAgICByZXR1cm4gUS5Qcm9taXNlKChyZXNvbHZlIDogKGVudGl0aWVzIDogVFtdKSA9PiB2b2lkLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHVybDogdGhpcy5fdXJsLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxpc3QgPSA8VFtdPmRhdGEuaXRlbXM7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShsaXN0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG52YXIgdXNlclJlcG9zaXRvcnkgPSBuZXcgR2VuZXJpY1JlcG9zaXRvcnk8VXNlcj4oJy4uL2FjdGlvbi91c2VyJyk7XHJcbnVzZXJSZXBvc2l0b3J5LmdldEFzeW5jKCkudGhlbihcclxuICAgICh1c2VycyA6IFVzZXJbXSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJzKTtcclxuICAgIH1cclxuKVxyXG5cclxuLy8gKioqKioqKioqKioqIOiMg+Wei+e6puadnyAqKioqKioqKioqKioqKioqKioqIFxyXG5cclxuLy8g6YCa6L+H5a6e546w5o6l5Y+j6LW35Yiw57qm5p2f55qE5pWI5p6c44CCXHJcbmludGVyZmFjZSBWYWxpZHRhdGJsZUludGVyZmFjZXtcclxuICAgIGlzVmFsaWQoKSA6IGJvb2xlYW47XHJcbn1cclxuLy8g5Yib5bu6R2VuZXJpY1JlcG9zaXRvcnkx57G75b+F6aG75a6e546w5o6l5Y+jVmFsaWR0YXRibGVJbnRlcmZhY2VcclxuY2xhc3MgR2VuZXJpY1JlcG9zaXRvcnkxPFQgZXh0ZW5kcyBWYWxpZHRhdGJsZUludGVyZmFjZT4ge1xyXG4gICAgcHJpdmF0ZSBfdXJsIDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHVybCA6IHN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5fdXJsID0gdXJsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRBc3luYygpe1xyXG4gICAgICAgIHJldHVybiBRLlByb21pc2UoKHJlc29sdmUgOiAoZW50aXRpZXMgOiBUW10pID0+IHZvaWQsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiB0aGlzLl91cmwsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbGlzdCA6IFRbXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbXMgPSA8VFtdPmRhdGEuaXRlbXM7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpdGVtc1tpXS5pc1ZhbGlkKCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKGl0ZW1zW2ldKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobGlzdCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNsYXNzIFVzZXIxIGltcGxlbWVudHMgVmFsaWR0YXRibGVJbnRlcmZhY2Uge1xyXG4gICAgcHVibGljIG5hbWUgOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcGFzc3dvcmQgOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIGlzVmFsaWQoKSA6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XHJcblxyXG52YXIgdXNlclJlcG9zaXRvcnkxID0gbmV3IEdlbmVyaWNSZXBvc2l0b3J5MTxVc2VyMT4oJy4uL2FjdGlvbi91c2VyJyk7XHJcbnVzZXJSZXBvc2l0b3J5LmdldEFzeW5jKCkudGhlbihcclxuICAgICh1c2VycyA6IFVzZXJbXSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJzKTtcclxuICAgIH1cclxuKVxyXG5cclxuLy8gKioqKioqKioqKioqIOWcqOiMg+Wei+e6puadn+S4reS9v+eUqOWkmumHjeexu+WeiyAqKioqKioqKioqKioqKioqKioqIFxyXG5cclxuaW50ZXJmYWNlIFZhbGlkdGF0YmxlSW50ZXJmYWNlMXtcclxuICAgIGlzVmFsaWQxKCkgOiBib29sZWFuO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgYWxsSW50ZXJmYWNlIGV4dGVuZHMgVmFsaWR0YXRibGVJbnRlcmZhY2UsIFZhbGlkdGF0YmxlSW50ZXJmYWNle1xyXG59XHJcblxyXG5cclxuLy8g6YCa6L+H5a2Q5o6l5Y+j5a6e546w5aSa5Liq5o6l5Y+j57G75Z6LXHJcbmNsYXNzIEdlbmVyaWNSZXBvc2l0b3J5MjxUIGV4dGVuZHMgYWxsSW50ZXJmYWNlPiB7XHJcbiAgICBwcml2YXRlIF91cmwgOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IodXJsIDogc3RyaW5nKXtcclxuICAgICAgICB0aGlzLl91cmwgPSB1cmw7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vICoqKioqKioqKioqKiDojIPlnovkuK3nmoRuZXfmk43kvZwgKioqKioqKioqKioqKioqKioqKlxyXG5cclxuZnVuY3Rpb24gZmFjdG9yeTxUPigpIDogVCB7XHJcbiAgICB2YXIgdHlwZSA6IHtuZXcoKSA6IFQ7fVxyXG4gICAgcmV0dXJuIG5ldyB0eXBlKCk7XHJcbn0gXHJcblxyXG52YXIgbXlVc2VyOlVzZXIgPSBmYWN0b3J5PFVzZXI+KCk7XHJcbiJdfQ==
