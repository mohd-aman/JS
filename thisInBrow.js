// "use strict"
// console.log(this); //window object in non strict as well strict mode.


// function fn(){
//     console.log(this); //window object in non strict and undefined in strict mode
// }

// fn();



let obj = {
    name:"Alex",
    sayHello:function(){
        console.log(this);
        // arrow ->  does not have it's own this. I am going to cheat it from outside 
        const subInner = () => {
                        console.log(this);
                        const iAmInner = () => {
                            console.log(this);
                        }
                        iAmInner();
                    }
        subInner();
        // function gn(){
        //     console.log(this);
        // }
        // gn();
    },
    hello:()=>{
        console.log(this);
    }

}

obj.hello();
let a = obj.hello;
a();
// obj.sayHello(); // {name:"Alex",sayHello:function()}

// let directInvocation = obj.sayHello;
// // // console.log(directInvocation);
// directInvocation(); //global object

