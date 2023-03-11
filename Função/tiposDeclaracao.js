console.log(soma(4,5))

//function declaration | posso chama-la antes porque o js interpreta as funçoes antes
function soma (x, y) {
    return x + y
}

console.log(soma(2,3))

//function expression
const sub = function (x, y) {
    return x- y
}

console.log(sub(2,3))

//named function expression
const mult = function mult(x, y) {
    return x* y
}

console.log(mult(2, 3))