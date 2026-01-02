import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Learning from './components/Learning'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen custom-scrollbar">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Learning />
      <Contact />
    </div>
  )
}

export default App
