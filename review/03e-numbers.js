let num1 = 10;
let num2 = 3;

let divResult = num1 / num2;
let expr = (num2 / num1) * (8.5 / 3.3);

let fixedDiv = (num1 / num2).toFixed(2);    // 3.33
let intResult = Math.floor(num1 / num2);    // returns int -- the lower limit
let upperInt = Math.ceil(num1 / num2);      // returns int -- the upper limit
let roundResult = Math.round(num1 / num2);  // rounds up for .5 and up, other wise rounds down

// Το modulo διατηρεί το πρόσημο του διαιρετέου
modResult = num1 % num2;                    // JS & Java returns division remainder

console.log(divResult, expr, fixedDiv, intResult, upperInt, roundResult, modResult);