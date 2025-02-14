const person = { name: "Alice", age: 30, address: { street: "Patission", num: 76}}
const clonedPerson = {}

// 1. spread operator provides a shallow copy
const copyPerson = {...person}
console.log(copyPerson)

// 2a. object type - provides a shallow copy
const copyPerson2a = Object.assign({}, person)
console.log(copyPerson2a)

// 2b. object type - target modified object is a shallow copy
const copyPerson2b = Object.assign(clonedPerson, person)
console.log(copyPerson2b)

// 3. Object.keys - provides a shallow copy
for (let key of Object.keys(person)) {
    clonedPerson[key] = person[key]
}

// 4. JSON function -- deep copy
const copyPerson4 = JSON.parse(JSON.stringify(person))

const person2 = { name: "Alice", age: undefined, address: { street: "Patission", num: 76}}
console.log(JSON.stringify(person2))

// 5. deep copy
const copyPerson5 = structuredClone(person)