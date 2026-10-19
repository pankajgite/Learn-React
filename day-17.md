# Day 17 — React Custom Hooks

## Overview

Today I learned how to create and use **Custom Hooks** in React.

A Custom Hook is a reusable JavaScript function that starts with `use` and contains reusable React logic.

> **Important:** Custom Hooks share logic, not state. Each component that calls a Custom Hook gets its own independent state.

---

## 1. What is a Custom Hook?

A Custom Hook is a JavaScript function that:

- Starts with `use`
- Can use React Hooks such as `useState`, `useEffect`, and `useRef`
- Contains reusable React logic
- Returns values and/or functions needed by a component

Example:

```jsx
function useCounter() {
    const [count, setCount] = useState(0);

    function increase() {
        setCount(prev => prev + 1);
    }

    function decrease() {
        setCount(prev => prev - 1);
    }

    return {
        count,
        increase,
        decrease
    };
}
```

Using the hook:

```jsx
function Counter() {
    const { count, increase, decrease } = useCounter();

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={increase}>Increase +</button>
            <button onClick={decrease}>Decrease -</button>
        </div>
    );
}
```

The component does not contain the counter logic itself. The logic is extracted into `useCounter()`.

---

## 2. Custom Hooks Share Logic, Not State

If two components use the same Custom Hook:

```jsx
function Counter1() {
    const { count, increase } = useCounter();
}

function Counter2() {
    const { count, increase } = useCounter();
}
```

They do **not** share the same `count`.

```text
Counter 1 → useCounter() → its own count
Counter 2 → useCounter() → its own count
```

For example:

```text
Counter 1: 3
Counter 2: 0
```

So:

> **Custom Hook = reusable logic + independent state**

---

## 3. Custom Hook vs Context API

| Custom Hook | Context API |
|---|---|
| Reuses logic | Shares data/state |
| Each component gets its own state | Multiple components can access shared state |
| Starts with `use` | Uses `createContext` and `useContext` |
| Example: `useCounter()` | Example: `UserContext` |

### Interview Answer

> Custom hooks are used to reuse React logic, while Context API is used to share data or state across components without prop drilling. A custom hook does not automatically share state between components.

---

## 4. Rules of Hooks

Hooks can be called:

1. Inside React components
2. Inside other Custom Hooks

Valid:

```jsx
function Counter() {
    const { count } = useCounter();
}
```

Also valid:

```jsx
function useAnotherHook() {
    const { count } = useCounter();
}
```

Not valid:

```jsx
function calculate() {
    const { count } = useCounter(); // ❌
}
```

### Interview Answer

> Custom hooks can only be called inside React components or other custom hooks because they follow the Rules of Hooks.

---

## 5. Why Custom Hooks Are Useful

Suppose multiple components need the same API logic:

```text
GetStudents
GetPosts
GetUsers
GetConnections
```

Without a Custom Hook, we might repeat:

```text
useState
useEffect
loading
error
fetch()
response.ok
response.json()
```

A Custom Hook allows us to extract that common logic:

```text
GetStudents ──┐
GetPosts ─────┼──→ useFetch()
GetUsers ─────┘
```

---

## 6. Creating `useFetch`

```jsx
function useFetch(url) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState("");

    async function getData() {
        setLoading(true);
        setError("");

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }

            const d = await response.json();
            setData(d);

        } catch (e) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, [url]);

    return {
        data,
        loading,
        error
    };
}
```

---

## 7. Why `[url]` Is Used

```jsx
useEffect(() => {
    getData();
}, [url]);
```

This means:

- The effect runs on the initial render.
- If `url` changes, the effect runs again.
- Changes to unrelated state do not cause this effect to run again.

Example:

```text
url = "/users"
     ↓
fetch /users

url changes to "/posts"
     ↓
effect runs again
     ↓
fetch /posts
```

### Interview Answer

> `[url]` tells React to run the effect on the initial render and whenever the URL dependency changes.

---

## 8. Loading, Error, Empty and Success States

An API request can have several UI states:

```text
             API Request
                  │
            ┌─────┴─────┐
            ↓           ↓
         Loading      Response
                         │
                  ┌──────┴──────┐
                  ↓             ↓
                Error         Success
                                │
                         ┌──────┴──────┐
                         ↓             ↓
                       Empty          Data
                         []             ↓
                                  Show results
```

Example:

```jsx
{loading && <p>Loading...</p>}

{error && <p>{error}</p>}

{!loading && !error && data.length === 0 && (
    <p>No users found</p>
)}

{!loading && !error && data.length > 0 &&
    data.map(user => (
        <div key={user.id}>
            <h3>{user.name}</h3>
        </div>
    ))
}
```

