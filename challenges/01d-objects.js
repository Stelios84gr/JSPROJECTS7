// 1

const obj = {
    id: 1,
    firstname: "Stelios",
    lastname: "Fridakis",
    age: 40,
    location: "Athens"
}

const arr = ['firstname','age','location']

function selectProperties(obj, arr) {
    const newObj = {}
    for (let i = 0; i < arr.length; i++) {
        const key = arr[i]
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key]
        }
    }
    return newObj
}

console.log(selectProperties(obj, arr))

// 2

function mapping(obj) {
  let keys = Object.keys(obj).map((key) => key.toUpperCase());
  let values = Object.values(obj).map((value) => {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else {
        return value
    }
  });

  let transformedObj = {};
  keys.forEach((key, index) => {
    transformedObj[key] = values[index]
  })

  return transformedObj;
};

function transformObj(obj, mapping) {
    return mapping(obj)
}

console.log(transformObj(obj, mapping));

// 3

function modifyObj(obj, callback) {
    let modifiedObj = {};

    for (let key in obj) {
        modifiedObj[key] = callback(key, obj[key])
    }

    return modifiedObj;
}

function modifyValue(key, value) {
    if (typeof value === 'string') {
        return value.toLowerCase()
    } else return value
}

const anotherObj = modifyObj(obj, modifyValue)
console.log(anotherObj)