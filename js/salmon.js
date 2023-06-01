"use strict";

let salesPrice = 3.99;
let discount = 10;
let salesTax = 5.2;
let quantity = prompt("How many cookies would you like?");
let Price = salesPrice - (salesPrice * discount) / 100;
let totalPrice = Price * quantity;
let finalPrice = totalPrice + (totalPrice * salesTax) / 100;
finalPrice = finalPrice.toFixed(2);

alert(`Your final price is ${finalPrice}`);

let salesPageElement = document.getElementById("sales-page");

let salesTaxElement = document.createElement("i");
salesTaxElement.textContent = salesTax;
salesPageElement.appendChild(salesTaxElement);

document.getElementById("Cost").textContent = totalPrice;
document.getElementById("Tax").textContent = salesTax;
document.getElementById("Final Cost").textContent = finalPrice;
