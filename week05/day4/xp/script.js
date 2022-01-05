/*Exercise 1: Conversion
Instructions
Convert the below promise into async await:


    .then(response => response.json())
    .then(console.log);
*/

async function getData (){
    let xp = await fetch("https://swapi.dev/api/starships/9/");
    let object1 = await xp.json()
    console.log(object1)
}

getData()

/*Exercise 2: Analyze
Instructions

//This function with setTimeOut is going to be called in the 
//next async func.

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();
Analyze the code provided above what will be the outcome?


//it will console.log "calling", then call the function with 
setTimeOut, if everything went right it will console.log result
*/
