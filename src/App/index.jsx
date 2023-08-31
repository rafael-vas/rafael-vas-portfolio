import './styles.css'

import { Header } from "../components/Header"
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/HeroSection'


export function App() {

  return (
    <div className='app'>
      <Header />
      <Navbar />
      <Hero />

    </div>
  )

}