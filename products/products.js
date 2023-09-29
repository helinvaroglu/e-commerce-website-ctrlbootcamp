// products.js

// *---> Displaying products one by one (data pagination feature included)
// Make sure that your JavaScript code is executing after the DOM content has loaded !!!
document.addEventListener("DOMContentLoaded", function () {
  const productsContainer = document.getElementById("products");
  const paginationContainer = document.getElementById("pagination");

  // Number of products to display per page
  const productsPerPage = 5;

  // Calculate the total number of pages
  const totalPages = Math.ceil(shopItems.length / productsPerPage);

  // Initialize the current page to the first page
  let currentPage = 1;

  // Function to create a product card
  function createProductCard(product) {
    return `
        <div id="${product.id}" class="product-card">
            <div class="product-image">
                <img src="${product.img}" alt="${product.name}" class="product-image">
            </div>
            <div class="product-details">
                <div class="product-name">${product.name}</div>
                <div class="product-type">${product.type}</div>
                <div class="product-color">${product.color}</div>
                <div class="product-desc">${product.desc}</div>
                <div class="product-price">${product.price} TL</div>
            </div>
            <button onclick="addToCart(${product.id})" class="add-to-cart-button">Add to Cart</button>
        </div>
    `;
  }

  // Function to display products for the current page
  function displayProducts() {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToDisplay = shopItems.slice(startIndex, endIndex);

    productsContainer.innerHTML = productsToDisplay
      .map(createProductCard)
      .join("");
  }

  // Function to update pagination controls
  function updatePagination() {
    paginationContainer.innerHTML = "";
    for (let page = 1; page <= totalPages; page++) {
      const button = document.createElement("button");
      button.textContent = page;
      if (page === currentPage) {
        button.classList.add("active");
      }
      button.addEventListener("click", () => {
        currentPage = page;
        displayProducts();
        updatePagination();
      });
      paginationContainer.appendChild(button);
    }
  }

  // Initial display of products and pagination controls
  displayProducts();
  updatePagination();
});

// *---> Add to cart functionality

// persists data even after the browser is closed and reopened.
// Data stored in localStorage will remain available until explicitly
// removed by the user or cleared by your code.
let shopping_cart = JSON.parse(localStorage.getItem("shopping_cart")) || [];

// Function to add a product to the cart
function addToCart(productId) {
  // Check if the product is already in the cart
  const existingProduct = shopping_cart.find((item) => item.id === productId);

  const addedItem = shopItems.find((item) => item.id === productId);

  if (existingProduct) {
    // If the product is in the cart, increment the quantity
    existingProduct.quantity++;
  } else {
    // If the product is not in the cart, add it with a quantity of 1
    shopping_cart.push({ item: addedItem, quantity: 1 });
  }

  // Store the updated shopping_cart data in localStorage
  localStorage.setItem("shopping_cart", JSON.stringify(shopping_cart));
}
