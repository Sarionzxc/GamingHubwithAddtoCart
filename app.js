// Your existing code...

let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
});

closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
});

let products = [
    {
        id: 1,
        name: 'Razor Gaming Mouse',
        image: 'razor.png',
        price: 550,
        discount: 5,
    },
    {
        id: 2,
        name: 'Gaming Headphone',
        image: 'headset.jpg',
        price: 760,
        discount: 10,
    },
    
    {
        id: 3,
        name: 'Gaming Keyboard',
        image: 'Keyboard.jpg',
        price: 995,
        discount: 8,
       
    },
    {
        id: 4,
        name: 'Gaming Chair',
        image: 'chair.jpg',
        price: 995,
        discount: 5,
       
    },
    {
        id: 5,
        name: 'Black Shark 3',
        image: 'Black Shark 3.jpg',
        price: 15495,
        discount: 10,
       
    },
    {
        id: 6,
        name: 'Gaming Laptop',
        image: 'asus rog.jpg',
        price: 68599,
        discount: 15,

       
    },
    {
        id: 7,
        name: 'Controller',
        image: 'Controllers.jpg',
        price: 1095,
        discount: 10,
       
    },
    {
        id: 8,
        name: 'Case',
        image: 'pink case.jpg',
        price: 995,
        discount: 5,
       
    },
    {
        id: 9,
        name: 'Pc set',
        image: 'pc set.jpg',
        price: 47990,
        discount: 15,
       
    },

];

let listCards = [];

function initApp() {
    let productsContainer = document.querySelector('.box-container');

    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('box');
        newDiv.innerHTML = `
            <span class="discount">-${value.discount}%</span>
            <div class="image">
                <img src="images/${value.image}" alt="">
                <div class="icons">
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="cart-btn" onclick="addToCard(${key})">Add To Cart</a>
                    <a href="#" class="fas fa-share"></a>
                </div>
            </div>
            <div class="content">
                <h3>${value.name}</h3>
                <div class="price">${value.price}</div>
            </div>`;

        productsContainer.appendChild(newDiv);
    });
}

function addToCard(key) {
    if (listCards[key] == null) {
        // Copy product from list to list card
        listCards[key] = { ...products[key], quantity: 1 };
    } else {
        listCards[key].quantity += 1;
    }
    reloadCard();
}

function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;

    listCards.forEach((value, key) => {
        totalPrice += value.price * value.quantity;
        count += value.quantity;

        let newDiv = document.createElement('li');
        newDiv.innerHTML = `
            <div><img src="images/${value.image}" alt=""></div>
            <div>${value.name}</div>
            <div>${(value.price * value.quantity).toLocaleString()}</div>
            <div>
                <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                <div class="count">${value.quantity}</div>
                <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
            </div>`;
        listCard.appendChild(newDiv);
    });

    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity) {
    if (quantity === 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
    }
    reloadCard();
}

// Call the initApp function
initApp();
