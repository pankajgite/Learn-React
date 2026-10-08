import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

// function Profile(){
//     return(
//       <div>
//         <h1>Pankaj Gite</h1>
//         <h3>Java Developer</h3>
//         <p>
//           2+ years experience
//         </p>
//       </div>
//     )
// }

// function Navbar(){
//   return (
//     <nav>
//       <h3>
//         My LinkedIn App
//       </h3>  
//     </nav>
//   )
// }

// function UserCard({ name, role, exp }){
//   const [isOnline, setIsOnline] = useState(false);
//   const [isFollowing, setFollowing] = useState(false);
//   const [likes, setLike] =  useState(0);

 
//   return(
//     <div>
//       <hr />
//       <ul>
//         <li>Name: {name}</li>
//         <li>Role: {role}</li>
//         <li>Experience: {exp}</li>
//         <li>Status: {isOnline ? "Online" : "Offline"}</li>
//         <button onClick={() => setIsOnline(!isOnline)}>{isOnline ? "Go Offline" : "Go Online"}</button>
//         <li>{isFollowing ? "Following" : "Not Following"}</li>
//         <button onClick={() => setFollowing(!isFollowing) }>{isFollowing ? "Unfollow" : "Follow"}</button>

//         <li>Likes: {likes}</li>
//         <button onClick={() => setLike(likes + 1 )}>Like</button>
        
        
//       </ul>
      
      
//       <hr />
//     </div>
//   )
// }

// function Card({children}){
//   return(
//     <div>
//       {children}
//     </div>
//   )
// }


// function Buttons(){
//   const [count, setCount] = useState(5);
//   const [mood, setMood] = useState("Happy");  


//   function toggleMood() {
//     console.log("Updating mood");

//     if (mood === "Happy") {
//       setMood("Sad");
//     } else {
//       setMood("Happy");
//     }
//   }


//   return (
//     <div>
//       <h1>Like: {count}</h1>
//       <h2>Mood: {mood}</h2>

//       <button onClick={() => setCount(count + 1)}>
//         Like
//       </button>
//       <button onClick={() => setCount(count - 1)}>
//         Dislike
//       </button>
//       <br />

//       <button onClick={toggleMood}>Toggle Mood</button>
//     </div>
//   );
// }

// function handleClick(){
//   console.log("Button clicked!");
// }
// function EventDemo() {
//   return(
//     <div>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   )
// }

// function handleChange(event){
//   console.log(event.target.value);
// }

// function InputDemo() {
//   return(
//     <>
//       <h3>Enter value</h3>
//       <input onChange={handleChange}/>
//     </>
//   )
// }

// function handleSubmit(event){
//   event.preventDefault();
//   console.log("Form submitted");
// }

// function LoginForm() {
//   return(
//     <form onSubmit={handleSubmit}>
//       <h3>Username: </h3>
//       <input placeholder="Enter username" />
//       <button type="submit">Login </button>
//     </form>
//   )
// }
// // function LoginStatus() {
// //   const isLoggedIn = false;
// //   const isAdmin = false;
// //   return(
// //     <>
// //       <h3>{isLoggedIn ? "Welcome Back":"Please Login"}</h3>
// //       {isAdmin && <h4>Admin Panel</h4>}
// //     </>
// //   )
// // }
// function AdminPanel() {
//   const isAdmin = false;
//   return(
//     <>
//     {isAdmin && <h4>Welcome to Admin Panel</h4>}
//     </>
//   )
// }

