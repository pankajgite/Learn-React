
// ============================================================
// DAY 4 — JAVASCRIPT OBJECTS
// ============================================================


// ============================================================
// 1. CREATING AN OBJECT
// ============================================================

// An object stores data using key-value pairs.
//
// key       → property name
// value     → property value

const student = {
    name: "Pankaj",
    age: 25,
    course: "Computer Engineering",
    city: "Pune"
};

console.log(student);


// ============================================================
// 2. ACCESSING OBJECT PROPERTIES
// ============================================================

// Dot notation

console.log(student.name);
console.log(student.course);
console.log(student.city);


// Bracket notation

console.log(student["name"]);
console.log(student["course"]);
console.log(student["city"]);


// Both dot notation and bracket notation
// can be used to access object properties.


// ============================================================
// 3. UPDATING OBJECT PROPERTIES
// ============================================================

// Objects declared with const can still have their
// properties modified.
//
// const prevents reassignment of the object variable,
// but it does not prevent modifying its properties.

console.log("Before updating");
console.log(student);

student.age = 26;
student.city = "Mumbai";

console.log("After updating");
console.log(student);


// ============================================================
// 4. ADDING A NEW PROPERTY
// ============================================================

// JavaScript objects are dynamic.
// We can add new properties after creating the object.

student.phone = "9876543210";

console.log(student);


// ============================================================
// 5. DELETING A PROPERTY
// ============================================================

// delete removes a property from an object.

delete student.phone;

console.log(student);


// ============================================================
// 6. OBJECTS CAN CONTAIN ARRAYS
// ============================================================

// An object can contain different types of values,
// including arrays.

const employee = {
    name: "Pankaj",
    experience: 2,
    isDeveloper: true,
    skills: ["Java", "Spring Boot", "React"]
};

console.log(employee.name);

// Accessing an element from the array inside the object

console.log(employee.skills[0]); // Java


// ============================================================
// 7. NESTED OBJECTS
// ============================================================

// An object can contain another object.

const employee2 = {
    name: "Pankaj",

    address: {
        city: "Pune",
        pincode: 411001
    }
};

// Accessing nested object properties

console.log(employee2.address.city);
console.log(employee2.address.pincode);


// ============================================================
// 8. OBJECT METHODS
// ============================================================

// An object property can contain a function.
// A function inside an object is called a method.

const person = {
    name: "Pankaj",
    age: 26,

    introduce: function () {
        console.log(
            "My name is " +
            this.name +
            " and I am " +
            this.age +
            " years old."
        );
    }
};

// Calling the method

person.introduce();


// ============================================================
// 9. this KEYWORD
// ============================================================

// Inside an object's method,
// 'this' refers to the object calling the method.
//
// person.introduce()
//        ↓
//      this
//
// Therefore:
//
// this.name → person.name
// this.age  → person.age


// ============================================================
// 10. DYNAMIC PROPERTY ACCESS
// ============================================================

// Bracket notation is useful when the property name
// is stored inside a variable.

const employee3 = {
    name: "Pankaj",
    role: "Java Developer",
    experience: 2
};

const key = "role";

console.log(employee3[key]); // Java Developer


// employee3[key]
// is equivalent to:
// employee3["role"]


// ============================================================
// 11. OPTIONAL CHAINING — ?.
// ============================================================

// Optional chaining allows us to safely access
// nested properties.
//
// If the property before ?. does not exist,
// JavaScript returns undefined instead of throwing
// an error.

const user = {
    name: "Pankaj",
    address: {
        city: "Pune"
    }
};

console.log(user.address?.city);    // Pune
console.log(user.address?.pincode); // undefined


// If address itself does not exist:

const user2 = {
    name: "Pankaj"
};

console.log(user2.address?.city); // undefined


// ============================================================
// KEY TAKEAWAYS
// ============================================================

// Object:
// const user = {
//     name: "Pankaj",
//     age: 26
// };
//
// Access property:
// user.name
//
// Bracket notation:
// user["name"]
//
// Dynamic property:
// user[key]
//
// Update:
// user.age = 27
//
// Add:
// user.email = "example@gmail.com"
//
// Delete:
// delete user.email
//
// Array inside object:
// user.skills[0]
//
// Nested object:
// user.address.city
//
// Object method:
// user.greet()
//
// this:
// this.name
//
// Optional chaining:
// user.address?.city
//
// Important:
// const prevents reassignment of the object,
// but its properties can still be modified.

