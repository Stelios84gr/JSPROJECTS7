// 1

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

function createSubArrays(arr, subSize) {
    const subArrays = [];
    for (let i=0; i < arr.length; i+= subSize) {
        const subArr = arr.slice(i, i + subSize)
        subArrays.push(subArr)
    }
    return subArrays
}

console.log(createSubArrays(arr, 4))

// 2

let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let arr2 = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

// function arrJoin(arr1, arr2) {
//     const jointArr = []
//     for (let i=0; i < arr1.length; i++) {
//         if (arr2.includes(arr1[i]) && !jointArr.includes(arr1[i])) {
//             jointArr.push(arr1[i])
//         }
//     }
//     return jointArr
// }

function arrJoin(arr1, arr2) {
    const set1 = new Set(arr1)
    const set2 = new Set(arr2)
    return [...new Set([...set1].filter(value => set2.has(value)))]
}

console.log(arrJoin(arr1, arr2))

