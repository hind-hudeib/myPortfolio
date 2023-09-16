import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "../assets/styles/home.css";
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeMobileMenu = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className="bg-[#797888d8] p-4 relative fill">
      <div className="container mx-auto flex flex-row items-center">
        {/* Logo on the Left */}
        <Link to="/">
          <img src={logo} alt="Logo Alt Text" className="h-12" />
        </Link>
        <div className="container mx-auto flex flex-row justify-end sm:justify-end md:justify-end lg:justify-between items-center">
          {/* Navigation Links in the Center (Large Screens) */}
          <ul className="lg:flex lg:flex-row list-none  mx-auto hidden">
            <li>
              <Link to="/" className="text-white hover:text-gray-300 m-4 nave-link rounded-lg">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="text-white hover:text-gray-300 m-4 nave-link rounded-lg"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-gray-300 m-4 nave-link rounded-lg">
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white hover:text-gray-300 m-4 nave-link rounded-lg"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Button on the Right (Large Screens) */}
          <button className="button NavbarBtn hidden lg:block">
            <span className="button-content NavBtn-content">Let's Talk</span>
          </button>

          {/* Burger Menu Icon for Small Screens (Small Screens) */}
          <div className="lg:hidden">
        <div
          className={`cursor-pointer mx-4 ${isNavOpen ? "open" : ""}`}
          onClick={toggleMobileMenu}
          style={{
            transform: isNavOpen ? "rotate(90deg)" : "rotate(0deg)", // Rotate when clicked
            transition: "transform 0.3s ease-in-out", // Add transition
          }}
        >
          <div className="bar h-1 w-6 m-1 rounded-lg"></div>
          <div className="bar h-1 w-6 m-1 rounded-lg"></div>
          <div className="bar h-1 w-6 m-1 rounded-lg"></div>
        </div>
      </div>

          {/* "Let's Talk" Button for Small Screens (Small Screens) */}
          <button className="button NavbarBtn lg:hidden">
            <span className="button-content NavBtn-content">Let's Talk</span>
          </button>

          {/* Mobile Menu (Small Screens) */}
          <div
            className={`${
              isNavOpen
                ? "block absolute top-full left-0 w-full bg-[#797888d8] transform 0.6s ease-in-out"
                : "hidden"
            } lg:hidden`}
            style={{
              maxHeight: isNavOpen ? "1000px" : "0", // Add max height style
              overflow: "hidden", // Hide overflow when closed
              transformOrigin: "top", // Set transform origin to top
            }}
          >
            <ul className="list-none space-y-4 p-4">
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-gray-300 nave-link rounded-lg"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-white hover:text-gray-300 nave-link rounded-lg"
                  onClick={closeMobileMenu}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white hover:text-gray-300 nave-link rounded-lg"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white hover:text-gray-300 nave-link rounded-lg"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
