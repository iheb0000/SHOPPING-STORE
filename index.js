var cartItems = [];

function addItemToCart(itemName, itemPrice) {
    cartItems.push({ name: itemName, price: itemPrice });
}

function displayCart() {
    var cartContainer = document.getElementById("cart-container");
    cartContainer.innerHTML = "";

    for (var i = 0; i < cartItems.length; i++) {
        var object = cartItems[i];
        var div = document.createElement("div");
        div.textContent = object.name + "$" + object.price;
        cartContainer.appendChild(div);
    }
}
function myFunction() {
  location.replace('shopping.html')
}
