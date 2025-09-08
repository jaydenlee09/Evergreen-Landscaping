import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import everGreenCombinedLogo from "@/assets/images/evergreen-combined-logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed w-full z-50 px-4 sm:px-6 md:px-8 pt-3">
      <div 
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-sm shadow-lg py-0.5' 
            : 'bg-white/90 backdrop-blur-sm shadow-md py-1'
        }`}
      >
        <div className="px-3 sm:px-5 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={everGreenCombinedLogo} 
              alt="EverGreen Landscaping Logo" 
              className="h-16 transform -translate-y-0.5" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-body text-xs ${
                  location.pathname === link.path
                    ? 'text-forest-700 font-medium' 
                    : 'text-stone-800 hover:text-forest-600'
                } transition-colors duration-300`}
              >
                {link.name}
              </Link>
            ))}
            <Button
              asChild
              variant="default"
              className="bg-forest-600 text-white hover:bg-forest-700 text-xs py-0.5"
              size="sm"
            >
              <Link to="/contact">Contact</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className="text-stone-800">
              {isMobileMenuOpen ? '×' : '☰'}
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white rounded-2xl shadow-lg mt-2 overflow-hidden">
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-6 py-3 ${
                    location.pathname === link.path
                      ? 'text-forest-700 font-medium'
                      : 'text-stone-800 hover:text-forest-600'
                  }`}
                  onClick={closeMobileMenu}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-4 py-3">
                <Button 
                  asChild
                  className="w-full bg-forest-600 text-white hover:bg-forest-700"
                >
                  <Link to="/contact" onClick={closeMobileMenu}>Contact</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
