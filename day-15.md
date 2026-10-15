# Day 15 — React `useEffect`

> Learn how to perform side effects in React, control when effects run, clean up resources, fetch data based on dependencies, and avoid common infinite-loop mistakes.

## 📚 Topics Covered

1. What is `useEffect`?
2. Why do we need `useEffect`?
3. Dependency arrays: `[]`, `[value]`, and no array
4. API calls with `useEffect`
5. Cleanup functions
6. Cleanup with dependencies
7. Common mistakes and infinite loops
8. Practical user-fetching example
9. Interview questions

---

## 1. What is `useEffect`?

`useEffect` is a React Hook used to perform **side effects after a component renders**.

Common side effects:

- API calls
- Timers
- Event listeners
- Subscriptions
- WebSocket connections
- Updating the document title
- Interacting with external systems

```jsx
import { useEffect } from "react";

useEffect(() => {
    // side effect
}, []);
```

### Basic flow

```text
Component renders
       ↓
React updates the UI
       ↓
useEffect runs
       ↓
Side effect happens
       ↓
State may update
       ↓
Component renders again
```

---

## 2. Why Do We Need `useEffect`?

Avoid putting API calls directly in the component body:

```jsx
function App() {
    axios.get("http://localhost:8080/api/students");

    return <h1>Students</h1>;
}
```

A component can render multiple times, so this can cause repeated API calls.

Better:

```jsx
function App() {
    useEffect(() => {
        axios.get("http://localhost:8080/api/students");
    }, []);

    return <h1>Students</h1>;
}
```

> `useEffect` does not prevent re-renders. The dependency array controls when that particular effect runs again.

---

## 3. Dependency Array

### `[]` — empty dependency array

```jsx
useEffect(() => {
    console.log("Effect ran");
}, []);
```

The effect runs after the initial render and does not rerun because of later state/prop changes.

Example:

```jsx
useEffect(() => {
    FetchData();
}, []);
```

This is useful for fetching initial data.

### `[count]`

```jsx
useEffect(() => {
    console.log("Effect ran");
}, [count]);
```

The effect:

- Runs after the initial render.
- Runs whenever `count` changes.
- Does not run when unrelated state changes.

Example:

```jsx
function Counter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
        console.log("Effect ran");
    }, [count]);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>

            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
    );
}
```

Initial render → effect runs.

`count` changes → effect runs.

`name` changes → component rerenders, but this effect does not run.

### Multiple dependencies

```jsx
useEffect(() => {
    console.log("Effect ran");
}, [count, name]);
```

Runs initially and whenever `count` or `name` changes.

---

## 4. No Dependency Array

```jsx
useEffect(() => {
    console.log("Effect ran");
});
```

Without a dependency array, the effect runs after **every render**.

This can be dangerous if the effect updates state:

```jsx
useEffect(() => {
    setCount(count + 1);
});
```

This can create an infinite loop:

```text
Component renders
      ↓
useEffect runs
      ↓
setCount()
      ↓
count changes
      ↓
Component rerenders
      ↓
useEffect runs again
      ↓
setCount()
      ↓
🔁 Infinite loop
```

---

## 5. API Calls with `useEffect`

A common pattern:

```jsx
useEffect(() => {
    fetchStudents();
}, []);
```

With Axios:

```jsx
useEffect(() => {
    async function fetchStudents() {
        try {
            const response = await axios.get(
                "http://localhost:8080/api/students"
            );

            console.log(response.data);
        } catch (error) {
            console.log(error.message);
        }
    }

    fetchStudents();
}, []);
```

For an async operation, a useful pattern is to define an async function inside the effect and call it.

---

## 6. Fetching When an ID Changes

```jsx
const [userId, setUserId] = useState(1);

useEffect(() => {
    fetchUser(userId);
}, [userId]);
```

Initial render:

```text
userId = 1
     ↓
useEffect
     ↓
fetchUser(1)
```

After clicking:

