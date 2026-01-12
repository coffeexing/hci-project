import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Solutions from '../components/Solutions';
import Team from '../components/Team';

const HomePage = () => {
  return (
    <div className="bg-midnight text-white">
      <Hero />
      <hr className="road-divider" />
      <Problem />
      <hr className="road-divider" />
      <Solutions />
      <hr className="road-divider" />
      <Team />
    </div>
  );
};

export default HomePage;
