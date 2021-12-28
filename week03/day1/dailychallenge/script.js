/* Instructions
In this exercise we will be creating a webpage with a black background as the universe and we will fill the universe with planets and their moons.
We will provide the HTML page.
You only have to work with a JS file.

Create an array which value is the planets of the solar system.
For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
Each planet should have a different background color. (Hint: add a new class to each planet).
Finally append each div to the <section> in the HTML (presented below).
Bonus: Do the same process to create the moons.
Be careful, each planet has a certain amount of moons. How should you display them?
Should you still use an array for the planets ? Or an array of objects ?
*/

let myPlanets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter",
    "Saturn", "Uranus", "Neptune"];
  
  let colors = [
    "brown", "yellow", "green", "red", "gray", "orange", "cyan",
    "blue"];
  
  let planetDiv = document.body.getElementsByClassName("listPlanets")
  console.log(planetDiv);
  for (let i = 0; i < myPlanets.length; i++) {
    let realPlanets = document.createElement("div");
    realPlanets.className = "planet";
    realPlanets.style.backgroundColor = colors[i];
    planetDiv.appendChild(myPlanets);
  }

  //I don't know what's wrong here.