'use strict';

let salesPrice = 3.99;
let discount = 10;
let salesTax = 5.2;
let totalPrice = salesPrice - (salesPrice * discount/100);
let finalPrice = totalPrice + (totalPrice * salesTax/100);
