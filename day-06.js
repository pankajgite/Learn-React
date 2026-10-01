
// ============================================================
// DAY 6 — JAVASCRIPT ARRAY METHODS
// ============================================================
//
// Topics Covered:
// 1. forEach()
// 2. map()
// 3. filter()
// 4. find()
// 5. findIndex()
// 6. some()
// 7. every()
// 8. reduce()
// 9. Method Chaining
//
// Java Comparison:
// JavaScript Array Methods are similar to Java Stream operations.
//
// ============================================================


// ============================================================
// 1. forEach()
// ============================================================
//
// forEach() is used to perform an action for every element
// in an array.
//
// It does NOT create a new array.
//
// ============================================================

const numbers1 = [10, 20, 30, 40, 50];

numbers1.forEach(number => {
    console.log(number);
});


// Output:
// 10
// 20
// 30
// 40
// 50


// ------------------------------------------------------------
// Java comparison:
//
// numbers.forEach(number -> System.out.println(number));
//
// JavaScript:
//
// numbers.forEach(number => console.log(number));
// ------------------------------------------------------------


// ============================================================
// 2. map()
// ============================================================
//
// map() is used to transform every element of an array.
//
// It returns a NEW array.
//
// ============================================================

const numbers2 = [10, 20, 30, 40, 50];

const doubledNumbers = numbers2.map(number => number * 2);

console.log(doubledNumbers);


// Output:
// [20, 40, 60, 80, 100]


// ------------------------------------------------------------
// map() with Objects
// ------------------------------------------------------------

const users1 = [
    { name: "Pankaj", age: 26 },
    { name: "Rahul", age: 25 },
    { name: "Amit", age: 27 }
];

const names = users1.map(user => user.name);

console.log(names);


// Output:
// ["Pankaj", "Rahul", "Amit"]


// ------------------------------------------------------------
// map() can be written with an implicit return:
//
// const names = users1.map(user => user.name);
//
// This is equivalent to:
//
// const names = users1.map(user => {
//     return user.name;
// });
// ------------------------------------------------------------


// ============================================================
// 3. filter()
// ============================================================
//
// filter() is used to select elements that satisfy a condition.
//
// It returns a NEW array.
//
// ============================================================

const numbers3 = [5, 12, 8, 20, 3, 15];

const numbersGreaterThanTen = numbers3.filter(number => number > 10);

console.log(numbersGreaterThanTen);


// Output:
// [12, 20, 15]


// ------------------------------------------------------------
// Example: Filter even numbers
// ------------------------------------------------------------

const numbers4 = [10, 15, 20, 25, 30];

const evenNumbers = numbers4.filter(number => number % 2 === 0);

console.log(evenNumbers);


// Output:
// [10, 20, 30]


// ============================================================
// 4. find()
// ============================================================
//
// find() returns the FIRST element that satisfies a condition.
//
// If no element is found, it returns undefined.
//
// ============================================================

const users2 = [
    { id: 1, name: "Pankaj" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Amit" }
];

const user2 = users2.find(user => user.id === 2);

console.log(user2);


// Output:
// { id: 2, name: "Rahul" }


// ------------------------------------------------------------
// If nothing matches:
//
// const result = users2.find(user => user.id === 10);
//
// console.log(result);
//
// Output:
// undefined
// ------------------------------------------------------------


// ============================================================
// 5. findIndex()
// ============================================================
//
// findIndex() returns the INDEX of the first element that
// satisfies a condition.
//
// If no element is found, it returns -1.
//
// ============================================================

const userIndex = users2.findIndex(user => user.name === "Amit");

console.log(userIndex);


// Output:
// 2


// Array:
//
// Index:     0          1          2
//          Pankaj     Rahul      Amit
//
// findIndex() returns 2.


// ============================================================
// 6. some()
// ============================================================
//
// some() checks whether AT LEAST ONE element satisfies
// the condition.
//
// Returns:
// true  → at least one element matches
// false → no element matches
//
// ============================================================

const users3 = [
    { name: "Pankaj", age: 26 },
    { name: "Rahul", age: 25 },
    { name: "Amit", age: 30 }
];

const hasUserAbove28 = users3.some(user => user.age > 28);

console.log(hasUserAbove28);


// Output:
// true


// ============================================================
// 7. every()
// ============================================================
//
// every() checks whether ALL elements satisfy the condition.
//
// Returns:
// true  → every element matches
// false → at least one element does not match
//
// ============================================================

const allUsersAbove20 = users3.every(user => user.age > 20);

console.log(allUsersAbove20);


// Output:
// true


// ============================================================
// some() vs every()
// ============================================================
//
// some()  → Is AT LEAST ONE element matching?
//
// every() → Are ALL elements matching?
//
// Example:
//
// [10, 20, 30].some(number => number > 25)
// → true
//
// [10, 20, 30].every(number => number > 25)
// → false
//
// ============================================================


// ============================================================
// 8. reduce()
// ============================================================
//
// reduce() is used to combine all array elements into
// ONE final value.
//
// Common examples:
// - Sum
// - Total price
// - Maximum value
// - Counting
// - Building an object
//
// ============================================================

const numbers5 = [5, 10, 15, 20];

const sum = numbers5.reduce((total, number) => {
    return total + number;
}, 0);

console.log(sum);


// Output:
// 50


// ------------------------------------------------------------
// reduce() execution:
//
// Initial total = 0
//
// 0 + 5  = 5
// 5 + 10 = 15
// 15 + 15 = 30
// 30 + 20 = 50
//
// Final result = 50
// ------------------------------------------------------------


// ------------------------------------------------------------
// Short version:
//
// const sum = numbers5.reduce((a, b) => a + b, 0);
//
// This is also correct.
// ------------------------------------------------------------


// ============================================================
// 9. METHOD CHAINING
// ============================================================
//
// Array methods can be chained together.
//
// Example:
//
// filter() → select elements
// map()    → transform elements
//
// ============================================================

const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 },
    { name: "Monitor", price: 15000 }
];

