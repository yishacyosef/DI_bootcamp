/*
Instructions
Using this object :
*/
let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
/*
Hint: To do this daily challenge, take a look at today’s lesson Pass By Value & Pass By Reference

Copy this object using the method that was taught in today’s lesson.
Change the value of totalPrice to 35$. Will we also see this modification in the copied objects ?
Change the value of payed to false. Will we also see this modification in the copied objects ? Why ?
*/

let groceriesNew = groceries;
groceriesNew.totalPrice = "35$";
// console.log(groceries);
groceriesNew.other.payed = "false";
// console.log(groceriesNew);
// console.log(groceries;
//  it did change it, I thought that it wasn't going to, because is deep copying a object in an object. 
