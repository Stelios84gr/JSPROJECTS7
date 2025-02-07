const arr = [1, 2, 3];
console.log(arr.join(","));         // string με τα στοιχεία του array ενωμένα με ","

//          OR
//
// let out = "";
// for (const item of arr) {
//     out += item + ", "
// }
// console.log(out);

const arr1 = [4, 5, 6]
const arr2 = [7, [8, 9]]
const arr3 = arr1.concat(arr2);
console.log(arr3)               // δημιουργία νέου array με δυνατότητα nested arrays