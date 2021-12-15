for (let counter = 0; counter <= 15; counter++) {
    if (counter%2 == 0 ) { 
    console.log(`The number ${counter} is even`)
    }else{
        console.log(`The number ${counter} is odd`)
    }
}
//exercise 2//
let fruits = ["apple", "banana", "pear", "melon"];
for (let n = 0; n < fruits.length; n++){
    console.log(`${fruits[n]}s`)
}
//exercise 3//
let users = [
	{
		username:"John",
		lastName : "Smith"
	},
	{
		username:"Tom",
		lastName : "Smith"
	},
	{
		username:"Lea",
		lastName : "Smith"
	}
];

for (let counter in  users){
    console.log(users["username"[counter]])
}