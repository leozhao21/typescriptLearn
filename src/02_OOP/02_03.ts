/**
 * 命名空间：主要用于组织代码
 */
namespace kkdaiApp {
    // 使用export导出功能或命名空间
    export class UserModel{

    }

    export namespace model{ 
        export class PeopleModel{

        }
    }

}

var user = new kkdaiApp.UserModel();
var people = new kkdaiApp.model.PeopleModel();

import testUser = kkdaiApp.model;
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