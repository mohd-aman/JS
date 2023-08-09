console.log(n); //hoisted
var n = 10;

var n = 20; //redeclartion allowed


// let redeclaration not allowed

// console.log(a); // temporal dead zone 

let a = 10;
console.log(a);
a = 20;
console.log(a);

//const redeclaration not allowed and re assignment is not allowed.
// console.log(b); // temporal dead zone, can't access before declaring.
const b = 20;
console.log(b);
// b = 30; //not allowed can't re assign
// console.log(b);

