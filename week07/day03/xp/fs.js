/*Instructions
Create an fs.js file and use the Node js File System to read the RightLeft file. 
In the file, you will see a list of symbols : > and <. Each one of this symbol has 
a meaning:
> means that you move 1 step to the right
< means that you move 1 step to the left

Example:

When you start reading the file, you start at the position 0
If the file begins like this ">>>" after 3 steps you would be in position 3
If the file begins like this ">>><<" after 5 steps you would be in position 1


Use the corresponding operations to calculate the final position at the end of the 
file - The answer should be: 74 steps to the right.


Use the corresponding operations to calculate the number of steps needed to hit 
position the -1 for the first time - The answer should be: 1795 steps. */

const fs = require('fs');
fs.readFile('rightleft.txt', (err, data) => {
    if (err) {
        console.error(err)
        }
    console.log(data.toString());
});
