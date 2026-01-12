import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Research', path: '/research' },
    { name: 'Prototype', path: '/prototype' },
    { name: 'Team', path: '/#team' },
  ];

  const handleNavClick = (e, item) => {
    // 如果是锚点链接且在首页
    if (item.path.includes('#')) {
      if (location.pathname !== '/') {
        // 不在首页，让Link组件处理导航
        return;
      }
      // 在首页，阻止默认行为并滚动到锚点
      e.preventDefault();
      const targetId = item.path.split('#')[1];
      const element = document.getElementById(targetId);
      if (element) {
        const navHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-midnight/95 backdrop-blur-md shadow-xl' : 'bg-midnight/90 backdrop-blur-md'
      } border-b border-road-grey`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-signal-green text-3xl">sensors</span>
              <span className="font-display text-2xl font-bold tracking-tighter text-high-contrast">
                SEADS
              </span>
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={(e) => handleNavClick(e, item)}
              >
                <motion.span
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, color: '#10B981' }}
                  className={`text-sm font-medium transition-colors uppercase tracking-widest cursor-pointer
                    ${isActive(item.path) ? 'text-signal-green' : 'hover:text-signal-green'}`}
                >
                  {item.name}
                </motion.span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
