import Navbar from "./Components/Navbar"
import HomePage from "./Components/HomePage"
import About from "./Components/About"
import Skills from "./Components/Skills"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import './Style/navbar.sass'

function App() {

  return (
    <>
      <Navbar />
      <main>
        <HomePage />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />

    </>
  )
}

export default App
