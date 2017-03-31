/*
 一个promisey一定包含以下几种状态之一
pending : promise 的初始化状态
fulfilled : 异步操作成功的promise状态
rejected : 异步操作失败的promise状态

一个promise处于fulfilled 或rejected状态后，它的状态永远不可能更改

promise 提供了一个then方法，在promise被fulfilled后调用。
提供了一个catch方法，在promise被rejected后调用。
*/

// 每次promise对象，最好放在try catchy语句中



// 异步函数----------async和await