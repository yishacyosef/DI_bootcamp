/*Exercise 1 : Change The Article
Instructions
Copy the code below, into a structured HTML file:

Using a DOM property, retrieve the h1 and console.log it.
Using DOM methods, remove the last paragraph in the <article> tag.
Add a event listener which will change the background color of the h2 to red, 
when it’s clicked on.
Add an event listener which will hide the h3 when it’s clicked on 
(use the display:none property).
Add a <button> to the HTML file, that when clicked on, should make the text of 
all the paragraphs, bold.
BONUS : When you hover on the h1, set the font size to a random pixel size between 
0 to 100.(Check out this documentation)
BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade 
    css animation” on Google)
*/
let h1 = document.body.children[0].children[0];
let article = document.body.children[0];
let pRemove = article.children[6];
article.removeChild(pRemove);

let h2 = h1.nextElementSibling;
h2.addEventListener("click", h2Red);
function h2Red(){
    h2.style.color= "red";
}

let h3 = h2.nextElementSibling;
h3.addEventListener("click", hideH3)
function hideH3(){
    h3.style.display= "none";
}
let boldButton = document.body.children[1]
boldButton.addEventListener("click", allBold)
function allBold(){
    document.body.style.fontWeight = "bold";
}