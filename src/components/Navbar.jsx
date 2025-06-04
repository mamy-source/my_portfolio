import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Briefcase, Layers, MessageCircle, Mail } from "lucide-react";

export default function MainMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Lien + id section mifanaraka
  const links = [
    { to: "home", label: "Accueil", icon: Home },
    { to: "projects", label: "Projets Recent", icon: Layers },
    { to: "about", label: "A propos", icon: MessageCircle },
    { to: "skills", label: "Skills Set", icon: Briefcase },
    { to: "contact", label: "Contact", icon: Mail },
  ];

  // Gestion scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50); // navbar transparent rehefa mi-scroll

      const sections = links.map((link) =>
        document.getElementById(link.to)
      );

      for (let sec of sections) {
        if (sec) {
          const rect = sec.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sec.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  return (
    <>
      {/* Main navbar */}
      <header
        className={`w-full fixed top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-lg bg-black/30 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-10">
          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-extrabold bg-gradient-to-r from-pink-400 via-yellow-300 to-teal-400 bg-clip-text text-transparent tracking-tight hover:scale-105 transition-transform"
          >
            Mamitiana ✨
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-8 font-medium text-white">
              {links.map(({ to, label, icon: Icon }) => (
                <li key={to} className="flex items-center space-x-2">
                  <a
                    href={`#${to}`}
                    className={`flex items-center gap-2 transition-colors duration-300 ${
                      activeSection === to
                        ? "text-purple-500 border-b-2 border-purple-500 pb-1"
                        : "hover:text-pink-300"
                    }`}
                  >
                    <Icon size={18} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 80 }}
            className="fixed top-0 left-0 w-3/4 max-w-sm h-full z-40 bg-gradient-to-b from-indigo-700 to-purple-800 shadow-xl lg:hidden"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">🌟 Menu</h2>
                <button
                  type="button"
                  className="text-white"
                  onClick={() => setIsOpen(false)}
                >
                  <X size={28} />
                </button>
              </div>

              <nav className="mt-12 flex-1">
                <ul className="flex flex-col space-y-6 text-lg font-medium text-white">
                  {links.map(({ to, label, icon: Icon }) => (
                    <li key={to}>
                      <a
                        href={`#${to}`}
                        className={`flex items-center gap-3 transition-colors duration-300 ${
                          activeSection === to
                            ? "text-yellow-300 font-semibold"
                            : "hover:text-pink-300"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <Icon size={20} />
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-auto text-center text-sm text-white/70">
                © {new Date().getFullYear()} Mamitiana 🚀
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
