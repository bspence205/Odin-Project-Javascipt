//-------Variables--------//

// 1. Working with Variables: https://javascript.info/variables //

let admin;
let name = "John";
admin = name;
console.log(admin);

// 2. Giving the right name: https://javascript.info/variables //

let ourPlanet = "Earth";
let currentUserName = "John";

//--------Numbers--------//

let lotsOfDecimal = 1.766584958675746364;
lotsOfDecimal;
let twoDecimalPlaces = lotsOfDecimal.toFixed(2);
twoDecimalPlaces;
console.log(twoDecimalPlaces);

let num1 = 10;
let num2 = 50;
9 * num1;
num1 ** 3;
num2 / num1;

5 + 10 * 3;
(num2 % 9) * num1;
let x = num2 + num1 / 8 + 2;
console.log(x);

let myNum = 2;
myNum++;
console.log(myNum);

let mySub = 4;
mySub--;
console.log(mySub);

let myNuN = 2;
++myNuN;
console.log(myNuN);

let mySuN = 4;
--mySuN;
console.log(mySuN);

// Fundamentals pt. 1 Practice: https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/fundamentals-part-1 //

console.log(28 + 6);
console.log(1 + 4 + 5 + 1 + 5 + 2);
console.log((4 + 6 + 9) / 77);

let a = 10;
console.log(a);
console.log(9 * a);

let b = 7 * a;
console.log(b);

const max = 57;
let actual = max - 13;
let percentage = actual / max;
console.log(percentage);

/**
 * Data Types:
 * 1.Number
 * 2.BigInit
 * 3.String
 * 4.Boolean
 * 5.Null
 * 6.Undefined
 * 7.Object
 * 8.Symbol
 */

// Embedded Variable into String //

let emb = "John";
console.log(`Hello ${emb}`);

// Concatenation with Button //

const button = document.querySelector("button");

button.onclick = function () {
  let name = prompt("Who wins: Goku vs Superman vs Omniman");
  alert("You win " + name);
};

// Conditional Practice //

let mark = 5 > 9 ? true : false;

console.log(mark);

let char = 5000;
let pika = 1000;
let evee = 400;
let pokemonCost = char + pika + evee;
console.log(pokemonCost);

let evol = char > pika;
let evol1 = evee > pika;
let evol2 = evee >= 425;
console.log(evol);
console.log(evol1);
console.log(evol2);

const firstName = "Brian ";
const lastName = "Spencer ";
const age = "21 ";

let profile = firstName + lastName + age;

let newHire = "Hi! " + profile + "Welcome to the Team";

console.log(newHire);

let xc = 12;

if (xc > 10) {
  console.log("Good Shit");
} else {
  console.log("Try Again");
}

if (xc > 13 || xc < 3) {
  console.log("oh yea");
} else if (xc > 11) {
  console.log("damn");
}

if (xc >= 12 && xc == 12) {
  console.log("fuhhh");
} else {
  console.log("nooo");
}

if (xc !== 10) {
  console.log("Aint Worthy");
}

// Function Practice //

let xrp = 1;

function an() {
  let y = 2;
  output(xrp);
}

function bn() {
  let z = 3;
  output(xrp);
}

function output(value) {
  const para = document.createElement("p");
  document.body.appendChild(para);
  para.textContent = "Value: " + value;
}

console.log(bn);
an();
bn();

const myButton = document.querySelector("button");

myButton.onclick = function () {
  document.body.style.backgroundColor = "red";
  prompt("Red for life?");
};

function map(f, a) {
  let result = []; // Create a new Array
  let i; // Declare variable
  for (i = 0; i != a.length; i++) result[i] = f(a[i]);
  return result;
}
const f = function (x) {
  return x * x * x;
};
let numbers = [0, 1, 2, 5, 10];
let cube = map(f, numbers);
console.log(cube);

function favoriteAnimal(animal) {
  console.log(animal + " are my favorite animal!");
}

favoriteAnimal("Dogs");

let exam = (a, b) => a + b;
console.log(exam(1, 2));

//  Fundamentals pt 3 Practice //

let add7 = (num) => num + 7;
console.log(add7(19));

let multiply = (a, b) => a * b;
console.log(multiply(4, 5));

let myLetter = prompt("Enter a word. The last letter will be returned.");

lastLetter(myLetter);

function lastLetter(myLetter) {
  let letter = myLetter.slice(-1);
  console.log(letter);
  return letter;
}
