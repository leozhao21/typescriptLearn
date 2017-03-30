/**
 * 范型
 */ 
import $ from "jquery";
class User{
    name : string;
    age : number;
}

class Order{
    price : number;
    total : number;
}

function getEntites<T>(url : string, cb : (list : T[]) => void){
    $.ajax({
        url:url,
        method:'POST',
        success: function(data){
            cb(data.item);
        },
        error: function(error){
            cb(null);
        }
    })
}

getEntites<User>('/api/users', function(users : User[]){
    for(var i=0; i < users.length; i++){
        console.log(users[i].name);
    }
})

getEntites<Order>('/api/users', function(orders : Order[]){
    for(var i=0; i < orders.length; i++){
        console.log(orders[i].total);
    }
})