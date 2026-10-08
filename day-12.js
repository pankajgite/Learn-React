import { useState } from "react";

/*
====================================================
DAY 12 — REACT EVENTS & RENDERING
====================================================

Topics:
1. onClick
2. onChange
3. onSubmit
4. Event object
5. event.preventDefault()
6. Conditional rendering
7. Ternary operator
8. && conditional rendering
9. List rendering with map()
10. key prop
11. Props + State + Events
12. Practical LinkedIn-style Post Card
====================================================
*/


/*
====================================================
1. onClick EVENT
====================================================
*/

function handleClick() {
  console.log("Button clicked!");
}

function EventDemo() {
  return (
    <div>
      <h3>onClick Event</h3>

      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}


/*
====================================================
2. onChange EVENT
====================================================
*/

function handleChange(event) {
  console.log(event.target.value);
}

function InputDemo() {
  return (
    <div>
      <h3>onChange Event</h3>

      <input
        type="text"
        placeholder="Enter something"
        onChange={handleChange}
      />
    </div>
  );
}


/*
====================================================
3. onSubmit EVENT
====================================================
*/

function handleSubmit(event) {
  event.preventDefault();

  console.log("Form submitted");
}

function LoginForm() {
  return (
    <form onSubmit={handleSubmit}>
      <h3>Login Form</h3>

      <input
        type="text"
        placeholder="Username"
      />

      <button type="submit">
        Login
      </button>
    </form>
  );
}


/*
====================================================
4. CONDITIONAL RENDERING — TERNARY
====================================================
*/

function LoginStatus() {
  const isLoggedIn = false;

  return (
    <div>
      <h3>
        {isLoggedIn ? "Welcome Back!" : "Please Login"}
      </h3>
    </div>
  );
}


/*
====================================================
5. CONDITIONAL RENDERING — &&
====================================================
*/

function AdminPanel() {
  const isAdmin = false;

  return (
    <div>
      {isAdmin && (
        <h4>
          Welcome to Admin Panel
        </h4>
      )}
    </div>
  );
}


/*
====================================================
6. STATE + CONDITIONAL RENDERING + EVENT
====================================================
*/

function InteractiveLoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h3>
        {isLoggedIn ? "Welcome Back!" : "Please Login"}
      </h3>

      <button
        onClick={() => setIsLoggedIn(prev => !prev)}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}


/*
====================================================
7. LIST RENDERING WITH map() + key
====================================================
*/

function EmployeeCard({ name, role }) {
  return (
    <div>
      <h2>
        {name} - {role}
      </h2>
    </div>
  );
}

function EmployeeList() {

  const users = [
    {
      id: 1,
      name: "Pankaj",
      role: "Java Developer"
    },
    {
      id: 2,
      name: "Rahul",
      role: "Frontend Developer"
    },
    {
      id: 3,
      name: "Amit",
      role: "Backend Developer"
    }
  ];

  return (
    <div>

      {users.map(user => (
        <EmployeeCard
          key={user.id}
          name={user.name}
          role={user.role}
        />
      ))}

    </div>
  );
}


/*
====================================================
8. PRACTICAL LINKEDIN-STYLE POST CARD
====================================================
*/

function PostCard({
  name,
  role,
  content,
  likes
}) {

  // Each PostCard has its own independent state
  const [like, setLike] = useState(likes);

  const [isLiked, setIsLiked] = useState(false);


  function LikePost() {

    setLike(prev => prev + 1);

    setIsLiked(true);
  }


  function DisLikePost() {

    setLike(prev => prev - 1);

    setIsLiked(false);
  }


  return (
    <div>

      <hr />

      <h4>{name}</h4>

      <h5>{role}</h5>

      <p>{content}</p>

      <p>
        Likes: {like}
      </p>

      <button
        onClick={isLiked ? DisLikePost : LikePost}
      >
        {isLiked ? "Unlike" : "Like"}
      </button>

      <hr />

    </div>
  );
}


/*
====================================================
9. POSTS DATA + map()
====================================================
*/

function LinkedInPosts() {

  const posts = [

    {
      id: 1,
      name: "Pankaj",
      role: "Java Developer",
      content: "Learning React and JavaScript!",
      likes: 5
    },

    {
      id: 2,
      name: "Rahul",
      role: "Frontend Developer",
      content: "Building my first React project.",
      likes: 10
    },

    {
      id: 3,
      name: "Amit",
      role: "Backend Developer",
      content: "Exploring Spring Boot Microservices.",
      likes: 8
    }

  ];


  return (
    <div>

      {posts.map(post => (

        <PostCard
          key={post.id}
          name={post.name}
          role={post.role}
          content={post.content}
          likes={post.likes}
        />

      ))}

    </div>
  );
}


/*
====================================================
10. MAIN APP
====================================================
*/

function App() {

  return (
    <div>

      <h1>
        Day 12 — React Events & Rendering
      </h1>


      <EventDemo />

      <InputDemo />

      <LoginForm />

      <LoginStatus />

      <AdminPanel />

      <InteractiveLoginStatus />

      <EmployeeList />

      <LinkedInPosts />

    </div>
  );
}

export default App;


/*
====================================================
KEY TAKEAWAYS
====================================================

1. onClick
   Used for handling button clicks.

   Example:
   <button onClick={handleClick}>Click</button>


2. onChange
   Used for handling input changes.

   Example:
   <input onChange={handleChange} />


3. onSubmit
   Used for handling form submission.

   Example:
   <form onSubmit={handleSubmit}>


4. Event Object
   React provides an event object.

   event.target.value
   → gets the current input value.


5. preventDefault()
   Prevents the browser's default behavior.

   event.preventDefault();


6. Ternary Conditional Rendering

   {isLoggedIn ? "Welcome" : "Please Login"}


7. && Conditional Rendering

   {isAdmin && <AdminPanel />}

   If isAdmin is true → render component.
   If isAdmin is false → render nothing.


8. map()
   Used to render lists.

   users.map(user => (
      <UserCard />
   ))


9. key
   React requires a unique key when rendering lists.

   key={user.id}

   The key helps React identify list items
   during reconciliation.


10. Props + State

   Props:
   Data passed from parent to child.

   State:
   Data managed by the component.


11. Independent Component State

   Every PostCard instance has its own state.

   Pankaj → likes: 6
   Rahul  → likes: 10
   Amit   → likes: 8

   Changing one PostCard does not automatically
   change the others.


12. Functional State Update

   Prefer:

   setLike(prev => prev + 1)

   instead of:

   setLike(like + 1)

   when the new state depends on the previous state.


====================================================
DAY 12 STATUS: COMPLETE
====================================================
*/