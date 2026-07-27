import { Menu, X, Flame, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import logoImage from "figma:asset/dd195dc39807305896ae5ceac3096e4eaf3a3438.png";

const links = [
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  {
    label: "Community",
    children: [
      { to: "/ministries", label: "Ministries" },
      { to: "/prayer-groups", label: "Prayer Groups" },
      { to: "/retreats", label: "Retreats" },
    ],
  },
  { to: "/contact", label: "Contact" },
];

function DropdownMenu({ items, scrolled, onClose }: { items: { to: string; label: string }[]; scrolled: boolean; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 4, scale: 0.97 }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-white rounded-2xl shadow-2xl border border-blue-100 overflow-hidden z-50"
    >
      {/* Arrow */}
      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-blue-100 rotate-45" />
      {items.map((item, i) => (
        <NavLink
          key={item.to}
          to={item.to}
          onClick={onClose}
          className={({ isActive }) =>
            `flex items-center gap-2 px-5 py-3 text-sm font-medium transition-colors ${
              isActive ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
            } ${i > 0 ? "border-t border-gray-50" : ""}`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </motion.div>
  );
}

export function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? window.scrollY / max : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const openDropdown = (label: string) => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setActiveDropdown(label);
  };
  const closeDropdown = () => {
    dropdownTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Scroll progress bar */}
        <motion.div
          className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 via-amber-400 to-blue-500 z-50 origin-left"
          style={{ scaleX: scrollProgress, transformOrigin: "0% 50%" }}
        />

        {/* Pill navbar container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <motion.div
            className={`flex items-center justify-between px-4 sm:px-6 transition-all duration-500 ${
              scrolled
                ? "h-14 bg-white/90 backdrop-blur-xl shadow-xl shadow-blue-950/10 border border-white/60 rounded-2xl"
                : "h-16 bg-transparent"
            }`}
          >
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <motion.div
                whileHover={{ rotate: [0, -8, 8, 0] }}
                transition={{ duration: 0.5 }}
                className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden transition-all ${
                  scrolled ? "bg-blue-50" : "bg-white/10 backdrop-blur-sm"
                }`}
              >
                <img src={logoImage} alt="YU4C" className="w-7 h-7 object-contain" />
              </motion.div>
              <div className="flex flex-col leading-none">
                <span className={`font-extrabold text-base tracking-tight transition-colors ${scrolled ? "text-blue-700" : "text-white"}`}>
                  YU4C Goa
                </span>
                <span className={`text-[10px] font-medium transition-colors hidden sm:block ${scrolled ? "text-blue-400" : "text-blue-200/80"}`}>
                  Youth United for Christ
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-0.5">
              {links.map((link) => {
                if ("children" in link) {
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={() => openDropdown(link.label)}
                      onMouseLeave={closeDropdown}
                    >
                      <button
                        className={`flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                          scrolled ? "text-gray-700 hover:bg-blue-50 hover:text-blue-700" : "text-white/90 hover:bg-white/15 hover:text-white"
                        }`}
                      >
                        {link.label}
                        <motion.span
                          animate={{ rotate: activeDropdown === link.label ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-3.5 h-3.5" />
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {activeDropdown === link.label && (
                          <DropdownMenu
                            items={link.children}
                            scrolled={scrolled}
                            onClose={() => setActiveDropdown(null)}
                          />
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
                  <NavLink
                    key={link.to}
                    to={link.to!}
                    className={({ isActive }) =>
                      `relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? scrolled
                            ? "text-blue-700 bg-blue-50"
                            : "text-white bg-white/15"
                          : scrolled
                          ? "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                          : "text-white/90 hover:bg-white/15 hover:text-white"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.label}
                        {isActive && (
                          <motion.div
                            layoutId="nav-indicator"
                            className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full ${scrolled ? "bg-blue-500" : "bg-amber-400"}`}
                            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                );
              })}

              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="ml-3">
                <Link
                  to="/join"
                  className="relative overflow-hidden px-5 py-2 bg-gradient-to-r from-amber-500 to-amber-400 text-white rounded-xl text-sm font-bold flex items-center gap-2 shadow-lg shadow-amber-500/30 transition-shadow hover:shadow-amber-500/50"
                >
                  <Flame className="w-4 h-4" />
                  Join Us
                  {/* Shimmer effect */}
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 }}
                  />
                </Link>
              </motion.div>
            </div>

            {/* Mobile toggle */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                scrolled ? "text-blue-700 bg-blue-50 hover:bg-blue-100" : "text-white bg-white/15 hover:bg-white/25"
              }`}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X className="w-5 h-5" />
                  </motion.span>
                ) : (
                  <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu className="w-5 h-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden mx-4 mt-2 bg-white rounded-2xl shadow-2xl border border-blue-100 overflow-hidden"
            >
              {links.map((link, i) => {
                if ("children" in link) {
                  return (
                    <div key={link.label}>
                      <div className={`px-5 py-2.5 text-xs font-bold text-blue-400 uppercase tracking-widest ${i > 0 ? "border-t border-gray-50" : ""}`}>
                        {link.label}
                      </div>
                      {link.children.map((child) => (
                        <NavLink
                          key={child.to}
                          to={child.to}
                          onClick={() => setMobileOpen(false)}
                          className={({ isActive }) =>
                            `flex items-center gap-3 px-7 py-3 text-sm font-medium transition-colors ${
                              isActive ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-50"
                            }`
                          }
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  );
                }
                return (
                  <NavLink
                    key={link.to}
                    to={link.to!}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center px-5 py-3.5 text-sm font-medium transition-colors border-t border-gray-50 ${
                        isActive ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-50"
                      } ${i === 0 ? "border-t-0" : ""}`
                    }
                  >
                    {link.label}
                  </NavLink>
                );
              })}
              <div className="px-4 py-3 border-t border-gray-100">
                <Link
                  to="/join"
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-amber-500 to-amber-400 text-white rounded-xl text-sm font-bold shadow-lg shadow-amber-200"
                >
                  <Flame className="w-4 h-4" />
                  Join YU4C Goa
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
