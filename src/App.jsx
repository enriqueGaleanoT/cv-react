import './App.css'
import { NavBar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Proyects } from './components/Proyects'
import { ContactMe } from './components/ContactMe'
function App() {


  return (
    <>
      <div>
        <NavBar></NavBar>
        <Hero></Hero>
        <About></About>
        <Proyects></Proyects>
        <ContactMe></ContactMe>
      </div>
    </>
  )
}

export default App
