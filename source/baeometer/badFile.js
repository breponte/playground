/**
 * @returns something
 */
function adjacent (bad) {
    console.log(bad);
    console.log("No space between functions");
    return bad;
}
/**
 * @param {string} block - string
 * @returns {string} passed
 */
function multiline (block) {
    /*
     * This comment is invalid
     */
    console.log(block);
    return block;
}

/**
 * @param - not camel
 */
function notCamel (snake_case) {
    // invalid variable name
    console.log(snake_case); // bad position
    return 0;
}

const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
console.log(materials.map(material => material.length));
  // Expected output: Array [8, 6, 7, 9]
  
console.log('This is a very long sentence that exceeds our limit of 100 characters per line, so this will be caught as an error as it violates our style');