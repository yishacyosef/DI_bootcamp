/*Instructions
Analyze the code below. What will be the output?
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// it will give the values that are in the object, maybe the tricky part was this:
coordinates: [lat, lng]}
it will give the coordinates: [49.2827, -123.1207]


Exercise 2: Display Student Info
Instructions
Create a function called displayStudentInfo(studentObject) that accepts an object as a parameter.
For example displayStudentInfo({first: 'Elie', last:'Schoppik'}).
Destructure the parameter inside the function and return a string as the example seen below:
displayStudentInfo({first: 'Elie', last:'Schoppik'}) 
// output : 'Your full name is Elie Schoppik'`
*/

let studentObject = {
  first: 'Elie', last:'Schoppik'
}

let {first, last} = studentObject;
console.log(`your full name is ${first} ${last}`)
/*
Exercise 3: User & Id
Instructions
Using this object */
const users = { user1: 18273, user2: 92833, user3: 90315 }
/*
Using methods taught in class, turn the users object into an array:
Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
FYI : The number is their ID number.

Modify the outcome of part 1, by multipling the user’s ID by 2.
Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
*/

const nameId = Object.entries(users);
console.log(nameId);
let doppel = nameId.filter(idNum => idNum.typeof === "Number"));
console.log(doppel);
/*

Exercise 4 : Person Class
Instructions
Analyze the code below. What will be the output?
class Person {
  constructor(name) {
    this.name = name;
  }
}
const member = new Person('John');
console.log(typeof member);

//I don't know

Exercise 5 : Dog Class
Instructions
Using the Dog class below:

class Dog {
  constructor(name) {
    this.name = name;
  }
};
Analyze the options below. Which constructor will successfully extend the Dog class?
  // 1
class Labrador extends Dog {
  constructor(name, size) {
    this.size = size;
  }
};


  // 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};
// this is good I think

  // 3
class Labrador extends Dog {
  constructor(size) {
    super(name);
    this.size = size;
  }
};


  // 4
class Labrador extends Dog {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
};

Exercise 6 : Challenges
Evaluate these (ie True or False)

[2] === [2] 

{} === {}
false (watched andrei's lesson)

What is, for each object below, the value of the property number ?

const object1 = { number: 5 }; --->4
const object2 = object1; // 5 --> 4
const object3 = object2; // 5 --->4
const object4 = { number: 5};  ---> 5
object1.number = 4; 


Create a class Animal with the attributes name, type and color

Create a class Mamal that extends from the Animal class. It has a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.

Create a cow object that accepts a name, a type and a color and calls the sound method that moo’s her name, type and color.
*/

class Animal{
  constructor(name, type, color){
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mamal extends Animal{
  constructor(name, type, color, sound){
    super(name, type, color)
    this.sound = sound;
  }
}

let cow = new Mamal("Kuh", "cow", "black and white","muuuu" );
console.log(cow);