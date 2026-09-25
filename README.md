# 30-Day JavaScript + React Learning Plan

A practical 30-day roadmap covering JavaScript, React, API integration,
authentication, state management, advanced React, and interview
preparation.

The plan uses a real full-stack application for practical work.

------------------------------------------------------------------------

## Learning Flow

``` text
Learn Concept
     ↓
Understand Why
     ↓
Write Code
     ↓
Practice Exercise
     ↓
Apply to Project
     ↓
Interview Questions
     ↓
Quiz / Revision
     ↓
Next Day
```

------------------------------------------------------------------------

## 30-Day Progress

  Day   Topic                                Status
  ----- ------------------------------------ --------
  01    JavaScript Basics                    ⬜
  02    Functions + Scope                    ⬜
  03    Arrays                               ⬜
  04    Objects                              ⬜
  05    Modern JavaScript Syntax             ⬜
  06    Array Methods                        ⬜
  07    Async JavaScript                     ⬜
  08    React Setup + JSX                    ⬜
  09    React Components                     ⬜
  10    Props                                ⬜
  11    State + useState                     ⬜
  12    Events + Rendering                   ⬜
  13    Forms                                ⬜
  14    React + REST APIs                    ⬜
  15    useEffect                            ⬜
  16    useRef + useContext                  ⬜
  17    Custom Hooks                         ⬜
  18    React Router                         ⬜
  19    JWT Authentication                   ⬜
  20    Protected Routes                     ⬜
  21    Redux Toolkit                        ⬜
  22    useMemo + useCallback + React.memo   ⬜
  23    React Rendering + Virtual DOM        ⬜
  24    Performance + Lazy Loading           ⬜
  25    Error Handling                       ⬜
  26    Search + Pagination + Filtering      ⬜
  27    React Architecture                   ⬜
  28    Project Completion                   ⬜
  29    Interview Preparation                ⬜
  30    Mock Interview                       ⬜

------------------------------------------------------------------------

# Week 1 --- JavaScript Fundamentals

## Day 1 --- JavaScript Basics

### Concepts

-   What is JavaScript?
-   Java vs JavaScript
-   How JavaScript runs
-   Variables
-   `var`
-   `let`
-   `const`
-   Data types
-   Strings
-   Numbers
-   Booleans
-   `null`
-   `undefined`
-   Operators
-   `if / else`
-   `switch`
-   `for`
-   `while`

### Code Practice

-   Variables and data types
-   Conditions
-   Loops
-   Simple calculations
-   Basic data processing

### Project Practice

Create basic JavaScript data and operations for users, posts, and
connections.

### Interview Questions

-   What is JavaScript?
-   Java vs JavaScript?
-   `var` vs `let` vs `const`?
-   What are JavaScript data types?
-   `null` vs `undefined`?
-   What is type coercion?
-   What is `===` vs `==`?

### Revision

-   Write variables without looking at examples.
-   Write conditions and loops independently.

------------------------------------------------------------------------

## Day 2 --- Functions + Scope

### Concepts

-   Function declaration
-   Function expression
-   Parameters
-   Return values
-   Arrow functions
-   Scope
-   Block scope
-   Function scope
-   Callback introduction

### Code Practice

-   Create reusable functions
-   Functions with parameters
-   Functions returning objects
-   Arrow functions

### Project Practice

Create functions for finding users, creating posts, and checking
connections.

### Interview Questions

-   Function declaration vs expression?
-   What is an arrow function?
-   Arrow function vs normal function?
-   What is scope?
-   What is block scope?
-   What is a callback?

### Revision

Write 5 functions without copying syntax.

------------------------------------------------------------------------

## Day 3 --- Arrays

### Concepts

-   Array creation
-   Indexing
-   Updating elements
-   `push`
-   `pop`
-   `shift`
-   `unshift`
-   `slice`
-   `splice`
-   `length`
-   Iterating arrays

### Code Practice

Create and modify arrays of users, posts, and connections.

### Project Practice

