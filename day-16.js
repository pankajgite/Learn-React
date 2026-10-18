# Day 16 — React: useRef & useContext

## Overview
Day 16 covers two important React Hooks:

- `useRef` — persist values between renders without causing re-renders and access DOM elements.
- `useContext` — share data between components without passing props through every intermediate component.

---

# Part 1 — useRef

## 1. What is useRef?

```jsx
const myRef = useRef(initialValue);
```

A ref stores its value in:

```jsx
myRef.current
```

Changing `ref.current` does **not** cause the component to re-render.

### Mental model

```text
useRef
   ↓
Persistent value
   ↓
Change ref.current
   ↓
No React re-render
```

---

## 2. useState vs useRef

### useState

```jsx
const [count, setCount] = useState(0);

setCount(10);
```

Flow:

```text
State updated
     ↓
React schedules re-render
     ↓
Component renders again
     ↓
UI can show new value
```

### useRef

```jsx
const countRef = useRef(0);

countRef.current = 10;
```

Flow:

```text
ref.current updated
     ↓
No re-render
     ↓
UI does not automatically update
```

### Interview answer

> `useState` stores state and updating it causes a re-render. `useRef` persists a value between renders, but changing `ref.current` does not trigger a re-render.

---

## 3. Accessing DOM Elements

A common use of `useRef` is accessing a DOM element directly.

```jsx
import { useRef } from "react";

function FocusInput() {
    const inputRef = useRef(null);

    function handleFocus() {
        inputRef.current.focus();
        console.log(inputRef.current.value);
    }

    return (
        <div>
            <input ref={inputRef} />

            <button onClick={handleFocus}>
                Focus Input
            </button>
        </div>
    );
}
```

React connects:

```jsx
<input ref={inputRef} />
```

with:

```jsx
inputRef.current
```

Therefore:

```jsx
inputRef.current.focus();
```

focuses the input, and:

```jsx
inputRef.current.value
```

reads its current value.

---

## 4. Controlled vs Uncontrolled Inputs

### Controlled input

```jsx
const [username, setUsername] = useState("");

<input
    value={username}
    onChange={(e) => setUsername(e.target.value)}
/>
```

React state is the source of truth.

### Uncontrolled input

```jsx
const usernameRef = useRef(null);

<input ref={usernameRef} />
```

The DOM maintains the value.

Read it with:

```jsx
usernameRef.current.value
```

### Interview answer

> In a controlled input, React state is the source of truth and the input is controlled using `value` and `onChange`. In an uncontrolled input, the DOM maintains the value and we can access it using `useRef`.

---

## 5. Storing Previous Values

A ref can remember a value between renders.

```jsx
const [count, setCount] = useState(0);
const previousCount = useRef();

useEffect(() => {
    previousCount.current = count;
}, [count]);
```

Then:

```jsx
<h2>Current: {count}</h2>
<h2>Previous: {previousCount.current}</h2>
```

The idea:

```text
Render 1 → Current: 0, Previous: undefined
Render 2 → Current: 1, Previous: 0
Render 3 → Current: 2, Previous: 1
```

The effect stores the current value after rendering, so the ref contains that value on the next render.

---

## 6. Timer Example

`useRef` is useful for storing an interval ID because the ID must persist, but changing it does not need to update the UI.

```jsx
import { useRef } from "react";

function Timer() {
    const timerRef = useRef(null);

    function startTimer() {
        if (timerRef.current === null) {
            timerRef.current = setInterval(() => {
                console.log("Running...");
            }, 1000);
        }
    }

    function stopTimer() {
        if (timerRef.current !== null) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    }

    return (
        <div>
            <h3>Timer</h3>

            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
        </div>
    );
}
```

### Why useRef?

The interval ID must be available to both `startTimer()` and `stopTimer()`, but changing it does not need to update the UI.

---

## 7. Main Uses of useRef

1. Access DOM elements:

```jsx
inputRef.current.focus();
```

2. Store values without triggering a re-render:

```jsx
countRef.current = 10;
```

3. Store previous values:

```jsx
previousRef.current = count;
```

Other examples include timer IDs, interval IDs, and other mutable values that do not need to directly appear in the UI.

---

# Part 2 — useContext

## 8. Prop Drilling

Suppose:

```text
App
 ↓
Navbar
 ↓
UserMenu
 ↓
Profile
```

App has:

```jsx
const user = "Pankaj";
```

Without Context:

