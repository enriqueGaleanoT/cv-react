import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
function App() {


  return (
    <>
      <div>
        <NavBar></NavBar>
        <Hero></Hero>
        <About></About>
      </div>
    </>
  )
}

export default App
