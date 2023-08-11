let obj = {
    name:"Alex",
    age:"50",
    sayHello: function(){
        console.log("Hello from object")
    }
}

function fn(){
    console.log("Hello from function");
}

// console.log(fn);

let name = obj.name;
console.log(name);
let age = obj.age;
console.log(age);
obj.sayHello();
let sayHello = obj.sayHello;
console.log(sayHello);
sayHello()