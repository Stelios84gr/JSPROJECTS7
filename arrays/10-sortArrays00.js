const cities = ["Paris", "London", "Berlin", "Athens"];
const numbers = [10, 101, 103, 77, 99, 123, 690, 590];

console.log(cities.sort());     // Σορτάρει με βάση το ASCII code.
console.log(numbers.sort());    // Δεν βολεύει για numbers.

// numbers.sort(function(a, b) {   // Σορτάρει ASC
//     if (a > b) return 1;
//     if (a < b) return -1;
//     if (a === b) return 0;
// })
numbers.sort(function(a, b) {
    return a - b;
})

console.log(numbers);
console.log(numbers.reverse());