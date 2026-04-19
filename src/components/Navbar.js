"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/#services' },
  { name: 'Infrastructure', href: '/#infrastructure' },
  { name: 'Doctor', href: '/#doctor' },
  { name: 'Blog', href: '/blog' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass py-2 shadow-premium' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative w-16 h-16 overflow-hidden">
            <img 
              src="/assets/logo_final.png" 
              alt="Ahana Gynaecare & IVF Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-teal-700 transition-colors duration-200 relative group"
            >
              {link.name}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Book Appointment Button */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:06746811111"
            className="flex items-center gap-2 text-sm font-medium text-teal-700 hover:text-teal-900 transition-colors"
          >
            <Phone className="w-4 h-4" />
            0674 681 1111
          </a>
          <a
            href="/#contact"
            className="bg-teal-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-teal-800 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-1"
          >
            Book Appointment →
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-gray-700 p-2"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="lg:hidden glass border-t border-teal-100 mt-2 px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-700 font-medium py-2 border-b border-gray-100 hover:text-teal-700"
              onClick={() => setIsMobileOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/#contact"
            className="bg-teal-700 text-white px-5 py-3 rounded-full text-sm font-semibold text-center mt-2 hover:bg-teal-800 transition-colors"
            onClick={() => setIsMobileOpen(false)}
          >
            Book Appointment
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
