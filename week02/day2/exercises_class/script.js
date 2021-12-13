let userCart = {
	username : "John",
	password: 1234,
	isUserSignedIn : true,
	cart : {
		apple : 2,
		banana : 1,
		pear : 5,
	},
	prices : {
		apple : 0.5,
		banana : 0.8646466363,
		pear : 0.2
	}
}
userCart["lastname"] = "Smith";
// console.log(userCart)
userCart["prices"]["apple"] *= 1.17
let answer = prompt(`Hi, do you want banana, apple or pear?`).toLowerCase()
console.log(answer)
// console.log(toLowerCase()
let priceFruit = userCart["prices"][answer]
console.log(`the price for a ${answer} is ${priceFruit}`)

/////////Second Exercise

if (isUserSignedIn == true){
	console.log(userCart["username"], userCart["password"]);
	alert(`you are signed in`)
}
else { 
	alert(`you need to sign in`)
}

if ((userCart["username"]= "John") || (userCart["password"]= 1234)){
	alert(`your credential is false`)
}
else {
	alert(`you need to sign in`)
}
