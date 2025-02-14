const book = { author: {first: "Stelios", last: "Fridakis" } }

let lastname1 = book?.author?.last   // για να προσπελάσουμε την περίπτωση ένα απ' αυτά να είναι null

let lastname2 = book?.author?.last ?? "not provided"    // nulish coalescing operator

if (book.hasOwnProperty("author")) {
    console.log(book.author)
}