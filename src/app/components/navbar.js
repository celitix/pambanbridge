"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about-pamban-bridge' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Getting There', path: '/getting-there' },
    { name: 'Blog', path: '/blog' }
    
  ];

   const isActive = (path) => {
    // Exact match for home page
    if (path === '/' && pathname === '/') return true;
    
    // For other pages, check if pathname starts with the path
    if (path !== '/' && pathname.startsWith(path)) return true;
    
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 max-w-6xl mx-auto p-4">
      {/* Main Navbar Capsule */}
      <div className=" bg-white rounded-full px-6 py-4 shadow-lg border border-2 border-black/20">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-teal-600 font-bold text-xl hover:opacity-80 transition-opacity">
           Pamban Bridge 
          </Link>

          {/* Desktop Navigation Items */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className={`text-black transition-all duration-300 hover:scale-105 hover:text-white   ${
                  isActive(item.path) ? 'bg-teal-600 text-white px-4 py-2 rounded-full font-semibold' : 'hover:bg-teal-400 px-6 py-2 rounded-full'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-teal-600 text-2xl focus:outline-none transition-transform duration-300 hover:scale-110 "
          >
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Rectangular Box Below */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4  bg-white rounded-2xl px-6 py-6 shadow-lg border border-white/30 animate-fadeIn">
          <div className="flex flex-col items-center space-y-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-black text-lg transition-all duration-300 hover:scale-105 w-full text-center py-3 rounded-full ${
                  isActive(item.path) ? 'bg-teal-600 text-white font-semibold' : 'hover:bg-teal-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
}