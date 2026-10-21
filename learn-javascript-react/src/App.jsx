import { createContext, useContext, useState, useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import LoginForm from './components/LoginForm2';
import GetStudentById from './components/FetchStudent';
import GetAllStudents from './components/FetchAllStudents';
import AddStudent from './components/AddStudent';
import DeleteStudent from './components/DeleteStudent'
import UpdateStudent from './components/UpdateStudent'
import UserProfile from './components/UserProfile';
import GetData from './components/GetData';
import UserDetails from'./components/UserDetails';
import Timer from './components/RefDemo';
import {
    BrowserRouter,
    Routes,
    Route,
    NavLink,
    useParams,
    useNavigate,
    useLocation, 
    Outlet
} from "react-router-dom";


function App(){
  return(
    <BrowserRouter>
    <Navbar />
    <CurrentPage />
      <Routes>

                <Route path="/" element={<Home />} />

                <Route
                    path="/profile/:id"
                    element={<Profile />}
                />
                <Route path="/profile/:id" element={<Profile />} />

                <Route
                    path="/posts"
                    element={<Posts />}
                />

                <Route
                  path="/about"
                  element={<About />}
                />

                <Route path="/contact"
                  element={<Contact />}
                />
                <Route path="/login"
                  element={<Login />}
                />

                <Route path="/dashboard" element={<DashboardLayout />}>
                    <Route path="posts" element={<DashboardPosts />} />
                    <Route path="setting" element={<DashboardSettings />} />
                </Route>

                

      </Routes>

    </BrowserRouter>
  )
}

function Home() {
    return (<>
      <h1>Home Page</h1>
      
      </>
    );
}

function Profile() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const location = useLocation();

    async function fetchStudent(){
      const url = `https://jsonplaceholder.typicode.com/users/${id}`;
      try{
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }
        const d = await response.json();
        console.log(location);
        console.log(location.pathname);
        setData(d)
      }catch(e){
        console.error(e);
      }
    } 

    useEffect(()=>{
      fetchStudent();
    },[id])

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

function Posts() {
    return <h1>Posts Page</h1>;
}

function About(){
  return <h1>About Page</h1>;
}

function Contact() {
    return <h1>Contact Page</h1>;
}

function Navbar() {
    return (
        <nav>
            <NavLink to="/"
              className={({ isActive }) =>
                  isActive ? "active-link" : ""
              }
            >Home</NavLink>
            <NavLink to="/profile"
              className={({ isActive }) =>
                  isActive ? "active-link" : ""
              }
            >Profile</NavLink>
            <NavLink to="/posts"
              className={({ isActive }) =>
                  isActive ? "active-link" : ""
              }
            >Posts</NavLink>
            <NavLink to="/about"
              className={({ isActive }) =>
                  isActive ? "active-link" : ""
              }  
            >About</NavLink>
            <NavLink to="/contact"
              className={({ isActive }) =>
                  isActive ? "active-link" : ""
              }
            >Contact</NavLink>

            <NavLink to="/login"
              className={({isActive}) =>
                isActive ? "active-link" : ""
              }
            >Login</NavLink>

            <NavLink to="/dashboard"
              className={({isActive}) =>
                isActive ? "active-link" : ""
              }
            >Dashboard</NavLink>

            
        </nav>
    );
}

function Login() {

    const navigate = useNavigate();
    const [data, setData] = useState({
      username: "",
      password: ""
    });

    function handleFormSubmit() {
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
                placeholder="Enter UserName" 
                value={data.username } 
                onChange={(event) => setData({ ...data, username: event.target.value })}
              />

              <input 
                placeholder="Enter Password" 
                value={data.password } 
                onChange={(event) => setData({ ...data, password: event.target.value })}
              />
              <button type="submit">Login</button>
            </form>
            
        </div>
    );
}

function CurrentPage() {
    const location = useLocation();

    return (
        <div>
            <h3>Current Path: {location.pathname}</h3>
        </div>
    );
}

function DashboardLayout(){
  return(
    <div>
            <h1>Dashboard</h1>

            <nav>
                <NavLink to="posts" 
                  className={({isActive}) =>
                  isActive ? "active-link" : ""
                }>Posts</NavLink>
                
                <NavLink to="setting"
                 className={({isActive}) =>
                  isActive ? "active-link" : ""
                }>Settings</NavLink>
            </nav>

            <Outlet />
        </div>
  )
}

function DashboardPosts() {
    return <h2> Dashboard Posts</h2>
}

function DashboardSettings() {
    return <h2>Dashboard Setting</h2>
}

// function useFetch(url) {
//   const[loading, setLoading] = useState(false);
//   const[data,setData] = useState([]);
//   const [error, setError] = useState("");

//   async function getData(){
//     setLoading(true);
//     setError("");
//     try{
      
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`HTTP Error: ${response.status}`);
//       }
//       const d = await response.json();
//       setData(d)

