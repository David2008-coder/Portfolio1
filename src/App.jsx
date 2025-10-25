import './App.css'
import './Navbar/Navbar'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import About from './About/About'
import Contact from './Contact/contact'
import Project from './Projects/Project'

function App() {

  return (
    < div>
      <Navbar/>
      < Hero/>
      <About/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default App