```jsx
setUserId(userId + 1);
```

```text
userId = 2
     ↓
component rerenders
     ↓
[userId] changed
     ↓
useEffect runs
     ↓
fetchUser(2)
```

The same happens for `3`, `4`, `5`, etc.

---

## 7. Practical User Details Example

```jsx
import { useState, useEffect } from "react";
import axios from "axios";

function UserDetails() {
    const [userId, setUserId] = useState(1);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const url =
                `https://jsonplaceholder.typicode.com/users/${userId}`;

            try {
                const response = await axios.get(url);
                setUser(response.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchUser();
    }, [userId]);

    return (
        <div>
            <h2>User ID: {userId}</h2>

            {user && (
                <h3>
                    User: {user.name}
                </h3>
            )}

            <button onClick={() => setUserId(userId + 1)}>
                Next User
            </button>
        </div>
    );
}

export default UserDetails;
```

### What this teaches

- `useState` stores the current `userId`.
- `useEffect` performs the API call.
- `[userId]` controls when the API call runs.
- `setUser()` stores the API response.
- Updating `userId` causes a rerender.
- Because `userId` changed, the effect runs again.

---

## 8. Cleanup Functions

Some effects create resources that need to be stopped or removed.

Examples:

- `setInterval`
- `setTimeout`
- Event listeners
- Subscriptions
- WebSocket connections

A cleanup function is returned from the effect:

```jsx
useEffect(() => {
    const timer = setInterval(() => {
        console.log("Running...");
    }, 1000);

    return () => {
        clearInterval(timer);
    };
}, []);
```

### Flow

```text
Component mounts
      ↓
useEffect runs
      ↓
setInterval starts
      ↓
"Running..." every second
      ↓
Component unmounts
      ↓
cleanup runs
      ↓
clearInterval(timer)
      ↓
timer stops
```

---

## 9. Cleanup with Dependencies

```jsx
useEffect(() => {
    const timer = setInterval(() => {
        console.log("Hello");
    }, 1000);

    return () => {
        clearInterval(timer);
    };
}, [count]);
```

When `count` changes:

```text
count changes
      ↓
component rerenders
      ↓
previous effect cleanup runs
      ↓
clearInterval(timer)
      ↓
new effect runs
      ↓
