
/*
 * ============================================================
 * Day 02 - JavaScript Functions & Scope
 * ============================================================
 *
 * Topics Covered:
 * 1. Function Declaration
 * 2. Parameters & Arguments
 * 3. return vs console.log()
 * 4. Function Expression
 * 5. Arrow Functions
 * 6. Function Scope
 * 7. Block Scope
 * 8. var vs let vs const
 * 9. Callback Functions
 *
 * ============================================================
 */


/* ============================================================
   1. FUNCTION DECLARATION
   ============================================================ */

/*
 * A function is a reusable block of code that performs
 * a specific task.
 *
 * Syntax:
 *
 * function functionName(parameters) {
 *     // code
 *     return value;
 * }
 */

function multiply(a, b) {
    return a * b;
}

console.log("Multiply:", multiply(2, 3));


/* ============================================================
   2. PARAMETERS & ARGUMENTS
   ============================================================ */

/*
 * Parameters:
 * Variables defined when creating the function.
 *
 * Arguments:
 * Actual values passed when calling the function.
 *
 * Example:
 *
 * function add(a, b)
 *              ↑  ↑
 *          parameters
 *
 * add(10, 20)
 *     ↑   ↑
 *  arguments
 */


/* ============================================================
   3. return vs console.log()
   ============================================================ */

/*
 * console.log()
 * → Displays a value in the console.
 *
 * return
 * → Sends a value back to the caller.
 */

function add(a, b) {
    console.log(a + b);
}

const result = add(10, 20);

console.log("Returned value:", result);

/*
 * Output:
 *
 * 30
 * undefined
 *
 * Why?
 * The function prints 30 using console.log(),
 * but it doesn't return anything.
 */


/* ============================================================
   4. FUNCTION EXPRESSION
   ============================================================ */

/*
 * A function can also be assigned to a variable.
 *
 * This is called a Function Expression.
 */

const subtract = function (a, b) {
    return a - b;
};

console.log("Subtract:", subtract(5, 2));


/* ============================================================
   5. ARROW FUNCTIONS
   ============================================================ */

/*
 * Arrow functions provide a shorter syntax for writing
 * functions.
 *
 * Normal function:
 *
 * function square(number) {
 *     return number * number;
 * }
 *
 * Arrow function:
 *
 * const square = number => number * number;
 */

const square = a => a * a;

console.log("Square:", square(5));


/* ============================================================
   6. FUNCTION SCOPE
   ============================================================ */

/*
 * Scope determines where a variable can be accessed.
 *
 * Variables declared inside a function are available
 * only inside that function.
 */

function showAge() {
    const age = 24;

    console.log("Inside function:", age);
}

showAge();

// age cannot be accessed here.
// console.log(age); // ReferenceError


/* ============================================================
   7. BLOCK SCOPE
   ============================================================ */

/*
 * let and const are block-scoped.
 *
 * A block is code inside { }.
 *
 * Examples:
 * - if
 * - for
 * - while
 * - function blocks
 */

if (true) {
    let blockMessage = "Hello";
    const blockNumber = 10;

    console.log(blockMessage);
    console.log(blockNumber);
}

// These variables are not accessible here.
// console.log(blockMessage); // ReferenceError
// console.log(blockNumber);  // ReferenceError


/* ============================================================
   8. var vs let vs const
   ============================================================ */

/*
 * let and const → block scoped
 * var           → function scoped
 *
 * This is one of the main reasons modern JavaScript
 * prefers let and const instead of var.
 */

if (true) {
    var message = "Hello";
}

console.log("var example:", message);

/*
 * Output:
 *
 * Hello
 *
 * var is not block-scoped, so it can be accessed
 * outside the if block.
 */


/* ============================================================
   9. CALLBACK FUNCTIONS
   ============================================================ */

/*
 * A callback is a function passed as an argument to
 * another function.
 *
 * The receiving function can then execute the callback.
 *
 * Example:
 *
 * processNumber(5, square)
 *
 * square is passed as a callback.
 */

function processNumber(number, callback) {
    return callback(number);
}

console.log("Callback result:", processNumber(5, square));


/* ============================================================
   CALLBACK FLOW
   ============================================================ */

/*
 * processNumber(5, square)
 *
 *        ↓
 *
 * number = 5
 * callback = square
 *
 *        ↓
 *
 * callback(5)
 *
 *        ↓
 *
 * square(5)
 *
 *        ↓
 *
 * 25
 */


/* ============================================================
   KEY TAKEAWAYS
   ============================================================ */

/*
 * FUNCTION
 * → Reusable block of code.
 *
 * PARAMETERS
 * → Variables defined by a function.
 *
 * ARGUMENTS
 * → Actual values passed to a function.
 *
 * return
 * → Sends a value back to the caller.
 *
 * console.log()
 * → Prints a value to the console.
 *
 * ARROW FUNCTION
 * → Shorter function syntax.
 *
 * SCOPE
 * → Determines where a variable can be accessed.
 *
 * let / const
 * → Block scoped.
 *
 * var
 * → Function scoped.
 *
 * CALLBACK
 * → A function passed as an argument to another function.
 *
 * ============================================================
 * DAY 02 COMPLETE
 * ============================================================
 */
