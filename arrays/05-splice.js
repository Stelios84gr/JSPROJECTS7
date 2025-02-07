const arr = [1, 2, 3, 4, 5, 6, 7, 8]

const arr2 = arr.splice(0, 4); // απ' τη θέση 0 διαγράφει 4 στοιχεία, φέρνει αυτά που διαγράφει και κάνει alter τον αρχικό πίνακα
console.log(arr2);
console.log(arr);

// Insert
arr.splice(0, 0, 10);
console.log(arr); // στη θέση 0 διάγραψε 0 στοιχεία και στη θέση τους είσαγε το 10
// Update
arr.splice(0, 1, 11); // // στη θέση 0 διάγραψε 1 στοιχείο και στη θέση του είσαγε το 11
console.log(arr);