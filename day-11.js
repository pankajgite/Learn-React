
// ============================================================
// DAY 11 — REACT STATE & useState()
// ============================================================
//
// Topics Covered:
// 1. What is State?
// 2. useState()
// 3. State updates
// 4. Re-rendering
// 5. Multiple state variables
// 6. Conditional rendering
// 7. Props vs State
// 8. Independent component state
// 9. Practical UserCard challenge
// ============================================================

import { useState } from "react";


// ============================================================
// 1. BASIC useState() EXAMPLE
// ============================================================

function Counter() {

  // count      → current state value
  // setCount   → function used to update count
  // 0          → initial value

  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}


// ============================================================
// 2. MULTIPLE STATES
// ============================================================

function Buttons() {

  const [count, setCount] = useState(0);
  const [mood, setMood] = useState("Happy");

  function toggleMood() {

    if (mood === "Happy") {
      setMood("Sad");
    } else {
      setMood("Happy");
    }
  }

  return (
    <div>

      <h2>Like: {count}</h2>
      <h3>Mood: {mood}</h3>

      <button onClick={() => setCount(count + 1)}>
        Like
      </button>

      <button onClick={() => setCount(count - 1)}>
        Dislike
      </button>

      <br />

      <button onClick={toggleMood}>
        Toggle Mood
      </button>

    </div>
  );
}


// ============================================================
// 3. PROPS + STATE + CONDITIONAL RENDERING
// ============================================================

function UserCard({ name, role, exp }) {

  // State belongs to this component instance.
  const [isOnline, setIsOnline] = useState(false);

  return (
    <div>

      <h3>{name}</h3>

      <p>Role: {role}</p>
      <p>Experience: {exp}</p>

      <p>
        Status: {isOnline ? "Online" : "Offline"}
      </p>

      <button onClick={() => setIsOnline(!isOnline)}>
        {isOnline ? "Go Offline" : "Go Online"}
      </button>

    </div>
  );
}


// ============================================================
// 4. FINAL DAY 11 CHALLENGE
// ============================================================
//
// This component demonstrates:
//
// Props
// State
// Multiple states
// Conditional rendering
// Event handling
// Independent component state
// ============================================================

function LinkedInUserCard({ name, role, exp }) {

  // Online / Offline state
  const [isOnline, setIsOnline] = useState(false);

  // Following / Not Following state
  const [isFollowing, setIsFollowing] = useState(false);

  // Like count
  const [likes, setLikes] = useState(0);

  return (
    <div>

      <hr />

      <h3>{name}</h3>

      <p>Role: {role}</p>
      <p>Experience: {exp}</p>


      {/* ================= ONLINE STATUS ================= */}

      <p>
        Status: {isOnline ? "Online" : "Offline"}
      </p>

      <button onClick={() => setIsOnline(!isOnline)}>
        {isOnline ? "Go Offline" : "Go Online"}
      </button>


      {/* ================= FOLLOW STATUS ================= */}

      <p>
        {isFollowing ? "Following" : "Not Following"}
      </p>

      <button onClick={() => setIsFollowing(!isFollowing)}>
        {isFollowing ? "Unfollow" : "Follow"}
      </button>


      {/* ================= LIKE COUNT ================= */}

      <p>
        Likes: {likes}
      </p>

      <button onClick={() => setLikes(likes + 1)}>
        Like
      </button>

      <hr />

    </div>
  );
}


// ============================================================
// 5. APP COMPONENT
// ============================================================

function App() {

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
    <div>

      <h1>My LinkedIn App</h1>

      {/* Basic Counter */}
      <Counter />

      <hr />

      {/* Multiple State Example */}
      <Buttons />

      <hr />

      <h2>Users</h2>

      {/* Render multiple UserCard components */}

      {users.map(user => (
        <LinkedInUserCard
          key={user.id}
          name={user.name}
          role={user.role}
          exp={user.exp}
        />
      ))}

    </div>
  );
}


export default App;


// ============================================================
// DAY 11 KEY TAKEAWAYS
// ============================================================
//
// 1. State is data managed by a React component.
//
// 2. useState() returns:
//
//    [currentValue, setterFunction]
//
//    Example:
//
//    const [count, setCount] = useState(0);
//
// 3. Update state using the setter:
//
//    setCount(count + 1);
//
// 4. Don't directly modify state:
//
//    ❌ count = count + 1;
//
// 5. Updating state causes React to re-render the component.
//
// 6. Props:
//
//    Parent → Child
//    Read-only
//
// 7. State:
//
//    Managed by the component
//    Can be updated using the setter
//
// 8. Every component instance has its own state.
//
//    Pankaj → likes = 10
//    Rahul  → likes = 0
//
//    Changing Pankaj's likes does not change Rahul's likes.
//
// 9. Conditional rendering:
//
//    {isOnline ? "Online" : "Offline"}
//
// 10. Boolean state is useful for:
//
//     Online / Offline
//     Follow / Unfollow
//     Open / Close
//     Like / Unlike
//     Login / Logout
//
// ============================================================