// function LoginStatus(){
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return(
//     <div>
//       <h2>{isLoggedIn ? "Welcome Back!":"Please Login"}</h2>
//       <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>{isLoggedIn? "Logout" : "Login"}</button>
//     </div>
//   )
// }

// function EmployeeCard({name, role}){
//   return(
//     <>
//       <h2>{name} - {role}</h2>
//     </>
//   )
// }

function PostCard({name, role, content, likes}){
const [like, setLike] = useState(likes);
const [isLiked, setIsLiked]= useState(false);
function LikePost(){
  setLike(prev => prev + 1);
  setIsLiked(true);
}
function DisLikePost(){
  setLike(prev => prev - 1);
  setIsLiked(false);
}
return(
  <div>
    <hr />
    <h4>{name}</h4>
    <h5>{role}</h5>
    <p>{content}</p>
    <p>Likes: {like}</p>
    <button onClick={isLiked ?DisLikePost : LikePost}>{isLiked ? "Unlike": "Like"}</button>
    <hr />
  </div>
)

}

function App(){
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
    {
      posts.map(po=> (
        <PostCard key={po.id} name={po.name} role={po.role} content={po.content} likes={po.likes} />
      ))
    }
  </div>

)
}



// function App(){
  
//   const users = [
//     { id: 1, name: "Pankaj", role: "Java Developer" },
//     { id: 2, name: "Rahul", role: "Frontend Developer" },
//     { id: 3, name: "Amit", role: "Backend Developer" }
//   ];

  


//   return(
//     <div>
//       <LoginStatus />
//       {
//         users.map(user=>(
//           <EmployeeCard key={user.id} name={user.name} role={user.role}/>
//         ))
//       }

//     </div>
//   )
// }


// function App() {
//    const users = [
//         { id: 1, name: "Pankaj", role: "Java Developer", exp: "2+" },
//         { id: 2, name: "Rahul", role: "Frontend Developer", exp: "3+" },
//         { id: 3, name: "Amit", role: "Backend Developer", exp: "4+" },
//         { id: 4, name: "Gayatri", role: "AI Developer", exp: "1" }
//     ];
//   return (
//     <div className="App">
//       <EventDemo />
//       <InputDemo />
//       <LoginForm />
//       <LoginStatus />
//       <AdminPanel />
//       <Navbar />
//       <Profile />
//       <Buttons />
//       {users.map(user => (
//           <UserCard
//               key={user.id}
//               name={user.name}
//               role={user.role}
//               exp={user.exp}
//           />
//       ))}

//       <TextMarquee>
//         Hello Pankaj
//       </TextMarquee>

//       <Card>
//           <h2>Pankaj Gite</h2>
//           <p>Java Developer</p>
//       </Card>
//       <Card>
//         <h2>React Learning</h2>
//         <p>Currently learning React.</p>
//     </Card>
//     </div>
//   )
// }

function TextMarquee({ children, speed = 15, pauseOnHover = true }) {
  return (
    <div className="marquee-container" style={{ pauseOnHover }}>
      <div className="marquee-content" style={{ animationDuration: `${speed}s` }}>
        <span className="marquee-item">{children}</span>
        {/* Duplicate content to create a seamless infinite loop */}
        <span className="marquee-item" aria-hidden="true">{children}</span>
      </div>

      <style>{`
        .marquee-container {
          overflow: hidden;
          white-space: nowrap;
          width: 100%;
          background: #1e293b;
          color: #f8fafc;
          padding: 10px 0;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .marquee-content {
          display: inline-flex;
          animation: marquee linear infinite;
        }

        .marquee-container:hover .marquee-content {
          animation-play-state: ${pauseOnHover ? 'paused' : 'running'};
        }

        .marquee-item {
          padding-right: 50px; /* Space between repeated text */
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

// function App() {
//   const name = "Pankaj Gite";
//   const role = "Java Developer";
//   const experience= 2;
//   const skills = ["Java", "Spring Boot", "React"];

//   return (
//     <>
//       <h1>Hello {name}</h1>
//       <p>I am a  {role}</p>
//       <p>Experience: {experience}+ years</p>
//       <p>Next year I will have {experience + 1} years of experience.</p>
//       <p>My total skills: {skills.length}</p>
//       <p>Skills: {skills.map(skill => (
//         skill + ","
//       ))}</p>
//     </>
//   )
// }



export default App