Create sample user/post/connection collections.

### Interview Questions

-   What is an array?
-   `slice()` vs `splice()`?
-   Which array methods mutate the array?
-   How do you copy an array?

### Revision

Practice array operations without looking at documentation.

------------------------------------------------------------------------

## Day 4 --- Objects

### Concepts

-   Objects
-   Properties
-   Methods
-   Nested objects
-   Dot notation
-   Bracket notation
-   Optional chaining basics

### Code Practice

Create objects representing:

-   User
-   Post
-   Connection
-   Comment

### Project Practice

Create objects similar to backend DTO responses.

### Interview Questions

-   What is an object?
-   Object vs array?
-   Dot vs bracket notation?
-   How do you access nested properties?
-   What is optional chaining?

### Revision

Create and modify nested objects.

------------------------------------------------------------------------

## Day 5 --- Modern JavaScript Syntax

### Concepts

-   Object destructuring
-   Array destructuring
-   Spread operator
-   Rest operator
-   Template literals
-   Default parameters
-   Property shorthand

### Code Practice

-   Extract object properties
-   Copy objects
-   Copy arrays
-   Update objects immutably
-   Build dynamic strings

### Project Practice

Update user/post objects without directly modifying the original object.

### Interview Questions

-   What is destructuring?
-   Spread vs rest operator?
-   What are template literals?
-   What is immutability?

### Revision

Practice destructuring and spread syntax.

------------------------------------------------------------------------

## Day 6 --- Array Methods

### Concepts

-   `map`
-   `filter`
-   `reduce`
-   `find`
-   `findIndex`
-   `forEach`
-   `some`
-   `every`

### Code Practice

Process arrays of users and posts.

### Project Practice

-   Find users
-   Filter connections
-   Transform posts
-   Calculate likes
-   Find popular posts

### Java Comparison

``` text
Java Stream.map()     → JavaScript map()
Java Stream.filter()  → JavaScript filter()
Java Stream.reduce()  → JavaScript reduce()
forEach()             → forEach()
```

### Interview Questions

-   `map()` vs `forEach()`?
-   `map()` vs `filter()`?
-   What does `reduce()` do?
-   `find()` vs `filter()`?
-   How is Java Stream API similar to JavaScript array methods?

### Revision

Solve at least 5 array-method problems.

------------------------------------------------------------------------

## Day 7 --- Async JavaScript

### Concepts

-   Synchronous vs asynchronous
-   Callbacks
-   Promises
-   Promise states
-   `async`
-   `await`
-   `try/catch`
-   Fetch API
-   JSON
-   `import`
-   `export`

### Code Practice

Call a public/test API and process the response.

### Project Practice

Call an existing backend endpoint and display/process the response.

### Interview Questions

-   What is a Promise?
-   Promise states?
-   `async/await`?
-   `async/await` vs Promise `.then()`?
-   How do you handle async errors?
-   What is Fetch API?

### Revision

Write one complete async API call independently.

------------------------------------------------------------------------

# Week 2 --- React Fundamentals

## Day 8 --- React Setup + JSX

### Concepts

-   What is React?
-   SPA
-   React project structure
-   Vite
-   JSX
-   Expressions
-   Fragments

### Code Practice

Create a React project and render basic components.

### Project Practice

Create the frontend structure for the application.

### Interview Questions

-   What is React?
-   Why React?
-   What is JSX?
-   JSX vs HTML?
-   What is an SPA?
-   Why use Vite?

------------------------------------------------------------------------

## Day 9 --- Components

### Concepts

-   Functional components
-   Component composition
-   Reusable components
-   Component responsibility

### Code Practice

Create reusable components.

### Project Practice

Build:

-   Navbar
-   ProfileCard
-   PostCard
-   ConnectionCard

### Interview Questions

-   What is a component?
-   Why use components?
-   Functional vs class components?
-   What is component composition?

------------------------------------------------------------------------

## Day 10 --- Props

### Concepts

-   Props
-   Props destructuring
-   `children`
-   Parent-to-child communication

