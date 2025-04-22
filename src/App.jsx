import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'
import { Main } from './styles/AppStyles'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <Main className={theme}>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </Main>
  )
}

export default App