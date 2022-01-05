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
