
// ============================================================
// DAY 8 — REACT FUNDAMENTALS & JSX
// ============================================================
//
// Topics Covered:
// 1. What is React?
// 2. React vs Vanilla JavaScript
// 3. SPA — Single Page Application
// 4. React Project Setup with Vite
// 5. React Project Structure
// 6. JSX
// 7. JavaScript Expressions inside JSX
// 8. JSX Rules
// 9. React Fragments
// 10. Using JavaScript Array Methods inside JSX
//
// ============================================================


// ============================================================
// 1. WHAT IS REACT?
// ============================================================
//
// React is a JavaScript library for building user interfaces.
//
// React is mainly used for frontend development.
//
// Example:
//
// React
//   ↓
// Frontend
//   ↓
// REST API
//   ↓
// Spring Boot
//   ↓
// Database
//
// React is NOT a backend framework.
//
// ============================================================


// ============================================================
// 2. REACT COMPONENTS
// ============================================================
//
// React applications are built using components.
//
// Example:
//
// App
//  ├── Navbar
//  ├── Sidebar
//  ├── Profile
//  ├── Post
//  └── Footer
//
// Each part can be created as a reusable component.
//
// Basic component:
//
// function Welcome() {
//     return <h1>Hello Pankaj</h1>;
// }
//
// Component usage:
//
// <Welcome />
//
// Components will be covered in more detail on Day 9.
//
// ============================================================


// ============================================================
// 3. REACT VS VANILLA JAVASCRIPT
// ============================================================
//
// Vanilla JavaScript:
//
// const heading = document.createElement("h1");
//
// heading.textContent = "Hello Pankaj";
//
// document.body.appendChild(heading);
//
//
// React:
//
// function App() {
//
//     return <h1>Hello Pankaj</h1>;
//
// }
//
// React allows us to describe the UI using JSX.
//
// ============================================================


// ============================================================
// 4. SPA — SINGLE PAGE APPLICATION
// ============================================================
//
// SPA = Single Page Application.
//
// Traditional website:
//
// Page 1
//   ↓
// Server
//   ↓
// New HTML
//   ↓
// Page 2
//
// React SPA:
//
// React Application
//       ↓
//     Browser
//       ↓
//    Change UI
//       ↓
// No complete page reload
//
// React can update the required part of the UI.
//
// React Router will be covered later.
//
// ============================================================


// ============================================================
// 5. VITE
// ============================================================
//
// Vite is a frontend development/build tool.
//
// We created our React project using:
//
// npm create vite@latest learn-javascript-react
//
// Selected:
//
// Framework → React
// Variant   → JavaScript
// Linter    → ESLint
//
// Run the application using:
//
// npm run dev
//
// Development server:
//
// http://localhost:5173/
//
// ============================================================


// ============================================================
// 6. IMPORTANT PROJECT FILES
// ============================================================
//
// learn-javascript-react
//
// ├── node_modules/
// ├── public/
// ├── src/
// │   ├── assets/
// │   ├── App.jsx
// │   ├── App.css
// │   ├── index.css
// │   └── main.jsx
// │
// ├── index.html
// ├── package.json
// ├── package-lock.json
// ├── eslint.config.js
// └── vite.config.js
//
// Important files:
//
// index.html
// → Initial HTML page.
//
// main.jsx
// → Entry point where React application starts.
//
// App.jsx
// → Main React component.
//
// package.json
// → Project dependencies and scripts.
//
// ============================================================


// ============================================================
// 7. REACT APPLICATION FLOW
// ============================================================
//
// index.html
//      ↓
// <div id="root"></div>
//      ↓
// main.jsx
//      ↓
// <App />
//      ↓
// React UI
//
// ============================================================


// ============================================================
// 8. JSX
// ============================================================
//
// JSX = JavaScript XML.
//
// JSX allows us to write HTML-like syntax inside JavaScript.
//
// Example:
//
// const element = <h1>Hello Pankaj</h1>;
//
// JSX looks like HTML but is actually part of JavaScript.
//
// ============================================================


// ============================================================
// 9. BASIC JSX EXAMPLE
// ============================================================

function Example() {

    return (
        <div>
            <h1>Hello Pankaj</h1>
            <p>I am learning React.</p>
        </div>
    );

}


// ============================================================
// 10. JAVASCRIPT EXPRESSIONS INSIDE JSX
// ============================================================
//
// JavaScript expressions can be written inside:
//
// { }
//
// ============================================================

