// main.js
document.addEventListener("DOMContentLoaded", function () {
    // Function to calculate subtotal
    function calculateSubtotal(quantity, price) {
        return quantity * price;
    }

    // Retrieve product data from local storage
    let products = JSON.parse(localStorage.getItem('shopping_cart')) || [];
    console.log(products);

    // Reference to the table body, the total row, and the total price
    const tableBody = document.getElementById('productTableBody');
    const totalRow = document.createElement('tr'); // Create a new row for the total
    let total = 0; // Initialize the total price

    // Function to create a row for a product
    function createProductRow(product, index) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.item.name}</td>
            <td style="text-align: center">
                <button class="quantity-button decrease" data-action="decrease">-</button>
                <span>${product.quantity}</span>
                <button class="quantity-button increase" data-action="increase">+</button>
            </td>
            <td class="subtotal">$${calculateSubtotal(product.quantity, product.item.price)}</td>
        `;

        // Add event listeners for the quantity buttons in this row
        const decreaseButton = row.querySelector('[data-action="decrease"]');
        const increaseButton = row.querySelector('[data-action="increase"]');
        const quantitySpan = row.querySelector('span');
        const subtotalCell = row.querySelector('.subtotal');

        decreaseButton.addEventListener('click', () => {
            if (product.quantity > 1) {
                product.quantity--;
                updateCart();
                quantitySpan.textContent = product.quantity; // Update the quantity display
                subtotalCell.textContent = `$${calculateSubtotal(product.quantity, product.item.price)}`; // Update subtotal
                updateTotal(); // Update the total
            } else {
                // Remove the product if quantity becomes 0
                products.splice(index, 1);
                tableBody.removeChild(row);
                updateCart();
                updateTotal();
            }
        });

        increaseButton.addEventListener('click', () => {
            product.quantity++;
            updateCart();
            quantitySpan.textContent = product.quantity; // Update the quantity display
            subtotalCell.textContent = `$${calculateSubtotal(product.quantity, product.item.price)}`; // Update subtotal
            updateTotal(); // Update the total
        });

        return row;
    }

    // Function to update the cart
    function updateCart() {
        localStorage.setItem('shopping_cart', JSON.stringify(products));
    }

    // Function to update the total price
    function updateTotal() {
        total = products.reduce((acc, product) => {
            return acc + calculateSubtotal(product.quantity, product.item.price);
        }, 0);
        totalRow.querySelector('td:last-child').textContent = `$${total}`; // Update the total in the total row
    }

    // Populate the table with product data and update the initial total
    products.forEach((product, index) => {
        const row = createProductRow(product, index);
        tableBody.appendChild(row);

        // Update the total price
        total += calculateSubtotal(product.quantity, product.item.price);
    });

    // Set the total row
    totalRow.innerHTML = `
        <td colspan="2" style="color: #e91e63"><strong>Total</strong></td>
        <td><strong>$${total}</strong></td>
    `;
    tableBody.appendChild(totalRow);
});
