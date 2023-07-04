// Values and Variables
console.log("Hello World!");


let firstName = "Donald";

console.log(firstName);


// Variable Naming Conventions
let last_name2 = "John"
let $function = 50;

console.log(last_name2);

// Data Types
/*
 javascript has 8 Datatypes
    1. string
    2. Number
    3. Bignit
    4. Booleans
    5. undefined
    6. Null
    7. Symbol
    8. Object
*/    

// 1. Booleans->True or False Values
let javaScriptIsEasy = true;

console.log(typeof javaScriptIsEasy);

// 2. Number
donaldAge = 150;
nonsoAge = 90.5;

console.log(typeof donaldAge);
console.log(typeof nonsoAge);

// 3. strings
let message = "Welcome to Dubai"
console.log(typeof message)

let divine = '24';
console.log(typeof divine);

let henry = '24' + 2;
console.log(typeof henry);

// 4. undefined
let year;
console.log(year);
console.log(typeof year);

// an empty value has nothing to do with undefined
let david = '';
console.log(typeof david);

// value undefined, value undefined
let car = undefined;
console.log(typeof car);

// when adding a number and a string, javascript will treat the number as a string
let vehicle = 16 + 4 + "volvo";
console.log(typeof vehicle);

// 5. Null
// in javascript null is nothing, it doesn't exist
// And the data type is Object
let prisca = null;
console.log(typeof prisca)

/**
 * Difference between undefined and null
 * typeof undefined is undefined
 * type of null is object
 */

// undefined and null are equal in value
console.log(null == undefined); 
// == will give true, add three === will give false

//********** let, const and var ************ */
/* The let keyword was introduced in ES6 (2015)
  **RULES**
  1. let cannot be Redeclared
  2. let must be Declared
  3. let has Block scope
*/

// 1. let cannot be Redeclared
let ugo = "ugochukwu";
//let ugo = "kodex student"; -> cannot be redeclared


//var can be Redeclared
var kels = "kodex student";
var kels = "laravel Developer";

console.log(kels);
// it will pick the last which is laravel student


// Block scope
// ---------let has block scope------

{
  let job = 5;
}

// var does not have block scope

{
  var animal = "lion"
}

console.log(animal);


var macBook = 10;

{
  var macBook = 200;
}

console.log(macBook);


//------redeclaring a variable inside a block will not redeclare the variable outside the block---------

let windows = 5;

{
  let windows = 9000;
}

console.log(windows);


/* Hoisting-> you can use the variable before it is declared
--------let and const are not hoisted.-------
*/
linux = "Ubunut"
var linux;


//********** The const keyword ************ */
/* The const keyword was introduced in ES6 (2015)
  **RULES**
  1. const cannot be Redeclared
  2. const cannot be Reassigned
  3. const has Block scope
*/

// const cannot be Redeclared
const costfromTempsiteToKodex = 150;
// costfromTempsiteToKodex =100;
// console.log(costfromTempsiteToKodex);

/**
 * Always declare a variable with const when you know that the value should not be changed.
 */


//*************Basic Operators********************* */

let markMass, markHeight, johnMass, markBMI, markHigherBMI;
markMass = 78;
markHeight = 1.69;

johnMass = 92;
johnHeight = 1.95

// step 2 mark and john's BMI using the fomular: BMI = mass / height **2
markBMI = markMass / markHeight **2; // markMass / markHeight * markHeight
johnBMI = johnMass / johnHeight ** 2;

console.log(markBMI, johnBMI);

// step 3 - Create a boolen variable 'markHigherBMI'
markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

//*********strings and Template Literals********* */

const myName = 'Donald';
const myJob = 'Developer';
const yearOfBirth = 1992;
const currentYear = 2023;

const donald = "I'm " + myName + ', a ' + (currentYear - yearOfBirth) + 'year old' + myJob + ' ! ';
console.log(donald);

const newDonald = `I'm ${myName}, a ${currentYear - yearOfBirth} year old ${myJob}!`;
console.log(newDonald);

console.log(`Hello how are you doing`);

console.log(`This 
is for
multiple
lines`);


// ***************Taking Decision: if / else statments*********
const KelsAge = 32;

if(KelsAge >= 18){
  console.log(`kels is eligible to take alchohol cos his age is ${KelsAge}`);
}
//Else statement executes when the if statement returns false
else{
  const yearsLeft = 18 - KelsAge;
  console.log(`Kels is not eligible to take alchohol wait another ${yearsLeft} years`);
}

let dayOfTheWeek = 'Monday';

if(dayOfTheWeek == 'Monday'){
  console.log('Sit at Home');
}
else{
  console.log('Work days');
}


////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:
1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
HINT: Use an if/else statement 😉
GOOD LUCK 😀
*/

// if(markBMI>johnBMI){
//   console.log(`marks's BMI (${markBMI}) is higher than john's BMI (${johnBMI})`);
// }
// else{
//   console.log('');
// }


