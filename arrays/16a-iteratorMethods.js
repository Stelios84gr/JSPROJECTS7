const students = ['Alice', 'Andreas', 'Bob', 'Costas']

students.forEach(function(val, index, arr) {
    console.log(index, val)
})

students.forEach(function(stu, _, array) {      //(stu, index, array)
    console.log(stu, array);                    //(stu, index, array)
})

let filtered = students.filter(student => student === 'Andreas')    // δεν κάνει modify τον αρχικό πίνακα, επιστρέφει copy
console.log(filtered);

let mapped = students.map(student => "Student: " + student)
console.log(mapped)

const numbers = [1, 6, 9, 12]
let sum = numbers.reduce(() => total + val, 0)  // 0: initial value of total
console.log(sum)