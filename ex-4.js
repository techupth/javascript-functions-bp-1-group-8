// Exercise #4 Grouping Function with Objects

// Start coding here
let add = (a,b) => {
    return a + b;
};
let subtract = (a,b) => {
    return a - b;
};
let mutiply = (a,b) => {
    return a * b;
};
let divide = (a,b) => {
    return a/b;
};

let calculator = {
    add: add,
    subtract: subtract,
    mutiply: mutiply,
    divide: divide,
};

let resultAdd = add (10,20)
console.log(resultAdd)
let resultDivide = divide (3000,10)
console.log(resultDivide)