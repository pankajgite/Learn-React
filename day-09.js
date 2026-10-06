
/*
=========================================================
DAY 9 — REACT COMPONENTS
=========================================================

Topics Covered:
1. What is a Component?
2. Why Components?
3. Functional Components
4. Creating a Component
5. Using a Component
6. Component Naming Rules
7. Reusable Components
8. Splitting UI into Components
9. Component Composition
=========================================================
*/


/*
=========================================================
1. WHAT IS A COMPONENT?
=========================================================

A component is a reusable piece of UI.

Example:

Navbar
Profile
Footer
UserCard
Post
Button

A React application can be built by combining
multiple small components.
*/


/*
=========================================================
2. SIMPLE COMPONENT
=========================================================
*/

function Welcome() {
    return <h1>Hello Pankaj</h1>;
}


/*
=========================================================
3. USING A COMPONENT
=========================================================

We can render a component using:

<Welcome />

Notice the uppercase W.
*/

function ExampleApp() {
    return (
        <>
            <Welcome />
        </>
    );
}


/*
=========================================================
4. NAVBAR COMPONENT
=========================================================
*/

function Navbar() {
    return (
        <nav>
            <h3>My LinkedIn App</h3>
        </nav>
    );
}


/*
=========================================================
5. PROFILE COMPONENT
=========================================================

The Profile component contains the profile UI.
*/

function Profile() {
    return (
        <div>
            <h1>Pankaj Gite</h1>
            <h3>Java Developer</h3>
            <p>2+ years experience</p>
        </div>
    );
}


/*
=========================================================
6. FOOTER COMPONENT
=========================================================
*/

function Footer() {
    return (
        <footer>
            <p>Copyright 2026</p>
        </footer>
    );
}


/*
=========================================================
7. COMPONENT COMPOSITION
=========================================================

We can combine multiple components to create
a larger component.

Structure:

App
├── Navbar
├── Profile
└── Footer
*/

function App() {
    return (
        <div className="App">

            <Navbar />

            <Profile />

            <Footer />

        </div>
    );
}


/*
=========================================================
8. REUSABLE COMPONENT
=========================================================

The same component can be used multiple times.

Example:

<UserCard />
<UserCard />
<UserCard />

At this stage the component contains the same
hard-coded content.

Props will make these components reusable
with different data.

Props are covered in Day 10.
*/


function UserCard() {
    return (
        <div>
            <h2>User Card</h2>
            <p>Java Developer</p>
        </div>
    );
}


/*
=========================================================
9. USING THE SAME COMPONENT MULTIPLE TIMES
=========================================================
*/

function UsersExample() {
    return (
        <>
            <UserCard />
            <UserCard />
            <UserCard />
        </>
    );
}


/*
=========================================================
10. COMPONENT NAMING RULE
=========================================================

React component names MUST start with an uppercase
letter.

Correct:

Profile
Navbar
UserCard
Footer


Incorrect:

profile
navbar
userCard
footer

React uses capitalization to distinguish components
from normal HTML elements.

HTML:

<div />
<nav />
<h1 />


React Components:

<Profile />
<Navbar />
<UserCard />
*/


/*
=========================================================
11. WHY UPPERCASE?
=========================================================

React sees:

<Profile />

and understands:

"Profile is a React component."


But:

<profile />

is treated as a lowercase HTML/custom element
rather than the React component we created.

Therefore:

function Profile() {
    return <h1>Profile</h1>;
}

<Profile />

is correct.
*/


/*
=========================================================
12. COMPONENT STRUCTURE
=========================================================

A LinkedIn-like application can be structured as:

App
│
├── Navbar
│
├── Sidebar
│
├── Profile
│
├── PostList
│   ├── Post
│   ├── Post
│   └── Post
│
└── Footer


This makes the application easier to:

- understand
- maintain
- reuse
- expand
- test
*/


/*
=========================================================
13. JAVA COMPARISON
=========================================================

React Component:

function Profile() {
    return <h1>Profile</h1>;
}


Java:

class Profile {
    // methods and fields
}


They are NOT exactly the same.

But both encourage breaking a large application
into smaller reusable pieces.

React → Components
Java  → Classes / Objects
*/


/*
=========================================================
14. IMPORTANT CONCEPT
=========================================================

A component should generally have one clear
responsibility.

For example:

Navbar  → Navigation
Profile → Profile information
Post    → One post
Footer  → Footer information

Instead of putting everything inside App(),
we split the UI into smaller components.
*/


/*
=========================================================
15. DAY 9 EXERCISE
=========================================================

Create:

1. Profile component

Display:

Pankaj Gite
Java Developer
2+ years experience


2. Navbar component

Display:

My LinkedIn App


3. Render both from App.

Expected structure:

App
├── Navbar
└── Profile
*/


/*
=========================================================
16. FINAL DAY 9 CODE
=========================================================
*/

function FinalNavbar() {
    return (
        <nav>
            <h3>My LinkedIn App</h3>
        </nav>
    );
}


function FinalProfile() {
    return (
        <div>
            <h1>Pankaj Gite</h1>
            <h3>Java Developer</h3>
            <p>2+ years experience</p>
        </div>
    );
}


function FinalApp() {
    return (
        <div className="App">

            <FinalNavbar />

            <FinalProfile />

        </div>
    );
}


/*
=========================================================
KEY TAKEAWAYS
=========================================================

1. React applications are built using components.

2. Components are reusable UI pieces.

3. Functional components are JavaScript functions
   that return JSX.

4. Components are rendered using:

   <ComponentName />

5. Component names should start with uppercase letters.

6. Components can be composed together.

7. Splitting UI into components makes applications
   easier to maintain.

8. The same component can be rendered multiple times.

9. Props will make components reusable with
   different data.

=========================================================
DAY 9 COMPLETE ✅
=========================================================
*/


export default App;
