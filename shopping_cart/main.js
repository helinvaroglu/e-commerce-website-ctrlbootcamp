document.addEventListener("DOMContentLoaded", function () {
    function calculateSubtotal(quantity, price) {
        return quantity * price;
    }

    let products = JSON.parse(localStorage.getItem('shopping_cart')) || [];
    console.log(products);

    const tableBody = document.getElementById('productTableBody');
    const totalRow = document.createElement('tr'); 
    let total = 0; 

    function createProductRow(product, index) {
        const row = document.createElement('tr');
        row.innerHTML = `
<<<<<<< Updated upstream
            <td>${product.item.name}</td>
=======
            <td>
                <div class="cart-info">
                    <div>
                        <img src="${product.item.img}" alt="${product.item.name}">
                    </div>
                    <div class="cart-info-details">
                        <p class="name-product">${product.item.name}</p>
                        <p class="type-product">${product.item.type} - (${product.item.color})</p>
                        <p class="desc-product">${product.item.desc}</p>
                        <small class="price-product">Price : ${product.item.price}₺</small>
                    </div>
                    
                </div>
            </td>
>>>>>>> Stashed changes
            <td style="text-align: center">
                <button class="quantity-button decrease" data-action="decrease">-</button>
                <span>${product.quantity}</span>
                <button class="quantity-button increase" data-action="increase">+</button>
            </td>
<<<<<<< Updated upstream
            <td class="subtotal">$${calculateSubtotal(product.quantity, product.item.price)}</td>
=======
            <td class="subtotal">${calculateSubtotal(product.quantity, product.item.price)}₺</td>
>>>>>>> Stashed changes
        `;

        const decreaseButton = row.querySelector('[data-action="decrease"]');
        const increaseButton = row.querySelector('[data-action="increase"]');
        const quantitySpan = row.querySelector('span');
        const subtotalCell = row.querySelector('.subtotal');

        decreaseButton.addEventListener('click', () => {
            if (product.quantity > 1) {
                product.quantity--;
                updateCart();
                quantitySpan.textContent = product.quantity; 
<<<<<<< Updated upstream
                subtotalCell.textContent = `$${calculateSubtotal(product.quantity, product.item.price)}`; 
=======
                subtotalCell.textContent = `${calculateSubtotal(product.quantity, product.item.price)}₺`; 
>>>>>>> Stashed changes
                updateTotal(); 
            } else {
                products.splice(index, 1);
                tableBody.removeChild(row);
                updateCart();
                updateTotal();
            }
        });

        increaseButton.addEventListener('click', () => {
            product.quantity++;
            updateCart();
            quantitySpan.textContent = product.quantity; 
<<<<<<< Updated upstream
            subtotalCell.textContent = `$${calculateSubtotal(product.quantity, product.item.price)}`; 
=======
            subtotalCell.textContent = `${calculateSubtotal(product.quantity, product.item.price)}₺`; 
>>>>>>> Stashed changes
            updateTotal(); 
        });

        return row;
    }

    function updateCart() {
        localStorage.setItem('shopping_cart', JSON.stringify(products));
    }

    function updateTotal() {
        total = products.reduce((acc, product) => {
            return acc + calculateSubtotal(product.quantity, product.item.price);
        }, 0);
<<<<<<< Updated upstream
        totalRow.querySelector('td:last-child').textContent = `$${total}`; 
=======
        totalRow.querySelector('td:last-child').textContent = `${total}₺`; 
>>>>>>> Stashed changes
    }

    products.forEach((product, index) => {
        const row = createProductRow(product, index);
        tableBody.appendChild(row);

        total += calculateSubtotal(product.quantity, product.item.price);
    });

    totalRow.innerHTML = `
<<<<<<< Updated upstream
        <td colspan="2" style="color: #e91e63"><strong>Total</strong></td>
        <td><strong>$${total}</strong></td>
=======
        <td colspan="2" style="color: #e91e63"><strong>Total Price</strong></td>
        <td><strong>${total}₺</strong></td>
>>>>>>> Stashed changes
    `;
    tableBody.appendChild(totalRow);
});
