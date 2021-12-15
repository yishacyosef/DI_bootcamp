//Exercise 1//

let people = ["Greg", "Mary", "Devon", "James"];
people.shift();
people.splice(2, 1, "Jason");
people.push("Yishac Yosef");
console.log(people);
console.log(people.indexOf("Mary"));
people.slice(start = 1, end = 2);
console.log(people);
console.log(people.indexOf("Foo"));
let last = people[people.length - 1];
console.log(last);
let peopleNumber = people.length ;
for (let counter = 0; counter < peopleNumber; counter++) {
    console.log(people[counter])
}
for (let counter = 0; counter < peopleNumber; counter++) {
    if(counter == 2){
        break;
        console.log(people[counter])
    }
}

//Exercise 2//
let color = ["green", "blue", "white", "red"]
let colorNumber = color.length; 
for (let counter = 0; counter < colorNumber; counter++) {
    console.log(`My # ${counter+1} choice is ${color[counter]}`);
}

//Exercise 3// 
let secretNumber = prompt("please type a number of your choice");
 while (secretNumber <= 10){
    secretNumber =prompt("please type a number of your choice");
 }

 //Exercise 4//
 let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}
console.log(building["numberOfFloors"]);
console.log(`the number of the apartments on the 1st and 2nd floor is ${building["numberOfAptByFloor"]["firstFloor"]} + ${building["numberOfAptByFloor"]["thirdFloor"]}`);
console.log(`${building["nameOfTenants"]["1"]}, ${building["numberOfRoomsAndRent"]["dan"]}`);
if (building["numberOfRoomsAndRent"]["sarah"][1]+building["numberOfRoomsAndRent"]["david"][1] > building["numberOfRoomsAndRent"]["dan"][1]);{
    building["numberOfRoomsAndRent"]["dan"][1] + 200;
}
//didn't made it with the if....//

//exercise 5//
let family = {
    numberOfMembers : 7,
    numberOfKids : 5,
    numberOfPets : 0
}
let keys = Object.keys(family);
console.log(keys)

for ( let n = 0; n <= 2; n++){
    console.log(family["n"]);
}

//exercise 6//
let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }
  for (n = 0; n <=2; n++){
      console.log("my: ", + details)
    }
//didn't got it right//

//exercise 7// 
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]

for (let i = 0; i < names.length; i++) {
	console.log(`the name is ${names[i][0]}`)

}