/*
 * Poor
 */
function adjacent (bad) {
    console.log("No space between functions")
    return ((bad) => { console.log(bad) });
}
function multiline () {
    /*
     * This comment is invalid
     */
    console.log("Bad block");
}

function notCamel () {
    // invalid variable name
    let snake_case = 'sss';
    console.log(snake_case);
}

console.log('This is a very long sentence that exceeds our limit of 100 characters per line, so this will be caught as an error as it violates our style');