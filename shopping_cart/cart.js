document.addEventListener("DOMContentLoaded", function () {
  function displayCart() {
    let cartItems = localStorage.getItem("shopping_cart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem("totalCost");

    if (cartItems && productContainer) {
      productContainer.innerHTML = "";
      // Object.values(cartItems).map((item) => {
      //   ``;
      cartItems.forEach((item) => {
        // Create a div element to represent each item in the cart
        let cartItemDiv = document.createElement("div");
        cartItemDiv.classList.add("cart-item");

        cartItemDiv.innerHTML += ` 
          <div class="product">
          <ion-icon name="close-circle-outline"></ion-icon>
          <img src="./images/${item.tag}.jpg">
          <span>${item.name}</span>;
        <div class="price">${item.price}</div>;
        <div class="quantity">
          <ion-icon name="arrow-back-circle-outline"></ion-icon>
          <span>${item.inCart}</span>
          <ion-icon name="arrow-forward-circle-outline"></ion-icon>
        </div>
        <div class="total">
        ${item.inCart * item.price},00

        </div>
        
        `;

        productContainer.appendChild(cartItemDiv);
      });

      productContainer.innerHTML += `
      <div class="basketTotalContainer">
      <h4 class="basketTotalTitle">
      Basket Total
      </h4>
      <h4 class="basketTotal">
      ${cartCost},00
      </h4>
      `;
    }
  }
  
});
