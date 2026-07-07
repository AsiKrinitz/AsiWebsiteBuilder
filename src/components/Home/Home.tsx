import { Hero } from '../Hero/Hero';
import { Projects } from '../Projects/Projects';
import { Pricing } from '../Pricing/Pricing';
import './Home.css';
import { Contact } from '../Contact/Contact';

export function Home() {
  return (
    <div className="home-page">
      <Hero />
      <Projects />
      <Pricing />
      <Contact />
    </div>
  );
}
