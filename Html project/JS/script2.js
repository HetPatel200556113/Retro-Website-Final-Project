// Selecting DOM elements
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

// Adding event listeners for opening and closing the shopping cart
openShopping.addEventListener('click', () => {
    body.classList.add('active');
});
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
});

// Array of products
let products = [
{
        id: 1,
        name: 'PRODUCT NAME 1',
        image: '../images/photo5.jpg',
        price: "$100"
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        image: '../images/photo6.jpg',
        price: "$100"
    },
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        image: '../images/photo7.jpg',
        price: "$100"
    },
    {
        id: 4,
        name: 'PRODUCT NAME 4',
        image: '../images/photo8.jpg',
        price: "$100"
    },
    {
        id: 5,
        name: 'PRODUCT NAME 5',
        image: '../images/photo.jpg',
        price: "$100"
    },
    {
        id: 6,
        name: 'PRODUCT NAME 6',
        image: '../images/photo2.jpg',
        price: "$100"
    }];

// Initializing the app by creating product items
let listCards  = [];
function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    });
}
initApp();

// Adding a product to the shopping cart
function addToCard(key) {
    if (listCards[key] == null) {
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}

// Reloading the shopping cart with selected items
function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
            
            totalPrice += value.price;
            count += value.quantity;
        }
    });
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

// Changing the quantity of an item in the shopping cart
function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
