/*Exercise 3 : Users And Style
For the following exercise use the HTML presented above:

Add a “light blue” background color and some padding to the <div>.
Do not display the first name (John) in the list.
Add a border to the second name (Pete).
Change the font size of the whole body.
Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
*/

let backGroundColor = document.body;
backGroundColor.style.backgroundColor = "rgb(50, 190, 250)";
backGroundColor.style.padding = "50px";
let ulVar = document.body.children[1];
let john = ulVar.children[0];
john.textContent = "";
let pete = ulVar.children[1];
pete.style.border = "5px; solid; black";
// don't know why this last one isn't working //
document.body.style.fontSize = "50px"



