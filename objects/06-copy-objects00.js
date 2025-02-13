const initial = { name: "Alice", age: 30, address: { street: "Patission", num: 76}}

// 1. spread operator provides a shallow copy
const copyInitial = {...initial}
console.log(copyInitial)

// 2. object type
const copyInitial2 = Object.assign({}, initial)

// 3. JSON function -- deep copy
const copyInitial3 = JSON.parse(JSON.stringify(initial))

const intial2 = { name: "Alice", age: undefined, address: { street: "Patission", num: 76}}
console.log(JSON.stringify(initial2))

// 4. deep copy
const copyInitial4 = structuredColone(initial)