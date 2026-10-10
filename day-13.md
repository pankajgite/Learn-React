# Day 13 — React Forms

> **Goal:** Build real-world React forms using controlled components, form state, validation, error handling, and submit handling.

---

## 1. What We Learned Today

- Controlled components
- Form state with `useState`
- Managing multiple fields with one object
- `onChange`
- `onSubmit`
- `event.preventDefault()`
- Form validation
- Field-specific validation errors
- Clearing errors while typing
- Conditional rendering
- Login form implementation
- Controlled vs uncontrolled components

---

## 2. Controlled Components

A **controlled component** is a form input whose value is controlled by React state.

```jsx
const [username, setUsername] = useState("");

<input
  value={username}
  onChange={(event) => setUsername(event.target.value)}
/>
```

### Flow

```text
┌───────────────┐
│ User types    │
└───────┬───────┘
        ↓
┌───────────────┐
│   onChange    │
└───────┬───────┘
        ↓
┌───────────────┐
│ setUsername() │
└───────┬───────┘
        ↓
┌───────────────┐
│ React state   │
│ changes       │
└───────┬───────┘
        ↓
┌───────────────┐
│ Component     │
│ re-renders    │
└───────┬───────┘
        ↓
┌───────────────┐
│ value comes   │
│ from state    │
└───────────────┘
```

> **React state is the source of truth for the input.**

---

## 3. Managing Multiple Form Fields

Instead of:

```jsx
const [username, setUsername] = useState("");
const [name, setName] = useState("");
const [email, setEmail] = useState("");
```

use one object:

```jsx
const [formData, setFormData] = useState({
  username: "",
  name: "",
  email: ""
});
```

### Updating one field

```jsx
setFormData({
  ...formData,
  name: event.target.value
});
```

The spread operator keeps the other fields.

```text
Existing state
┌─────────────────────────┐
│ username: "Pankaj"      │
│ name: ""                │
│ email: ""               │
└────────────┬────────────┘
             │
             │ ...formData
             ↓
┌─────────────────────────┐
│ username: "Pankaj"      │
│ name: "Rahul"           │ ← updated
│ email: ""               │
└─────────────────────────┘
```

---

## 4. Destructuring Form Data

```jsx
const { username, name, email } = formData;
```

Now use:

```jsx
username
name
email
```

This is especially useful during validation and submission.

---

## 5. Controlled Input Pattern

```jsx
<input
  value={formData.name}
  placeholder="Enter Name"
  onChange={(event) =>
    setFormData({
      ...formData,
      name: event.target.value
    })
  }
/>
```

### Remember

```text
value    → state
onChange → update state
```

---

## 6. Form Submission

```jsx
function handleSubmit(event) {
  event.preventDefault();

  console.log("Form submitted");
}

<form onSubmit={handleSubmit}>
  <button type="submit">Submit</button>
</form>
```

### Why `preventDefault()`?

It prevents the browser's normal form submission behavior, such as page reload/navigation.

```text
Submit
  ↓
onSubmit
  ↓
handleSubmit()
  ↓
preventDefault()
  ↓
React handles the form
```

---

## 7. Form Validation

```jsx
const { username, name, email } = formData;

if (username === "") {
  // username error
} else if (name === "") {
  // name error
} else if (email === "") {
  // email error
} else {
  // valid form
}
```

> **Validate before processing or submitting the data.**

---

## 8. Displaying Errors

Initially we used one error:

```jsx
const [error, setError] = useState("");
```

Then:

```jsx
setError("Please enter username");
```

Display it with:

```jsx
{error && <p>{error}</p>}
```

```text
error = ""       → nothing displayed
error = "..."    → error displayed
```

---

## 9. Field-Specific Errors

For larger forms, use an error object:

```jsx
const [errors, setErrors] = useState({
  username: "",
  name: "",
  email: ""
});
```

Update one field:

```jsx
setErrors({
  ...errors,
  username: "Please enter username"
});
```

Display errors:

```jsx
{errors.username && <p>{errors.username}</p>}
{errors.name && <p>{errors.name}</p>}
{errors.email && <p>{errors.email}</p>}
```

### Why this is better

```text
errors
  │
  ├── username → "Please enter username"
  ├── name     → ""
  └── email    → "Please enter email"
```

Each field has its own validation message.

---

## 10. Clearing Errors While Typing

