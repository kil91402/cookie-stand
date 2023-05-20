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

let tableElement = document.getElementById("sales");
let headingRow = document.getElementById("heading-row");
let headingRowElement = document.createElement("tr");

for (let i = 0; i < hours.length; i++) {
  let tableDataElement = document.createElement("td");
  tableDataElement.textContent = hours[i];
  headingRow.appendChild(tableDataElement);
}

let tableDataElement2 = document.createElement("td");
tableDataElement2.textContent = "Daily Location Total";
headingRow.appendChild(tableDataElement2);

for (let store of storesArray) {
  let bodyRowElement = document.createElement("tr");
  let tableDataElement3 = document.createElement("td");
  tableDataElement3.textContent = store.store;
  bodyRowElement.appendChild(tableDataElement3);

  for (let i = 0; i < store.salesPerHour.length; i++) {
    let TableData2Element = document.createElement("td");
    TableData2Element.textContent = store.salesPerHour[i];
    bodyRowElement.appendChild(TableData2Element);
  }

  let tableTotalElement = document.createElement("td");
  tableTotalElement.textContent = store.subTotal;
  bodyRowElement.appendChild(tableTotalElement);
  tableElement.appendChild(bodyRowElement);
}
