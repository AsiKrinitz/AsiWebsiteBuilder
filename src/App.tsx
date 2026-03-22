import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Projects } from './components/Projects'
import { Pricing } from './components/Pricing'

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Pricing />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
