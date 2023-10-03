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
     
    function filterProducts(searchText) {
      const filteredProducts = shopItems.filter(product => {
          return product.name.toLowerCase().includes(searchText.toLowerCase())
          || product.color.toLowerCase().includes(searchText.toLowerCase())
          || product.type.toLowerCase().includes(searchText.toLowerCase()) ;
      });
  
        displayProducts(filteredProducts);
        updatePagination(filteredProducts);
  
  }
  // Add event listener to search button
  const searchButton = document.getElementById("search-button");
  searchButton.addEventListener("click", () => {
      const searchText = document.getElementById("search-input").value;
      filterProducts(searchText);
  
  });
  
    // Function to display products for the current page
    function displayProducts(productsToDisplay) {
        productsContainer.innerHTML = productsToDisplay
            .map(createProductCard)
            .join("");
    }
  
    // Function to update pagination controls
    function updatePagination(productType) {
        paginationContainer.innerHTML = "";
        for (let page = 1; page <= totalPages && page < productType.length/ productsPerPage; page++) {
            const button = document.createElement("button");
            button.textContent = page;
            if (page === currentPage) {
                button.classList.add("active");
            }
            button.addEventListener("click", () => {
                currentPage = page;
                displayProducts(getCurrentPageProducts(productType));
                updatePagination(productType);
            });
            paginationContainer.appendChild(button);
        }
    }
  
    // Function to get products for the current page
    function getCurrentPageProducts(productType) {
        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        return productType.slice(startIndex, endIndex);
    }
    document.getElementById("all-product").addEventListener("click", () => {
        currentPage = 1;
        const initialProducts = getCurrentPageProducts(shopItems);
        displayProducts(initialProducts);
        updatePagination(shopItems);
    });
    
    document.getElementById("mobile-phone").addEventListener("click", () => {
        currentPage = 1;
        const filteredPr = shopItems.filter(pr=> pr.type ==="Mobile Phone");
        const mobilePhoneProducts = getCurrentPageProducts(filteredPr).filter(product => product.type === "Mobile Phone");
        displayProducts(mobilePhoneProducts);
        updatePagination(filteredPr);
    });
  
    document.getElementById("laptop").addEventListener("click", () => {
        currentPage = 1;
        const filteredPr = shopItems.filter(pr=> pr.type ==="Laptop");
        const lafilteredPropProducts = getCurrentPageProducts(filteredPr).filter(product => product.type === "Laptop");
      
        displayProducts(lafilteredPropProducts);
        updatePagination(filteredPr);
    });
    document.getElementById("earphone").addEventListener("click", () => {
        currentPage = 1;
        const filteredPr = shopItems.filter(pr=> pr.type ==="Earphone");
        const lafilteredPropProducts = getCurrentPageProducts(filteredPr).filter(product => product.type === "Earphone");
        
        displayProducts(lafilteredPropProducts);
        updatePagination(filteredPr);
    });
    document.getElementById("headphone").addEventListener("click", () => {
        currentPage = 1;
        const filteredPr = shopItems.filter(pr=> pr.type === "Headphone");
        const headProducts = getCurrentPageProducts(filteredPr).filter(product => product.type === "Headphone");
    
        displayProducts(headProducts);
        updatePagination(filteredPr);
    });
  
    // Initial display of products and pagination controls
    const initialProducts = getCurrentPageProducts(shopItems);
    displayProducts(initialProducts);
    updatePagination(shopItems);
  
});
  
  
  
  
  // Add to cart functionality
  let shopping_cart = JSON.parse(localStorage.getItem("shopping_cart")) || [];
  
  function addToCart(productId) {
    const existingProduct = shopping_cart.find(item => item.item.id === productId);
    const addedItem = shopItems.find(item => item.id === productId);
  
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        shopping_cart.push({ item: addedItem, quantity: 1 });
    }
  
    localStorage.setItem("shopping_cart", JSON.stringify(shopping_cart));
    console.log(localStorage);
  }
  