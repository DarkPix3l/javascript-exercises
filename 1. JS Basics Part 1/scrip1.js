//Exercise 1: Basic Syntax and Variables

const myName = "greta";
const age = 999;
const isStudent = true;

console.log(myName + " " + age + " " + isStudent);

// Exercise 2: Data Types

const favoriteFoods = ["pizza", "chocolate", "farinata"];

const person = {
  name: "axel",
  age: 32,
  hobbies: ["reading", "travelling", "DIY"],
};

console.log(favoriteFoods, person);

//Exercise 3: Conditions

function checkAge(age) {
  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Minor");
  }
}
checkAge(26);
checkAge(11);

//Exercise 4: Loops

/* for (let i = 1; i <= 10; i++) {
  console.log(i);
} */

console.log("_________________");

/* let i = 0;
while (i < 10) {
  i++;
}
console.log(i); */

// Exercise 5: Functions

function add(a, b) {
  return a + b;
}
console.log(add(5, 6));

function greet(name) {
  return name;
}
console.log("Hello, I'm " + greet("Tiziana"));

console.log("_________________");

//Exercise 6: Combining Everything

const roberto = {
  name: "Roberto",
  age: "27",
  hobbies: ["reading", "travelling", "DIY"],

  createPerson() {
    return (
      "Hello I'm " +
      roberto.name +
      ", " +
      roberto.age +
      " I'm a " +
      roberto.hobbies
    );
  },
};

console.log(roberto.createPerson()); /* call it as an object property */

//or

function createPerson2(name, age, hobbies) {
  return {
    name: name,
    age: age,
    hobbies: hobbies,
  };
}
const person2 = createPerson2("Daniele", 37, ["reading", "travelling", "DIY"]);
console.log(person2);
//______________
const alice = {
  name: "Alice",
  age: "37",
  hobbies: ["reading", "travelling", "DIY"],
};

function describePerson() {
  return (
    "Hello I'm " + alice.name + ", " + alice.age + " I'm a " + alice.hobbies
  );
}
console.log(describePerson());