////////////////////////////////////
// Coding Challenge #2
/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:
1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
HINT: Use an if/else statement 😉
GOOD LUCK 😀
*/
// Step 1 - Store Mark and John's mass and height in variables
// Step 2 - Mark and John's BMI using the formular: BMI = mass / height ** 2 
markBMI = markMass / markHeight ** 2; // markMass / markHeight * markHeight
johnBMI = johnMass / johnHeight ** 2;
console.log(markBMI, johnBMI);
// Step 3 - Create a boolean variable 'markHigherBMI'
if(markBMI > johnBMI){
    console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`)
}
else{
    console.log(`John's BMI ${johnBMI} is higher than Marks's ${markBMI}!`)
}
// ******************************************** Type Conversion and Coercion *****************************************
// Type conversion is the process of converting a value from one type to another
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 10);
console.log(Number('Donald'));
console.log(typeof NaN);
console.log(String(23), 23);
// Type Coersion
// Type coersion is when JavaScript coerces or changes a data type by itself
const sum = 35 + 'hello';
console.log(sum);
console.log('23' - '10' - 3);
console.log('24' / '2');
let n = '1' + 1;
n = n - 1;
console.log(n);
// ************************************** Truthy and Falsy Values ********************************************
// We have 5 Falsey Values: 0, '', undefined, null, Nan
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
const money = 100;
if(money){
    console.log('Go on a shopping spree!');
}
else{
    console.log('Dont spend the money');
}
let product = 0;
if(product){
    console.log('Stay home');
}
else{
    console.log('Go on a shopping spree!');
}


// *************************************************** Logical Operators ********************************************
// Logical Operatoes are used to determine the logic between vairables or values
const hasDriversLicense = true;
const hasGoodVision = false;
const isTired = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if(hasDriversLicense || hasGoodVision){
//   console.log('Nonso is eligible to drive');
// }

if(hasDriversLicense && hasGoodVision && isTired){
  console.log('Nonso is eligible to drive');
}
else{
  console.log('someone else should drive');
}

if(hasDriversLicense && hasGoodVision || isTired){
  console.log('Nonso is eligible to drive');
}
else{
  console.log('someone else should drive');
}

/* Coding Challange 3 - If Statements and Opeartors
There are two football teams, Manchester and Barcelona. They compete against each other 3 times. The team with the highest average score will win the trophy!
1. Calculate the average score for each team using the test data below.
2. Compare the average scores of the teams to determine the winner of the competition and display it on the console. Remember to account for a possible draw, where both teams have the same average score.
3. BONUS 1: Introduce a minimum score requirement of 100. According to this rule, a team can only win if it has a higher score than the other team and a score of at least 100 points. Hint: Use a logical operator to test for the minimum score, along with multiple else-if blocks. 😉
4. BONUS 2: The minimum score requirement also applies to a draw. A draw will only occur if both teams have the same score and both teams have a score greater than or equal to 100 points. Otherwise, neither team wins the trophy.
TEST DATA: Manchester scores 96, 108, and 89. Barcelona scores 88, 91, and 110.
TEST DATA BONUS 1: Manchester scores 97, 112, and 101. Barcelona scores 109, 95, and 123.
TEST DATA BONUS 2: Manchester scores 97, 112, and 101. Barcelona scores 109, 95, and 106.
GOOD LUCK! 😀
*/
// step 1
const Manchester = (96 + 108 + 89) / 3;
const Barcelona = (88 + 91 + 110) / 3;

console.log(Manchester,Barcelona);

// step 2
if(Manchester>Barcelona){
  console.log('manchester wins');
}
else if(Manchester < Barcelona ){
  console.log('Barcelona wins');
}

else if(Manchester === Barcelona ){
  console.log('draw!,both teams score');
}

// step 3
const Manchester2 = (97 + 112 + 101) / 3;
const barcelona2 = (109 + 95 + 123) / 3;
console.log(Manchester2, barcelona2);

if(Manchester2 > barcelona2 && Manchester2 >= 100){
  console.log('manchester wins');
}
else if(barcelona2>Manchester2 && barcelona2 >= 100){
  console.log('barcelona wins');
}
else if(Manchester2 === barcelona2 && Manchester2 >= 100 && barcelona2 >= 100){
  console.log('both wins the trophy');
}
else{
  console.log('no team win')
};

/**************** the switch statement **********/
const day = 'monday';

switch(day){
  case 'monday':
    console.log('sit at home');
    break;
  case 'tuesday':
    console.log('Go for javascript');
    break;
  case 'wednesday':
    console.log('Go to the gym');
    break;
  case 'thursday':
  case 'friday':
    console.log('Bake some cake');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Write some code!'); 
    break;
  default:
    console.log('Dont do anything');             
}

const Day = 'Monday';

if (Day === 'Monday'){
  console.log('just dey house');
}

else if (Day === 'tuesday'){
  console.log('work day');
}
else if(Day === 'thursday' || Day === 'friday'){
  console.log('bake some bread');
}
else if(Day === 'saturday' || Day === 'sunday'){
  console.log('go to church');
}

else {
  console.log('Go to bank');
}

/**************The ternary Operator******** */

const age = 23;
age >= 18 ? console.log('i love alcohol') : console.log('i like caprison');

