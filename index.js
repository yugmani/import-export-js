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