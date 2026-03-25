import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router";
import { useState } from "react";
import { HiX } from "react-icons/hi";
import Logo from "~/assests/adexhub-logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="bg-gray-200 px-4 md:px-10 lg:px-16 py-4 z-50 shadow-md fixed w-full">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-1">
            <div>
              <a href="#home">
                <img src={Logo} alt="Logo" className="w-12 h-12" />
              </a>
            </div>
            <div>
              <a href="#home">
                <h1 className="uppercase font-bold text-xl text-[#151c2b]">Adex<span className="text-[#1ebb70]">hub</span></h1>
              </a>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 items-center">
            <a href="#services" className="text-sm font-medium text-[#6a7181] hover:text-[#1ebb70]">
              Services
            </a>
            <a href="#faq" className="text-sm font-medium text-[#6a7181] hover:text-[#1ebb70]">
              FAQ
            </a>
            <a href="#register" className="text-sm font-medium text-[#6a7181] hover:text-[#1ebb70]">
              How It Works
            </a>
            <a href="#contact" className="text-sm font-medium text-[#6a7181] hover:text-[#1ebb70]">
              Contact
            </a>
          </div>

          {/* Buttons */}
          <div className="hidden lg:flex space-x-2 items-center">
            <NavLink to="/login" className="text-md text-[#151c28] hover:bg-amber-500 hover:shadow-md py-2 px-6 rounded-xl transform transition duration-300">
              Login
            </NavLink>
            <NavLink to="/signup" className="text-md text-white bg-[#1ebb70] shadow-md py-2 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:translate-x-1">
              Get Started
            </NavLink>
          </div>

          {/* Menu-icon */}
          <div className="lg:hidden">
            <button onClick={() => setOpen(true)}>
              <FaBars className="text-xl" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Modal */}
      {open && (
        <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/80 z-50 flex justify-center items-start pt-20">
          
          {/* Close button */}
          <button onClick={() => setOpen(false)} className="absolute top-5 right-5 text-white text-2xl">
            <HiX />
          </button>

          {/* Menu box */}
          <div className="bg-white w-[90%] max-w-md rounded-xl p-6 space-y-5 transform transition duration-600">
            <a href="#home" onClick={() => setOpen(false)} className="block text-sm font-medium text-[#1ebb70]">
              Home
            </a>
            <a href="#services" onClick={() => setOpen(false)} className="block text-sm font-medium text-[#6a7181] hover:text-[#1ebb70]">
              Services
            </a>
            <a href="#faq" onClick={() => setOpen(false)} className="block text-sm font-medium text-[#6a7181] hover:text-[#1ebb70]">
              FAQ
            </a>
            <a href="#register" onClick={() => setOpen(false)} className="block text-sm font-medium text-[#6a7181] hover:text-[#1ebb70]">
              How It Works
            </a>
            <a href="#contact" onClick={() => setOpen(false)} className="block text-sm font-medium text-[#6a7181] hover:text-[#1ebb70]">
              Contact
            </a>
            <div className="flex justify-between items-center mt-3">
              <NavLink to="/login" className="text-md text-[#151c28] hover:bg-amber-500 hover:shadow-md py-2 px-6 rounded-xl transform transition duration-300">
                Login
              </NavLink>
              <NavLink to="/signup" className="text-md text-white bg-[#1ebb70] shadow-md py-2 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:translate-x-1">
                Get Started
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
}