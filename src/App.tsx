import Navbar from "./Components/Navbar"
import HomePage from "./Components/HomePage"
import About from "./Components/About"
import Skills from "./Components/Skills"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import { useRef } from 'react'

function App() {

  const aboutRef = useRef<HTMLElement>(null!);

  return (
    <>
      <Navbar aboutRef={aboutRef} />
      <main>
        <HomePage />
        <About aboutRef={aboutRef} />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />

    </>
  )
}

export default App
