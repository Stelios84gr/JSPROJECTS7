const Obj = {
    id: 1,
    hobbies: [ {id: 1, title: "gym"}, {id:2, title: "music"} ]
}
console.log(Obj)

// serialization
const jsonStr = JSON.stringify(Obj)
console.log(jsonStr)

// deserialization
const Obj2 = JSON.parse(jsonStr)
console.log(Obj2)