const expensiveProductNames = products
    .filter(product => product.price > 5000)
    .map(product => product.name);

console.log(expensiveProductNames);


// Output:
// ["Laptop", "Monitor"]


// ------------------------------------------------------------
// Step-by-step:
//
// products
//     ↓
// filter(price > 5000)
//     ↓
// Laptop, Monitor
//     ↓
// map(product => product.name)
//     ↓
// ["Laptop", "Monitor"]
// ------------------------------------------------------------


// ============================================================
// MAP vs FILTER
// ============================================================
//
// map()    → TRANSFORM every element
//
// Example:
//
// [1, 2, 3]
//     ↓ map()
// [2, 4, 6]
//
//
// filter() → SELECT matching elements
//
// Example:
//
// [1, 2, 3, 4]
//     ↓ filter(number => number > 2)
// [3, 4]
//
// ============================================================


// ============================================================
// FIND vs FILTER
// ============================================================
//
// find() → returns FIRST matching element
//
// filter() → returns ALL matching elements
//
// Example:
//
// const numbers = [10, 20, 30, 40];
//
// numbers.find(number => number > 15);
// → 20
//
// numbers.filter(number => number > 15);
// → [20, 30, 40]
//
// ============================================================


// ============================================================
// FIND vs FINDINDEX
// ============================================================
//
// find()
// → returns the matching ELEMENT
//
// findIndex()
// → returns the matching ELEMENT'S INDEX
//
// ============================================================


// ============================================================
// SOME vs EVERY
// ============================================================
//
// some()
// → At least ONE element must satisfy the condition.
//
// every()
// → ALL elements must satisfy the condition.
//
// ============================================================


// ============================================================
// REDUCE
// ============================================================
//
// reduce()
// → Many values become ONE final value.
//
// Example:
//
// [10, 20, 30]
//      ↓
// reduce()
//      ↓
// 60
//
// ============================================================


// ============================================================
// JAVA STREAM COMPARISON
// ============================================================
//
// JavaScript                  Java Stream
// ------------------------------------------------------------
// forEach()                   forEach()
// map()                       map()
// filter()                    filter()
// find()                      filter().findFirst()
// some()                      anyMatch()
// every()                     allMatch()
// reduce()                    reduce()
//
// ============================================================


// ============================================================
// KEY TAKEAWAYS
// ============================================================
//
// 1. forEach()
//    → Perform an action for every element.
//
// 2. map()
//    → Transform every element and return a new array.
//
// 3. filter()
//    → Select elements that satisfy a condition.
//
// 4. find()
//    → Return the first matching element.
//
// 5. findIndex()
//    → Return the index of the first matching element.
//
// 6. some()
//    → Check if at least one element matches.
//
// 7. every()
//    → Check if all elements match.
//
// 8. reduce()
//    → Combine all elements into one final value.
//
// 9. Method chaining
//    → Combine multiple array methods.
//
// ============================================================
//
// IMPORTANT MEMORY:
//
// forEach → DO something
// map     → CHANGE every element
// filter  → SELECT elements
// find    → FIND first element
// findIndex → FIND first index
// some    → ANY?
// every   → ALL?
// reduce  → COMBINE
//
// ============================================================
