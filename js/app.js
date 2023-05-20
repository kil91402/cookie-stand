/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
"use strict";

let hours = ["8am", "9am", "10am", "11am", "12pm"];

let storesArray = [
  {
    store: "Seattle",
    minCust: 23,
    maxCust: 65,
    avgCookiesPerSale: 6.3,
    salesPerHour: [],
  },
  {
    store: "Tokyo",
    minCust: 3,
    maxCust: 24,
    avgCookiesPerSale: 1.2,
    salesPerHour: [],
  },
  {
    store: "Dubai",
    minCust: 11,
    maxCust: 38,
    avgCookiesPerSale: 3.7,
    salesPerHour: [],
  },
  {
    store: "Paris",
    minCust: 20,
    maxCust: 38,
    avgCookiesPerSale: 2.3,
    salesPerHour: [],
  },
  {
    store: "Lima",
    minCust: 2,
    maxCust: 16,
    avgCookiesPerSale: 4.6,
    salesPerHour: [],
  },
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

//making calculations
for (let store of storesArray) {
  console.log("store", store);
  store.subTotal = 0;
  for (let hour of hours) {
    let randomInteger = getRandomInt(store["minCust"], store["maxCust"]);
    let salesAmount = randomInteger * store["avgCookiesPerSale"];
    salesAmount = Math.ceil(salesAmount);
    store["salesPerHour"].push(salesAmount);
    store.subTotal += salesAmount;
  }
}
console.log("storesArray", storesArray);

//DOM Manipulation

// eslint-disable-next-line no-redeclare
let parent = document.getElementById("store");
for (let store of storesArray) {
  let headingElement = document.createElement("h2");
  headingElement.textContent = store.store;
  parent.appendChild(headingElement);

  for (let i = 0; i < store.salesPerHour.length; i++) {
    let liElement = document.createElement("li");
    liElement.textContent =
      hours[i] + ": " + store.salesPerHour[i] + " Cookies";
    parent.appendChild(liElement);
  }
  let subTotalElement = document.createElement("li");
  subTotalElement.textContent = "Total: " + store.subTotal + " Cookies";
  parent.appendChild(subTotalElement);
}
