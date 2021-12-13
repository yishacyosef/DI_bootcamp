//EXERCISE 1//

let number1 = 10;
let number2 = 20;

if(number1 > number2){
    console.log(`${number1} is bigger than ${number2}`);
} 
else {
    console.log(`${number2} is bigger than ${number1}`);
}

//EXERCISE 2// 
let newDog = "Chihuahua";
console.log(newDog.length);
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());
if (newDog == "Chihuahua"){
    console.log(`I love Chihuahuas, it’s my favorite dog breed`);  
}else{
    console.log(`I dont care, I prefer cats`);
}

//EXERCISE 3//

let numberOfUser = prompt(`Hi, please enter a number, we will check if it is even or odd`);
let evenoo = (numberOfUser%2);
if (evenoo == 0) {
console.log(`${numberOfUser} is an even number`);
} else{
    console.log(`${numberOfUser} os an odd number`);
}

//EXERCISE 4//
let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
if (users.length ==0){
    console.log(`no one is online`);
} else if (users.length ==1){
    console.log(users)
} else if (users.length ==2){
    console.log(`${users[0]} and ${users[1]} are online`)
} else{
    console.log(`${users[0]} and ${users[1]} and ${users.length-2} more are online`);
}