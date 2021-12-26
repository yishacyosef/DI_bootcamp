/*Exercise 1 : Scope
Instructions
Analyse the code below, and predict what will be the value of a in all the following functions.
Write your prediction as comments in a js file.
// #1 
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}

Prediction = 3. 

//#2
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}

prediction = 0

//#3
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);
}
prediction = undefined

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}

prediction = test

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a); =5

Exercise 2 : Ternary Operator
Instructions
Using the code below : 

function winBattle(){
    return true;
}

function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

experiencePoints()

You need to modify the function called experiencePoints()
Create a variable called experiencePoints.
Assign to this variable, a ternary operator (ie. change the conditional block into a ternary operator).
*/
function winBattle(){
    return true;
}
experiencePoints = winBattle ? 10 : 1;

/*
Exercise 3 : Colors
Instructions
Using this array :
let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
Check if this array includes the color “Violet”.
Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
Hint : Use the array methods taught in class.
*/
let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
colors.forEach(function (color, index) {
    
	console.log(`${index+1}# choice is ${color}`)
})
/*
Exercise 4 : Colors #2
Instructions
Using these arrays :

Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
Hint : Use the array methods taught in class.
*/
let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th","st","nd","rd"];

color.forEach(function (colorname, index) {
    let ordinalsp = ordinal []
    index+1 === 1 ? 
	console.log(`${index+1} choice is ${colorname}`)
})

/*
Exercise 5 : Is It A String ?
Instructions
Write a JavaScript function that checks whether the value of an input is a string or not.
console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
//false


Exercise 6 : Bank Details
Instructions
In this exercise, you have to decide which type of variables you have to use:

Create a global variable called bankAmount which value is the amount of money currently in your account.
Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
Create an array with all your monthly expenses - both positive and negative (money made and money spent).
Example : let details = ["+200", "-100", "+146", "+167", "-2900"]
Create a program that modifies the expenses (ie. the expenditures, ie. the negative expenses) so that they will include taxes (multiply each expense by the VAT).
Display your current bankAccount standing at the end of the month.
*/