---

## 9. `response.ok`

`fetch()` does not automatically throw an error for HTTP status codes such as `404` or `500`.

Therefore:

```jsx
if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
}
```

Then the `catch` block handles the error.

---

## 10. `try / catch / finally`

```jsx
try {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }

    const d = await response.json();
    setData(d);

} catch (e) {
    setError(e.message);

} finally {
    setLoading(false);
}
```

| Block | Purpose |
|---|---|
| `try` | Execute API request |
| `catch` | Handle errors |
| `finally` | Stop loading regardless of success/failure |

---

## 11. Using `useFetch`

```jsx
function GetUsers() {
    const url = "https://jsonplaceholder.typicode.com/users";

    const { data, loading, error } = useFetch(url);

    return (
        <div>
            <h2>Users</h2>

            {loading && <p>Loading...</p>}

            {error && <p>{error}</p>}

            {!loading && !error && data.length === 0 && (
                <p>No users found</p>
            )}

            {!loading && !error && data.length > 0 &&
                data.map(user => (
                    <div key={user.id}>
                        <hr />
                        <h3>Name: {user.name}</h3>
                        <h4>Email: {user.email}</h4>
                        <hr />
                    </div>
                ))
            }
        </div>
    );
}
```

The component mainly handles **displaying the UI**, while `useFetch` handles the reusable fetching logic.

---

## 12. Custom Hook Flow

```text
             GetUsers
                │
                │ useFetch(url)
                ↓
            useFetch
                │
       ┌────────┼────────┐
       ↓        ↓        ↓
     data    loading    error
       │        │        │
       └────────┼────────┘
                ↓
              UI
```

---

## 13. Custom Hook vs Normal Function

A Custom Hook can use React Hooks:

```jsx
function useCounter() {
    const [count, setCount] = useState(0);
}
```

A normal JavaScript function cannot:

```jsx
function calculate() {
    const [count, setCount] = useState(0); // ❌
}
```

The reason is the **Rules of Hooks**.

---

## 14. Practical Work Completed

### `useCounter()`

- Count starts at `0`
- Increase count
- Decrease count
- Logic extracted into a Custom Hook
- Independent state for each component

### `useFetch()`

- Accepts a URL
- Fetches API data
- Loading state
- Error state
- Empty state
- Success/data state
- HTTP error handling
- Refetches when URL changes

---

## 15. Interview Questions

### Q1. What is a Custom Hook?

A reusable JavaScript function that starts with `use` and contains reusable React logic.

### Q2. Why do Custom Hooks start with `use`?

It follows React's convention and allows React's Hook rules/linting to recognize hook logic.

### Q3. Do Custom Hooks share state?

No. They share reusable logic. Each component gets its own state when it calls the hook.

### Q4. Can a Custom Hook use `useState` and `useEffect`?

Yes.

### Q5. Can a normal JavaScript function call a Hook?

No. Hooks can only be called inside React components or other Custom Hooks.

### Q6. Why use `[url]` in `useFetch`?

So the effect runs again when the URL changes.

### Q7. Why check `response.ok`?

Because `fetch()` does not automatically reject the Promise for HTTP errors such as `404` or `500`.

### Q8. Why use `finally` for loading?

To set loading to `false` whether the request succeeds or fails.

### Q9. Custom Hook vs Context API?

Custom Hooks reuse logic. Context API shares data/state between components without prop drilling.

---

## 16. Key Takeaway

```text
Custom Hook
     ↓
Reusable React Logic
     ↓
Can use useState / useEffect / useRef
     ↓
Each component gets independent state
```

> **Custom Hooks share logic, not state.**

---

## 17. Day 17 Status

- [x] Custom Hooks
- [x] `useCounter`
- [x] Independent state
- [x] Custom Hook vs Context API
- [x] Rules of Hooks
- [x] `useFetch`
- [x] `useState` + `useEffect` inside a Custom Hook
- [x] Loading state
- [x] Error state
- [x] Empty state
- [x] Success/data state
- [x] HTTP error handling
- [x] URL dependency
- [x] Practical API challenge
- [x] Interview questions

---

## Git Commit

```bash
git add .
git commit -m "day-17: React custom hooks"
git push
```

---

## Next: Day 18 — React Router

Topics planned:

- What React Router is
- `BrowserRouter`
- `Routes`
- `Route`
- `Link`
- `NavLink`
- `useNavigate`
- URL parameters
- `useParams`
- Nested routes
- 404 route
- Navigation in a LinkedIn-style application

Example:

```text
/               → Home
/login          → Login
/profile        → Profile
/posts          → Posts
/students       → Students
```
