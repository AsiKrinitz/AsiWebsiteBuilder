import { Hero } from '../Hero/Hero';
import { Projects } from '../Projects/Projects';
import './Home.css';

export function Home() {
  return (
    <div className="home-page">
      <Hero />
      <Projects />
    </div>
  );
}
