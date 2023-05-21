/*
 * CSE 110 SP23 Team 28, UC Sussy Developers
 * Date: 05/20/2023
 * Authors: Brandon Reponte
 * Description: Valid file
 */

// should not be caught as it is global and magic number
var number = 10;

/* 
 * Takes in a number, log it to console, and return double it
 * @param {int} num - num to be printed and passed
 * @returns {int} - passed in num
 */
function twice (num) {
    let camelCase = num * 2;
    // log passed in number
    console.log(`valid ${num}`);
    console.log('pass');
    return camelCase;
}

console.log(twice(5));
console.log(number);