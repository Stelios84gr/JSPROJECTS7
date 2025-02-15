// 1. basic function definition
// console.log(greet("Alice"))     // μπορεί να μπει εδώ γιατί γίνεται hoisted

function greet(name) {
    return `Hello, ${name}`
}

function add(a,b) {
    return a + b
}

console.log(greet("Alice"))


// 2. function expressions
const mul = function (a, b) {
    return a * b
}

let result = mul(3, 4)          // κι εδώ γίνεται hoisted αλλά ως undefined

// 3. arrow function
const div1 = (a, b) => { return (a / b) }    // αν είχαμε περισσότερες της μία εντολές
const div2 = (a, b) => a / b