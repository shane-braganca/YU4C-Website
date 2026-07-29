import { Menu, X, Flame, Home, Calendar, Users, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import logoImage from "figma:asset/YU4C.png";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 20);
      setIsExpanded(scrollPosition < 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-3">
      <div className="max-w-7xl mx-auto transition-all duration-500 ease-out">
        <div
          className={`relative mx-auto backdrop-blur-xl shadow-2xl transition-all duration-500 ease-out border ${
            isExpanded ? 'rounded-[2rem]' : 'rounded-full'
          } ${
            scrolled ? 'max-w-2xl' : 'max-w-5xl'
          }`}
          style={{
            background: scrolled
              ? 'rgba(255, 255, 255, 0.97)'
              : 'linear-gradient(135deg, rgba(255, 255, 255, 0.97), rgba(240, 244, 255, 0.97))',
            borderColor: scrolled ? '#6366F1' : 'rgba(99, 102, 241, 0.2)',
            boxShadow: scrolled
              ? '0 20px 40px -10px rgba(99, 102, 241, 0.2), 0 0 0 1px rgba(99, 102, 241, 0.1)'
              : '0 15px 30px -8px rgba(0, 0, 0, 0.08)'
          }}
        >
          <div className={`relative px-4 sm:px-5 transition-all duration-500 ${
            isExpanded ? 'py-2.5' : 'py-2'
          }`}>
            <div className="flex items-center justify-between gap-4">
              {/* Logo Section */}
              <div className="flex items-center gap-2 group cursor-pointer flex-shrink-0">
                <div className="relative">
                  <img
                    src={logoImage}
                    alt="YU4C Goa Logo"
                    className={`object-contain transition-all duration-500 ${
                      scrolled ? 'h-7 w-7' : 'h-8 w-8'
                    }`}
                  />
                  <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-md" style={{ background: 'rgba(99, 102, 241, 0.3)' }} />
                </div>
                <div className={`flex flex-col transition-all duration-500 ${
                  scrolled ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'
                }`}>
                  <span className="tracking-tight text-sm sm:text-base leading-tight" style={{ color: '#4F46E5' }}>
                    YU4C Goa
                  </span>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-1">
                {!scrolled ? (
                  <>
                    <a href="#about" className="relative px-3 py-1.5 text-sm text-gray-600 hover:text-[#4F46E5] transition-colors group rounded-full hover:bg-indigo-50">
                      About
                    </a>
                    <a href="#events" className="relative px-3 py-1.5 text-sm text-gray-600 hover:text-[#4F46E5] transition-colors group rounded-full hover:bg-indigo-50">
                      Events
                    </a>
                    <a href="#ministries" className="relative px-3 py-1.5 text-sm text-gray-600 hover:text-[#4F46E5] transition-colors group rounded-full hover:bg-indigo-50">
                      Ministries
                    </a>
                    <a href="#contact" className="relative px-3 py-1.5 text-sm text-gray-600 hover:text-[#4F46E5] transition-colors group rounded-full hover:bg-indigo-50">
                      Contact
                    </a>
                    <button className="relative px-4 py-1.5 text-white hover:shadow-lg hover:scale-105 transition-all duration-200 rounded-full overflow-hidden group ml-1" style={{ background: 'linear-gradient(to right, #4F46E5, #7C3AED)' }}>
                      <span className="relative z-10 flex items-center gap-1.5 text-sm">
                        <Flame className="w-3.5 h-3.5" />
                        Join Us
                      </span>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(to right, #7C3AED, #4F46E5)' }} />
                    </button>
                  </>
                ) : (
                  <>
                    <a href="#about" className="p-2 text-gray-600 hover:text-[#4F46E5] transition-colors rounded-full hover:bg-indigo-50 group" title="About">
                      <Home className="w-4 h-4" />
                    </a>
                    <a href="#events" className="p-2 text-gray-600 hover:text-[#4F46E5] transition-colors rounded-full hover:bg-indigo-50 group" title="Events">
                      <Calendar className="w-4 h-4" />
                    </a>
                    <a href="#ministries" className="p-2 text-gray-600 hover:text-[#4F46E5] transition-colors rounded-full hover:bg-indigo-50 group" title="Ministries">
                      <Users className="w-4 h-4" />
                    </a>
                    <a href="#contact" className="p-2 text-gray-600 hover:text-[#4F46E5] transition-colors rounded-full hover:bg-indigo-50 group" title="Contact">
                      <Mail className="w-4 h-4" />
                    </a>
                    <button className="relative p-2 text-white hover:shadow-lg hover:scale-110 transition-all duration-200 rounded-full overflow-hidden group ml-0.5" style={{ background: 'linear-gradient(to right, #4F46E5, #7C3AED)' }} title="Join Us">
                      <Flame className="w-4 h-4" />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(to right, #7C3AED, #4F46E5)' }} />
                    </button>
                  </>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-1.5 rounded-full hover:bg-indigo-50 transition-colors"
                style={{ color: '#4F46E5' }}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <div className="md:hidden pt-3 mt-3 border-t flex flex-col gap-1.5" style={{ borderColor: 'rgba(99, 102, 241, 0.2)' }}>
                <a href="#about" className="flex items-center gap-2.5 text-sm text-gray-600 hover:text-[#4F46E5] transition-colors py-2 px-3 rounded-xl hover:bg-indigo-50" onClick={() => setMobileMenuOpen(false)}>
                  <Home className="w-4 h-4" />
                  <span>About</span>
                </a>
                <a href="#events" className="flex items-center gap-2.5 text-sm text-gray-600 hover:text-[#4F46E5] transition-colors py-2 px-3 rounded-xl hover:bg-indigo-50" onClick={() => setMobileMenuOpen(false)}>
                  <Calendar className="w-4 h-4" />
                  <span>Events</span>
                </a>
                <a href="#ministries" className="flex items-center gap-2.5 text-sm text-gray-600 hover:text-[#4F46E5] transition-colors py-2 px-3 rounded-xl hover:bg-indigo-50" onClick={() => setMobileMenuOpen(false)}>
                  <Users className="w-4 h-4" />
                  <span>Ministries</span>
                </a>
                <a href="#contact" className="flex items-center gap-2.5 text-sm text-gray-600 hover:text-[#4F46E5] transition-colors py-2 px-3 rounded-xl hover:bg-indigo-50" onClick={() => setMobileMenuOpen(false)}>
                  <Mail className="w-4 h-4" />
                  <span>Contact</span>
                </a>
                <button className="px-4 py-2 text-sm text-white hover:shadow-lg transition-all duration-200 rounded-full w-full flex items-center justify-center gap-2 mt-1.5" style={{ background: 'linear-gradient(to right, #4F46E5, #7C3AED)' }}>
                  <Flame className="w-4 h-4" />
                  Join Us
                </button>
              </div>
            )}
          </div>

          {/* Activity Indicator */}
          <div className={`absolute -bottom-0.5 left-1/2 -translate-x-1/2 transition-all duration-500 ${
            scrolled ? 'w-12 opacity-100' : 'w-0 opacity-0'
          }`}>
            <div className="h-0.5 rounded-full" style={{ background: 'linear-gradient(to right, #4F46E5, #F59E0B)' }} />
          </div>
        </div>
      </div>
    </nav>
  );
}
