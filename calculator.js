// A calculator object that contains functions for the basic operations: 
// add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.
const calculator = function (x, y) {
    const add = (x, y) => {
        return x + y;
    }
    const substract = (x, y) => {
        return x - y;
    }
    const multiply = (x, y) => {
        return x * y;
    }
    const div = (x, y) => {
        return x / y;
    }
    let object = {
        addition: add(x, y),
        substraction: substract(x, y),
        multiplication: multiply(x, y),
        division: div(x, y),
    }
    return object;
}
// Do not edit below this line
module.exports = calculator;