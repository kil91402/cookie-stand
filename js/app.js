"use strict";

let hours = ['8am', '9am', '10am', '11am', '12pm']

let storesArray = [
     { store: "Seattle", minCust: 23, maxCust: 65, avgCookiesPerSale: 6.3, salesPerHour: [] },
     { store: "Tokyo", minCust: 3, maxCust: 24, avgCookiesPerSale: 1.2, salesPerHour: [] },
     { store: "Dubai", minCust: 11, maxCust: 38, avgCookiesPerSale: 3.7, salesPerHour: [] },
     { store: "Paris", minCust: 20, maxCust: 38, avgCookiesPerSale: 2.3, salesPerHour: [] },
     { store: "Lima", minCust: 2, maxCust: 16, avgCookiesPerSale: 4.6, salesPerHour: [] },
    ];
   

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

for (let store of storesArray) { 
  console.log("store", store);


  for (let hour of hours) { 

    let randomInteger = getRandomInt(store["minCust"], store["maxCust"]); 
    let salesAmount = randomInteger * store["avgCookiesPerSale"]; 
    store["salesPerHour"].push(salesAmount);
      
} 
}
console.log("storesArray", storesArray);







