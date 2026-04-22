import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { Services } from './components/Services/Services';
import { TechComparison } from './components/TechComparison/TechComparison';
import { Projects } from './components/Projects/Projects';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Reviews } from './components/Reviews/Reviews';
import { Pricing } from './components/Pricing/Pricing';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={
              <div className="page-padding">
                <Services />
                <TechComparison />
              </div>
            } />
            <Route path="/projects" element={
              <div className="page-padding">
                <Projects />
              </div>
            } />
            <Route path="/about" element={
              <div className="page-padding">
                <About />
              </div>
            } />
            <Route path="/reviews" element={
              <div className="page-padding">
                <Reviews />
              </div>
            } />
            <Route path="/pricing" element={
              <div className="page-padding">
                <Pricing />
              </div>
            } />
            <Route path="/contact" element={
              <div className="page-padding">
                <Contact />
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
