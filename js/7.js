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

//Hours in headers
for (let i = 0; i < hours.length; i++) {
  let tableDataElement = document.createElement("td");
  tableDataElement.textContent = hours[i];
  headingRow.appendChild(tableDataElement);
}

//Daily Location Total header
let tableDataElement2 = document.createElement("td");
tableDataElement2.textContent = "Daily Location Total";
headingRow.appendChild(tableDataElement2);

//Stores Row
for (let store of storesArray) {
  let bodyRowElement = document.createElement("tr");
  let tableDataElement3 = document.createElement("td");
  tableDataElement3.textContent = store.store;
  bodyRowElement.appendChild(tableDataElement3);

  //Stores Sales Calculations Data
  for (let i = 0; i < store.salesPerHour.length; i++) {
    let TableData2Element = document.createElement("td");
    TableData2Element.textContent = store.salesPerHour[i];
    bodyRowElement.appendChild(TableData2Element);
  }

  //Daily Location Data for Each
  let tableTotalElement = document.createElement("td");
  tableTotalElement.textContent = store.subTotal;
  bodyRowElement.appendChild(tableTotalElement);
  tableElement.appendChild(bodyRowElement);
}

let trElement = document.createElement("tr");
let tdElement = document.createElement("td");
tdElement.textContent = "Totals";
tableElement.appendChild(trElement);
trElement.appendChild(tdElement);

//Loop thru hours array; for each hour we will loop thru the storesArray and add up each stores sales per hour and store in variable
for (let i = 0; i < hours.length; i++) {
  let hourlyTotal = 0;

  for (let j = 0; j < storesArray.length; j++) {
    hourlyTotal += storesArray[j].salesPerHour[i];
  }
  let dataElement = document.createElement("td");
  dataElement.textContent = hourlyTotal;
  trElement.appendChild(dataElement);
}
//Add all 5 Hourly Totals to get Final Total
let finalTotal = 0;
let d2Element = document.createElement("td");
d2Element.textContent = finalTotal;
trElement.appendChild(d2Element);
