import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function Profile(){
    return(
      <div>
        <h1>Pankaj Gite</h1>
        <h3>Java Developer</h3>
        <p>
          2+ years experience
        </p>
      </div>
    )
}

function Navbar(){
  return (
    <nav>
      <h3>
        My LinkedIn App
      </h3>  
    </nav>
  )
}

function UserCard({ name, role, exp }){
 
  return(
    <div>
      <ul>
        <li>Name: {name}</li>
        <li>Role: {role}</li>
        <li>Experience: {exp}</li>
      </ul>
    </div>
  )
}

function Card({children}){
  return(
    <div>
      {children}
    </div>
  )
}

function App() {
   const users = [
        { id: 1, name: "Pankaj", role: "Java Developer", exp: "2+" },
        { id: 2, name: "Rahul", role: "Frontend Developer", exp: "3+" },
        { id: 3, name: "Amit", role: "Backend Developer", exp: "4+" },
        { id: 4, name: "Gayatri", role: "AI Developer", exp: "1" }
    ];
  return (
    <div className="App">
      <Navbar />
      <Profile />
      {users.map(user => (
          <UserCard
              key={user.id}
              name={user.name}
              role={user.role}
              exp={user.exp}
          />
      ))}

      <TextMarquee>
        Hello Pankaj
      </TextMarquee>

      <Card>
          <h2>Pankaj Gite</h2>
          <p>Java Developer</p>
      </Card>
      <Card>
        <h2>React Learning</h2>
        <p>Currently learning React.</p>
    </Card>
    </div>
  )
}

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
