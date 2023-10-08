
// Sepet işlevselliği -öylesine yazdım ihtiyaç olur
let cartItems = [];

function addToCart(productName, price) {
    cartItems.push({ productName, price });
    updateCart();
}

function updateCart() {
    const cartContainer = document.querySelector('.cart');
    cartContainer.innerHTML = '<h2>Sepetim</h2>';

    let total = 0;

    cartItems.forEach(item => {
        cartContainer.innerHTML += `
            <div class="cart-item">
                <img src="urun1.jpg" alt="${item.productName}">
                <span>${item.productName} - $${item.price.toFixed(2)}</span>
            </div>
        `;

        total += item.price;
    });

    cartContainer.innerHTML += `<p>Toplam: $${total.toFixed(2)}</p>`;
}




