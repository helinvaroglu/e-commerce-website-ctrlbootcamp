document.addEventListener("DOMContentLoaded", function () {
  
  const isCartPage = window.location.href.includes("cart.html");

  function displayShoppingCart() {
    if (!isCartPage) {
      return;
    }

    let cartItems = localStorage.getItem("shopping_cart");
    cartItems = JSON.parse(cartItems);
    let cartContainer = document.getElementById("cartItemsContainer");
    let cartCost = localStorage.getItem("totalCost");

    if (cartItems && cartContainer) {
      cartContainer.innerHTML = "";
      // Object.values(cartItems).map((item) => {
      //   ``;
      cartItems.forEach((item) => {
        let cartItemDiv = document.createElement("div");
        cartItemDiv.classList.add("cartItemsContainer");

        // Make sure to access the correct properties from your cart item
        let itemName = item.item.name;
        console.log(itemName); 
        let itemPrice = item.item.price; 
        let itemQuantity = item.quantity;
        let itemTotal = itemQuantity * itemPrice;
        console.log(itemTotal);

        cartItemDiv.innerHTML += ` 
          <div class="product">
            <ion-icon name="close-circle-outline"></ion-icon>
            <img src="./images/${item.tag}.jpg">
            <span>${itemName}</span>;
            <div class="price">${itemPrice}</div>;
            <div class="quantity">
              <ion-icon name="arrow-back-circle-outline"></ion-icon>
              <span>${itemTotal}</span>
              <ion-icon name="arrow-forward-circle-outline"></ion-icon>
            </div>
            <div class="total">
             ${itemTotal},00
            </div> 
       `;

       cartContainer.appendChild(cartItemDiv);
      });

      cartContainer.innerHTML += `
      <div class="basketTotalContainer">
          <h4 class="basketTotalTitle">
            Basket Total
          </h4>
          <h4 class="basketTotal">
            ${cartCost},00
          </h4>
        </div>
      `;
    }
  }
  displayShoppingCart();
});
