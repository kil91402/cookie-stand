/* eslint-disable no-unused-vars */
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

function table(){
let state = {
  tableElement: document.getElementById("sales")
  }

state.tableElement.appendChild;

for (i = 0, i < storesArray.length; i++) {
  storesArray[i].salesPerHour();
  let salesRowElement = document.createElement("tr");
  let salesDataElement = document.createElement("td");
  salesDataElement.textContent = storesArray[i].store;
  salesRowElement.appendChild(salesDataElement);
  state.tableElement.apppendChild(salesRowElement);

for (x = 0; x < hours.length; x++) {
  let salesDataElement2 = document.createElement("td");
  salesDataElement2.textContent = storesArray[i].salesAmount[x];
  salesRowElement.appendChild(salesDataElement2);
}  

let salesTotalData = document.createElement("td");
salesTotalData.textContent = storesArray[i].store.subTotal;
}
document.getElementById("sales").appendChild(state);
};

table();









