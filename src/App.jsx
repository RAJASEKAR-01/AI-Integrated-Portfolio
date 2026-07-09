import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import GradientBlobs from './components/GradientBlobs.jsx'
import CursorGlow from './components/CursorGlow.jsx'
import InteractiveTerminal from './components/InteractiveTerminal.jsx'
import CommandPalette from './components/CommandPalette.jsx'

export default function App() {
  return (
    <div id="top">
      <GradientBlobs />
      <CursorGlow />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <InteractiveTerminal />
      <CommandPalette />
      <Contact />
      <Footer />
    </div>
  )
}
