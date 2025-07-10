"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaPhone, FaTimes, FaBars } from 'react-icons/fa';
import Image from 'next/image';
import logo from '@/public/logo.png'; // Replace with your actual logo path

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/services", text: "Services" },
    { href: "/contact", text: "Contact" },
  ];

  return (
    <header className="relative z-50 py-1 px-4 sm:px-6 lg:px-8 bg-gray-900/80 backdrop-blur-sm border-b border-blue-900">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo with Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="flex items-center">
            <div className="w-30 h-30 relative">
              <Image 
                src={logo} 
                alt="Jaan Bangla Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              href={link.href} 
              key={link.href}
              className="text-blue-300 hover:text-white transition-colors duration-300 relative group"
            >
              <span>{link.text}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:hidden"
          >
            <button 
              onClick={toggleSidebar}
              className="text-blue-300 hover:text-white transition-colors duration-300 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </motion.div>

          {/* Mobile/Phone Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              href="tel:9874431317" 
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              passHref
            >
              <FaPhone />
              <span className="hidden sm:inline">Call Us</span>
            </Link>
          </motion.div>
        </div>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/70 z-40 md:hidden"
                onClick={closeSidebar}
              />
              
              {/* Sidebar */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="fixed top-0 right-0 h-full w-64 bg-gray-900/95 backdrop-blur-lg z-50 shadow-2xl border-l border-blue-900/50"
              >
                <div className="flex flex-col h-full p-6">
                  {/* Close Button */}
                  <div className="flex justify-end mb-8">
                    <button 
                      onClick={closeSidebar}
                      className="text-blue-300 hover:text-white transition-colors duration-300 p-2"
                      aria-label="Close menu"
                    >
                      <FaTimes size={24} />
                    </button>
                  </div>

                  {/* Mobile Navigation Links */}
                  <nav className="flex-1 flex flex-col space-y-6">
                    {navLinks.map((link) => (
                      <Link 
                        href={link.href} 
                        key={link.href}
                        onClick={closeSidebar}
                        className="text-blue-300 hover:text-white transition-colors duration-300 text-xl py-2 border-b border-blue-900/50"
                      >
                        {link.text}
                      </Link>
                    ))}
                  </nav>

                  {/* Contact Info in Sidebar */}
                  <div className="mt-auto pt-6 border-t border-blue-900/50">
                    <Link 
                      href="tel:9874431317" 
                      onClick={closeSidebar}
                      className="flex items-center space-x-3 text-blue-300 hover:text-white transition-colors duration-300 py-3"
                    >
                      <FaPhone />
                      <span>9874431317</span>
                    </Link>
                    <p className="text-blue-400 mt-4 text-sm">
                      South Kumrakhali Masjid bari Road,<br />
                      Kamalgazi, Kolkata - 700103
                    </p>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}