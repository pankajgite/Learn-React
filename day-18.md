# Day 18 — React Router

## Overview

Today we learned how to add client-side routing to a React Single Page Application (SPA).

### Topics Covered

- BrowserRouter
- Routes and Route
- Link
- NavLink
- Active link styling
- Dynamic routes
- useParams()
- useParams() + API calls
- useNavigate()
- useLocation()
- Nested routes
- Outlet
- Nested navigation

---

## 1. React Router

React Router allows different React components to be displayed based on the current URL.

Example:

```text
/          → Home
/profile   → Profile
/posts     → Posts
/about     → About
/contact   → Contact
```

Install:

```bash
npm install react-router-dom
```

---

## 2. BrowserRouter

`BrowserRouter` enables routing in the React application.

```jsx
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
```

Example:

```jsx
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/posts" element={<Posts />} />
            </Routes>
        </BrowserRouter>
    );
}
```

---

## 3. Routes and Route

`Routes` contains route definitions.

`Route` maps a URL path to a React component.

```jsx
<Route
    path="/profile"
    element={<Profile />}
/>
```

Meaning:

```text
/profile
   ↓
Profile component
```

---

## 4. Link

`Link` is used to navigate between routes.

```jsx
import { Link } from "react-router-dom";

<Link to="/">Home</Link>
<Link to="/profile">Profile</Link>
<Link to="/posts">Posts</Link>
```

Example Navbar:

```jsx
function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
}
```

---

## 5. NavLink

`NavLink` is similar to `Link`, but also provides `isActive`.

```jsx
import { NavLink } from "react-router-dom";
```

Example:

```jsx
<NavLink
    to="/profile"
    className={({ isActive }) =>
        isActive ? "active-link" : ""
    }
>
    Profile
</NavLink>
```

`isActive` is:

```text
true  → current URL matches the link
false → current URL does not match
```

CSS:

```css
.active-link {
    font-weight: bold;
    color: rgb(151, 109, 119);
}
```

---

## 6. Dynamic Routes

Dynamic routes allow part of the URL to change.

Instead of creating:

```text
/profile/1
/profile/2
/profile/25
```

create one route:

```jsx
<Route
    path="/profile/:id"
    element={<Profile />}
/>
```

Here `:id` is a dynamic route parameter.

---

## 7. useParams()

`useParams()` gets dynamic values from the URL.

```jsx
import { useParams } from "react-router-dom";
```

Example:

```jsx
function Profile() {
    const { id } = useParams();

    return (
        <div>
            <h1>Profile Page</h1>
            <h2>Profile ID: {id}</h2>
        </div>
    );
}
```

For:

```text
/profile/25
```

the result is:

```text
id = "25"
```

Route parameters are strings.

If a number is required:

```jsx
const numericId = Number(id);
```

---

## 8. useParams() + API

We used the route parameter to fetch a user.

```jsx
function Profile() {
    const { id } = useParams();
    const [data, setData] = useState({});

    async function fetchStudent() {
        const url =
            `https://jsonplaceholder.typicode.com/users/${id}`;

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(
                    `HTTP Error: ${response.status}`
                );
            }

            const d = await response.json();
            setData(d);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchStudent();
    }, [id]);

    return (
        <div>
            <h1>Profile Page</h1>
            <h2>Profile ID: {data.id}</h2>
            <h2>Username: {data.username}</h2>
            <h2>Name: {data.name}</h2>
            <h2>Email: {data.email}</h2>
        </div>
    );
}
```

### Why `[id]`?

```jsx
useEffect(() => {
    fetchStudent();
}, [id]);
```

The effect runs on the initial render and whenever `id` changes.

```text
/profile/1
    ↓
fetch user 1

/profile/2
    ↓
