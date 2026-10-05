// ============================================================
// DAY 7 — JAVASCRIPT ASYNCHRONOUS PROGRAMMING
// ============================================================
//
// Topics Covered:
// 1. Synchronous vs Asynchronous JavaScript
// 2. setTimeout()
// 3. Callback Functions
// 4. Callback Hell
// 5. Promises
// 6. Promise States
// 7. resolve() and reject()
// 8. .then() and .catch()
// 9. async / await
// 10. try / catch
// 11. Fetch API
// 12. response.json()
// 13. response.ok and HTTP status
// 14. import / export
//
// ============================================================


// ============================================================
// 1. SYNCHRONOUS JAVASCRIPT
// ============================================================
//
// JavaScript normally executes code line by line.
//
// The next statement waits for the previous statement to finish.
//
// ============================================================

console.log("Start");

console.log("Processing");

console.log("End");


// Output:
// Start
// Processing
// End


// Execution:
//
// Start
//   ↓
// Processing
//   ↓
// End
//
// This is called SYNCHRONOUS execution.
//
// ============================================================


// ============================================================
// 2. ASYNCHRONOUS JAVASCRIPT
// ============================================================
//
// Asynchronous operations allow JavaScript to continue executing
// other code while waiting for a task to complete.
//
// Common asynchronous operations:
//
// - API requests
// - Timers
// - File operations
// - Database operations through APIs
//
// ============================================================


// setTimeout() example

console.log("A");

setTimeout(() => {
    console.log("B");
}, 1000);

console.log("C");


// Output:
//
// A
// C
// B
//
// B runs after approximately 1 second.
//
// JavaScript does NOT stop and wait for setTimeout().
//
// ============================================================


// ============================================================
// 3. CALLBACK FUNCTIONS
// ============================================================
//
// A callback is a function passed as an argument to another
// function.
//
// The receiving function can call the callback later.
//
// ============================================================

function greet(name) {
    console.log(`Hello ${name}`);
}

function processUser(name, callback) {
    callback(name);
}

processUser("Pankaj", greet);


// Output:
//
// Hello Pankaj


// ------------------------------------------------------------
// Another callback example
// ------------------------------------------------------------

function processData(callback) {
    callback();
}

function showMessage() {
    console.log("Data processed");
}

processData(showMessage);


// Output:
//
// Data processed


// Important:
//
// processData(showMessage);
//
// means we are PASSING the function.
//
// processData(showMessage());
//
// means we are CALLING showMessage immediately and passing
// its return value.
//
// ============================================================


// ============================================================
// 4. CALLBACKS WITH ASYNCHRONOUS OPERATIONS
// ============================================================
//
// setTimeout() receives a callback function.
//
// That callback is executed later.
//
// ============================================================

setTimeout(() => {
    console.log("Data received");
}, 2000);


// The arrow function is the callback.
//
// ============================================================


// ============================================================
// 5. CALLBACK HELL
// ============================================================
//
// When multiple asynchronous operations depend on each other,
// callbacks can become deeply nested.
//
// ============================================================

/*

getUser(userId, function(user) {

    getPosts(user.id, function(posts) {

        getComments(posts[0].id, function(comments) {

            getAuthor(comments[0].authorId, function(author) {

                console.log(author);

            });

        });

    });

});

*/


// This structure becomes difficult to:
//
// - Read
// - Debug
// - Maintain
//
// This problem is commonly called CALLBACK HELL.
//
// Promises were introduced to make asynchronous code easier
// to manage.
//
// ============================================================


// ============================================================
// 6. PROMISES
// ============================================================
//
// A Promise represents the eventual result of an asynchronous
// operation.
//
// A Promise can eventually:
//
// - Succeed
// - Fail
//
// ============================================================


// Basic Promise

const promise = new Promise((resolve, reject) => {

    const success = true;

    if (success) {
        resolve("Success");
    } else {
        reject("Failed");
    }

});


// ============================================================
// 7. PROMISE STATES
// ============================================================
//
// A Promise has three states:
//
// 1. Pending
// 2. Fulfilled
// 3. Rejected
//
// ============================================================
//
// Pending:
// Operation is still running.
//
// Fulfilled:
// Operation completed successfully.
//
// Rejected:
// Operation failed.
//
// Once a Promise becomes fulfilled or rejected, it is settled.
//
// ============================================================
//
// Promise:
//
//                  Pending
//                     |
//             ┌───────┴───────┐
//             ↓               ↓
//         Fulfilled         Rejected
//             ↓               ↓
//          Success           Error
//
// ============================================================


// ============================================================
// 8. resolve() AND reject()
// ============================================================
//
// resolve() → Promise succeeded.
//
// reject() → Promise failed.
//
// ============================================================

const successPromise = new Promise((resolve, reject) => {

    resolve("Operation successful");

});

const failedPromise = new Promise((resolve, reject) => {

    reject(new Error("Operation failed"));

});