### Code Practice

Pass different data to reusable components.

### Project Practice

Pass user, post, and connection data to components.

### Interview Questions

-   What are props?
-   Props vs state?
-   Can a child modify props?
-   What is `children`?
-   How does parent-to-child communication work?

------------------------------------------------------------------------

## Day 11 --- State + useState

### Concepts

-   State
-   `useState`
-   State setter
-   Re-rendering
-   State vs props

### Code Practice

Build counters, toggles, and interactive components.

### Project Practice

Implement interactive post/connection UI.

### Interview Questions

-   What is state?
-   What is `useState`?
-   Why shouldn't state be modified directly?
-   What causes a component to re-render?
-   Props vs state?

------------------------------------------------------------------------

## Day 12 --- Events + Rendering

### Concepts

-   Click events
-   Change events
-   Submit events
-   Conditional rendering
-   List rendering
-   Keys

### Code Practice

Create interactive lists and conditions.

### Project Practice

Build feed and connection lists with loading/empty states.

### Interview Questions

-   How are events handled in React?
-   Why are keys required?
-   What is conditional rendering?
-   What happens when state changes?

------------------------------------------------------------------------

## Day 13 --- Forms

### Concepts

-   Controlled components
-   Form state
-   Form submission
-   Validation
-   Input handling

### Code Practice

Create login and registration forms.

### Project Practice

Build:

-   Login form
-   Register form
-   Create-post form

### Interview Questions

-   Controlled vs uncontrolled components?
-   How do you handle forms?
-   How do you validate forms?
-   How do you prevent default form submission?

------------------------------------------------------------------------

## Day 14 --- React + REST APIs

### Concepts

-   Axios
-   Fetch
-   GET
-   POST
-   PUT
-   DELETE
-   Headers
-   HTTP status codes
-   CORS
-   Loading states
-   Error states

### Code Practice

Build API service functions.

### Project Practice

Connect React to the existing backend.

### Interview Questions

-   How does React communicate with Spring Boot?
-   Axios vs Fetch?
-   What is CORS?
-   How do you handle API errors?
-   Where should API calls be placed?

------------------------------------------------------------------------

# Week 3 --- Hooks, Routing & Authentication

## Day 15 --- useEffect

### Concepts

-   Effects
-   Dependency array
-   Cleanup
-   Initial render
-   Re-running effects
-   Infinite loops

### Project Practice

Fetch profile/feed data when pages load.

### Interview Questions

-   What is `useEffect`?
-   When does it execute?
-   What is the dependency array?
-   Why can `useEffect` cause infinite loops?
-   What is cleanup?

------------------------------------------------------------------------

## Day 16 --- useRef + useContext

### Concepts

-   `useRef`
-   DOM references
-   Mutable values
-   `useContext`
-   Context Provider
-   Consuming context

### Project Practice

Create authentication/user context.

### Interview Questions

-   `useRef` vs `useState`?
-   What is Context API?
-   When should Context be used?
-   Context vs Redux?

------------------------------------------------------------------------

## Day 17 --- Custom Hooks

### Concepts

-   Custom hooks
-   Hook naming convention
-   Reusable logic
-   Separating UI and logic

### Project Practice

Create:

``` text
useAuth
usePosts
useConnections
```

### Interview Questions

-   What is a custom hook?
-   Why create custom hooks?
-   Rules of Hooks?
-   Can custom hooks use other hooks?

------------------------------------------------------------------------

## Day 18 --- React Router

### Concepts

-   Routes
-   Route configuration
-   `Link`
-   `useNavigate`
-   Route parameters
-   Nested routes

### Project Practice

Create:

``` text
/login
/register
/feed
/profile
/connections
/posts
```

### Interview Questions

-   What is React Router?
-   `Link` vs `useNavigate()`?
-   What are route parameters?
-   How do you create protected routes?

------------------------------------------------------------------------

## Day 19 --- JWT Authentication

### Concepts

