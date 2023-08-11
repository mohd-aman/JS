// "use strict"

// console.log(this); //{} in strict as well in non strict mode

// function fn(){
//     console.log(this); // is pointing to global object in non-strict and in strict undefined.
// }

// fn(); // typing name of fxn and invoking.


let obj = {
    name:"Alex",
    sayHello:function(){
        console.log(this.name);
        // function gn(){
        //     console.log(this);
        // }
        // gn();
    }
}

obj.sayHello(); // {name:"Alex",sayHello:function()}

let directInvocation = obj.sayHello;
// console.log(directInvocation);
directInvocation(); //global object