// ============================================================
// 9. .then() AND .catch()
// ============================================================
//
// .then() handles successful Promise results.
//
// .catch() handles rejected Promises / errors.
//
// ============================================================

const resultPromise = new Promise((resolve, reject) => {

    const success = true;

    if (success) {
        resolve("Data received");
    } else {
        reject(new Error("Something went wrong"));
    }

});

resultPromise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error.message);
    });


// If successful:
//
// Data received
//
// If failed:
//
// Something went wrong
//
// ============================================================


// Promise flow:
//
//              Promise
//                 |
//        ┌────────┴────────┐
//        ↓                 ↓
//     resolve()          reject()
//        ↓                 ↓
//     .then()            .catch()
//        ↓                 ↓
//    Success             Error
//
// ============================================================


// ============================================================
// 10. PROMISE WITH setTimeout()
// ============================================================
//
// We can simulate an asynchronous operation using setTimeout().
//
// ============================================================

const success = false;

const delayedPromise = new Promise((resolve, reject) => {

    if (success) {

        setTimeout(() => {
            resolve("Data received");
        }, 1000);

    } else {

        setTimeout(() => {
            reject(new Error("Something went wrong"));
        }, 2000);

    }

});


// ============================================================
// 11. ASYNC / AWAIT
// ============================================================
//
// async / await provides cleaner syntax for working with
// Promises.
//
// ============================================================
//
// async:
//
// An async function always returns a Promise.
//
// await:
//
// Waits for a Promise to settle and gives us its result.
//
// ============================================================

const dataPromise = new Promise(resolve => {
    resolve("Data received");
});

async function getData() {

    const result = await dataPromise;

    console.log(result);

}

getData();


// Output:
//
// Data received
//
// ============================================================


// ============================================================
// 12. ASYNC FUNCTION
// ============================================================
//
// A function declared with async always returns a Promise.
//
// ============================================================

async function greetUser() {
    return "Hello Pankaj";
}

greetUser()
    .then(result => {
        console.log(result);
    });


// Even though we returned a String,
// greetUser() returns a Promise.
//
// ============================================================


// ============================================================
// 13. TRY / CATCH WITH ASYNC / AWAIT
// ============================================================
//
// When an awaited Promise rejects, we can handle the error
// using try/catch.
//
// ============================================================

const apiPromise = new Promise((resolve, reject) => {

    const success = false;

    if (success) {
        resolve("Data received");
    } else {
        reject(new Error("Something went wrong"));
    }

});

async function fetchData() {

    try {

        const result = await apiPromise;

        console.log(result);

    } catch (error) {

        console.log(error.message);

    }

}

fetchData();


// Output:
//
// Something went wrong
//
// ============================================================


// ============================================================
// 14. COMPLETE ASYNC/AWAIT EXAMPLE
// ============================================================
//
// This combines:
//
// Promise
// setTimeout
// async
// await
// try/catch
// Error
//
// ============================================================

const operationSuccess = false;

const operationPromise = new Promise((resolve, reject) => {

    if (operationSuccess) {

        setTimeout(() => {
            resolve("Data received");
        }, 1000);

    } else {

        setTimeout(() => {
            reject(new Error("Something went wrong"));
        }, 2000);

    }

});

async function executeOperation() {

    console.log("Waiting for response...");

    try {

        const result = await operationPromise;

        console.log(result);

    } catch (error) {

        console.log(error.message);

    }

}

executeOperation();


// ============================================================
// 15. FETCH API
// ============================================================
//
// Fetch API is used to make HTTP requests.
//
// Common HTTP methods:
//
// GET
// POST
// PUT
// PATCH
// DELETE
//
// fetch() returns a Promise.
//
// ============================================================


// Basic example:
//
// const response = await fetch("API_URL");
//
// ============================================================


// GET request example

async function getUsers() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        console.log(response);

    } catch (error) {

        console.log(error.message);

    }

}


// getUsers();


// ============================================================
// 16. response.json()
// ============================================================
//
// fetch() gives us a Response object.
//
// We normally need to convert the response body into JSON.
//
// response.json() also returns a Promise.
//
// Therefore we use await again.
//
// ============================================================

async function getUserData() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const users = await response.json();

        console.log(users);

    } catch (error) {

        console.log(error.message);

    }

}


// getUserData();


// ============================================================
// FETCH FLOW
// ============================================================
//
// fetch()
//    ↓
// Promise<Response>
//    ↓ await
// Response object
//    ↓
// response.json()
//    ↓ await
// JavaScript data
//
// ============================================================


// ============================================================
// 17. response.ok
// ============================================================
//
// fetch() does NOT automatically reject the Promise for HTTP
// errors such as:
//
// 404 Not Found
// 500 Internal Server Error
//
// Therefore we should check response.ok.
//
// ============================================================

async function getUsersWithValidation() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {

            throw new Error(
                `HTTP Error: ${response.status}`
            );

        }

        const users = await response.json();

        console.log(users);

    } catch (error) {

        console.log(error.message);

    }

}


// getUsersWithValidation();


