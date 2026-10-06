import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const name = "Pankaj Gite";
  const role = "Java Developer";
  const experience= 2;
  const skills = ["Java", "Spring Boot", "React"];

  return (
    <>
      <h1>Hello {name}</h1>
      <p>I am a  {role}</p>
      <p>Experience: {experience}+ years</p>
      <p>Next year I will have {experience + 1} years of experience.</p>
      <p>My total skills: {skills.length}</p>
      <p>Skills: {skills.map(skill => (
        skill + ","
      ))}</p>
    </>
  )
}

export default App