//     }catch(e){
//       setError(e);
//     }finally{
//       setLoading(false);
//     }
     
//   }
//   useEffect(()=>{
//     getData();
//   },[url])

//   return{
//     data,
//     loading,
//     error
//   };
  
// }

// function GetUsers(){
//   const url = "https://jsonplaceholder.typicode.com/users";
//   const {data, loading, error}= useFetch(url);

//   return(
//     <div>
//       <h2>Fetch Data</h2>

//             {loading && <p>Loading...</p>}

//             {error && <p>{error}</p>}

//             {!loading && !error && data.length === 0 && (
//                 <p>No User found</p>
//             )}

//             {!loading && !error && data.length > 0 && (
//               data.map(user => (
//                 <div key={user.id}>
//                   <hr/>
//                     <h3>Name: {user.name}</h3>
//                     <h4>Email: {user.email}</h4>
                  
//                     <hr/>
//                 </div>
                
//             )))}
            
//     </div>
//   )
// }
// function GetPosts() {
//     const url = "https://jsonplaceholder.typicode.com/posts";

//     const { data, loading, error } = useFetch(url);

//     return (
//         <div>
//             <h2>Fetch Data</h2>

//             {loading && <p>Loading...</p>}

//             {error && <p>{error}</p>}

//             {!loading && !error && data.length === 0 && (
//                 <p>No posts found</p>
//             )}

//             {!loading && !error && data.length > 0 && (
//               data.map(post => (
//                 <div key={post.id}>
//                     <h3>{post.title}</h3>
//                     <p>{post.body}</p>
//                 </div>
//             )))}
//         </div>
//     );
// }

// function useCounter(){
//   const [count, setCount] = useState(0);

//   function increase(){
//     setCount(prev => prev+1);
//   }
//   function decrease(){
//     setCount(prev => prev -1);
//   }

//   return{
//     count,
//     increase,
//     decrease
//   }
// }

// function Counter(){
//   const {count, increase, decrease} = useCounter();

//   return(
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={increase}>Increase +</button>
//       <button onClick={decrease}>Descrease -</button>
//     </div>
//   )
// }

// function App(){
//   return(
//     <div>
//       <h1>Custom Hook Demo</h1>

//       <GetUsers />
//     </div>
//   )
// }





// const UserContext = createContext();

// function App() {
//     const [user, setUser] = useState({
//         name: "Pankaj",
//         role: "Java Developer"
//     });

//     return (
//         <UserContext.Provider value={{ user, setUser }}>
//             <Navbar />
//             <Profile />
//             <Sidebar />
//         </UserContext.Provider>
//     );
// }

// function Navbar() {
//     const { user } = useContext(UserContext);

//     return <h2>Welcome {user.name}</h2>;
// }
  

// function Profile() {
//     const { user } = useContext(UserContext);

//     return (
//         <div>
//             <h3>Name: {user.name}</h3>
//             <h3>Role: {user.role}</h3>
//         </div>
//     );
// }

// function Sidebar() {
//    const {user} = useContext(UserContext);

//    return(
//       <div>
//         <h3>Logged in as: {user.name}</h3>
//         <h3>Role: {user.role}</h3>
//       </div>
//    )
// }


// function App(){
//   return (
//     <>
//       <GetData />
//     </>

//   )
// }
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

// function Timer() {
//     useEffect(() => {
//       const counter= setInterval(() => {
//             console.log("Timer running");
//         }, 1000);
//       return () => clearInterval(counter);
//     }, []);

//     return <h1>Timer</h1>;
// }

// function App(){
//   return(
//     // <LoginForm />
//     <>
//     <div>
//       <GetStudentById />
//     </div>
//     <div style={{ padding: '20px' }}>
//       <GetAllStudents />
//     </div>

//     <div>
//       <AddStudent />
//     </div>
//     <div>
//       <DeleteStudent />
//     </div>
//     <div>
//       <UpdateStudent />
//     </div>
//     <div>
//       <UserProfile />
//     </div>
//     <div>
//       <Timer />
//     </div>
//     <div>
//       <UserDetails />
//     </div> 
//     <div>
//       <Timer />
//     </div>
//     </>
//   )
// }


// function App(){
//   const posts = [
//     {
//       id: 1,
//       name: "Pankaj",
//       role: "Java Developer",
//       content: "Learning React and JavaScript!",
//       likes: 5
//     },
//     {
//       id: 2,
//       name: "Rahul",
//       role: "Frontend Developer",
//       content: "Building my first React project.",
//       likes: 10
//     },
//     {
//       id: 3,
//       name: "Amit",
//       role: "Backend Developer",
//       content: "Exploring Spring Boot Microservices.",
//       likes: 8
//     }
//   ];

// return (
//   <div>
//     {
//       posts.map(po=> (
//         <PostCard key={po.id} name={po.name} role={po.role} content={po.content} likes={po.likes} />
//       ))
//     }
//   </div>

// )
// }



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
