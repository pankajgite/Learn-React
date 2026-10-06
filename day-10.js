
/*
=========================================================
DAY 10 — REACT COMPONENTS & PROPS
=========================================================

Topics Covered:
1. Functional Components
2. Component Composition
3. Reusable Components
4. Component Naming
5. Props
6. Parent → Child Data Flow
7. Props Destructuring
8. Rendering Lists with map()
9. key Prop
10. children Prop
11. Props are Read-Only
12. Props vs State
=========================================================
*/


/*
=========================================================
1. FUNCTIONAL COMPONENT
=========================================================

A React component is a reusable piece of UI.

Component names should start with an uppercase letter.
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
2. NAVBAR COMPONENT
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
3. PROPS
=========================================================

Props allow a parent component to pass data
to a child component.

Parent:
<UserCard name="Pankaj" role="Java Developer" />

Child receives those values through props.
*/


/*
=========================================================
4. PROPS DESTRUCTURING
=========================================================

Instead of:

function UserCard(props) {
    props.name
    props.role
    props.exp
}

We can destructure props directly:

function UserCard({ name, role, exp })
*/

function UserCard({ name, role, exp }) {
    return (
        <div>
            <ul>
                <li>Name: {name}</li>
                <li>Role: {role}</li>
                <li>Experience: {exp}</li>
            </ul>
        </div>
    );
}


/*
=========================================================
5. CHILDREN PROP
=========================================================

Anything placed between the opening and closing
component tags becomes the children prop.

Example:

<Card>
    <h2>Pankaj Gite</h2>
    <p>Java Developer</p>
</Card>
*/

function Card({ children }) {
    return (
        <div>
            {children}
        </div>
    );
}


/*
=========================================================
6. MAIN APP COMPONENT
=========================================================
*/

function App() {

    /*
    -----------------------------------------------------
    ARRAY OF USERS
    -----------------------------------------------------
    */

    const users = [
        {
            id: 1,
            name: "Pankaj",
            role: "Java Developer",
            exp: "2+"
        },
        {
            id: 2,
            name: "Rahul",
            role: "Frontend Developer",
            exp: "3+"
        },
        {
            id: 3,
            name: "Amit",
            role: "Backend Developer",
            exp: "4+"
        },
        {
            id: 4,
            name: "Gayatri",
            role: "AI Developer",
            exp: "1"
        }
    ];

    return (
        <div className="App">

            {/* Component Composition */}
            <Navbar />

            <Profile />


            {/* ------------------------------------------------
                RENDERING MULTIPLE COMPONENTS USING map()
            ------------------------------------------------ */}

            {users.map(user => (
                <UserCard
                    key={user.id}
                    name={user.name}
                    role={user.role}
                    exp={user.exp}
                />
            ))}


            {/* ------------------------------------------------
                CHILDREN PROP
            ------------------------------------------------ */}

            <Card>
                <h2>Pankaj Gite</h2>
                <p>Java Developer</p>
            </Card>


            <Card>
                <h2>React Learning</h2>
                <p>Currently learning React.</p>
            </Card>

        </div>
    );
}


/*
=========================================================
7. PROPS ARE READ-ONLY
=========================================================

Props should not be modified inside the child component.

Example:

function UserCard({ name }) {

    name = "Rahul";  // ❌ Don't do this

}

The parent owns the data.

Parent:
<App />
    |
    | props
    ↓
<UserCard />

Data flows:

Parent → Child


If the data needs to change, React State is used.
*/


/*
=========================================================
8. PROPS VS STATE
=========================================================

PROPS
-----
- Passed from parent to child
- Read-only
- Used to pass data
- Parent owns the data

STATE
-----
- Managed by the component
- Can change
- Used for dynamic data
- Changing state causes React to re-render

Example:

Props:

<UserCard name="Pankaj" />


State:

const [name, setName] = useState("Pankaj");

setName("Rahul");

State will be covered in Day 11.
=========================================================
*/


/*
=========================================================
9. COMPONENT STRUCTURE
=========================================================

Our application currently looks like:

App
│
├── Navbar
│
├── Profile
│
├── UserCard
│   ├── Pankaj
│   ├── Rahul
│   ├── Amit
│   └── Gayatri
│
├── Card
│   └── Pankaj Gite
│
└── Card
    └── React Learning


Data flow:

App
 ↓
Props
 ↓
UserCard


children:

<Card>
    content
</Card>

content
   ↓
children
*/


/*
=========================================================
10. KEY TAKEAWAYS
=========================================================

1. React components start with uppercase letters.

2. Components are reusable UI pieces.

3. Props allow parent → child communication.

4. Props can be destructured.

5. JavaScript map() can be used to render lists.

6. Lists should have a unique key.

7. key helps React identify list items.

8. children contains content placed inside a component.

9. Props are read-only.

10. State is used when component data needs to change.

=========================================================
DAY 10 COMPLETE ✅
=========================================================
*/


export default App;
