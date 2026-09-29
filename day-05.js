
// ============================================================
// DAY 5 — MODERN JAVASCRIPT SYNTAX
// ============================================================
//
// Topics Covered:
// 1. Template Literals
// 2. Object Destructuring
// 3. Array Destructuring
// 4. Spread Operator (...)
// 5. Rest Operator (...)
// 6. Default Parameters
// 7. Property Shorthand
//
// ============================================================


// ============================================================
// 1. TEMPLATE LITERALS
// ============================================================
//
// Template literals use backticks (` `) instead of quotes.
// ${} is used to insert variables or expressions inside a string.
//
// Java comparison:
// Similar to string formatting, but JavaScript provides a
// much simpler syntax with ${}.
//
// ============================================================

const name = "Pankaj";
const role = "Java Developer";
const experience = 2;

console.log(
    `My name is ${name}, I am a ${role} with ${experience} years of experience.`
);

// Expressions can also be used inside ${}

const a = 10;
const b = 20;

console.log(`The sum is ${a + b}`);


// ============================================================
// 2. OBJECT DESTRUCTURING
// ============================================================
//
// Destructuring allows us to extract properties from an object
// and store them directly in variables.
//
// ============================================================

const student = {
    name: "Pankaj",
    age: 26,
    course: "Computer Engineering"
};

const { name: studentName, age, course } = student;

console.log(studentName);
console.log(age);
console.log(course);


// ------------------------------------------------------------
// Object Destructuring with Aliasing
// ------------------------------------------------------------
//
// We can give a different variable name to an object property.
//
// Syntax:
// const { propertyName: newVariableName } = object;
//
// This does NOT change the original property name.
// ------------------------------------------------------------

const employee = {
    name: "Pankaj",
    role: "Java Developer",
    experience: 2
};

const {
    name: employeeName,
    role: jobRole,
    experience: years
} = employee;

console.log(employeeName);
console.log(jobRole);
console.log(years);


// ============================================================
// 3. ARRAY DESTRUCTURING
// ============================================================
//
// Array destructuring extracts values from an array based
// on their position/index.
//
// ============================================================

const skills = ["Java", "Spring Boot", "React"];

const [firstSkill, secondSkill, thirdSkill] = skills;

console.log(firstSkill);
console.log(secondSkill);
console.log(thirdSkill);


// ------------------------------------------------------------
// Skipping Array Elements
// ------------------------------------------------------------
//
// We can skip an element by leaving an empty position.
// ------------------------------------------------------------

const colors = ["Red", "Green", "Blue"];

const [firstColor, , thirdColor] = colors;

console.log(firstColor);
console.log(thirdColor);


// ------------------------------------------------------------
// Default Values in Array Destructuring
// ------------------------------------------------------------
//
// A default value is used when the array does not contain
// a value at that position (undefined).
// ------------------------------------------------------------

const availableSkills = ["Java", "Spring Boot"];

const [
    skillOne,
    skillTwo,
    skillThree = "Not Available"
] = availableSkills;

console.log(skillOne);
console.log(skillTwo);
console.log(skillThree);


// ============================================================
// 4. SPREAD OPERATOR (...)
// ============================================================
//
// Spread expands the elements of an array or properties
// of an object.
//
// Memory Trick:
// Spread = EXPANDS OUT
//
// ============================================================


// ------------------------------------------------------------
// Spread with Arrays
// ------------------------------------------------------------

const backendSkills = ["Java", "Spring Boot"];

const allSkills = [...backendSkills, "React"];

console.log(backendSkills);
console.log(allSkills);


// ------------------------------------------------------------
// Spread with Objects
// ------------------------------------------------------------

const user = {
    name: "Pankaj",
    age: 26
};

const updatedUser = {
    ...user,
    city: "Pune"
};

console.log(updatedUser);


// ------------------------------------------------------------
// Updating Existing Object Properties
// ------------------------------------------------------------
//
// Properties written later override earlier properties.
// ------------------------------------------------------------

const userDetails = {
    name: "Pankaj",
    age: 26,
    city: "Pune"
};

const updatedUserDetails = {
    ...userDetails,
    age: 27,
    city: "Mumbai"
};

console.log(updatedUserDetails);


// Order matters:
//
// { ...userDetails, age: 27 }
// age becomes 27
//
// { age: 27, ...userDetails }
// age becomes 26 because userDetails comes later.


// ------------------------------------------------------------
// Important React Pattern
// ------------------------------------------------------------
//
// This pattern is commonly used when updating state:
//
// setUser({
//     ...user,
//     age: 27
// });
//
// It creates a new object instead of directly modifying
// the existing object.
// ------------------------------------------------------------


// ============================================================
// 5. REST OPERATOR (...)
// ============================================================
//
// Rest collects multiple values into an array.
//
// Memory Trick:
// Spread = EXPANDS
// Rest   = COLLECTS
//
// Java comparison:
// Similar conceptually to Java varargs:
//
// void add(int... numbers)
//
// JavaScript:
//
// function add(...numbers)
//
// ============================================================

function getSum(...numbers) {

    let sum = 0;

    for (let n of numbers) {
        sum = sum + n;
    }

    return sum;
}

console.log(getSum(10, 20, 30));
console.log(getSum(10, 20, 30, 40, 50));


// Here:
//
// getSum(10, 20, 30)
//
// numbers becomes:
//
// [10, 20, 30]


// ============================================================
// 6. DEFAULT PARAMETERS
// ============================================================
//
// Default parameters provide a default value when an argument
// is not provided or is undefined.
//
// ============================================================

function greet(name = "Guest") {

    console.log(`Hello ${name}`);
}

greet();
greet("Pankaj");


// Another example

function calculateSalary(salary = 30000) {

    console.log(`Salary: ${salary}`);
}

calculateSalary();
calculateSalary(50000);


// ============================================================
// 7. PROPERTY SHORTHAND
// ============================================================
//
// If the variable name and object property name are the same,
// we can use the shorter syntax.
//
// Long syntax:
//
// const employee = {
//     name: name,
//     age: age,
//     role: role
// };
//
// Short syntax:
//
// const employee = {
//     name,
//     age,
//     role
// };
//
// ============================================================

const employeeName2 = "Pankaj";
const employeeAge = 26;
const employeeRole = "Java Developer";

const employeeDetails = {
    employeeName2,
    employeeAge,
    employeeRole
};

console.log(employeeDetails);


// ------------------------------------------------------------
// Property shorthand works when the variable and property
// names are the same.
//
// Example:
// ------------------------------------------------------------

const personName = "Pankaj";
const personAge = 26;
const personRole = "Java Developer";

const person = {
    personName,
    personAge,
    personRole
};

console.log(person);


// ============================================================
// KEY TAKEAWAYS
// ============================================================
//
// 1. Template literals
//    `Hello ${name}`
//
// 2. Object destructuring
//    const { name, age } = user;
//
// 3. Array destructuring
//    const [first, second] = skills;
//
// 4. Spread
//    const newArray = [...oldArray, "React"];
//
// 5. Rest
//    function add(...numbers) {}
//
// 6. Default parameters
//    function greet(name = "Guest") {}
//
// 7. Property shorthand
//    const user = { name, age };
//
// ============================================================
//
// IMPORTANT MEMORY TRICK:
//
// Spread → EXPANDS values OUT
// Rest   → COLLECTS values IN
//
// ============================================================

//