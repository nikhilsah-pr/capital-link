import React, { useState } from 'react';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Landmark, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const navLinks = [
    { name: 'HOME', to: 'home' },
    { name: 'ABOUT US', to: 'about' },
    { name: 'SERVICES', to: 'services' },
    { name: 'INDUSTRIES', to: 'industries' },
    { name: 'PARTNERS', to: 'partners' },
    { name: 'CAREERS', url: '/careers' },
    { name: 'CONTACT US', to: 'contact' },
  ];

  const handleScrollNav = (targetId) => {
    setIsMobileMenuOpen(false);
    if (!isHomePage) {
      navigate('/');
      setTimeout(() => {
        try {
          scroller.scrollTo(targetId, {
            smooth: true,
            offset: -70,
            duration: 500,
          });
        } catch {
          // fallback if target not immediately ready
        }
      }, 250);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white shadow-sm py-3 sm:py-4">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center">
            {isHomePage ? (
              <ScrollLink to="home" smooth={true} offset={-70} duration={500} className="flex items-center cursor-pointer z-50">
                <img src="/logo.png" alt="CapitalLinks Logo" className="h-11 sm:h-13 md:h-14 w-auto object-contain mix-blend-multiply" />
              </ScrollLink>
            ) : (
              <RouterLink to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center cursor-pointer z-50">
                <img src="/logo.png" alt="CapitalLinks Logo" className="h-11 sm:h-13 md:h-14 w-auto object-contain mix-blend-multiply" />
              </RouterLink>
            )}
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-7">
            <div className="flex items-center space-x-7">
              {navLinks.map((link) => {
                if (link.action) {
                  return (
                    <button
                      key={link.name}
                      onClick={link.action}
                      className="cursor-pointer text-[13px] font-bold text-[#051124] hover:text-[#D4AF37] transition-colors relative group"
                    >
                      {link.name}
                      <span className="absolute -bottom-[8px] left-0 w-0 h-[3px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full rounded-t-sm"></span>
                    </button>
                  );
                }

                if (link.url) {
                  const isActive = location.pathname === link.url;
                  return (
                    <RouterLink
                      key={link.name}
                      to={link.url}
                      onClick={() => window.scrollTo(0, 0)}
                      className={`cursor-pointer text-[13px] font-bold transition-colors relative group ${
                        isActive ? 'text-[#073693]' : 'text-[#051124] hover:text-[#D4AF37]'
                      }`}
                    >
                      {link.name}
                      {isActive ? (
                        <span className="absolute -bottom-[8px] left-0 w-full h-[3px] bg-[#073693] transition-all duration-300 rounded-t-sm"></span>
                      ) : (
                        <span className="absolute -bottom-[8px] left-0 w-0 h-[3px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full rounded-t-sm"></span>
                      )}
                    </RouterLink>
                  );
                }

                if (isHomePage) {
                  return (
                    <ScrollLink
                      key={link.name}
                      to={link.to}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="cursor-pointer text-[13px] font-bold text-[#051124] hover:text-[#D4AF37] transition-colors relative group"
                    >
                      {link.name}
                      {link.name === 'HOME' ? (
                        <span className="absolute -bottom-[8px] left-0 w-full h-[3px] bg-[#D4AF37] transition-all duration-300 rounded-t-sm"></span>
                      ) : (
                        <span className="absolute -bottom-[8px] left-0 w-0 h-[3px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full rounded-t-sm"></span>
                      )}
                    </ScrollLink>
                  );
                }

                return (
                  <button
                    key={link.name}
                    onClick={() => handleScrollNav(link.to)}
                    className="cursor-pointer text-[13px] font-bold text-[#051124] hover:text-[#D4AF37] transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-[8px] left-0 w-0 h-[3px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full rounded-t-sm"></span>
                  </button>
                );
              })}
            </div>
            
            <div className="pl-4">
              {isHomePage ? (
                <ScrollLink
                  to="contact"
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer bg-[#D4AF37] text-[#051124] px-6 py-2.5 rounded-md font-poppins font-bold flex items-center gap-2 hover:bg-[#F1D570] transition-colors duration-300 text-[13px] tracking-wide"
                >
                  GET STARTED <ArrowRight className="w-4 h-4" />
                </ScrollLink>
              ) : (
                <button
                  onClick={() => handleScrollNav('contact')}
                  className="cursor-pointer bg-[#D4AF37] text-[#051124] px-6 py-2.5 rounded-md font-poppins font-bold flex items-center gap-2 hover:bg-[#F1D570] transition-colors duration-300 text-[13px] tracking-wide"
                >
                  GET STARTED <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-[#051124]" />
            ) : (
              <Menu className="h-6 w-6 text-[#051124]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-40 flex flex-col justify-center items-center transition-transform duration-300 ease-in-out translate-x-0 overflow-y-auto py-24">
          <div className="flex flex-col items-center space-y-6 w-full px-6 my-auto min-h-max">
            {navLinks.map((link) => {
              if (link.action) {
                return (
                  <button
                    key={link.name}
                    onClick={link.action}
                    className="text-2xl font-poppins font-bold text-[#051124] hover:text-[#D4AF37] transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                );
              }

              if (link.url) {
                const isActive = location.pathname === link.url;
                return (
                  <RouterLink
                    key={link.name}
                    to={link.url}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      window.scrollTo(0, 0);
                    }}
                    className={`text-2xl font-poppins font-bold transition-colors ${
                      isActive ? 'text-[#073693]' : 'text-[#051124] hover:text-[#D4AF37]'
                    }`}
                  >
                    {link.name}
                  </RouterLink>
                );
              }

              if (isHomePage) {
                return (
                  <ScrollLink
                    key={link.name}
                    to={link.to}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-poppins font-bold text-[#051124] hover:text-[#D4AF37] transition-colors cursor-pointer"
                  >
                    {link.name}
                  </ScrollLink>
                );
              }

              return (
                <button
                  key={link.name}
                  onClick={() => handleScrollNav(link.to)}
                  className="text-2xl font-poppins font-bold text-[#051124] hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  {link.name}
                </button>
              );
            })}
            <div className="w-full h-px bg-slate-200 my-4"></div>
            {isHomePage ? (
              <ScrollLink
                to="contact"
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsMobileMenuOpen(false)}
                className="cursor-pointer bg-[#D4AF37] text-[#051124] w-full max-w-[250px] py-4 rounded-md font-poppins font-bold flex justify-center items-center gap-2 hover:bg-[#F1D570] transition-colors duration-300 text-[15px] tracking-wide"
              >
                GET STARTED <ArrowRight className="w-5 h-5" />
              </ScrollLink>
            ) : (
              <button
                onClick={() => handleScrollNav('contact')}
                className="cursor-pointer bg-[#D4AF37] text-[#051124] w-full max-w-[250px] py-4 rounded-md font-poppins font-bold flex justify-center items-center gap-2 hover:bg-[#F1D570] transition-colors duration-300 text-[15px] tracking-wide"
              >
                GET STARTED <ArrowRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
