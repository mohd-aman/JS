// {} ->block what does? why we use ?

// let and const are block scope 

// let a = 10;

// {   
//     let a = 20;
//     console.log(a);
//     {
//         let a = 30;
//         console.log(a)
//     }
// }

// console.log(a);

let a = 10;
console.log("line number 2", a);
function fn() {
    console.log("line number 4", a);
    let a = 20;
    console.log("line number 4", a);
    a++;
    console.log("line number 7", a);
    if (a) {
        let a = 30;
        a++;
        console.log("line number 11", a);
    }
    console.log("line number 13", a);
}
fn();
console.log("line number 16", a);