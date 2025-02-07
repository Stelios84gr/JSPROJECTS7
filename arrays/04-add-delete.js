const arr = [1, 2, 3, 4];
delete arr[0];              // δεν συνίσταται γιατί δημιουργεί sparse array

console.log(arr);

arr.push(5);                // προσθέτει το στοιχείο στο τέλος - παραμένει ο ίδιος array
arr.push(6, 7);
console.log(arr);