function UserInfo() {

    const name = "Pankaj";
    const role = "Java Developer";
    const experience = 2;

    return (
        <div>

            <h1>Hello {name}</h1>

            <p>I am a {role}</p>

            <p>
                Experience: {experience}+ years
            </p>

        </div>
    );

}


// ============================================================
// 11. EXPRESSIONS INSIDE JSX
// ============================================================
//
// {} can contain JavaScript expressions.
//
// Examples:
//
// {name}
//
// {experience + 1}
//
// {skills.length}
//
// {skills.join(", ")}
//
// ============================================================


function ExpressionExample() {

    const name = "Pankaj";
    const experience = 2;
    const skills = [
        "Java",
        "Spring Boot",
        "React"
    ];

    return (
        <>
            <h1>Hello {name}</h1>

            <p>
                Experience: {experience}+ years
            </p>

            <p>
                Next year I will have {experience + 1}
                years of experience.
            </p>

            <p>
                My total skills: {skills.length}
            </p>

            <p>
                Skills: {skills.join(", ")}
            </p>
        </>
    );

}


// ============================================================
// 12. JSX IS NOT EXACTLY HTML
// ============================================================
//
// JSX looks like HTML but has some differences.
//
// HTML:
//
// <div class="container">
//
// JSX:
//
// <div className="container">
//
// ============================================================


// ============================================================
// 13. className
// ============================================================
//
// HTML:
//
// <div class="container">
//
// JSX:
//
// <div className="container">
//
// React uses className instead of class.
//
// ============================================================


// ============================================================
// 14. HTML for vs JSX htmlFor
// ============================================================
//
// HTML:
//
// <label for="email">
//
// JSX:
//
// <label htmlFor="email">
//
// ============================================================


// ============================================================
// 15. camelCase ATTRIBUTES
// ============================================================
//
// React commonly uses camelCase for event attributes.
//
// HTML:
//
// onclick
//
// JSX:
//
// onClick
//
// Example:
//
// <button onClick={handleClick}>
//     Click
// </button>
//
// ============================================================


// ============================================================
// 16. SELF-CLOSING JSX TAGS
// ============================================================
//
// JSX elements that don't contain children should be closed.
//
// Example:
//
// <img />
//
// <input />
//
// <br />
//
// <hr />
//
// Example from the Vite project:
//
// <img
//     src={reactLogo}
//     className="framework"
//     alt="React logo"
// />
//
// ============================================================


// ============================================================
// 17. JSX MUST HAVE ONE PARENT
// ============================================================
//
// ❌ Invalid:
//
// return (
//     <h1>Hello</h1>
//     <p>Welcome</p>
// )
//
//
// ✅ Valid:
//
// return (
//     <div>
//         <h1>Hello</h1>
//         <p>Welcome</p>
//     </div>
// )
//
// ============================================================


// ============================================================
// 18. REACT FRAGMENTS
// ============================================================
//
// Sometimes we don't want to add an extra HTML element.
//
// We can use a Fragment:
//
// <>
//     ...
// </>
//
// Example:
//
// ============================================================

function FragmentExample() {

    return (
        <>
            <h1>Hello Pankaj</h1>

            <p>Welcome to React.</p>
        </>
    );

}


// The Fragment groups the elements without creating an
// additional HTML element in the DOM.
//
// ============================================================


// ============================================================
// 19. FRAGMENT VS DIV
// ============================================================
//
// Using div:
//
// <div>
//     <h1>Hello</h1>
//     <p>Welcome</p>
// </div>
//
// Creates:
//
// <div>
//     <h1>Hello</h1>
//     <p>Welcome</p>
// </div>
//
//
// Using Fragment:
//
// <>
//     <h1>Hello</h1>
//     <p>Welcome</p>
// </>
//
// Does not create an extra HTML element.
//
// ============================================================


// ============================================================
// 20. JAVASCRIPT ARRAY METHODS INSIDE JSX
// ============================================================
//
// JavaScript array methods can be used inside JSX expressions.
//
// Example:
//
// const skills = [
//     "Java",
//     "Spring Boot",
//     "React"
// ];
//
// We can use:
//
// skills.map(...)
//
// ============================================================


// ============================================================
// 21. MAP() INSIDE JSX
// ============================================================

