/* Exercise 2 : Users
Instructions
In the HTML above change the name “Pete” to “Richard”.
Change each first name of the two <ul>'s to your name.
At the end of each <ul> add a <li> that says “Hey students”.
Delete the name Sarah from the second <ul>.
Bonus
Add a class called student_list to both of the <ul>'s.
Add the classes university and attendance to the first <ul>.
*/

let pete = document.body.children[1].children[1];
pete.innerText = "Richard";

let list12 = document.querySelectorAll("#list");
li = list12.firstElementChild;
// I don't know why it isn't working ='(// 

let liNew = document.createElement("li");
let Ulnew = document.createTextNode("Hey Students");
liNew.appendChild("Ulnew");
list12.appendChild("liNew");
//also not working...//

