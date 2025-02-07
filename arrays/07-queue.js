const queue = [1, 2, 3, 4, 5];

queue.push(6);
console.log(queue);

let first = queue.shift(1); // διαγράφει κι επιστρέφει 1 στοιχείο από την αρχή του array
console.log(first);
console.log(queue);