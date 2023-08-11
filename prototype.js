let arr = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4, 5, 6];

// arr.sum = function(){
//     let sum = 0;
//     for(let i=0;i<this.length;i++){
//         sum+=this[i];
//     }
//     return sum
// }
// console.log(arr);
// let c = arr.sum();
// console.log(c);

// arr2.sum = function(){
//     let sum = 0;
//     for(let i=0;i<this.length;i++){
//         sum+=this[i];
//     }
//     return sum
// }

// console.log(arr2);
// arr2.sum();

Array.prototype.sum = function(){
    let sum = 0;
    for(let i=0;i<this.length;i++){
        sum+=this[i];
    }
    return sum
}

let a = arr.sum();
let b = arr2.sum();
console.log(a)
console.log(b);
console.log(arr);
console.log(arr2);
