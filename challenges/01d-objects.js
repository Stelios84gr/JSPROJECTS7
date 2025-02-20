// 1

const obj = {
    id: 1,
    firstname: "Stelios",
    lastname: "Fridakis",
    age: 40,
    location: "Athens"
}

const arr = [obj['firstname'], obj['age'], obj['location']]

function selectProperties(obj, arr) {
    for (let i = 0; i < arr.length; i++) {
        const newObj = {}
    }
    return newObj
}

console.log(selectProperties(obj, arr))