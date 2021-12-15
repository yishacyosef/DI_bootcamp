//*Instructions
// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out “nested for loops” on Google).
// Do this Daily Challenge by youself, without looking at the answers on the internet.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *


let totalStars = 6;
let stars= "";

for (let n = 1; n <= totalStars; n++){
    stars +="*";
    console.log(stars);
}
//Part 2//
for (let n = 1; n <= totalStars; n++){
    for (let s = 1; s <= n; s++){
        stars +="*";
    }
    console.log(stars);
    stars = "";
}