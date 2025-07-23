import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import Card from './component/Card.jsx'

function App() {
   let myObj = {
    username: "hitesh",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Click </h1>
     <Card username='vaibhav'/>
    </>
  )
}

export default App
