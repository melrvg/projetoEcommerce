
    let products = [
    {id: 1, name: "curso 1: ", price: 10.99, image: "https://cdn.pixabay.com/photo/2018/01/13/02/34/ornate-3079471_960_720.png"},
    {id: 2, name: "curso 2: ", price: 20.99, image: "img/product2.jpg"},
    {id: 3, name: "curso 3: ", price: 30.99, image: "img/product3.jpg"},
    {id: 4, name: "curso 4: ", price: 40.99, image: "img/product4.jpg"},
    {id: 5, name: "curso 5: ", price: 50.99, image: "img/product5.jpg"},
    {id: 6, name: "curso 6: ", price: 60.99, image: "img/product6.jpg"},
    {id: 7, name: "curso 7: ", price: 70.99, image: "img/product7.jpg"},
    {id: 8, name: "curso 8: ", price: 80.99, image: "img/product8.jpg"},
    {id: 9, name: "curso 9: ", price: 90.99, image: "img/product9.jpg"},
];

let cart = [];
let cesto = 0;

function renderProducts() {
    let productGrid = document.querySelector(".gradeProdutos");
    productGrid.innerHTML = "";
    products.forEach((product) => {
        let productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button>adicionar ao carrinho</button>
        `;
        productDiv.querySelector("button").addEventListener("click", () => addToCart(product.id));
        productGrid.appendChild(productDiv);
    })
}

function addToCart(productId) {
    let product = products.find((product) => product.id === productId);
    cart.push(product);
    renderCart();
    cesto++;
    let cestoCompras = document.querySelector("#cestoCompras");
    cestoCompras.innerHTML = "";
    cestoCompras.innerHTML = `CESTO[${cesto}]`;
}

function renderCart() {
    let cartTable = document.querySelector(".cart table tbody");
    cartTable.innerHTML = "";
    cart.forEach((product) => {
        let cartRow = document.createElement("tr");
        cartRow.innerHTML = `
            <td>${product.name}</td>
            <td>1</td>
            <td>${product.price}</td>
            <td>${product.price}</td>
        `;
        cartTable.appendChild(cartRow);
    });
    updateTotal();
}

function updateTotal() {
    let total = cart.reduce((acc, product) => acc + product.price, 0);
    document.getElementById(`total`).textContent = `${total.toFixed(2)}`
}

let currentProduct = 0;
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

document.getElementById("checkout").addEventListener("click", () => {
    if(cart.length === 0) {
        alert("seu carrinho esta vazio!");
    }
    else {
        alert("pedido realizado com sucesso");
        cart = [];
        renderCart();
        cesto = 0;
        cestoCompras.innerHTML = `CESTO[${cesto}]`
    }
})

renderProducts();


