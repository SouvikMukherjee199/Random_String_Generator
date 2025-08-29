import React, { useState } from 'react';
import {
  LockIcon,
  MenuIcon,
  XIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Large screen navigation
  const DesktopNav = () => (
    <nav className="hidden lg:flex space-x-4">
      <Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link>
      <Link to="/About" className="hover:text-indigo-400 transition-colors">About</Link>
      <Link to="/Contact" className="hover:text-indigo-400 transition-colors">Contact</Link>
    </nav>
  );

  // Mobile screen navigation
  const MobileNav = () => (
    <div className={`fixed top-0 left-0 w-full bg-gray-800 text-gray-50 p-4 pt-5 z-50 transition-transform transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Menu</h2>
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="text-gray-400 hover:text-white"
        >
          <XIcon className="w-6 h-6" />
        </button>
      </div>
      <nav className="flex flex-col space-y-3 text-sm">
        <Link to="/" className="hover:text-indigo-400" onClick={() => setMobileMenuOpen(false)}>Home</Link>
        <Link to="/About" className="hover:text-indigo-400" onClick={() => setMobileMenuOpen(false)}>About</Link>
        <Link to="/Contact" className="hover:text-indigo-400" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
      </nav>
    </div>
  );

  // Hamburger menu button
  const HamburgerMenu = () => (
    <button
      onClick={() => setMobileMenuOpen(true)}
      className="lg:hidden text-gray-50 focus:outline-none"
    >
      <MenuIcon className="h-6 w-6" />
    </button>
  );

  return (
    <header className="bg-gray-800 shadow-md relative z-40">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <LockIcon className="h-6 w-6 text-indigo-400" />
          <h1 className="text-xl font-bold tracking-tight text-gray-50">SecurePass</h1>
        </div>

        <DesktopNav />
        <HamburgerMenu />
        <MobileNav />
      </div>
    </header>
  );
};

export default Navbar;
