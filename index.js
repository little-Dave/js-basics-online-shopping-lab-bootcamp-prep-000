var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var newItem = { 
   itemName: `${item}`,
   itemPrice: Math.floor(Math.random() * 101)
 };
 cart.push(newItem);
 return `${newItem.itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var inCartNow = [];
  for (let i = 0; i < cart.length; i++) {
    if (i === 0) {
      inCartNow.push(`you have cart)
    }
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
