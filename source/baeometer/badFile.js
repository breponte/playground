/*
 * Poor
 */
function adjacent (bad) {
    console.log("No space between functions");
}
function multiline () {
    /*
     * This comment is invalid
     */
    console.log("Bad block");
}

function notCamel () {
    // invalid variable name
    let snake_case = 'sss'; // bad position
    console.log(snake_case);
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