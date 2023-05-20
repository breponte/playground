/*
 * CSE 110 SP23 Team 28, UC Sussy Developers
 * Date: 05/20/2023
 * Authors: Brandon Reponte
 * Description: Valid file
 */

// should not be caught as it is global and magic number
const MAGIC = 'Kadabra';

/* 
 * Takes in a number, log it to console, and return double it
 * @param {int} num - num to be printed and passed
 * @returns {int} - passed in num
 */
function double (num) {
    let camelCase = num * 2;
    // log passed in number
    console.log(`valid ${num}`);
    console.log('pass');
    return camelCase;
}

console.log(double(num));
console.log(MAGIC);