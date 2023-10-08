
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

                <span>${product.quantity}</span>
             
            </td>
            <td class="subtotal">$ ${calculateSubtotal(product.quantity, product.item.price)}</td>
        `;


        return row;
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
    
        <p class="Sum-of-checkout">Total: $${total}</p>
    `;
    
    
    tableBody.appendChild(totalRow);
});


// document.querySelector('checkout-button').addEventListener('click', function() {
//     let card = document.getElementById('thank-you-card');
//     card.style.display = 'block';
//     card.style.opacity = '1';
//     card.innerHTML = 'Thanks for shopping here!';

//     setTimeout(function() {
//         card.style.opacity = '0';
//     }, 5000);

//     setTimeout(function() {
//         card.style.display = 'none';
//     }, 5500);
// });