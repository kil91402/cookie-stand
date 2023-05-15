'use strict'

let hours = ['8am', '9am', '10am', '11am', '12pm']
let customers = 0

let Location = 'Seattle'
let min = 23
let max = 65
let avg = 6.3

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
}

let Seattle8am = getRandomInt(23, 65);
let Total8am = 6.3 * Seattle8am;

console.log("getRandomInt");
console.log(Seattle8am);     
console.log(Total8am);

let customersElement = document.getElementById('customers');

let Total8amElement = document.createElement('i');
Total8amElement.textContent = Total8am;
customersElement.appendChild(Total8amElement);

document.getElementById("8am").textContent = Total8am

let Seattle9am = getRandomInt(23, 65);
let Total9am = 6.3 * Seattle9am;

console.log("getRandomInt");
console.log(Seattle9am);     
console.log(Total9am);

customersElement = document.getElementById('customers');

let Total9amElement = document.createElement('i');
Total9amElement.textContent = Total9am;
customersElement.appendChild(Total9amElement);

document.getElementById("9am").textContent = Total9am

let Seattle10am = getRandomInt(23, 65);
let Total10am = 6.3 * Seattle10am;

console.log("getRandomInt");
console.log(Seattle10am);     
console.log(Total10am);

customersElement = document.getElementById('customers');

let Total10amElement = document.createElement('i');
Total10amElement.textContent = Total10am;
customersElement.appendChild(Total10amElement);

document.getElementById("10am").textContent = Total10am

let Seattle11am = getRandomInt(23, 65);
let Total11am = 6.3 * Seattle11am;

console.log("getRandomInt");
console.log(Seattle11am);     
console.log(Total11am);

customersElement = document.getElementById('customers');

let Total11amElement = document.createElement('i');
Total11amElement.textContent = Total11am;
customersElement.appendChild(Total11amElement);

document.getElementById("11am").textContent = Total11am

let Seattle12pm = getRandomInt(23, 65);
let Total12pm = 6.3 * Seattle12pm;

console.log("getRandomInt");
console.log(Seattle12pm);     
console.log(Total12pm);

customersElement = document.getElementById('customers');

let Total12pmElement = document.createElement('i');
Total12pmElement.textContent = Total12pm;
customersElement.appendChild(Total12pmElement);

document.getElementById("12pm").textContent = Total12pm

Location = 'Tokyo'
min = 3
max = 24
avg = 1.2

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
}

let Tokyo8 = getRandomInt(3, 24);
let TokyoT = 1.2 * Tokyo8;

console.log("getRandomInt");
console.log(Tokyo8);     
console.log(TokyoT);

document.getElementById("8am").textContent = TokyoT

let Tokyo9  = getRandomInt(3, 24);
let TokyoT1 = 1.2 * Tokyo9;

console.log("getRandomInt");
console.log(Tokyo9);     
console.log(TokyoT1);

let Tokyo10 = getRandomInt(3, 24);
let TokyoT2 = 1.2 * Tokyo10;

console.log("getRandomInt");
console.log(Tokyo10);     
console.log(TokyoT2);

let Tokyo11 = getRandomInt(3, 24);
let TokyoT3 = 1.2 * Tokyo11;

console.log("getRandomInt");
console.log(Tokyo11);     
console.log(TokyoT3);

let Tokyo12 = getRandomInt(3, 24);
let TokyoT4 = 1.2 * Tokyo12;

console.log("getRandomInt");
console.log(Tokyo12);     
console.log(TokyoT4);

Location = 'Dubai'
min = 11
max = 38
avg = 3.7

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
    }

let D8 = getRandomInt(11, 38);
let T8 = 3.7 * D8;

console.log("getRandomInt");
console.log(D8);     
console.log(T8);

let D9 = getRandomInt(11, 38);
let T9 = 6.3 * D9;

console.log("getRandomInt");
console.log(D9);     
console.log(T9);

let D10 = getRandomInt(11, 38);
let T10 = 6.3 * D10;

console.log("getRandomInt");
console.log(D10);     
console.log(T10);

let D11 = getRandomInt(11, 38);
let T11 = 6.3 * D11;

console.log("getRandomInt");
console.log(D11);     
console.log(T11);

let D12 = getRandomInt(11, 38);
let T12 = 6.3 * D12;

console.log("getRandomInt");
console.log(D12);     
console.log(T12);

Location = 'Paris'
min = 20
max = 38
avg = 2.3

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

let P8 = getRandomInt(20, 38);
let PT8 = 2.3 * P8;

console.log("getRandomInt");
console.log(P8);     
console.log(PT8);

let P9 = getRandomInt(20, 38);
let PT9 = 2.3 * P9;

console.log("getRandomInt");
console.log(P9);     
console.log(PT9);

let P10 = getRandomInt(20, 38);
let PT10 = 2.3 * P10;

console.log("getRandomInt");
console.log(P10);     
console.log(PT10);

let P11 = getRandomInt(20, 38);
let PT11 = 2.3 * P11;

console.log("getRandomInt");
console.log(P11);     
console.log(PT11);

let P12 = getRandomInt(20, 38);
let PT12 = 2.3 * P12;

console.log("getRandomInt");
console.log(P12);     
console.log(PT12);

Location = 'Lima'
min = 2
max = 16
avg = 4.6

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

let L8 = getRandomInt(2, 16);
let LT8 = 4.6 * L8;

console.log("getRandomInt");
console.log(L8);     
console.log(LT8);

let L9 = getRandomInt(2, 16);
let LT9 = 4.6 * L9;

console.log("getRandomInt");
console.log(L9);     
console.log(LT9);

let L10 = getRandomInt(2, 16);
let LT10 = 4.6 * L10;

console.log("getRandomInt");
console.log(L10);     
console.log(LT10);

let L11 = getRandomInt(2, 16);
let LT11 = 4.6 * L11;

console.log("getRandomInt");
console.log(L11);     
console.log(LT11);

let L12 = getRandomInt(2, 16);
let LT12 = 4.6 * L12;

console.log("getRandomInt");
console.log(L12);     
console.log(LT12);

























 