```jsx
function App() {
    const user = "Pankaj";
    return <Navbar user={user} />;
}

function Navbar({ user }) {
    return <UserMenu user={user} />;
}

function UserMenu({ user }) {
    return <Profile user={user} />;
}

function Profile({ user }) {
    return <h2>Welcome {user}</h2>;
}
```

`Navbar` and `UserMenu` don't need the user. They are only passing it along.

This is called **prop drilling**.

---

## 9. What is Context?

Context allows data to be shared with descendant components without manually passing props through every intermediate component.

### Basic flow

```text
createContext()
      ↓
   Provider
      ↓
    value
      ↓
 useContext()
      ↓
  get value
```

---

## 10. Step 1 — Create a Context

```jsx
import { createContext } from "react";

const UserContext = createContext();
```

Think of this as creating a shared container.

---

## 11. Step 2 — Provide the Value

```jsx
<UserContext.Provider value="Pankaj">
    <Navbar />
</UserContext.Provider>
```

The `value` is available to components inside the Provider.

---

## 12. Step 3 — Consume the Value

```jsx
import { useContext } from "react";

function Profile() {
    const user = useContext(UserContext);

    return <h2>Welcome {user}</h2>;
}
```

`useContext(UserContext)` reads the value supplied by the Provider.

---

## 13. Complete Context Example

```jsx
import { createContext, useContext } from "react";

const UserContext = createContext();

function App() {
    const user = {
        name: "Pankaj",
        role: "Java Developer"
    };

    return (
        <UserContext.Provider value={user}>
            <Navbar />
        </UserContext.Provider>
    );
}

function Navbar() {
    return <UserMenu />;
}

function UserMenu() {
    return <Profile />;
}

function Profile() {
    const user = useContext(UserContext);

    return (
        <>
            <h2>Name: {user.name}</h2>
            <h2>Role: {user.role}</h2>
        </>
    );
}
```

No `user` prop is passed through `Navbar` or `UserMenu`.

---

## 14. Context with useState

Context can share state and its setter.

```jsx
const UserContext = createContext();

function App() {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <Navbar />
        </UserContext.Provider>
    );
}
```

This:

```jsx
value={{ user, setUser }}
```

is a JavaScript object:

```js
{
    user: user,
    setUser: setUser
}
```

Property shorthand allows:

```js
{ user, setUser }
```

instead.

---

## 15. Consuming Multiple Context Values

```jsx
function Navbar() {
    const { user, setUser } = useContext(UserContext);

    // ...
}
```

Now the component can read the current user and update it.

Login:

```jsx
function userLogin() {
    setUser({
        name: "Pankaj",
        role: "Java Developer"
    });
}
```

Logout:

```jsx
setUser(null);
```

---

## 16. Login / Logout Example

```jsx
function Navbar() {
    const { user, setUser } = useContext(UserContext);

    function userLogin() {
        setUser({
            name: "Pankaj",
            role: "Java Developer"
        });
    }

    if (user != null) {
        return (
            <>
                <h2>Welcome {user.name}</h2>

                <button onClick={() => setUser(null)}>
                    Logout
                </button>
            </>
        );
    }

    return (
        <>
            <h2>Please Login</h2>

            <button onClick={userLogin}>
                Login
            </button>
        </>
    );
}
```

Flow:

```text
user = null
    ↓
Please Login

Login
    ↓
setUser(...)
    ↓
Context value changes
    ↓
Navbar re-renders
    ↓
Welcome Pankaj

Logout
    ↓
setUser(null)
    ↓
Please Login
```

---

## 17. Multiple Components Using the Same Context

```text
                 App
                  │
          UserContext.Provider
                  │
            user + setUser
                  │
        ┌─────────┼─────────┐
        ↓         ↓         ↓
     Navbar    Sidebar    Profile
        │         │         │
   useContext  useContext  useContext
```

Example:

```jsx
function Sidebar() {
    const { user } = useContext(UserContext);

    return (
        <div>
            <h3>Logged in as: {user.name}</h3>
            <h3>Role: {user.role}</h3>
        </div>
    );
}
```

All consuming components can access the same shared user.

---

## 18. Context Does Not Manage State

This is important for interviews.

`useState` manages changing data:

```jsx
const [user, setUser] = useState(null);
```

Context makes that data available to other components:

```jsx
<UserContext.Provider value={{ user, setUser }}>
```

Mental model:

```text
useState
   ↓
Manages state

Context
   ↓
Shares state
```

### Interview answer

> Context is mainly used for sharing data between components without prop drilling. State management can be handled with useState, and Context can expose that state and its updater to descendant components.

