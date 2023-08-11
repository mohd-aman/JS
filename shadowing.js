// let fruits = "apple";
// console.log(fruits); //apple

// {
//     // console.log(fruits); //error tdz
//     let fruits; 
//     console.log(fruits);
//     fruits = "orange";
//     {
//         console.log(fruits)
//     }
//     console.log(fruits);
// }

// console.log(fruits);



// legal
// var fruits = "apple"; //apple
// console.log("21",fruits); 
// { 
//     let fruits; // undefined
//     console.log("25",fruits); //undefined
//     fruits = "orange"; //orange
//     {
//         let fruits; //undefined
//         console.log("28",fruits) //undefined
//     }
//     console.log(fruits); //orange
// }
// console.log(fruits); // apple



//illegal shadowing
// let fruits = "apple";
// console.log("21",fruits); // apple
// { 
//     let fruits;
//     fruits = "orange";
//     console.log("25",fruits);
//     {
//         var fruits;
//         console.log("28",fruits)
//     }
//     console.log(fruits);
// }
// console.log(fruits);
