
/*Exercise 1 : Comparison
Instructions
Create a function called compareToTen that takes a number as an argument.
The function should return a Promise that tests if the value of the given 
argument is less or greater than 10.
*/
function compareToTen(number){
    let promise1 = new Promise(function (resolve, reject) {
        if (number >= 10) {
            resolve(`${number}, is greater than 10, succes!`);
        } else {
            reject(`${number}, is less than 10, error!`);
        }
    });
    return promise1;

}

compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))

/*Exercise 2 : Promises
Instructions
Create a promise that resolves itself in 4 seconds and returns a “success” string.
Read about Promise.resolve() and Promise.reject().
How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
Add code to catch errors and console.log ‘Ooops something went wrong’.
*/

let gift = new Promise.resolve(setTimeout(resolve , 4000));


/*
Exercise 3 : Resolve & Reject
Instructions
Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”
*/
let resolveP = Promise.resolve(3);
let rejectP = Promise.reject('boo!');