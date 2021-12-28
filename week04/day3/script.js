/*Exercise 1 : Analyzing
Instructions
Analyze these pieces of code before executing them. What will be the outputs ?
------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

the output should be : that the arrays "vegetables" and "fruits" are going to be
included in const result.
------2------
const country = "USA";
console.log([...country]);

prediction: Is going to console log USA.
result: not as spected, it makes every letter into an array object. 

------Bonus------
let newArray = [...[,,]];
console.log(newArray);

prediction = I think it will give an empty output. 
result = (2) [undefined, undefined]
0: undefined
1: undefined
length: 2
undefined


Exercise 2 : Employees
Instructions
Using this array:
*/
let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
             /*
Using the map() method, say hello to the users using only their firstname (ie. “Hello Bradley”, “Hello Chloe” ect…)
Using the filter() method, create a new array, containing only the Full Stack Residents.
Bonus : Chain the filter method with a map method, to congratulate the Full Stack Residents (ie. “Good job Bradley”, “Good Job Chloe” ect…)
*/
let hello = users.map((elem) => {
    let sayHello = elem.firstName    
    console.log(`hello ${sayHello}`)
});

let newArray = users.filter((fullStack) => fullStack.role == "Full Stack Resident" );
console.log(newArray)

    /*

Exercise 3 : Star Wars
Instructions
Using this array ;
1. Use the reduce() method to combine all of these into a single string.
*/
let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away']
let beYahad = epic.reduce((accumulator, currentValue) => {
	return accumulator + " " +  currentValue;
});
console.log(beYahad)

/*
Exercise 4 : Employees #2
Instructions
Using this object:

let student = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];
Using the filter() method, create a new array, containing the students that passed the course.
Bonus : Chain the filter method with a map method, to congratulate the students with their name and course name (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)
*/

let student = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

               
let bestStudents = student.filter((passed) => passed.isPassed == true );
console.log(bestStudents);