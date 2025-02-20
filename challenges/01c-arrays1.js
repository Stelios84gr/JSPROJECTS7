// 1

let arr1 = [1, 7, 3, 5, 9, 6, 2, 1, 4, 5, 3]

function getUniques(arr) {
    const arrUniques = []

    for (let i = 0; i < arr.length; i++) {
        if (!arrUniques.includes(arr[i])) {
            arrUniques.push(arr[i])
        }
    }
    return arrUniques
}

console.log(getUniques(arr1))

// 2

let arr2 = [1, [2, [3, [4, 5, 6, 7, 8, 9]]]]

function returnFlatArr(arr) {
    const newArr = arr.flat(Infinity)
    return newArr
}

console.log(returnFlatArr(arr2))