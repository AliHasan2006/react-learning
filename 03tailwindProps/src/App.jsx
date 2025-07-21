import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let mentorObj = {
    name : 'Hitesh Choudhary',
    profile: 'Founder of Chai aur Code 2021'
  }
   let studentObj ={
  name : 'Ali Hasan',
  profile: 'A BCA Student pursuing in 2023'
   }
  return (
    <>
      <h1 className="text-3xl font-bold underline mb-4">
        A Project using Tailwind & Props
      </h1>
      <Card obj = {mentorObj}></Card>
      <Card obj = {studentObj}></Card>
      
    </>
  )
}

export default App
