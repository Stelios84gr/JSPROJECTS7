// 1
cities = ["Athens", "London", "Paris"]
cities.push("Berlin")

for (let c of cities) {
    console.log(c)
}

// 2
const user = {
    name: "Stelios",
    age: "40",
    city: "Athens",
    greet: function() {
        console.log(`Hello! My name is ${this.name}.`)
    }
}
console.log("My name is " + user.name + ".")
console.log(`I am ${user.age} years old and I live in Papagou, ${user.city}.`)

function greetUser() {
    user.greet()
}

greetUser()

// 3
function circleArea(r) {
    const pi = 3.14
    return pi*Math.pow(r, 2)
}

console.log(circleArea(2))