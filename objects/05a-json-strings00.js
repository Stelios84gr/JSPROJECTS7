const jsObj = {
    id: 1,
    hobbies: [ {id: 1, title: "gym"}, {id:2, title: "music"}]
}

// serialization
const jsonStr = JSON.stringify(jsObj)
console.log(jsonStr)

// deserialization
const jsObj2 = JSON.parse(jsonStr)
console.log(jsObj2)