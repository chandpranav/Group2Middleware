//Show we are in sum.js
console.log("inside sum.js")

var a = 10

function sum(a,b){
    const total = a+b
    return total;
}

//exports the sum function
module.exports = {a, sum};
console.log(module.exports)