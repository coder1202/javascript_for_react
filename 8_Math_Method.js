//The JavaScript Math object allows you to perform mathematical tasks on numbers.
//The Math object is static.
//All methods and properties can be used without creating a Math object first.
Math.E // returns Euler's number
console.log(Math.PI);
Math.PI // returns PI
Math.SQRT2 // returns the square root of 2
Math.SQRT1_2 // returns the square root of 1/2
Math.LN2 // returns the natural logarithm of 2
Math.LN10 // returns the natural logarithm of 10
Math.LOG2E // returns base 2 logarithm of E
Math.LOG10E // returns base 10 logarithm of E

//Four common method to round number
let a = [1, 2, 3.1, 4, 5, 6.7, 7, 8.7]
    //Math.round(x) returns the nearest integer:
const paa = a.map((e) =>
    Math.round(e)
);
console.log(paa);

//Math.ceil(x) returns the value of x rounded up to its nearest integer:
//Math.floor(x) returns the value of x rounded down to its nearest integer:
//Math.trunc(x) returns the integer part of x:

//Math.sign(x) returns if x is negative, null or positive:
const paa1 = a.map((e) =>
    Math.sign(e)
);
console.log(paa1);

//Math.pow(x, y) returns the value of x to the power of y:
//Math.sqrt(x) returns the square root of x:
//Math.abs(x) returns the absolute (positive) value of x:

//Math.sin(90 * Math.PI / 180);     // returns 1 (the sine of 90 degrees)
//Math.cos(0 * Math.PI / 180);     // returns 1 (the cos of 0 degrees)

Math.min(0, 150, 30, 20, -8, -200);
Math.max(0, 150, 30, 20, -8, -200);

//Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):
// const two = (Math.random() * 10000);
// console.log(Math.round(two));

//Math.log(x) returns the natural logarithm of x.
//Math.log2(x) returns the base 2 logarithm of x.
//Math.log10(x) returns the base 10 logarithm of x.

// min = 0;
// max = 10;
// const vg = Math.floor(Math.random() * (max - min)) + min;

// console.log(vg);


// function getRndInteger(min, max) {

//     return Math.floor(Math.random() * (max - min)) + min;
// }
// console.log(getRndInteger(0, 10));

let jk = 11
let g = (jk > 10) ? true : false;
console.log(g);

function abc(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(abc(0, 10000));