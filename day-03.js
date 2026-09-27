
// ============================================================
// DAY 3 — JAVASCRIPT ARRAYS
// ============================================================


// ============================================================
// 1. CREATING AN ARRAY
// ============================================================

// Java:
// String[] names = {"Pankaj", "Rahul", "Amit", "Sneha"};

// JavaScript:
const names = ["Pankaj", "Rahul", "Amit", "Sneha"];


// ============================================================
// 2. ACCESSING ARRAY ELEMENTS
// ============================================================

// Array indexing starts from 0.
//
// Index:
// 0 → Pankaj
// 1 → Rahul
// 2 → Amit
// 3 → Sneha

console.log(names[0]); // Pankaj
console.log(names[2]); // Amit


// ============================================================
// 3. UPDATING ARRAY ELEMENTS
// ============================================================

// Arrays declared with const can still be modified.
// const prevents reassignment of the array itself,
// but individual elements can be changed.

names[1] = "Rohit";

console.log(names);
// ["Pankaj", "Rohit", "Amit", "Sneha"]


// ============================================================
// 4. ARRAY LENGTH
// ============================================================

// length gives the number of elements in the array.

console.log(names.length); // 4

const numbers = [10, 20, 30, 40, 50];

console.log(numbers.length); // 5

// Accessing the last element:
// length - 1 gives the last index.

console.log(numbers[numbers.length - 1]); // 50


// ============================================================
// 5. push() — ADD ELEMENT AT THE END
// ============================================================

const users = ["Pankaj", "Rahul"];

users.push("Amit");

console.log(users);
// ["Pankaj", "Rahul", "Amit"]


// ============================================================
// 6. pop() — REMOVE ELEMENT FROM THE END
// ============================================================

// pop() removes and returns the last element.

const removed = users.pop();

console.log(removed); // Amit
console.log(users);   // ["Pankaj", "Rahul"]


// ============================================================
// 7. unshift() — ADD ELEMENT AT THE BEGINNING
// ============================================================

numbers.unshift(10);

console.log(numbers);
// [10, 10, 20, 30, 40, 50]


// ============================================================
// 8. shift() — REMOVE ELEMENT FROM THE BEGINNING
// ============================================================

// shift() removes and returns the first element.

const removedNum = numbers.shift();

console.log(removedNum); // 10
console.log(numbers);
// [10, 20, 30, 40, 50]


// ============================================================
// 9. slice() — COPY A PORTION OF AN ARRAY
// ============================================================

// slice(start, end)
//
// start → included
// end   → excluded
//
// slice() does NOT modify the original array.

const numbers2 = [10, 20, 30, 40, 50];

const result = numbers2.slice(1, 4);

console.log(result);
// [20, 30, 40]

console.log(numbers2);
// [10, 20, 30, 40, 50]


// ============================================================
// 10. splice() — MODIFY THE ORIGINAL ARRAY
// ============================================================

// splice(start, deleteCount, items...)
//
// start       → starting index
// deleteCount → number of elements to remove
// items       → optional elements to insert
//
// splice() modifies the original array
// and returns the removed elements.

numbers2.splice(1, 2, 99, 102);

console.log(numbers2);
// [10, 99, 102, 40, 50]


// Example:
// numbers2.splice(1, 2, 99, 102)
//
// Starting from index 1:
// Remove → 20, 30
// Insert → 99, 102


// ============================================================
// 11. for LOOP — LOOP USING INDEX
// ============================================================

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}


// ============================================================
// 12. for...of LOOP — LOOP DIRECTLY THROUGH VALUES
// ============================================================

// for...of gives us the actual value,
// so we don't need to use an index.

for (const name of names) {
    console.log(name);
}


for (const num of numbers) {
    console.log(num);
}


// Java comparison:
//
// Java:
// for (String name : names) {
//     System.out.println(name);
// }
//
// JavaScript:
// for (const name of names) {
//     console.log(name);
// }


// ============================================================
// 13. FUNCTION — CALCULATE SUM OF ARRAY
// ============================================================

function getSum(numbers3) {

    let sum = 0;

    for (const num of numbers3) {
        sum = sum + num;
    }

    return sum;
}

console.log(getSum([10, 20, 30, 40])); // 100


// ============================================================
// 14. FUNCTION — FIND MAXIMUM VALUE
// ============================================================

function getMax(numbers3) {

    // Start with the first element.
    // This also works correctly for negative numbers.

    let max = numbers3[0];

    for (let i = 1; i < numbers3.length; i++) {

        if (max < numbers3[i]) {
            max = numbers3[i];
        }
    }

    return max;
}

console.log(getMax([10, 50, 20, 80, 30])); // 80


// ============================================================
// 15. FUNCTION — FIND MINIMUM VALUE
// ============================================================

function getMin(numbers3) {

    let min = numbers3[0];

    for (const num of numbers3) {

        if (num < min) {
            min = num;
        }
    }

    return min;
}

console.log(getMin([10, 20, 5, 40, 15])); // 5


// ============================================================
// KEY TAKEAWAYS
// ============================================================

// Array:
// const numbers = [10, 20, 30];
//
// Indexing:
// numbers[0]
//
// Length:
// numbers.length
//
// Add at end:
// push()
//
// Remove from end:
// pop()
//
// Add at beginning:
// unshift()
//
// Remove from beginning:
// shift()
//
// Copy a portion:
// slice()
//
// Modify/remove/insert:
// splice()
//
// Loop with index:
// for
//
// Loop directly through values:
// for...of
//
// Important difference:
//
// slice()  → does NOT modify original array
// splice() → modifies original array
