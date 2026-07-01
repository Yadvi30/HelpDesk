import { NavLink } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Complaint", path: "/complaint" },
  { name: "Track", path: "/track" },
  { name: "Join Us", path: "/join" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          HelpDesk
        </h1>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex gap-4">
          <NavLink
            to="/login"
            className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition"
          >
            Login
          </NavLink>

          <NavLink
            to="/register"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Register
          </NavLink>

        </div>

        {/* Mobile Menu Button */}
            <button
            className="md:hidden text-3xl text-blue-600"
            onClick={() => setIsOpen(!isOpen)}
            >
            {isOpen ? <HiX /> : <HiMenu />}   {/* Conditional Rendering*/}
            </button>
      </nav>
        
        {isOpen && (
          <div className="md:hidden bg-white shadow-md px-6 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-gray-700 hover:text-blue-600"
              >
                {link.name}
              </NavLink>
            ))}

            <div className="mt-4 flex flex-col gap-2">
              <NavLink
                to="/login"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 border border-blue-600 rounded-lg text-blue-600 text-center"
              >
                Login
              </NavLink>

              <NavLink
                to="/register"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg text-center"
              >
                Register
              </NavLink>
            </div>
          </div>
        )}
        
    </header>
  );
};

export default Navbar;