// ============================================================
// 18. HTTP STATUS CODES
// ============================================================
//
// Common status codes:
//
// 200 → OK
// 201 → Created
// 400 → Bad Request
// 401 → Unauthorized
// 403 → Forbidden
// 404 → Not Found
// 500 → Internal Server Error
//
// ============================================================


// response.ok:
//
// true  → Request was successful
// false → HTTP response indicates failure
//
// response.status:
//
// Gives the HTTP status number.
//
// Example:
//
// response.status
//
// 200
// 404
// 500
//
// ============================================================


// ============================================================
// 19. FINAL FETCH PATTERN
// ============================================================
//
// This is the pattern you should remember for API calls.
//
// ============================================================

async function getUsersFinal() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {

            throw new Error(
                `HTTP Error: ${response.status}`
            );

        }

        const users = await response.json();

        console.log(users);

    } catch (error) {

        console.log(error.message);

    }

}


// getUsersFinal();


// ============================================================
// 20. IMPORT / EXPORT
// ============================================================
//
// JavaScript modules allow us to split code into multiple files.
//
// Example project:
//
// project/
// │
// ├── math.js
// └── app.js
//
// ============================================================


// ------------------------------------------------------------
// math.js
// ------------------------------------------------------------

/*

export function add(a, b) {
    return a + b;
}

export function multiply(a, b) {
    return a * b;
}

*/


// ------------------------------------------------------------
// app.js
// ------------------------------------------------------------

/*

import { add, multiply } from "./math.js";

console.log(add(10, 20));

console.log(multiply(5, 4));

*/


// Output:
//
// 30
// 20
//
// ============================================================


// ============================================================
// 21. NAMED EXPORT
// ============================================================
//
// Multiple functions can be exported from the same file.
//
// ============================================================

/*

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

*/


// Import:
//
// import { add, subtract } from "./math.js";
//
// ============================================================


// ============================================================
// 22. DEFAULT EXPORT
// ============================================================
//
// A file can also have one default export.
//
// ============================================================

/*

export default function greet(name) {
    console.log(`Hello ${name}`);
}

*/


// Import:
//
// import greet from "./greet.js";
//
// ============================================================


// ============================================================
// 23. NAMED EXPORT vs DEFAULT EXPORT
// ============================================================
//
// Named export:
//
// export function add() {}
//
// Import:
//
// import { add } from "./math.js";
//
//
//
// Default export:
//
// export default function add() {}
//
// Import:
//
// import add from "./math.js";
//
// ============================================================


// ============================================================
// 24. JAVA COMPARISON
// ============================================================
//
// JavaScript                 Java
// ------------------------------------------------------------
// Promise                    CompletableFuture
// async / await              Async result handling
// try / catch                try / catch
// import                     import
// export                     public module/class member
//
// ============================================================


// ============================================================
// 25. REACT CONNECTION
// ============================================================
//
// These concepts are extremely important for React.
//
// API request:
//
// async function getUsers() {
//
//     try {
//
//         const response = await fetch("/api/users");
//
//         if (!response.ok) {
//             throw new Error("Request failed");
//         }
//
//         const users = await response.json();
//
//         console.log(users);
//
//     } catch (error) {
//
//         console.log(error.message);
//
//     }
//
// }
//
// In React, this same concept will be used with:
//
// - useEffect()
// - API calls
// - Loading states
// - Error states
// - Spring Boot REST APIs
//
// ============================================================


// ============================================================
// DAY 7 — KEY TAKEAWAYS
// ============================================================
//
// 1. Synchronous code runs line by line.
//
// 2. Asynchronous operations can complete later.
//
// 3. A callback is a function passed to another function.
//
// 4. Too many nested callbacks can cause callback hell.
//
// 5. Promise represents a future asynchronous result.
//
// 6. Promise states:
//
//       Pending
//       Fulfilled
//       Rejected
//
// 7. resolve() means success.
//
// 8. reject() means failure.
//
// 9. .then() handles successful results.
//
// 10. .catch() handles errors.
//
// 11. async makes a function asynchronous and returns a Promise.
//
// 12. await waits for a Promise result inside async code.
//
// 13. try/catch handles errors from awaited Promises.
//
// 14. fetch() is used to make HTTP requests.
//
// 15. fetch() returns a Promise.
//
// 16. response.json() converts response data into JavaScript data.
//
// 17. response.ok checks whether the HTTP response was successful.
//
// 18. response.status gives the HTTP status code.
//
// 19. import/export allows JavaScript code to be split into modules.
//
// ============================================================


// ============================================================
// MEMORY TRICK
// ============================================================
//
// Promise:
//
//      resolve → success → .then()
//
//      reject  → error   → .catch()
//
// API:
//
//      fetch()
//          ↓
//      response
//          ↓
//      response.ok
//          ↓
//      response.json()
//          ↓
//      data
//
// Async:
//
//      async
//        ↓
//      await
//        ↓
//      try/catch
//
// ============================================================


// ============================================================
// DAY 7 COMPLETE ✅
// ============================================================
