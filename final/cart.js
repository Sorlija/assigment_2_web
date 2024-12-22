const cart = [
    { id: 1, name: "Dumbbells", price: 30, quantity: 0, img: "dumbbells.jpg" },
    { id: 2, name: "Yoga Mat", price: 20, quantity: 0, img: "yoga-mat.jpg" },
    { id: 3, name: "Resistance Bands", price: 15, quantity: 0, img: "resistance-bands.jpg" },
    { id: 4, name: "Kettlebell (10kg)", price: 35, quantity: 0, img: "kettlebell.jpg" },
    { id: 5, name: "Foam Roller", price: 18, quantity: 0, img: "foam-roller.jpg" },
    { id: 6, name: "Pull-Up Bar", price: 40, quantity: 0, img: "pull-up-bar.jpg" },
    { id: 7, name: "Jump Rope", price: 10, quantity: 0, img: "jump-rope.jpg" },
    { id: 8, name: "Medicine Ball (5kg)", price: 30, quantity: 0, img: "medicine-ball.jpg" },
    { id: 9, name: "Workout Gloves", price: 12, quantity: 0, img: "workoutgloves.jpg" },
    { id: 10, name: "Adjustable Dumbbells", price: 50, quantity: 0, img: "dumbbellss.jpg" },
    { id: 11, name: "Yoga Block", price: 8, quantity: 0, img: "yoga.jpg" },
    { id: 12, name: "Treadmill Mat", price: 20, quantity: 0, img: "mat.jpg" },
    { id: 13, name: "Rowing Machine", price: 200, quantity: 0, img: "rowing-machine.jpg" },
    { id: 14, name: "Boxing Gloves", price: 25, quantity: 0, img: "box.jpg" },
    { id: 15, name: "Rowing Machine", price: 200, quantity: 0, img: "rowing-machine.jpg" },
    { id: 16, name: "Boxing Gloves", price: 25, quantity: 0, img: "box.jpg" },
    { id: 17, name: "Power Tower", price: 150, quantity: 0, img: "tower.jpg" },
];
function displayCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = '';  // Clear the container

    let totalPrice = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div class="item-details">
                <h5>${item.name}</h5>
                <p>$${item.price}</p>
            </div>
            <div class="quantity-control">
                <button onclick="updateQuantity(${item.id}, 'decrease')">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity(${item.id}, 'increase')">+</button>
            </div>
            <div class="item-total">$${itemTotal.toFixed(2)}</div>
            <button class="btn btn-danger" onclick="removeItem(${item.id})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
}

function updateQuantity(id, action) {
    const item = cart.find(item => item.id === id);
    if (action === 'increase') {
        item.quantity += 1;
    } else if (action === 'decrease' && item.quantity > 1) {
        item.quantity -= 1;
    }
    displayCart(); 
}

function removeItem(id) {
    const itemIndex = cart.findIndex(item => item.id === id);
    cart.splice(itemIndex, 1);
    displayCart();  
}
function continueShopping() {
    window.location.href = "index.html";  
}

function checkout() {
    alert("Proceeding to checkout...");
}

displayCart();
