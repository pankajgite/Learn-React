# Day 14 — React + REST APIs & CRUD

## 🎯 Goal

Learn how to connect a React application with a Spring Boot REST API and perform CRUD operations using `fetch` and Axios.

---

## 📚 Topics Covered

### 1. React → Spring Boot Request Flow

```text
React Component
      |
      | HTTP Request
      ↓
Spring Boot REST API
      |
      ↓
Controller
      |
      ↓
Service
      |
      ↓
Database
      |
      ↑
JSON Response
      |
      ↑
React State
      |
      ↑
UI
```

---

## 2. HTTP Methods

| Method | Purpose | Example |
|---|---|---|
| GET | Read data | Get students |
| POST | Create data | Add student |
| PUT | Update data | Update student |
| DELETE | Delete data | Delete student |

---

## 3. Fetch API

### GET

```js
const response = await fetch("http://localhost:8080/api/students");

if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
}

const data = await response.json();
```

### Important

`fetch()` does **not** automatically reject the promise for HTTP errors such as `404` or `500`.

Therefore:

```js
if (!response.ok) {
    throw new Error("Request failed");
}
```

---

## 4. `response.ok`

`response.ok` is a boolean.

```text
2xx response → true
4xx / 5xx response → false
```

---

## 5. `response.status`

Returns the HTTP status code.

```js
console.log(response.status);
```

Common status codes:

```text
200 → OK
201 → Created
400 → Bad Request
401 → Unauthorized
404 → Not Found
500 → Internal Server Error
```

---

## 6. `response.json()`

Converts the JSON response body into a JavaScript value.

```js
const data = await response.json();
```

---

## 7. JavaScript Object ↔ JSON

### Object → JSON string

```js
const student = {
    name: "Pankaj",
    email: "pankaj@gmail.com",
    course: "Java"
};

const jsonData = JSON.stringify(student);
```

### JSON string → JavaScript object

```js
const student = JSON.parse(jsonData);
```

Remember:

```text
Object → JSON String
JSON.stringify()

JSON String → Object
JSON.parse()
```

---

# 8. Axios

Install:

```bash
npm install axios
```

Import:

```js
import axios from "axios";
```

### GET

```js
const response = await axios.get(
    "http://localhost:8080/api/students"
);

const data = response.data;
```

With Axios, the response body is available through:

```js
response.data
```

---

# 9. Axios POST

```js
const student = {
    name: "Pankaj",
    email: "pankaj@gmail.com",
    course: "Java"
};

const response = await axios.post(
    "http://localhost:8080/api/students",
    student
);
```

Axios handles the JSON request body for this normal POST request, so we don't need to manually call `JSON.stringify()`.

---

# 10. Axios PUT

```js
const response = await axios.put(
    `http://localhost:8080/api/students/${data.id}`,
    data
);
```

---

# 11. Axios DELETE

```js
const response = await axios.delete(
    `http://localhost:8080/api/students/${id}`
);
```

---

# 12. Loading State

API requests are asynchronous, so we need a loading state.

```js
const [loading, setLoading] = useState(false);
```

Typical pattern:

```js
try {
    setLoading(true);

    // API request

} catch (error) {

    // handle error

} finally {
    setLoading(false);
}
```

UI:

```jsx
{loading && <p>Loading...</p>}
```

---

# 13. Error State

```js
const [error, setError] = useState("");
```

Example:

```js
catch (err) {
    setError(err.message);
}
```

Display:

```jsx
{error && <p>{error}</p>}
```

---

# 14. Empty State

```jsx
{!loading && !error && students.length === 0 && (
    <p>No students found</p>
)}
```

Common API UI states:

```text
Loading
   ↓
Success → Data
   ↓
Empty → No data

OR

Error → Error message
```

---

# 15. CORS

During development:

```text
React:
http://localhost:5173

Spring Boot:
http://localhost:8080
```

These are different origins because the ports are different.

Spring Boot can allow the React frontend with:

```java
@CrossOrigin(origins = "http://localhost:5173")
```

---

# 16. Student CRUD Project

Today I connected my React frontend to my Spring Boot Student REST API.

```text
                 Student API
                     |
          ┌──────────┼──────────┐
          ↓          ↓          ↓
         GET        POST       PUT
          |          |          |
        Read       Create     Update
          |
          ↓
        DELETE
          |
        Delete
```

---

## 17. Get Student By ID

Endpoint:

```text
GET /api/students/{id}
```

Implementation:

```js
const response = await fetch(
    `http://localhost:8080/api/students/${id}`
);

if (!response.ok) {
    throw new Error("Student not found");
}

const data = await response.json();
```

The component handles:

- Student ID input
- Loading state
- Error state
- Student data
- Student not found

---

## 18. Get All Students

Endpoint:

```text
GET /api/students
```

Axios:

```js
const response = await axios.get(
    "http://localhost:8080/api/students"
);

