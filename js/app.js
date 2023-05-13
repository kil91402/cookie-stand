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

let y = getRandomInt(23, 65);

console.log("getRandomInt");
console.log(y);     

Location = 'Tokyo'
min = 3
max = 24
avg = 1.2

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
}

let x = getRandomInt(3, 24);

console.log("getRandomInt");
console.log(x);     

Location = 'Dubai'
min = 11
max = 38
avg = 3.7

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
    }

let a = getRandomInt(11, 38);

console.log("getRandomInt");
console.log(a);     

Location = 'Paris'
min = 20
max = 38
avg = 2.3

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

let b = getRandomInt(20, 38);

console.log("getRandomInt");
console.log(b);     

Location = 'Lima'
min = 2
max = 16
avg = 4.6

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

let c = getRandomInt(2, 16);

console.log("getRandomInt");
console.log(c);     
























 
