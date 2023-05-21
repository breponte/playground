/*
 * CSE 110 SP23 Team 28, UC Sussy Developers
 * Date: 05/20/2023
 * Authors: John Doe
 * Description: This is a sample file header.
 */

// should not be caught as it is global and magic number
let MAGIC_NUMBER = 10;

/**
 * Takes in a number, log it to console, and return double it
 * @param {number} num - num to be printed and passed
 * @returns {number} - passed in num
 */
function twice (num) {
    let camelCase = num * 2;
    // log passed in number
    console.log(`valid ${num}`);
    console.log('pass');
    return camelCase;
}

console.log(twice(5));
console.log(MAGIC_NUMBER);