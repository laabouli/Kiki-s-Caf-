import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Experience } from './components/Experience'
import { Gallery } from './components/Gallery'
import { Testimonials } from './components/Testimonials'
import { Reservation } from './components/Reservation'
import { Visit } from './components/Visit'
import { Footer } from './components/Footer'
import { FloatingActions } from './components/FloatingActions'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        <Gallery />
        <Testimonials />
        <Reservation />
        <Visit />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}

export default App
