//import { sum } from "./sum.js"
//Runs sum.js before start and allows use of var a and function sum
const {a, sum} = require("./sum")

console.log(a) // Prints 10

console.log(sum(10,20)); // prints 30
//Print statement to show in app.js
console.log("in app.js")

//Common js
//Only works sync
//ES6
//Works sync and async

//What does require do
// 1 -> resolves the path .js, json, img
// 2 -> Loads all the contexts
// 3 -> Wraps the module inside LIFE
// 4 -> Evaluates the function
// 5 -> Caching

(function () {
    console.log('abc');
})()