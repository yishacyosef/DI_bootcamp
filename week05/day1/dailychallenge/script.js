let fName = document.getElementById("fName").value;
let lName = document.getElementById("lName").value;
let print = document.getElementById("object")
let obj;
function json (){
    obj = JSON.stringify({name: fName, lastname: lName})
    print.innerHTML += obj
}
