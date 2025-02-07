const products = []

function insert(arr, product) {
    if (!arr || !product) return

    try {
        if (arr.includes(product)) {
            throw new Error("Product Already Exists")
        }
        products.push(product)
    } catch (error) {
        console.error(error.message, error.trace)
        throw error     // rethrow γίνεται έτσι ώστε να το κάνει catch ο caller, στη συγκεκριμένη περίπτωση, ένα υποτιθέμενο try - catch στα παρακάτω insert & console.log.
    }
}

insert(products, "Apples")
console.log(products)
insert(products, "Apples")
console.log(products)