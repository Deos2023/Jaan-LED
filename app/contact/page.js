"use client"

import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa';
import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const whatsappMessage = `
*New Message from Jaan  Website:*
      
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Service Needed:* ${formData.service}
      
*Message:*
${formData.message}
    `;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/919874431317?text=${encodedMessage}`, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Neon Glow Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500 opacity-20"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Contact Us
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Get in touch for LED wall rentals, photography services, or any audiovisual needs
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="relative z-10 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-blue-900"
          >
            <h2 className="text-2xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Our Contact Information
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-blue-400 mt-1">
                  <FaPhone className="text-xl" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Phone</h3>
                  <Link 
                    href="tel:9874431317" 
                    className="text-blue-300 hover:text-white transition-colors duration-300"
                  >
                    9874431317
                  </Link>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-blue-400 mt-1">
                  <FaWhatsapp className="text-xl" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">WhatsApp</h3>
                  <Link 
                    href="https://wa.me/919874431317" 
                    target="_blank"
                    className="text-blue-300 hover:text-white transition-colors duration-300"
                  >
                    Chat on WhatsApp
                  </Link>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-blue-400 mt-1">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Email</h3>
                  <Link 
                    href="mailto:jaankolkata@gmail.com" 
                    className="text-blue-300 hover:text-white transition-colors duration-300"
                  >
                    jaankolkata@gmail.com
                  </Link>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-blue-400 mt-1">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Address</h3>
                  <p className="text-blue-300">
                    South Kumrakhali Masjid bari Road,<br />
                    Kamalgazi, Kolkata - 700103
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-blue-400 mt-1">
                  <FaClock className="text-xl" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Business Hours</h3>
                  <p className="text-blue-300">
                    Monday - Sunday: 9:00 AM - 9:00 PM<br />
                    (Available for emergency events outside hours)
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="font-medium text-lg mb-3">Connect With Us</h3>
                <div className="flex space-x-4">
                  <Link 
                    href="https://wa.me/919874431317" 
                    target="_blank"
                    className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center hover:bg-green-700 transition-colors duration-300"
                  >
                    <FaWhatsapp className="text-xl" />
                  </Link>
                  <Link 
                    href="tel:9874431317" 
                    className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
                  >
                    <FaPhone className="text-xl" />
                  </Link>
                  <Link 
                    href="mailto:jaankolkata@gmail.com" 
                    className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center hover:bg-red-700 transition-colors duration-300"
                  >
                    <FaEnvelope className="text-xl" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-blue-900"
          >
            <h2 className="text-2xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Send Us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-blue-100 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-blue-900 rounded-lg focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all duration-300"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-blue-100 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-blue-900 rounded-lg focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-blue-100 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-blue-900 rounded-lg focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-blue-100 mb-2">Service Needed</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-blue-900 rounded-lg focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all duration-300"
                >
                  <option value="">Select a service</option>
                  <option value="LED Wall Rental">LED Wall Rental</option>
                  <option value="Photography Services">Photography Services</option>
                  <option value="LED TV Rental">LED TV Rental</option>
                  <option value="Still Camera Rental">Still Camera Rental</option>
                  <option value="Video Production">Video Production</option>
                  <option value="Pre-Wedding Shoot">Pre-Wedding Shoot</option>
                  <option value="Projector Rental">Projector Rental</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-blue-100 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-blue-900 rounded-lg focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all duration-300"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center"
                >
                  <FaPaperPlane className="mr-2" /> Send via WhatsApp
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-900"
          >
            <div className="aspect-video w-full bg-gray-700 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Our Location</h3>
                <p className="text-blue-300 mb-4">South Kumrakhali Masjid bari Road, Kamalgazi, Kolkata</p>
                <Link
                  href="https://maps.google.com/?q=South+Kumrakhali+Masjid+bari+Road,+Kamalgazi,+Kolkata"
                  target="_blank"
                  className="inline-block px-6 py-3 border border-blue-400 rounded-lg font-medium hover:bg-blue-500/10 transition-all duration-300"
                >
                  View on Google Maps
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}