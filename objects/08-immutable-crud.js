const obj = { id: 1, firstname: "Alice" }

// add properties

// modify object
obj.lastname = "W."
console.log(obj)

// immutable - fresh shallow copy
const addToObject = (obj, field, value) => ( {...obj, [field]: value} )
const objCopy = addToObject(obj, "lastname", "W.")
console.log(objCopy)

// modify / update properties
obj.firstname = "Stelios"
console.log(obj)

// immutable - fresh shallow copy
const updateObj = (obj, field, newVal) => ({...obj, [field]: newVal})   // χρήση παρενθέσεων αντί {} για να ξεχωρίζουν με τα {} του object
const updatedObj = updateObj(obj, "firstname", "Stelios")
console.log(updatedObj)

// delete object property

//immutable - fresh shallow copy
const deleteIdFromObj = (obj, field) => {
    const { [field]: _ , ...objToReturn } = obj
    return objToReturn
}

const objFromDelete = deleteIdFromObj(obj, "id");
console.log(objFromDelete)