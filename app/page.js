"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCamera, FaVideo, FaTv, FaProjectDiagram, FaStar, FaQuoteLeft, FaBrush, FaCut } from 'react-icons/fa';

export default function Home() {
  const [activeService, setActiveService] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const services = [
    { icon: <FaBrush size={40} />, name: "Bridal Makeup", desc: "Professional bridal makeup services for your special day", highlight: true },
    { icon: <FaCut size={40} />, name: "Hair Styling", desc: "Expert hair styling and grooming services", highlight: true },
    { icon: <FaTv size={40} />, name: "LED Screen", desc: "High-resolution LED walls for events, weddings, and corporate functions" },
    { icon: <FaCamera size={40} />, name: "Photography", desc: "Professional photography services for all occasions" },
    { icon: <FaTv size={40} />, name: "LED TV", desc: "Premium LED TV rentals for your events" },
    { icon: <FaCamera size={40} />, name: "Still Camera", desc: "High-quality still photography equipment" },
    { icon: <FaVideo size={40} />, name: "Video Camera", desc: "4K video recording for your special moments" },
    { icon: <FaCamera size={40} />, name: "Pre-Wedding Shoot", desc: "Romantic pre-wedding photo sessions" },
    { icon: <FaProjectDiagram size={40} />, name: "Projector", desc: "High-lumen projectors for screenings" }
  ];

  const testimonials = [
    {
      quote: "Jaan's bridal makeup transformed me on my wedding day. The makeup lasted all day and looked stunning in photos!",
      name: "Priya Patel",
      company: "",
      rating: 5
    },
    {
      quote: "The LED wall for our reception was breathtaking. Combined with their photography services, our wedding was perfectly captured.",
      name: "Rahul Sharma",
      company: "",
      rating: 5
    },
    {
      quote: "The hairstyling team worked magic with my difficult hair texture. I've never looked better!",
      name: "Anjali Gupta",
      company: "",
      rating: 5
    }
  ];

  const whyChooseUs = [
    {
      title: "Premium Beauty Services",
      desc: "Expert bridal makeup and hair styling for your perfect wedding look"
    },
    {
      title: "Professional Team",
      desc: "Certified makeup artists and hairstylists with years of experience"
    },
    {
      title: "A/V Excellence",
      desc: "State-of-the-art LED walls and photography equipment"
    },
    {
      title: "Complete Wedding Solutions",
      desc: "One-stop for all your beauty and audiovisual needs"
    }
  ];

  useEffect(() => {
    const serviceInterval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 3000);

    const testimonialInterval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      clearInterval(serviceInterval);
      clearInterval(testimonialInterval);
    };
  }, []);

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
      <main className="relative z-10">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-600">
                  LED & Bridal Beauty 
                </span>
                <br />
                Services in Kolkata
              </h1>
              <p className="text-lg text-blue-100 mb-8 max-w-lg">
                Jaan provides premium bridal makeup, hair styling, LED screens, and photography services to make your special occasions unforgettable.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg font-medium hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300">
                  Book Now
                </Link>
                <Link href="/services" className="px-6 py-3 border border-pink-400 rounded-lg font-medium hover:bg-pink-500/10 transition-all duration-300">
                  Our Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-video bg-gray-800 rounded-xl overflow-hidden border border-pink-400/20 shadow-lg shadow-pink-500/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    key={activeService}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center p-8"
                  >
                    <div className={`text-5xl mb-4 ${services[activeService].highlight ? 'text-pink-400' : 'text-blue-400'}`}>
                      {services[activeService].icon}
                    </div>
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
                      {services[activeService].name}
                    </h3>
                  </motion.div>
                </div>
                <div className="absolute inset-0 border-2 border-pink-400/20 rounded-xl pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 pointer-events-none"></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-20 bg-gray-800/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-bold mb-4"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-600">About Jaan</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-lg text-blue-100"
              >
                Since 2015, Jaan has been transforming weddings and events in Kolkata with premium beauty services and cutting-edge audiovisual solutions. Our team of certified makeup artists, hairstylists, and AV technicians work together to create magical experiences.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="relative aspect-video bg-gray-700 rounded-xl overflow-hidden border border-pink-400/20 shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10"></div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
                <p className="text-blue-100 mb-6">
                  To provide complete wedding and event solutions that combine beauty and technology seamlessly. We believe every bride deserves to look and feel spectacular, and every event deserves professional audiovisual production.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="text-pink-400 mt-1">
                      <FaBrush />
                    </div>
                    <div>
                      <h4 className="font-medium">100+ Brides</h4>
                      <p className="text-sm text-blue-300">Transformed with our makeup services</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="text-blue-400 mt-1">
                      <FaTv />
                    </div>
                    <div>
                      <h4 className="font-medium">50+ Events</h4>
                      <p className="text-sm text-blue-300">Enhanced with our LED walls annually</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-bold mb-4"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-600">Our Services</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-lg text-blue-100"
              >
                Complete beauty and audiovisual solutions for weddings and special events
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border ${service.highlight ? 'border-pink-500/50 hover:border-pink-400/70' : 'border-blue-900 hover:border-blue-400/30'} transition-all duration-300 relative`}
                >
                  {service.highlight && (
                    <div className="absolute -top-3 -right-3 bg-pink-500 text-xs font-bold px-2 py-1 rounded-full">
                      Popular
                    </div>
                  )}
                  <div className={`mb-4 ${service.highlight ? 'text-pink-400' : 'text-blue-400'}`}>
                    {service.icon}
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${service.highlight ? 'text-pink-300' : ''}`}>{service.name}</h3>
                  <p className="text-blue-100">{service.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link href="/services" className="px-6 py-3 border border-pink-400 rounded-lg font-medium hover:bg-pink-500/10 transition-all duration-300 inline-flex items-center">
                View All Services
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gray-800/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-bold mb-4"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-600">Why Choose Us</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-lg text-blue-100"
              >
                What makes Jaan the preferred choice for weddings and events
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 p-6 rounded-xl border border-blue-900 hover:border-pink-400/30 transition-all duration-300"
                >
                  <div className={`text-2xl mb-4 ${index < 2 ? 'text-pink-400' : 'text-blue-400'}`}>
                    <div className={`w-12 h-12 rounded-full ${index < 2 ? 'bg-pink-900/30' : 'bg-blue-900/30'} flex items-center justify-center`}>
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-blue-100">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-800/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-bold mb-4"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-600">Client Testimonials</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-lg text-blue-100"
              >
                Hear what our clients say about our beauty and AV services
              </motion.p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative h-64">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: activeTestimonial === index ? 1 : 0,
                      scale: activeTestimonial === index ? 1 : 0.95
                    }}
                    transition={{ duration: 0.5 }}
                    className={`absolute inset-0 bg-gray-900/50 p-8 rounded-xl border ${activeTestimonial === index ? 'border-pink-400/30' : 'border-transparent'}`}
                  >
                    <div className="flex flex-col h-full">
                      <FaQuoteLeft className="text-pink-400 text-2xl mb-4" />
                      <p className="text-lg text-blue-100 mb-6 flex-grow">&quot;{testimonial.quote}&quot;</p>
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        {testimonial.company && <p className="text-sm text-blue-300">{testimonial.company}</p>}
                        <div className="flex mt-2">
                          {[...Array(5)].map((_, i) => (
                            <FaStar 
                              key={i} 
                              className={i < testimonial.rating ? "text-yellow-400" : "text-gray-600"} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full ${activeTestimonial === index ? 'bg-pink-400' : 'bg-gray-600'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-pink-900/50 to-purple-900/50 rounded-xl p-8 md:p-12 border border-pink-400/20"
            >
              <div className="text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready for Your Special Day?</h2>
                <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                  Book our beauty and AV services today to create unforgettable wedding memories.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg font-medium hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 text-lg">
                    Get in Touch
                  </Link>
                  <Link href="tel:9874431317" className="px-8 py-4 border border-pink-400 rounded-lg font-medium hover:bg-pink-500/10 transition-all duration-300 text-lg flex items-center">
                    <FaPhone className="mr-2" /> Call Now
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Contact Info Footer */}
      <footer className="relative z-10 bg-gray-800/50 backdrop-blur-sm border-t border-blue-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-start space-x-4"
          >
            <div className="text-pink-400 mt-1">
              <FaPhone className="text-xl" />
            </div>
            <div>
              <h3 className="font-medium text-lg mb-1">Phone</h3>
              <p className="text-blue-300">9874431317</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-start space-x-4"
          >
            <div className="text-pink-400 mt-1">
              <FaEnvelope className="text-xl" />
            </div>
            <div>
              <h3 className="font-medium text-lg mb-1">Email</h3>
              <p className="text-blue-300">jaanbanglakolkata@gmail.com</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-start space-x-4"
          >
            <div className="text-pink-400 mt-1">
              <FaMapMarkerAlt className="text-xl" />
            </div>
            <div>
              <h3 className="font-medium text-lg mb-1">Address</h3>
              <p className="text-blue-300">South Kumrakhali Masjid bari Road, Kamalgazi, Kolkata - 700103</p>
            </div>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 border-t border-blue-900 text-center text-blue-300">
          <p>© {new Date().getFullYear()} Jaan. All rights reserved. Website developed and Maintained by Digital Exposure Online Services.</p>
        </div>
      </footer>
    </div>
  );
}