---

## 19. When Should You Use Context?

Good examples:

- Logged-in user
- Authentication information
- Theme
- Language
- Application-wide settings
- Shared data needed by many components

Don't automatically put every piece of state into Context.

If only one component needs:

```jsx
const [count, setCount] = useState(0);
```

keep it local.

---

# LinkedIn Project Connection

A LinkedIn-style React application could eventually have:

```text
App
 │
 └── Auth/User Context
        │
        ├── Navbar
        ├── Sidebar
        ├── Feed
        │    └── Posts
        └── Profile
```

A logged-in user can be shared through Context instead of passing the user through many components.

Later this can connect with JWT authentication:

```text
Login
  ↓
Backend verifies credentials
  ↓
JWT received
  ↓
Authentication state
  ↓
Context
  ↓
Navbar / Profile / Protected Routes
```

---

# useRef vs useContext

| Hook | Main Purpose |
|---|---|
| `useRef` | Persist a mutable value or access a DOM element |
| `useContext` | Read shared data from Context |
| `useState` | Manage component state and trigger re-renders |
| `useEffect` | Handle side effects |

---

# Interview Questions

### Q1. What is useRef?

> `useRef` is a React Hook that creates a persistent mutable reference. Changing `ref.current` does not cause a component to re-render.

### Q2. Common uses of useRef?

> Accessing DOM elements, storing values between renders without causing re-renders, storing previous values, and keeping timer or interval IDs.

### Q3. Difference between useState and useRef?

> Updating state causes a re-render, while updating `ref.current` does not.

### Q4. What is an uncontrolled input?

> An input where the DOM maintains the value instead of React state. We can access its value using a ref.

### Q5. What is prop drilling?

> Passing props through intermediate components even though those components don't need the data themselves.

### Q6. How does useContext solve prop drilling?

> Context allows a Provider to make data available to descendant components, which can consume it with `useContext` without manually passing it through every intermediate component.

### Q7. Three main steps for Context?

```text
1. createContext()
2. Provider + value
3. useContext()
```

### Q8. Does Context manage state?

> No. Context provides a way to share data. State can be managed with useState and then exposed through Context.

### Q9. What does this mean?

```jsx
value={{ user, setUser }}
```

> It passes an object containing the current `user` and the `setUser` function through Context.

---

# Day 16 Practical Challenge

Build a small LinkedIn-style user context.

### App
Maintain this using `useState`:

```js
{
    name: "Pankaj",
    role: "Java Developer"
}
```

### Context
Create:

```jsx
const UserContext = createContext();
```

Provide:

```jsx
<UserContext.Provider value={{ user, setUser }}>
```

### Navbar
Display:

```text
Welcome Pankaj
```

and provide a Logout button.

### Sidebar
Display:

```text
Logged in as: Pankaj
Role: Java Developer
```

### Profile
Display the same user information.

### Important
Do not pass `user` through props.

Use:

```jsx
useContext(UserContext)
```

in each component that needs the data.

---

# Day 16 Key Takeaways

```text
useRef
 ├── Persistent value
 ├── Does not cause re-render
 ├── DOM references
 ├── Uncontrolled inputs
 ├── Previous values
 └── Timer/interval IDs

useContext
 ├── Avoid prop drilling
 ├── createContext()
 ├── Provider
 ├── value
 ├── useContext()
 ├── Shared state
 └── Multiple components can consume the same data
```

### Most important mental model

```text
useState
   ↓
Manage changing state
   ↓
Re-render UI

useRef
   ↓
Remember mutable value
   ↓
No re-render

useContext
   ↓
Share data
   ↓
Avoid prop drilling
```

---

# Day 16 Status

- [x] useRef basics
- [x] useRef vs useState
- [x] DOM references
- [x] Focus input
- [x] Controlled vs uncontrolled inputs
- [x] Previous values
- [x] Timer/interval IDs
- [x] Prop drilling
- [x] createContext
- [x] Context Provider
- [x] useContext
- [x] Sharing state
- [x] Login/logout with Context
- [x] Multiple components consuming Context
- [x] Interview questions
- [x] LinkedIn-style Context practice

## Git

```bash
git add .
git commit -m "day-16: React useRef and useContext"
git push
```

---

# Next: Day 17 — Custom Hooks

We will learn how to extract reusable React logic.

For example, instead of repeating API logic and `useEffect` code in multiple components, we can eventually create:

```jsx
const { data, loading, error } = useFetch(url);
```

This will build directly on the Day 14 API/CRUD work.