new setInterval starts
```

Important:

> Cleanup is not primarily used to prevent count from increasing twice. Its purpose is to clean up resources created by the effect.

---

## 10. Event Listener Cleanup

```jsx
useEffect(() => {
    const handleResize = () => {
        console.log(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
        window.removeEventListener("resize", handleResize);
    };
}, []);
```

The listener is added when the effect runs and removed during cleanup.

---

## 11. When Does Cleanup Run?

There are two important situations.

### 1. Component unmounts

```text
Component removed
       ↓
cleanup runs
```

### 2. Dependencies change

Before the effect runs again:

```text
Dependency changes
       ↓
cleanup previous effect
       ↓
run new effect
```

---

## 12. Common `useEffect` Mistakes

### Mistake 1 — API call directly in component body

Bad:

```jsx
function App() {
    axios.get(url);
    return <h1>Hello</h1>;
}
```

Better:

```jsx
useEffect(() => {
    axios.get(url);
}, []);
```

### Mistake 2 — No dependency array for an effect that updates state

```jsx
useEffect(() => {
    setCount(count + 1);
});
```

This can cause an infinite loop.

### Mistake 3 — Updating the dependency inside the effect

Potential infinite loop:

```jsx
useEffect(() => {
    setStudents(newStudents);
}, [students]);
```

Flow:

```text
students changes
      ↓
effect runs
      ↓
setStudents()
      ↓
students changes
      ↓
effect runs again
      ↓
🔁
```

> Be careful when an effect depends on a state variable and also updates that same state.

---

## 13. `useState` vs `useEffect`

### `useState`

Stores data that can change:

```jsx
const [count, setCount] = useState(0);
```

### `useEffect`

Performs side effects:

```jsx
useEffect(() => {
    fetchData();
}, []);
```

Simple rule:

```text
useState  → manages state
useEffect → performs side effects
```

---

## 14. Dependency Array Summary

| Code | Behavior |
|---|---|
| `useEffect(() => {})` | Runs after every render |
| `useEffect(() => {}, [])` | Runs after initial render |
| `useEffect(() => {}, [count])` | Initial render + whenever `count` changes |
| `useEffect(() => {}, [count, name])` | Initial render + whenever `count` or `name` changes |

---

# 🎤 Interview Questions

### Q1. What is `useEffect`?

> `useEffect` is a React Hook used to perform side effects after a component renders. Common examples include API calls, timers, event listeners, subscriptions, and interactions with external systems. The dependency array controls when the effect runs.

### Q2. Difference between no dependency array, `[]`, and `[count]`?

> Without a dependency array, the effect runs after every render. With an empty dependency array, it runs after the initial render and doesn't rerun because of later state or prop changes. With `[count]`, it runs after the initial render and whenever `count` changes.

### Q3. What is a cleanup function?

> A cleanup function is a function returned from `useEffect` that cleans up resources created by the effect, such as timers, event listeners, subscriptions, or WebSocket connections.

### Q4. When does cleanup execute?

> Cleanup runs when the component unmounts. It also runs before the effect executes again when one of its dependencies changes.

### Q5. Why can this cause an infinite loop?

```jsx
useEffect(() => {
    setCount(count + 1);
});
```

> There is no dependency array, so the effect runs after every render. `setCount` changes state, causing another render, which runs the effect again.

### Q6. Why can this be dangerous?

```jsx
useEffect(() => {
    setStudents(data);
}, [students]);
```

> If updating `students` causes the dependency to change, the effect can run again and update `students` again, creating an infinite loop.

### Q7. Why use `[userId]` when fetching a user?

> Because the effect should run when `userId` changes. The initial render fetches the first user, and changing `userId` triggers another API call for the new user.

---

# 🧪 Day 15 Practical Challenge

Build a component called `UserDetails`.

Requirements:

- Store `userId` using `useState`.
- Fetch the user using Axios.
- Use `useEffect`.
- Put `userId` in the dependency array.
- Store the returned user in state.
- Display the user's name.
- Add a "Next User" button.
- Increment `userId` when clicked.
- Fetch the new user whenever the ID changes.

Flow:

```text
userId = 1
   ↓
fetch User 1
   ↓
Display User 1
   ↓
Click Next User
   ↓
userId = 2
   ↓
fetch User 2
   ↓
Display User 2
```

---

# 🧠 Key Takeaways

```text
useState
   ↓
Stores component state

useEffect
   ↓
Performs side effects

[] 
   ↓
Initial effect

[count]
   ↓
Effect when count changes

No dependency array
   ↓
Every render

return () => {}
   ↓
Cleanup

Cleanup
   ↓
Unmount
   OR
   ↓
Before effect reruns because dependencies changed
```

### Most important rule

> **`useEffect` is for side effects, and the dependency array controls when the effect runs again.**

---

# ✅ Day 15 Status

- [x] Understand `useEffect`
- [x] Understand side effects
- [x] Understand dependency arrays
- [x] Understand `[]`
- [x] Understand `[count]`
- [x] Understand no dependency array
- [x] API calls with `useEffect`
- [x] Cleanup functions
- [x] Cleanup with dependencies
- [x] Infinite-loop mistakes
- [x] Practical API example
- [x] Interview questions

### Git

```bash
git add .
git commit -m "day-15: React useEffect"
git push
```

---

# 🚀 Next — Day 16

## `useRef` + `useContext`

Topics:

- `useRef`
- DOM references
- `useRef` vs `useState`
- Previous values
- `useContext`
- Context Provider
- Consuming context
- Practical example
- Interview questions
