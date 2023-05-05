'use strict';

let salesPrice = 1.99;
let discount = 10;
let salesTax = 5.2;
let quantity = prompt ('How many cookies would you like?');
let Price = salesPrice - (salesPrice * discount/100);
let totalPrice= (Price * quantity);
let finalPrice = totalPrice + (totalPrice * salesTax/100);


alert(`Your final price is ${finalPrice}`);
