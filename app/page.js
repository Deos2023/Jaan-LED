"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCamera, FaVideo, FaTv, FaProjectDiagram, FaStar, FaQuoteLeft } from 'react-icons/fa';

export default function Home() {
  const [activeService, setActiveService] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const services = [
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
      quote: "Jaan 's LED wall transformed our product launch. The quality was exceptional and their team was very professional.",
      name: "Rahul Sharma",
      company: "Tech Innovations Pvt Ltd",
      rating: 5
    },
    {
      quote: "The photography services for our wedding were outstanding. They captured every special moment beautifully.",
      name: "Priya Patel",
      company: "",
      rating: 5
    },
    {
      quote: "We've used their AV equipment for three corporate events now. Always reliable and high quality.",
      name: "Anjali Gupta",
      company: "Marketing Solutions Inc",
      rating: 4
    }
  ];

  const whyChooseUs = [
    {
      title: "Premium Equipment",
      desc: "We use only the highest quality LED walls and photography equipment"
    },
    {
      title: "Experienced Team",
      desc: "Our professionals have years of experience in event production"
    },
    {
      title: "Competitive Pricing",
      desc: "Quality services at prices that won't break your budget"
    },
    {
      title: "24/7 Support",
      desc: "Dedicated support before, during and after your event"
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
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                  Premium LED Wall
                </span>
                <br />
                Solutions in Kolkata
              </h1>
              <p className="text-lg text-blue-100 mb-8 max-w-lg">
                Jaan  provides top-quality LED screens, photography, and audiovisual services for all your events and occasions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
                  Get a Quote
                </Link>
                <Link href="/services" className="px-6 py-3 border border-blue-400 rounded-lg font-medium hover:bg-blue-500/10 transition-all duration-300">
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
              <div className="relative aspect-video bg-gray-800 rounded-xl overflow-hidden border border-blue-400/20 shadow-lg shadow-blue-500/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    key={activeService}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center p-8"
                  >
                    <div className="text-5xl text-blue-400 mb-4">
                      {services[activeService].icon}
                    </div>
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                      {services[activeService].name}
                    </h3>
                  </motion.div>
                </div>
                <div className="absolute inset-0 border-2 border-blue-400/20 rounded-xl pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 pointer-events-none"></div>
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
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">About Jaan </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-lg text-blue-100"
              >
                Established in 2015, Jaan  has been at the forefront of providing premium LED wall and audiovisual solutions in Kolkata. Our commitment to quality and customer satisfaction has made us the preferred choice for events across West Bengal.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="relative aspect-video bg-gray-700 rounded-xl overflow-hidden border border-blue-400/20 shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
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
                  To deliver cutting-edge audiovisual solutions that transform ordinary events into extraordinary experiences. We combine technology with creativity to help our clients communicate their messages powerfully.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="text-blue-400 mt-1">
                      <FaTv />
                    </div>
                    <div>
                      <h4 className="font-medium">100+ LED Installations</h4>
                      <p className="text-sm text-blue-300">Completed across Kolkata</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="text-blue-400 mt-1">
                      <FaCamera />
                    </div>
                    <div>
                      <h4 className="font-medium">50+ Events</h4>
                      <p className="text-sm text-blue-300">Photographed annually</p>
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
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Our Services</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-lg text-blue-100"
              >
                Comprehensive audiovisual solutions tailored to your event needs
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
                  className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-blue-900 hover:border-blue-400/30 transition-all duration-300"
                >
                  <div className="text-blue-400 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
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
              <Link href="/services" className="px-6 py-3 border border-blue-400 rounded-lg font-medium hover:bg-blue-500/10 transition-all duration-300 inline-flex items-center">
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
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Why Choose Us</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-lg text-blue-100"
              >
                What sets Jaan  apart from other AV providers in Kolkata
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
                  className="bg-gray-900/50 p-6 rounded-xl border border-blue-900 hover:border-blue-400/30 transition-all duration-300"
                >
                  <div className="text-blue-400 text-2xl mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-900/30 flex items-center justify-center">
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

        {/* Our Work Section */}
        {/* <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-bold mb-4"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Our Work</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-lg text-blue-100"
              >
                Some of our recent projects and installations
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="aspect-square bg-gray-800 rounded-xl overflow-hidden border border-blue-900 hover:border-blue-400/30 transition-all duration-300"
                >
                  <div className="w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20 flex items-center justify-center">
                    <span className="text-blue-300">Project {item}</span>
                  </div>
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
              <Link href="/gallery" className="px-6 py-3 border border-blue-400 rounded-lg font-medium hover:bg-blue-500/10 transition-all duration-300 inline-flex items-center">
                View Full Gallery
              </Link>
            </motion.div>
          </div>
        </section> */}

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
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Client Testimonials</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-lg text-blue-100"
              >
                What our clients say about our services
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
                    className={`absolute inset-0 bg-gray-900/50 p-8 rounded-xl border ${activeTestimonial === index ? 'border-blue-400/30' : 'border-transparent'}`}
                  >
                    <div className="flex flex-col h-full">
                      <FaQuoteLeft className="text-blue-400 text-2xl mb-4" />
                      <p className="text-lg text-blue-100 mb-6 flex-grow">"{testimonial.quote}"</p>
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
                    className={`w-3 h-3 rounded-full ${activeTestimonial === index ? 'bg-blue-400' : 'bg-gray-600'}`}
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
              className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-xl p-8 md:p-12 border border-blue-400/20"
            >
              <div className="text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Elevate Your Event?</h2>
                <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                  Contact us today to discuss your requirements and get a customized quote for your next event.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 text-lg">
                    Get in Touch
                  </Link>
                  <Link href="tel:9874431317" className="px-8 py-4 border border-blue-400 rounded-lg font-medium hover:bg-blue-500/10 transition-all duration-300 text-lg flex items-center">
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
            <div className="text-blue-400 mt-1">
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
            <div className="text-blue-400 mt-1">
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
            <div className="text-blue-400 mt-1">
              <FaMapMarkerAlt className="text-xl" />
            </div>
            <div>
              <h3 className="font-medium text-lg mb-1">Address</h3>
              <p className="text-blue-300">South Kumrakhali Masjid bari Road, Kamalgazi, Kolkata - 700103</p>
            </div>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 border-t border-blue-900 text-center text-blue-300">
          <p>© {new Date().getFullYear()} Jaan . All rights reserved. Website developed and Maintained by  Digital Exposure Online Services . </p>
        </div>
      </footer>
    </div>
  );
}