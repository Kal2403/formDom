const products = [
    new Product('Lapiz', 20, 5, 1),
    new Product('Cuarderno', 20, 15, 1),
    new Product('Regla', 50, 10, 3),
    new Product('Goma', 200, 3, 1),
    new Product('Pluma', 0, 6, 0),
    new Product('block', 60, 40, 1)
]

function getProducts(){
    return products;
}

function addProduct(name, stock, price, status){
    const newProduct = new Product(name, stock, price, status);
    products.push(newProduct);
    return newProduct;
}