let fName = document.getElementById("fName");
let lName = document.getElementById("lName");
let obj =  {name: fName, lastname: lName}
console.log(obj);
let jsonF = JSON.stringify(obj);
console.log(jsonF);