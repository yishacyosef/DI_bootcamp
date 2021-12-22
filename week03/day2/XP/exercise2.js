/*Exercise 2 : Work With Forms
Instructions
Retrieve the form and console.log it.
Retrieve the inputs by their id and console.log them.
Retrieve the inputs by their name attribute and console.log them.
When the user submits the form (ie. submit event listener)
get the values of the input tags,
make sure that they are not empty,
create an li per input value,
then append them to a the <ul class="usersAnswer"></ul>, below the form.
The output should be :
<ul class="usersAnswer">
    <li>first name of the user</li>
    <li>last name of the user</li>
</ul>
*/
let formV = document.body.children[0];
// console.log(formV)
let lnameId = document.getElementById("#lname");
// console.log(lnameId);
let fnameId = document.querySelector("#fname");
// console.log(fnameId);
let byna1 = document.getElementsByClassName("lname");
let byna2 = document.getElementsByClassName("fname");
let buttonS = document.getElementById("submit");
// console.log(buttonS);
let currentLi = document.getElementsByClassName("usersAnswer");
// console.log(currentLi);
buttonS.addEventListener("click", function(){
    let li = document.createElement("li");
    // li.textContent = "hello"
    li.appendChild(document.createTextNode(lnameId.value));
    lnameId.value = "";
    return currentLi.appendChild("li");
    
})

