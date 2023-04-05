const body = document.querySelector('body');
const tbodyproducts = document.querySelector('#tbodyproducts')
const btnAddUpdate = document.querySelector('#btn')
const inProduct = document.querySelector('#inProduct')
const inStock = document.querySelector('#inStock')
const inPrice = document.querySelector('#inPrice')
const inStatus = document.querySelector('#inState')

body.onload = () => {

    const products = getProducts();

    fillTable(products)
}

function fillTable(products){
    let trs = [];

    products.forEach((p, i) => {
        const tr = createRow(p, i);
        trs.push(tr)
    })

    tbodyproducts.append(...trs) 
}

function clearTable(){
    tbodyproducts.innerHTML = ''
}

function createRow(p, i){
    
    const iDelete = document.createElement('i');
    iDelete.className = 'bi bi-trash-fill';
    const tdDelete = document.createElement('td');
    tdDelete.appendChild(iDelete);
    iDelete.addEventListener('click', () => {
        const isconfirm = confirm('Estas Seguro de Eliminar')
        if(isconfirm){
            deleteProduct(i)
            clearTable()
            fillTable(getProducts())
        }
    })

    //icono de actualizar
    const iUpdate = document.createElement('i');
    iUpdate.className = 'bi bi-pen-fill';
    iUpdate.addEventListener('click', () => {
        inProduct.value = p.name
        inStock.value = p.stock 
        inPrice.value = p.price
        inStatus.value = p.status
        btnAddUpdate.textContent = 'Actualizar'

        btnAddUpdate.onclick = (e) => handerUpdateClick(e, i)
    })

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


btnAddUpdate.onclick = handerAddClick

function handerAddClick(e){
    const valueInProduct = inProduct.value;
    const valueInStock = parseInt(inStock.value)
    const valueInPrice = parseFloat(inPrice.value)
    const valueInStatus = parseInt(inStatus.value)
    const i = getProducts().length

    const newProduct = addProduct(valueInProduct, valueInStock, valueInPrice, valueInStatus)
    const row = createRow(newProduct, i)
    tbodyproducts.appendChild(row)
    alert('Producto Creado')

    e.preventDefault()
}

function handerUpdateClick(e, i){
    const valueInProduct = inProduct.value;
    const valueInStock = parseInt(inStock.value)
    const valueInPrice = parseFloat(inPrice.value)
    const valueInStatus = parseInt(inStatus.value)

    updateProduct(i, valueInProduct, valueInStock, valueInPrice, valueInStatus)
    clearTable()
    const products = getProducts()
    fillTable(products)
    inProduct.value = ''
    inStock.value = ''
    inPrice.value = ''
    inStatus.value = ''
    btnAddUpdate.textContent = 'AGREGAR';
    alert('Producto Actualizado')

    e.preventDefault()
}

