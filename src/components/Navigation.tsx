import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
// @ts-expect-error image typing
import logo from '../logo-wbg.png';

interface NavigationProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navigation({ isDark, toggleTheme }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (!isHomePage) {
      setActiveSection('');
      return;
    }

    const sections = ['home', 'aboutus', 'services', 'process', 'portfolio', 'contact'];
    
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          let maxSection = 'home';
          let maxPercent = 0;
          const viewportHeight = window.innerHeight;

          sections.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;

            const rect = el.getBoundingClientRect();
            const top = Math.max(0, rect.top);
            const bottom = Math.min(viewportHeight, rect.bottom);
            const visibleHeight = Math.max(0, bottom - top);
            const percent = visibleHeight / viewportHeight;

            if (percent > maxPercent) {
              maxPercent = percent;
              maxSection = id;
            }
          });

          if (maxPercent > 0.25) {
            setActiveSection(maxSection);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isHomePage, location.pathname]);

  const getLinkHref = (item: string) => {
    if (item === 'Portfolio') return '/portfolio';
    return isHomePage ? `#${item.toLowerCase()}` : `/#${item.toLowerCase()}`;
  };

  const getIsActive = (item: string) => {
    if (item === 'Portfolio') {
      return location.pathname === '/portfolio' || (isHomePage && activeSection === 'portfolio');
    }
    if (isHomePage) {
      return activeSection === item.toLowerCase();
    }
    return false;
  };

  const navItems = ['Home', 'AboutUs', 'Services', 'Process', 'Portfolio', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/50 dark:bg-black/50 backdrop-blur-md border-b border-gray-200/20 dark:border-white/10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link 
          to="/" 
          onClick={() => {
            if (isHomePage) {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
        >
          <img src={logo} alt="ORRO DIGITAL" className="h-15 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = getIsActive(item);
            return (
              <Link 
                key={item} 
                to={getLinkHref(item)} 
                onClick={() => {
                   if (isHomePage && item !== 'Portfolio') {
                     const id = item.toLowerCase();
                     const el = document.getElementById(id);
                     if (el) {
                       el.scrollIntoView({ behavior: 'smooth' });
                     }
                   }
                }}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  isActive 
                    ? 'text-brand-blue dark:text-brand-cyan' 
                    : 'text-gray-600 hover:text-brand-blue dark:text-gray-300 dark:hover:text-brand-cyan'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-brand-blue/10 dark:bg-brand-cyan/10 rounded-full -z-10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {item === 'AboutUs' ? 'About Us' : item}
              </Link>
            );
          })}
        </div>

        <div className="flex flex-1 md:flex-none justify-end items-center gap-4">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isDark ? (
                <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Sun className="w-5 h-5 text-brand-orange" />
                </motion.div>
              ) : (
                <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Moon className="w-5 h-5 text-brand-deep-blue" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
          <Link 
            to={getLinkHref('Contact')} 
            onClick={() => {
              if (isHomePage) {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-full text-white bg-gray-900 hover:bg-brand-blue dark:bg-white dark:text-gray-900 dark:hover:bg-brand-cyan transition-colors"
          >
            Get Started
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 right-0 bg-white dark:bg-black border-b border-gray-200 dark:border-white/10 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {navItems.map((item) => {
              const isActive = getIsActive(item);
              const label = item === 'AboutUs' ? 'About Us' : item;
              return (
                <Link 
                  key={item} 
                  to={getLinkHref(item)} 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    if (isHomePage && item !== 'Portfolio') {
                      const id = item.toLowerCase();
                      const el = document.getElementById(id);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`text-lg font-medium py-2 border-b border-gray-100 dark:border-white/5 transition-colors ${
                    isActive ? 'text-brand-blue dark:text-brand-cyan' : 'text-gray-900 dark:text-white'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
