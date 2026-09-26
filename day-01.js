/*
 * ============================================================
 * Day 01 - JavaScript Basics
 * ============================================================
 *
 * Topics Covered:
 * 1. Variables - let, const
 * 2. Data Types
 * 3. typeof operator
 * 4. Comparison & Logical Operators
 * 5. if / else
 * 6. switch
 * 7. for loop
 * 8. while loop
 *
 * Note:
 * JavaScript is dynamically typed, meaning a variable does not
 * need to be declared with a specific data type.
 *
 * Prefer:
 *   const → when the variable will not be reassigned
 *   let   → when the variable needs to be reassigned
 *
 * ============================================================
 */


/* ============================================================
   1. VARIABLES
   ============================================================ */

const name = "Pankaj";
let age = 24;
const isDeveloper = true;
const city = "Pune";

console.log("Name:", name);
console.log("Age:", age);
console.log("Developer:", isDeveloper);
console.log("City:", city);


/* ============================================================
   2. DATA TYPES & typeof
   ============================================================ */

/*
 * JavaScript commonly uses:
 * - String
 * - Number
 * - Boolean
 * - Undefined
 * - Null
 * - Object
 *
 * Unlike Java, JavaScript uses "number" for both integers
 * and decimal values.
 */

console.log("\n--- Data Types ---");

console.log("name:", typeof name);
console.log("age:", typeof age);
console.log("isDeveloper:", typeof isDeveloper);
console.log("city:", typeof city);


/* ============================================================
   3. LOGICAL OPERATORS - &&
   ============================================================ */

/*
 * && (AND)
 * Both conditions must be true.
 */

const hasDrivingLicense = false;

console.log("\n--- Driving Check ---");

if (age >= 18 && hasDrivingLicense) {
    console.log("Can Drive");
} else {
    console.log("Cannot Drive");
}


/* ============================================================
   4. LOGICAL OPERATORS - ||
   ============================================================ */

/*
 * || (OR)
 * At least one condition must be true.
 */

const hasEmail = true;
const hasPhone = false;

console.log("\n--- Contact Check ---");

if (hasEmail || hasPhone) {
    console.log("Contact Available");
} else {
    console.log("No Contact");
}


/* ============================================================
   5. SWITCH STATEMENT
   ============================================================ */

/*
 * switch is useful when we need to compare one value
 * against multiple possible cases.
 */

const role = "ADMIN";

console.log("\n--- Role Check ---");

switch (role) {
    case "ADMIN":
        console.log("Admin Dashboard");
        break;

    case "USER":
        console.log("User Dashboard");
        break;

    default:
        console.log("Unknown Role");
}


/* ============================================================
   6. FOR LOOP
   ============================================================ */

/*
 * A for loop is useful when we know how many times
 * we want to execute a block of code.
 *
 * i += 2 means:
 * i = i + 2
 *
 * Therefore, this prints even numbers from 2 to 20.
 */

console.log("\n--- Even Numbers ---");

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}


/* ============================================================
   7. WHILE LOOP
   ============================================================ */

/*
 * A while loop continues executing as long as
 * the condition remains true.
 */

console.log("\n--- While Loop ---");

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}


/* ============================================================
   8. COMBINING CONDITIONS + LOOP
   ============================================================ */

console.log("\n--- Adult Check ---");

if (age >= 18) {
    console.log("Adult");

    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
} else {
    console.log("Not an adult");
}


/* ============================================================
   DAY 01 COMPLETE
   ============================================================ */

/*
 * Key Takeaways:
 *
 * const → variable cannot be reassigned
 * let   → variable can be reassigned
 *
 * === → checks value + type
 * ==  → performs type coercion
 *
 * && → AND
 * || → OR
 * !  → NOT
 *
 * if / else → conditional logic
 * switch    → multiple cases
 * for       → loop with a counter
 * while     → loop based on a condition
 */