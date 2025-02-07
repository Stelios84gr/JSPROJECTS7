    const arr = [1, 2, 3, 2, 5, 2]

// Θα μπορούσαμε να ξεκινήσουμε απ' την αρχή με if και splice, αλλά τότε θα αναδιοργανωνόταν ο πίνακας. Καλύτερα να διαγράφουμε απ' το τέλος, γιατί έτσι δεν κινδυνεύει ν' αλλάξει η θέση των προηγούμενων στοιχείων.

const deleteBackwards = (arr, val) => {
    if (!arr) return;   // αν είναι null το array, να μην μπει καν στην while
    let i = arr.length - 1;

    while (i) {
        if (arr[i] === val) {
            arr.splice(i, 1);
        }
        i--
    }
}

deleteBackwards(arr, 2)
console.log(arr)