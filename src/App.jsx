import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PrototypePage from './pages/PrototypePage';
import ResearchPage from './pages/ResearchPage';
import User1Page from './pages/User1Page';
import User2Page from './pages/User2Page';
import User3Page from './pages/User3Page';
import './index.css';

function App() {
  return (
    <Router>
      <div className="bg-midnight text-white font-sans selection:bg-signal-green selection:text-midnight">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/prototype" element={<PrototypePage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/user1" element={<User1Page />} />
          <Route path="/user2" element={<User2Page />} />
          <Route path="/user3" element={<User3Page />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
