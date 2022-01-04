
/*Exercise 1 : Comparison
Instructions
Create a function called compareToTen that takes a number as an argument.
The function should return a Promise that tests if the value of the given 
argument is less or greater than 10.
*/
function compareToTen(number){
    let promise1 = new Promise(function (resolve, reject) {
        if (number >= 10) {
            resolve(number, "is greater than 10, succes!");
        } else {
            reject(number, "is less than 10, error!");
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