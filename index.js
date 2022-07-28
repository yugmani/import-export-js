// Import stylesheets
import './style.css';

//import `greetPerson` from `greet.js`
// ***********************************

import { greetPerson } from './greet.js';

//using `greetPerson()` defined in `greet.js`
let greeting = greetPerson('Vaseline');

console.log(greeting);
// Hello Vaseline

// -------------------------------------------------

//importing multiple objects from multiple.js
// ******************************************

import { name, sum } from './multiple.js';

//Using an imported variable
console.log(name); //Power Tack

//Using an imported function
let add = sum(7, 5);
console.log(add); //12;

// ----------------------------------------------

//Renaming imports and exports
// *****************************************

//Use already renamed functions from 'renamed.js'
import { total, difference } from './renamed.js';

const result1 = total(3, 5);
console.log(result1); //8;

const result2 = difference(9, 5);
console.log(result2); //4;

// Renaming the exported objects here from torename.js
import { product as multiply, powerOf as exponentof } from './torename.js';

const result3 = multiply(3, 5);
console.log(result3); //15;

const result4 = exponentof(2, 4);
console.log(result4); //16;

// ---------------------------------------------------------

// Import default Export
// **************************

import lowerString from './default.js'; //import without renaming
import randomString from './default.js'; //import by renaming
import { age } from './default.js'; //it is not default export

const lower = lowerString('CALIFORNIA');
console.log(lower); // california

console.log(randomString('AMERICA')); // america

// It is not default export
console.log(age); //33