function SkillsExample() {

    const skills = [
        "Java",
        "Spring Boot",
        "React"
    ];

    return (
        <>
            <h1>My Skills</h1>

            {
                skills.map(skill => (
                    <p>{skill}</p>
                ))
            }

        </>
    );

}


// ============================================================
// 22. FINAL DAY 8 EXERCISE
// ============================================================
//
// Goal:
//
// Display:
//
// Hello Pankaj Gite
//
// I am a Java Developer
//
// Experience: 2+ years
//
// Next year I will have 3 years of experience.
//
// My total skills: 3
//
// Skills: Java, Spring Boot, React
//
// ============================================================

function App() {

    const name = "Pankaj Gite";

    const role = "Java Developer";

    const experience = 2;

    const skills = [
        "Java",
        "Spring Boot",
        "React"
    ];

    return (
        <>

            <h1>Hello {name}</h1>

            <p>
                I am a {role}
            </p>

            <p>
                Experience: {experience}+ years
            </p>

            <p>
                Next year I will have {experience + 1}
                years of experience.
            </p>

            <p>
                My total skills: {skills.length}
            </p>

            <p>
                Skills: {
                    skills.map(skill => (
                        skill + ","
                    ))
                }
            </p>

        </>
    );

}


// ============================================================
// 23. CLEANER VERSION OF THE SKILLS OUTPUT
// ============================================================
//
// The previous solution works, but it produces:
//
// Java,Spring Boot,React,
//
// A cleaner approach is:
//
// ============================================================

function CleanSkillsExample() {

    const skills = [
        "Java",
        "Spring Boot",
        "React"
    ];

    return (
        <>
            <p>
                Skills:{" "}

                {skills.map((skill, index) => (
                    <span key={index}>
                        {skill}
                        {index < skills.length - 1 ? ", " : ""}
                    </span>
                ))}

            </p>
        </>
    );

}


// ============================================================
// IMPORTANT
// ============================================================
//
// The key={index} concept will be explained properly when we
// learn list rendering and keys.
//
// For now, remember:
//
// map()
//   ↓
// Create UI elements from array data.
//
// ============================================================


// ============================================================
// 24. WHAT WE LEARNED FROM THE EXERCISE
// ============================================================
//
// const variables
//
// JSX
//
// JavaScript expressions:
//
// {name}
//
// {experience + 1}
//
// {skills.length}
//
// {skills.join(", ")}
//
// Array methods inside JSX:
//
// {skills.map(...)}
//
// React Fragment:
//
// <>
// </>
//
// ============================================================


// ============================================================
// 25. JSX QUICK REFERENCE
// ============================================================
//
// JavaScript variable:
//
// const name = "Pankaj";
//
// JSX:
//
// <h1>Hello {name}</h1>
//
//
// Calculation:
//
// <p>{10 + 20}</p>
//
//
// Object property:
//
// <p>{user.name}</p>
//
//
// Array length:
//
// <p>{skills.length}</p>
//
//
// Array method:
//
// <p>{skills.join(", ")}</p>
//
//
// Array map:
//
// {skills.map(skill => (
//     <p>{skill}</p>
// ))}
//
// ============================================================


// ============================================================
// 26. DAY 8 KEY TAKEAWAYS
// ============================================================
//
// 1. React is a JavaScript library for building UIs.
//
// 2. React is used for frontend development.
//
// 3. React applications are built using components.
//
// 4. React can be used to build SPAs.
//
// 5. Vite is used to create and run modern React projects.
//
// 6. JSX allows HTML-like syntax inside JavaScript.
//
// 7. JSX expressions are written using { }.
//
// 8. JSX uses className instead of class.
//
// 9. JSX commonly uses camelCase attributes.
//
// 10. JSX elements must be properly closed.
//
// 11. JSX needs one parent element.
//
// 12. Fragments allow multiple elements without adding
//     an extra HTML element.
//
// 13. JavaScript expressions can be used directly inside JSX.
//
// 14. Array methods such as map() can be used inside JSX.
//
// ============================================================


// ============================================================
// JAVA DEVELOPER COMPARISON
// ============================================================
//
// Java                         React
// ------------------------------------------------------------
//
// Maven                        npm
//
// pom.xml                      package.json
//
// main()                       main.jsx
//
// Class / reusable logic       Component
//
// Backend                      Frontend
//
// Spring Boot                  React
//
// REST API                     fetch() / Axios
//
// ============================================================


// ============================================================
// DAY 8 COMPLETE ✅
// ============================================================