fetch user 2
```

---

## 9. useNavigate()

`useNavigate()` allows JavaScript code to navigate to another route.

```jsx
import { useNavigate } from "react-router-dom";
```

Example:

```jsx
function Login() {
    const navigate = useNavigate();

    function handleLogin() {
        console.log("Login successful");
        navigate("/profile/1");
    }

    return (
        <button onClick={handleLogin}>
            Login
        </button>
    );
}
```

Common uses:

```jsx
navigate("/feed");
navigate("/students");
navigate("/login");
```

For example:

```text
Login successful
       ↓
navigate("/profile/1")
       ↓
/profile/1
```

---

## 10. Form + useNavigate()

We created a controlled login form:

```jsx
function Login() {
    const navigate = useNavigate();

    const [data, setData] = useState({
        username: "",
        password: ""
    });

    function handleFormSubmit(event) {
        event.preventDefault();

        console.log("Login successful");
        console.log(data.username);
        console.log(data.password);

        navigate("/profile/1");
    }

    return (
        <div>
            <h2>Login</h2>

            <form onSubmit={handleFormSubmit}>
                <input
                    placeholder="Enter Username"
                    value={data.username}
                    onChange={(event) =>
                        setData({
                            ...data,
                            username: event.target.value
                        })
                    }
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={data.password}
                    onChange={(event) =>
                        setData({
                            ...data,
                            password: event.target.value
                        })
                    }
                />

                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    );
}
```

Important:

```jsx
event.preventDefault();
```

prevents the browser's default form submission.

---

## 11. useLocation()

`useLocation()` gives information about the current URL.

```jsx
import { useLocation } from "react-router-dom";
```

Example:

```jsx
function CurrentPage() {
    const location = useLocation();

    return (
        <div>
            <h3>
                Current Path: {location.pathname}
            </h3>
        </div>
    );
}
```

If the current URL is:

```text
/profile/25
```

then:

```jsx
location.pathname
```

is:

```text
/profile/25
```

---

## 12. Router Hooks Comparison

| Hook | Purpose |
|---|---|
| `useParams()` | Get dynamic values from the URL |
| `useNavigate()` | Navigate using JavaScript |
| `useLocation()` | Get information about the current URL |

Example URL:

```text
/profile/25
```

### useParams()

```jsx
const { id } = useParams();
```

Result:

```text
25
```

### useLocation()

```jsx
const location = useLocation();
```

Result:

```text
location.pathname = "/profile/25"
```

### useNavigate()

```jsx
const navigate = useNavigate();

navigate("/about");
```

Result:

```text
/about
```

---

## 13. Nested Routes

Nested routes allow a parent route to contain child routes.

Example:

```text
/dashboard
    ├── /dashboard/posts
    └── /dashboard/setting
```

Routes:

```jsx
<Route
    path="/dashboard"
    element={<DashboardLayout />}
>
    <Route
        path="posts"
        element={<DashboardPosts />}
    />

    <Route
        path="setting"
        element={<DashboardSettings />}
    />
</Route>
```

Child paths are relative to the parent.

```jsx
path="posts"
```

becomes:

```text
/dashboard/posts
```

---

## 14. Outlet

`Outlet` defines where the matching child route is rendered.

```jsx
import { Outlet } from "react-router-dom";
```

Example:

```jsx
function DashboardLayout() {
    return (
        <div>
            <h1>Dashboard Layout</h1>
            <Outlet />
        </div>
    );
}
```

If the URL is:

```text
/dashboard/posts
```

the child component appears where `<Outlet />` is placed.

Result:

```text
Dashboard Layout
Dashboard Posts
```

---

## 15. Complete Nested Route Example

```jsx
<Route
    path="/dashboard"
    element={<DashboardLayout />}
>
    <Route
        path="posts"
        element={<DashboardPosts />}
    />

    <Route
        path="setting"
        element={<DashboardSettings />}
    />
</Route>
```

Components:

```jsx
function DashboardLayout() {
    return (
        <div>
            <h1>Dashboard Layout</h1>
            <Outlet />
        </div>
    );
}

