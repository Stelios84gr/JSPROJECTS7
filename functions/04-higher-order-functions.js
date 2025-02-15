// higher-order functions
// function factory
// closure
function createMultiplier(multiplier) {
    return function(num) {
        return num * multiplier
    }
}

// OR

const createMultiplier2 = (multiplier) => (num) => mum * multiplier     // function-arrow alternative

const double = createMultiplier(2)
const triple = createMultiplier(3)
console.log(double(5))