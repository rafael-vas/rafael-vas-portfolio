import './styles.css'

import { Header } from "../components/Header"
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/HeroSection'
import { About } from '../components/AboutSection'
import { Projects } from '../components/ProjectSection'
import { Certificates } from '../components/CertficateSection'

export function App() {

  return (
    <div className='app'>
      <Header />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certificates />
    </div>
  )

}