function DashboardPosts() {
    return <h2>Dashboard Posts</h2>;
}

function DashboardSettings() {
    return <h2>Dashboard Setting</h2>;
}
```

---

## 16. Navigation Inside Nested Routes

A parent route can contain navigation for its child routes.

```jsx
function DashboardLayout() {
    return (
        <div>
            <h1>Dashboard</h1>

            <nav>
                <NavLink to="posts">
                    Posts
                </NavLink>

                <NavLink to="setting">
                    Settings
                </NavLink>
            </nav>

            <Outlet />
        </div>
    );
}
```

Because the parent is `/dashboard`:

```jsx
<NavLink to="posts">
```

resolves to:

```text
/dashboard/posts
```

---

## 17. Concepts Learned Today

```text
BrowserRouter
      ↓
Routes
      ↓
Route
      ↓
Link / NavLink
      ↓
Dynamic Routes
      ↓
useParams()
      ↓
API using route parameter
      ↓
useNavigate()
      ↓
useLocation()
      ↓
Nested Routes
      ↓
Outlet
```

---

## 18. Practical Work Completed

### Active Navbar

```jsx
<NavLink
    to="/profile"
    className={({ isActive }) =>
        isActive ? "active-link" : ""
    }
>
    Profile
</NavLink>
```

### Dynamic Profile

```text
/profile/:id
```

### Profile API

```text
/profile/1
    ↓
useParams()
    ↓
id = "1"
    ↓
fetch user 1
```

### Login Navigation

```text
Login
  ↓
useNavigate()
  ↓
/profile/1
```

### Current URL

```jsx
const location = useLocation();
```

### Dashboard Nested Routes

```text
/dashboard
    ├── /dashboard/posts
    └── /dashboard/setting
```

with:

```jsx
<Outlet />
```

---

## 19. Interview Questions

### Q1. What is React Router?

React Router is a library used to implement client-side routing in React applications.

### Q2. What is BrowserRouter?

`BrowserRouter` provides routing functionality using the browser's history API.

### Q3. Difference between Link and NavLink?

`Link` is used for navigation. `NavLink` also provides information about whether the current route is active, making active-link styling easier.

### Q4. What is useParams()?

`useParams()` is a React Router hook used to access dynamic parameters from the URL.

Example:

```jsx
<Route
    path="/profile/:id"
    element={<Profile />}
/>
```

```jsx
const { id } = useParams();
```

### Q5. What is useNavigate()?

`useNavigate()` is used to navigate programmatically from JavaScript code.

```jsx
navigate("/profile");
```

### Q6. What is useLocation()?

`useLocation()` provides information about the current URL/location.

### Q7. What are nested routes?

Nested routes are child routes defined inside a parent route.

### Q8. What is Outlet?

`Outlet` is the location where React Router renders the matching child route.

### Q9. Why use `[id]` in the profile API effect?

Because the API request depends on the route ID. When the ID changes, the effect should run again and fetch the new profile.

---

## 20. Day 18 Key Takeaways

You should now be comfortable with:

- Creating multiple pages with React Router
- Navigating with `Link`
- Creating active navigation with `NavLink`
- Creating dynamic routes using `:id`
- Reading route parameters with `useParams()`
- Fetching API data using a route parameter
- Navigating programmatically with `useNavigate()`
- Reading the current path with `useLocation()`
- Creating nested routes
- Rendering child routes with `Outlet`
- Creating navigation inside nested routes

---

## Git

Recommended commit:

```bash
git add .
git commit -m "day-18: React Router"
git push
```

---

# Next: Day 19 — JWT Authentication

We will connect React authentication with your Spring Boot backend.

Topics:

- Login API
- JWT token
- Axios
- Storing JWT
- Authentication state
- Context + JWT
- Sending JWT in request headers
- Axios interceptors
- Logout
- Protected routes
