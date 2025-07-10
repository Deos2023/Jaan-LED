"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-gray-900/80 backdrop-blur-sm border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              JAAN 
            </h3>
            <p className="text-blue-100 mb-4">
              Premium LED wall and audiovisual solutions in Kolkata since 2015.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-blue-300 hover:text-white transition-colors duration-300">
                <FaFacebook className="text-xl" />
              </Link>
              <Link href="#" className="text-blue-300 hover:text-white transition-colors duration-300">
                <FaInstagram className="text-xl" />
              </Link>
              <Link href="#" className="text-blue-300 hover:text-white transition-colors duration-300">
                <FaYoutube className="text-xl" />
              </Link>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-blue-300 hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-300 hover:text-white transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-300 hover:text-white transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-blue-300 hover:text-white transition-colors duration-300">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-300 hover:text-white transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4 text-white">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services#led-wall" className="text-blue-300 hover:text-white transition-colors duration-300">
                  LED Wall Rental
                </Link>
              </li>
              <li>
                <Link href="/services#photography" className="text-blue-300 hover:text-white transition-colors duration-300">
                  Photography
                </Link>
              </li>
              <li>
                <Link href="/services#led-tv" className="text-blue-300 hover:text-white transition-colors duration-300">
                  LED TV Rental
                </Link>
              </li>
              <li>
                <Link href="/services#video" className="text-blue-300 hover:text-white transition-colors duration-300">
                  Video Production
                </Link>
              </li>
              <li>
                <Link href="/services#projector" className="text-blue-300 hover:text-white transition-colors duration-300">
                  Projector Rental
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-start space-x-3">
                <FaPhone className="mt-1 text-blue-400" />
                <Link href="tel:9874431317" className="hover:text-white transition-colors duration-300">
                  9874431317
                </Link>
              </li>
              <li className="flex items-start space-x-3">
                <FaWhatsapp className="mt-1 text-blue-400" />
                <Link href="https://wa.me/919874431317" target="_blank" className="hover:text-white transition-colors duration-300">
                  Chat on WhatsApp
                </Link>
              </li>
              <li className="flex items-start space-x-3">
                <FaEnvelope className="mt-1 text-blue-400" />
                <Link href="mailto:jaankolkata@gmail.com" className="hover:text-white transition-colors duration-300">
                  jaankolkata@gmail.com
                </Link>
              </li>
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="mt-1 text-blue-400" />
                <span>
                  South Kumrakhali Masjid bari Road,<br />
                  Kamalgazi, Kolkata - 700103
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-900 mt-12 pt-8 text-center text-blue-300">
          <p>© {currentYear} Jaan . All rights reserved. Website Design & Maintained by Digital Exposure Online Services .</p>
        </div>
      </div>
    </footer>
  );
}