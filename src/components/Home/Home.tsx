import { Hero } from '../Hero/Hero';
import { Projects } from '../Projects/Projects';
import { Pricing } from '../Pricing/Pricing';
import './Home.css';

export function Home() {
  return (
    <div className="home-page">
      <Hero />
      <Projects />
      <Pricing />
    </div>
  );
}
