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
            <td style="text-align: center">
                <button class="quantity-button decrease" data-action="decrease">-</button>
                <span>${product.quantity}</span>
                <button class="quantity-button increase" data-action="increase">+</button>
            </td>
            <td class="subtotal">${calculateSubtotal(product.quantity, product.item.price)}₺</td>
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
                subtotalCell.textContent = `${calculateSubtotal(product.quantity, product.item.price)}₺`; 
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
            subtotalCell.textContent = `${calculateSubtotal(product.quantity, product.item.price)}₺`; 
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
        totalRow.querySelector('td:last-child').textContent = `${total}₺`; 
    }

    products.forEach((product, index) => {
        const row = createProductRow(product, index);
        tableBody.appendChild(row);

        total += calculateSubtotal(product.quantity, product.item.price);
    });

    totalRow.innerHTML = `
        <td colspan="2" style="color: #e91e63"><strong>Total Price</strong></td>
        <td><strong>${total}₺</strong></td>
    `;
    tableBody.appendChild(totalRow);
});
