/*Exercise 1 : Hello Node.Js
Create a new folder called - npm-node
Create a JS file called - main.js
Add the following code to the file main.js :
let a = 5;
let b = 10;
Write some more code in the main.js file so when you run it in the command prompt it logs Hello you are 15
*/

let a = 5;
let b = 10;
let test = a + b;
console.log(`Hello you are ${test}`)

//C:\Users\PC\Desktop\DI_bootcamp\week07\day01\xp\npm-node>node main    

/*
Exercise 2 : Hello Node.Js #2
Create a package.json file - use npm init
Run the main.js file using npm start.
Tip: you need to change the package.json file in order to achieve this.
You should output something in the command prompt, for example: Hi, thanks for running me with npm start!
*/
console.log(`Hi, thanks for running me with npm start!`)


///"scripts": {
    // "test": "echo \"Error: no test specified\" && exit 1",
    // "start": "main.js" ? or "node main.js"
//   },
/*
Exercise 3 : Nodemon
Create a package.json file - use npm init
Install nodemon
Write the following code, in a main.js file:

let a = 5;
let b = 10;
let x;
let c = 6;
x = a + b;


Add some more code in the main.js so when you run it using nodemon, it logs the sum of a + b as a first run.
Tip: you need to change the package.json file in order to achieve this.

Update the main.js file to console.log the sum of x + c
*/

let a = 5;
let b = 10;
let x;
let c = 6;
let sum =  a + b;
x = a + b;