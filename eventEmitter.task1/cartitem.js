
const { EventEmitter } = require("events");

const cartBus = new EventEmitter();
const cartItems = []; 


cartBus.on("cart:itemAdded", (itemName) => {
  console.log("Cart event handler -> Item added:", itemName);
});


function addItemToCart(itemName) {

  if (typeof itemName !== "string" || itemName.trim() === "") {
    console.warn("addItemToCart: itemName must be a non-empty string");
    return;
  }

  cartItems.push(itemName);
  cartBus.emit("cart:itemAdded", itemName);
}

addItemToCart("Algebra Textbook");
addItemToCart("Calculus Workbook");
addItemToCart("Notebook");

console.log("Current cart items:", cartItems);
