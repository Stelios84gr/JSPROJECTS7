const arr = [1, 2, 4, 5, 2, 6, 7, 2, 5, 8, 9, 9, 2]

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