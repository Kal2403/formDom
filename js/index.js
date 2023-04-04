const body = document.querySelector('body');
const tbodyproducts = document.querySelector('#tbodyproducts')
const btnAddUpdate = document.querySelector('#btn')

body.onload = () => {

    const products = getProducts();

    fillTable(products)
}

function fillTable(products){
    let trs = [];

    products.forEach((p, i) => {
        const tr = createRow(p);
        trs.push(tr)
    })

    tbodyproducts.append(...trs) 
}

function createRow(p){
    
    const iDelete = document.createElement('i');
    iDelete.className = 'bi bi-trash-fill';
    const tdDelete = document.createElement('td');
    tdDelete.appendChild(iDelete);

    //icono de actualizar
    const iUpdate = document.createElement('i');
    iUpdate.className = 'bi bi-pen-fill';
    const tdUpdate = document.createElement('td');
    tdUpdate.appendChild(iUpdate);

    //Columna de nombre
    const tdProduct = document.createElement('td')
    tdProduct.textContent = p.name

    //columna de existencias
    const tdStock = document.createElement('td')
    tdStock.textContent = p.stock;

    //columna de precio
    const tdPrice = document.createElement('td')
    tdPrice.textContent = p.price;

    //columna de precio
    const tdStatus = document.createElement('td')
    tdStatus.textContent = p.status;
    
    //Meter td's dentro de tr's
    const trProduct = document.createElement('tr')
    trProduct.append(
        tdDelete,
        tdUpdate,
        tdProduct,
        tdStock,
        tdPrice,
        tdStatus
    )
    // guardar tr's dentro de tbody
    return trProduct;
}


btnAddUpdate.addEventListener('click', handerAddClick);

function handerAddClick(e){
    const inProduct = document.querySelector('#inProduct');
    const inStock = document.querySelector('#inStock')
    const inPrice = document.querySelector('#inPrice')
    const inStatus = document.querySelector('#inState')

    const valueInProduct = inProduct.value;
    const valueInStock = parseInt(inStock.value);
    const valueInPrice = parseFloat(inPrice.value);
    const valueInStatus = parseInt(inStatus.value);

    const newProduct = addProducto(valueInProduct, valueInStock, valueInPrice, valueInStatus)
    const row = createRow(newProduct)
    tbodyproducts.appendChild(row)


    e.preventDefault()
}