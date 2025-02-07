const book = { author: {first: "Th.", last: "Andr"} }

let lastname = book?.author?.last   // για να προσπελάσουμε την περίπτωση ένα απ' αυτά να είναι null

console.log(lastname)