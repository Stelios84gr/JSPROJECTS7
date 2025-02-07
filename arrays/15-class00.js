class ProductAlreadyExistsError extends Error {
    constructor(message) {
        super(message)
        this.code = "ProductExists"     // κωδικός λάθους
    }
}

class ProductNotFoundError extends Error {
  constructor(message) {
    super(message);
    this.cod = "ProductNotFound";
  }
}

try {
    throw new ProductNotFoundError("Product not found")
} catch (error) {
    if (error instanceof ProductNotFoundError) {
        console.error("Product does not exist. \n" + error.message, error.code)
    } else if (error instanceof ProductAlreadyExistsError) {
        console.error("Product already exists\n" + error.message, error.code)
    }
}