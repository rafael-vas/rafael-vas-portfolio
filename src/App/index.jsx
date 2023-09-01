import './styles.css'

import { Header } from "../components/Header"
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/HeroSection'
import { About } from '../components/AboutSection'
import { Projects } from '../components/ProjectSection'
import { Certificates } from '../components/CertficateSection'
import { Design } from '../components/Design'

export function App() {

  return (
    <div className='app'>
      <Design />
      <Header />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certificates />
    </div>
  )

}