```jsx
onChange={(event) => {
  setFormData({
    ...formData,
    username: event.target.value
  });

  setErrors({
    ...errors,
    username: ""
  });
}}
```

Only the username error is cleared.

```text
Username error → cleared
Name error     → unchanged
Email error    → unchanged
```

---

## 11. Complete Login Form Flow

A realistic login form combines everything:

```text
                 Submit
                    │
                    ↓
           ┌─────────────────┐
           │ preventDefault  │
           └────────┬────────┘
                    ↓
          Username empty?
             /                      YES            NO
            ↓              ↓
      Show username    Password empty?
         error           /                              YES        NO
                        ↓          ↓
                  Show password   Check
                     error       credentials
                                  /                                   Wrong   Correct
                                 ↓       ↓
                              Error    Success
```

Example state:

```jsx
const [formData, setFormData] = useState({
  username: "",
  password: ""
});

const [errors, setErrors] = useState({
  username: "",
  password: "",
  login: ""
});

const [isLoggedIn, setIsLoggedIn] = useState(false);
```

---

## 12. Controlled vs Uncontrolled Components

### Controlled

React state controls the input value.

```jsx
const [username, setUsername] = useState("");

<input
  value={username}
  onChange={(e) => setUsername(e.target.value)}
/>
```

```text
React State
     ↕
Input Value
```

React is the **source of truth**.

### Uncontrolled

The DOM maintains the input value.

Usually use `useRef`:

```jsx
const usernameRef = useRef();

<input ref={usernameRef} />
```

Then:

```jsx
console.log(usernameRef.current.value);
```

```text
DOM
 │
 └── Input Value

React does not control the value through state.
```

### Interview answer

> **A controlled component is a form input whose value is controlled by React state, while an uncontrolled component lets the DOM manage the value and typically uses a ref to access it.**

---

## 13. Quick Comparison

| Feature | Controlled | Uncontrolled |
|---|---|---|
| Value managed by | React state | DOM |
| Uses `value` | Usually yes | Usually no |
| Uses `onChange` | Usually yes | Not necessarily |
| Uses `useRef` | Not required | Common |
| React is source of truth | Yes | No |
| Good for complex validation | Yes | Less convenient |

---

## 14. Interview Questions

### Q1. What is a controlled component?

An input whose value is controlled by React state.

### Q2. Why use `event.preventDefault()`?

To prevent the browser's default form submission behavior.

### Q3. Why use one object for form state?

It keeps related form data together and makes larger forms easier to manage.

### Q4. Why use the spread operator?

To preserve the other fields while updating one field.

```jsx
setFormData({
  ...formData,
  username: event.target.value
});
```

### Q5. Controlled vs uncontrolled?

**Controlled:** React state is the source of truth.

**Uncontrolled:** The DOM is the source of truth.

### Q6. Why use field-specific errors?

Each field can have its own validation message, which scales better for larger forms.

---

## 15. Practical Challenge

Build a **Registration Form** with:

- Username
- Full Name
- Email
- Password
- Confirm Password
- Register button

Validation:

```text
Username       → required
Full Name      → required
Email          → required
Password       → required
Confirm        → must match password
```

Use:

- `useState`
- One `formData` object
- One `errors` object
- Controlled inputs
- `onChange`
- `onSubmit`
- `preventDefault`
- Conditional error rendering

**Build it yourself without copying the Login Form.**

---

## 16. Day 13 Takeaways

```text
                 React Forms
                     │
        ┌────────────┴────────────┐
        ↓                         ↓
   Form State                 Validation
        │                         │
        ↓                         ↓
 Controlled Inputs          Error Handling
        │                         │
        └────────────┬────────────┘
                     ↓
                Form Submit
                     │
                     ↓
              Success / Error
```

### Most important patterns

```jsx
value={formData.username}
```

```jsx
onChange={(event) =>
  setFormData({
    ...formData,
    username: event.target.value
  })
}
```

```jsx
<form onSubmit={handleSubmit}>
```

```jsx
event.preventDefault();
```

```jsx
{errors.username && <p>{errors.username}</p>}
```

---

## ✅ Day 13 Status

- [x] Controlled components
- [x] Form state
- [x] Multiple fields with one state object
- [x] Destructuring
- [x] Form submission
- [x] Validation
- [x] Field-specific errors
- [x] Clearing errors
- [x] Login form
- [x] Controlled vs uncontrolled components
- [ ] Registration form challenge

**Next:** Complete the registration-form challenge, then Day 13 is finished.
