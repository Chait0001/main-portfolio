import { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      {/* Pill-shaped navbar */}
      <div
        className={`flex items-center gap-1 px-2 py-1.5 rounded-full border transition-all duration-500 ${
          isScrolled
            ? 'bg-white/[0.08] backdrop-blur-xl border-white/[0.12] shadow-lg shadow-black/30'
            : 'bg-white/[0.05] backdrop-blur-md border-white/[0.08]'
        }`}
      >
        {/* Profile photo */}
        <div
          className="w-9 h-9 rounded-full overflow-hidden border-2 border-white/[0.15] cursor-pointer flex-shrink-0 hover:border-white/30 transition-all duration-300"
          onClick={() => scrollToSection('home')}
        >
          <img
            src="/images/profile-photo.png"
            alt="Chaitanya Kumar"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://github.com/Chait0001.png";
            }}
          />
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-0.5 ml-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-2 text-sm rounded-full cursor-pointer transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-white bg-white/[0.08]'
                  : 'text-white/50 hover:text-white/80 hover:bg-white/[0.04]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden ml-2">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white/50 hover:text-white/80 transition-colors p-2"
          >
            {isMobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] rounded-2xl py-3 px-2 md:hidden shadow-xl shadow-black/30 min-w-[200px]">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left px-4 py-2.5 text-sm rounded-xl transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-white bg-white/[0.08]'
                    : 'text-white/50 hover:text-white/80 hover:bg-white/[0.04]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
