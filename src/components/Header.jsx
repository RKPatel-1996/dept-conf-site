import { useState } from "react";
import { navLinks } from "../data/navigation";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center">
            <img
              src="https://gujaratuniversity.ac.in/images/logo-1.png"
              alt="Gujarat University Logo"
              className="h-10 w-10 mr-3 bg-white p-1 rounded-full"
            />
            <div>
              <h1 className="text-xl md:text-2xl font-bold font-lora">
                Advances in Biological sciences
              </h1>
              <p className="text-xs md:text-sm text-gray-300">
                International Conference 2026
              </p>
            </div>
          </div>

          {/* Desktop Navigation & Theme Switcher */}
          <div className="hidden lg:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-accent transition duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <ThemeSwitcher /> {/* Add the switcher here */}
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="lg:hidden flex items-center space-x-4">
            <ThemeSwitcher /> {/* Also add switcher for mobile view */}
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } lg:hidden bg-white text-gray-800`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="block py-3 px-6 text-sm hover:bg-slate-100 transition duration-300"
          >
            {link.name}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
