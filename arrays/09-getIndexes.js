const arr = [1, 2, 4, 5, 2, 6, 7, 2, 5, 8, 9, 9, 2]

/**
 * Returns ar array of indexes with the
 * occurences of a value in an array.
 * 
 * @param {Array} arr - the source array
 * @param {Number} val - the element to compare
 * @returns an array with the indexes where the element is found
 */
const getIndexes = (arr, val) => {
    const indexes = [];

    arr.forEach((v, index) => {
        if (v == val ) {
            indexes.push(index)
        }
    })

    //          OR
    //
    // arr.forEach(function(v, index) {
    //     if (v === val) {
    //         indexes.push(index);
    //     }
    // })
    return indexes
}

console.log(getIndexes(arr, 2));