setStudents(response.data.content);
```

The Spring Boot API returns a paginated response, so the student list is taken from:

```js
response.data.content
```

Students are rendered with:

```jsx
students.map((student) => (
    <tr key={student.id}>
        ...
    </tr>
))
```

---

## 19. Add Student

Endpoint:

```text
POST /api/students
```

Form state:

```js
const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: ""
});
```

POST:

```js
const response = await axios.post(
    "http://localhost:8080/api/students",
    formData
);
```

After successful creation, the returned student ID is displayed.

---

## 20. Delete Student

Endpoint:

```text
DELETE /api/students/{id}
```

Implementation:

```js
const response = await axios.delete(
    `http://localhost:8080/api/students/${id}`
);
```

After successful deletion, the deleted ID is displayed.

---

## 21. Update Student

The update flow:

```text
Enter Student ID
       ↓
GET Student
       ↓
Display existing data
       ↓
Edit fields
       ↓
PUT request
       ↓
Student updated
```

GET:

```js
const response = await fetch(
    `http://localhost:8080/api/students/${id}`
);
```

PUT:

```js
const response = await axios.put(
    `http://localhost:8080/api/students/${data.id}`,
    data
);
```

---

# 22. Complete CRUD

| Operation | HTTP Method | Endpoint | Client |
|---|---|---|---|
| Get all students | GET | `/api/students` | Axios |
| Get student | GET | `/api/students/{id}` | Fetch |
| Add student | POST | `/api/students` | Axios |
| Update student | PUT | `/api/students/{id}` | Axios |
| Delete student | DELETE | `/api/students/{id}` | Axios |

---

# 23. Current App Structure

```text
App
│
├── GetStudentById
│      └── GET /api/students/{id}
│
├── GetAllStudents
│      └── GET /api/students
│
├── AddStudent
│      └── POST /api/students
│
├── DeleteStudent
│      └── DELETE /api/students/{id}
│
└── UpdateStudent
       ├── GET /api/students/{id}
       └── PUT /api/students/{id}
```

All CRUD operations are working with the Spring Boot backend.

---

# 24. Fetch vs Axios

### Fetch

```js
const response = await fetch(url);

if (!response.ok) {
    throw new Error("Request failed");
}

const data = await response.json();
```

### Axios

```js
const response = await axios.get(url);

const data = response.data;
```

| Fetch | Axios |
|---|---|
| Built into JavaScript | External library |
| `response.json()` | `response.data` |
| Need to check `response.ok` | Rejects non-2xx responses by default |
| More manual code | Simpler syntax |
| No installation | Requires Axios package |

---

# 🧠 Interview Questions

### 1. What is a REST API?

A REST API is an API that uses HTTP methods to work with resources.

### 2. What are common HTTP methods?

```text
GET
POST
PUT
PATCH
DELETE
```

### 3. GET vs POST?

GET is generally used to retrieve data.

POST is generally used to create/send data.

### 4. Why use `JSON.stringify()`?

To convert a JavaScript object into a JSON string, commonly when sending JSON using `fetch`.

### 5. What is `response.json()`?

It reads the response body and converts JSON data into a JavaScript value.

### 6. What is `response.data` in Axios?

Axios stores the response body/data in the `data` property.

```js
const response = await axios.get(url);
console.log(response.data);
```

### 7. Does fetch throw an error for HTTP 404?

No. You need to check `response.ok`.

### 8. Why do we need loading state?

API requests are asynchronous, so the UI needs to show that the request is in progress.

### 9. What is CORS?

CORS is a browser security mechanism that controls requests between different origins.

### 10. PUT vs POST?

POST is commonly used to create a resource.

PUT is commonly used to update/replace an existing resource.

---

# 💻 Practice Completed

Today I built a complete Student CRUD frontend using React.

- [x] Get student by ID
- [x] Get all students
- [x] Add student
- [x] Update student
- [x] Delete student
- [x] Loading state
- [x] Error state
- [x] Empty state
- [x] Fetch API
- [x] Axios
- [x] CORS
- [x] React form state
- [x] Spring Boot REST API integration

---

# 📝 Day 14 Summary

Today I learned how React communicates with a Spring Boot REST API.

```text
React
 ↓
HTTP Request
 ↓
REST API
 ↓
Spring Boot
 ↓
Database
 ↓
JSON Response
 ↓
React State
 ↓
UI
```

I also completed a working CRUD application using both `fetch` and Axios.

> Note: For now, after creating/updating/deleting a student, the separate "Get All Students" list is not automatically refreshed. That state-sharing/refetch pattern can be handled later when learning more React state management.

---

# 🚀 Next: Day 15 — useEffect

Topics:

- What is `useEffect`?
- Why do we need it?
- When does it run?
- Dependency array
- Empty dependency array `[]`
- Dependency values
- Cleanup function
- API calls with `useEffect`
- Common `useEffect` mistakes