-   Login flow
-   JWT
-   Access token
-   Authorization header
-   Token persistence
-   Axios interceptor concept

### Project Practice

Connect React authentication to Spring Security/JWT.

### Interview Questions

-   Explain JWT authentication flow.
-   Where is JWT sent?
-   Authentication vs authorization?
-   How does Spring Security validate JWT?
-   How does React know the user is authenticated?

------------------------------------------------------------------------

## Day 20 --- Protected Routes

### Concepts

-   Route guards
-   Unauthorized handling
-   Logout
-   Authentication state

### Project Practice

Protect authenticated application pages.

### Interview Questions

-   How do protected routes work?
-   How do you implement logout?
-   What happens when JWT expires?
-   How should unauthorized API responses be handled?

------------------------------------------------------------------------

## Day 21 --- Redux Toolkit

### Concepts

-   Store
-   Slice
-   Action
-   Reducer
-   Dispatch
-   Selector
-   Redux Toolkit
-   When Redux is useful

### Project Practice

Implement suitable global state.

### Interview Questions

-   Why Redux?
-   Context vs Redux?
-   What is a reducer?
-   What is a slice?
-   What is `dispatch()`?
-   What is `useSelector()`?

------------------------------------------------------------------------

# Week 4 --- Advanced React + Project

## Day 22 --- Memoization

### Concepts

-   `useMemo`
-   `useCallback`
-   `React.memo`
-   Re-render optimization
-   Memoization tradeoffs

### Project Practice

Optimize feed/connections where appropriate.

### Interview Questions

-   `useMemo` vs `useCallback`?
-   What does `React.memo` do?
-   When should memoization be avoided?

------------------------------------------------------------------------

## Day 23 --- React Rendering

### Concepts

-   Virtual DOM
-   Reconciliation
-   Render cycle
-   Keys
-   State updates
-   Re-renders

### Project Practice

Diagnose a rendering/re-rendering issue.

### Interview Questions

-   What is Virtual DOM?
-   What is reconciliation?
-   What causes a re-render?
-   Why are keys important?
-   Does every re-render update the real DOM?

------------------------------------------------------------------------

## Day 24 --- Performance

### Concepts

-   Lazy loading
-   `Suspense`
-   Code splitting
-   Debouncing
-   Throttling
-   Pagination

### Project Practice

Optimize search and non-critical pages.

### Interview Questions

-   What is lazy loading?
-   What is code splitting?
-   Debouncing vs throttling?
-   How would you optimize a large list?

------------------------------------------------------------------------

## Day 25 --- Error Handling

### Concepts

-   API errors
-   Loading states
-   Empty states
-   Error Boundaries
-   User-friendly error messages

### Project Practice

Add production-style error handling.

### Interview Questions

-   How do you handle API errors?
-   What is an Error Boundary?
-   How do you handle loading/empty states?
-   Where should error handling happen?

------------------------------------------------------------------------

## Day 26 --- Search + Pagination + Filtering

### Concepts

-   Search
-   Query parameters
-   Filtering
-   Sorting
-   Pagination
-   Debouncing

### Project Practice

Implement search/feed pagination using backend APIs.

### Interview Questions

-   Client-side vs server-side pagination?
-   How does debounced search work?
-   How do you pass filters to a REST API?
-   How would you optimize a search API?

------------------------------------------------------------------------

## Day 27 --- React Architecture

### Concepts

-   Folder structure
-   Components
-   Pages
-   Services
-   Hooks
-   Context
-   Store
-   Utilities
-   Reusable components

### Code Practice

Refactor code into a clean structure.

### Project Practice

Create an interview-ready frontend architecture.

### Interview Questions

-   How would you structure a React application?
-   Where should API calls live?
-   Where should reusable logic live?
-   When should state be local vs global?

------------------------------------------------------------------------

## Day 28 --- Project Completion

### Concepts

-   Integration
-   Debugging
-   Edge cases
-   Responsive UI
-   Reusable components
-   Code cleanup

### Project Practice

Complete the major application flows.

### Interview Questions

Be able to explain:

-   Architecture
-   Authentication
-   API integration
-   State management
-   Routing
-   Error handling
-   Performance decisions

------------------------------------------------------------------------

## Day 29 --- Interview Preparation

### JavaScript

-   Variables
-   Scope
-   Functions
-   Arrays
-   Objects
-   Destructuring
-   Spread/rest
-   Array methods
-   Promises
-   Async/await
-   ES6+

### React

-   Components
-   Props
-   State
-   Hooks
-   Context
-   Router
-   Redux
-   Rendering
-   Performance

### Full Stack

-   React → Spring Boot
-   REST
-   JWT
-   CORS
-   Error handling

### Project

Practice explaining the complete application.

------------------------------------------------------------------------

## Day 30 --- Mock Interview

### Round 1 --- JavaScript

Theory + coding.

### Round 2 --- React

Theory + hooks.

### Round 3 --- React Coding

Small practical problem.

### Round 4 --- Full Stack

React + Spring Boot + JWT.

### Round 5 --- Project Discussion

Explain the application end-to-end.

### Round 6 --- Follow-up Questions

Deep questions based on project decisions.

------------------------------------------------------------------------

# Daily Completion Checklist

For each day:

-   [ ] Concepts understood
-   [ ] Code examples written manually
-   [ ] Exercises completed
-   [ ] Project task completed
-   [ ] Interview questions answered
-   [ ] Quiz completed
-   [ ] Revision done
-   [ ] Code committed to Git

------------------------------------------------------------------------

# Suggested Git Commit Format

``` text
day-01: javascript basics
day-02: functions and scope
day-03: arrays
day-04: objects
...
day-30: mock interview preparation
```

------------------------------------------------------------------------

## Progress Log

  Day   Date   Status   Code   Project   Interview   Revision
  ----- ------ -------- ------ --------- ----------- ----------
  01           ⬜       ⬜     ⬜        ⬜          ⬜
  02           ⬜       ⬜     ⬜        ⬜          ⬜
  03           ⬜       ⬜     ⬜        ⬜          ⬜
  04           ⬜       ⬜     ⬜        ⬜          ⬜
  05           ⬜       ⬜     ⬜        ⬜          ⬜
  06           ⬜       ⬜     ⬜        ⬜          ⬜
  07           ⬜       ⬜     ⬜        ⬜          ⬜
  08           ⬜       ⬜     ⬜        ⬜          ⬜
  09           ⬜       ⬜     ⬜        ⬜          ⬜
  10           ⬜       ⬜     ⬜        ⬜          ⬜
  11           ⬜       ⬜     ⬜        ⬜          ⬜
  12           ⬜       ⬜     ⬜        ⬜          ⬜
  13           ⬜       ⬜     ⬜        ⬜          ⬜
  14           ⬜       ⬜     ⬜        ⬜          ⬜
  15           ⬜       ⬜     ⬜        ⬜          ⬜
  16           ⬜       ⬜     ⬜        ⬜          ⬜
  17           ⬜       ⬜     ⬜        ⬜          ⬜
  18           ⬜       ⬜     ⬜        ⬜          ⬜
  19           ⬜       ⬜     ⬜        ⬜          ⬜
  20           ⬜       ⬜     ⬜        ⬜          ⬜
  21           ⬜       ⬜     ⬜        ⬜          ⬜
  22           ⬜       ⬜     ⬜        ⬜          ⬜
  23           ⬜       ⬜     ⬜        ⬜          ⬜
  24           ⬜       ⬜     ⬜        ⬜          ⬜
  25           ⬜       ⬜     ⬜        ⬜          ⬜
  26           ⬜       ⬜     ⬜        ⬜          ⬜
  27           ⬜       ⬜     ⬜        ⬜          ⬜
  28           ⬜       ⬜     ⬜        ⬜          ⬜
  29           ⬜       ⬜     ⬜        ⬜          ⬜
  30           ⬜       ⬜     ⬜        ⬜          ⬜
