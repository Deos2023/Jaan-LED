"use client"

import { motion } from 'framer-motion';
import { FaTv, FaCamera, FaVideo, FaProjectDiagram, FaLightbulb, FaCalendarAlt, FaHeadset } from 'react-icons/fa';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      icon: <FaTv className="text-4xl" />,
      title: "LED Wall Rentals",
      description: "High-resolution LED screens in various sizes for events, weddings, and corporate functions. Our walls deliver vibrant colors and crisp visuals even in bright environments.",
      features: [
        "Full HD & 4K resolution options",
        "Modular designs for flexible sizing",
        "Indoor and outdoor configurations",
        "Professional setup and operation"
      ]
    },
    {
      icon: <FaCamera className="text-4xl" />,
      title: "Photography Services",
      description: "Professional photography for all occasions including weddings, corporate events, product shoots, and more. We capture your special moments with artistic flair.",
      features: [
        "High-end DSLR and mirrorless cameras",
        "Studio and on-location shoots",
        "Professional lighting setups",
        "Post-processing and editing"
      ]
    },
    {
      icon: <FaTv className="text-4xl" />,
      title: "LED TV Rentals",
      description: "Premium LED television rentals for exhibitions, trade shows, and events. Multiple sizes available to suit your display needs.",
      features: [
        "55\" to 85\" screen sizes",
        "4K Ultra HD resolution",
        "Wall mounting or stand options",
        "Content playback solutions"
      ]
    },
    {
      icon: <FaCamera className="text-4xl" />,
      title: "Still Camera Rentals",
      description: "Rent professional-grade still cameras and equipment for your photography needs. Perfect for when you need extra gear for a project.",
      features: [
        "Latest DSLR and mirrorless models",
        "Wide selection of lenses",
        "Lighting equipment available",
        "Memory cards and accessories"
      ]
    },
    {
      icon: <FaVideo className="text-4xl" />,
      title: "Video Production",
      description: "Complete video production services from shooting to editing. We handle corporate videos, event coverage, promotional content, and more.",
      features: [
        "4K video recording",
        "Professional audio capture",
        "Gimbal and drone footage",
        "Editing and post-production"
      ]
    },
    {
      icon: <FaCamera className="text-4xl" />,
      title: "Pre-Wedding Shoots",
      description: "Romantic pre-wedding photo sessions at locations of your choice. We create beautiful, timeless images of your love story.",
      features: [
        "Multiple location options",
        "Themed photo concepts",
        "Professional makeup artist coordination",
        "Premium album design"
      ]
    },
    {
      icon: <FaProjectDiagram className="text-4xl" />,
      title: "Projector Rentals",
      description: "High-lumen projectors for presentations, movie screenings, and large-scale projections. Various brightness options for different environments.",
      features: [
        "5,000 to 20,000 lumens",
        "Full HD and 4K options",
        "Short-throw and ultra-short-throw available",
        "Screens and mounting included"
      ]
    },
    {
      icon: <FaLightbulb className="text-4xl" />,
      title: "Complete Event Solutions",
      description: "End-to-end audiovisual solutions for events. We handle everything from LED walls to sound systems for seamless event production.",
      features: [
        "Single point of contact",
        "Technical planning and consulting",
        "On-site support team",
        "Custom solutions for unique needs"
      ]
    }
  ];

  const processSteps = [
    {
      icon: <FaCalendarAlt className="text-2xl" />,
      title: "Consultation",
      description: "We discuss your event requirements and recommend the best solutions"
    },
    {
      icon: <FaLightbulb className="text-2xl" />,
      title: "Proposal",
      description: "You receive a customized plan with equipment options and pricing"
    },
    {
      icon: <FaHeadset className="text-2xl" />,
      title: "Confirmation",
      description: "We finalize details and prepare equipment for your event"
    },
    {
      icon: <FaTv className="text-2xl" />,
      title: "Execution",
      description: "Our team delivers and operates the equipment for flawless performance"
    }
  ];

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
              Our Services
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Comprehensive audiovisual solutions for events, weddings, and corporate functions in Kolkata
          </motion.p>
        </div>
      </section>

      {/* All Services Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 p-8 rounded-xl border border-blue-900 hover:border-blue-400/30 transition-all duration-300 h-full flex flex-col"
              >
                <div className="text-blue-400 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-blue-100 mb-6">{service.description}</p>
                <div className="mt-auto">
                  <h4 className="font-medium mb-3 text-blue-300">Key Features:</h4>
                  <ul className="space-y-2 text-blue-100">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/contact" 
                    className="mt-6 inline-block px-6 py-2 border border-blue-400 rounded-lg font-medium hover:bg-blue-500/10 transition-all duration-300 text-sm"
                  >
                    Enquire Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Our Process
              </span>
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              How we deliver exceptional audiovisual experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 p-6 rounded-xl border border-blue-900 hover:border-blue-400/30 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-blue-900/30 flex items-center justify-center mx-auto mb-4 text-blue-400">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-blue-100">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-xl p-8 md:p-12 border border-blue-400/20 text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Need Custom AV Solutions?</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              We specialize in creating tailored audiovisual packages for unique event requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 text-lg"
              >
                Get a Custom Quote
              </Link>
              <Link 
                href="tel:9874431317" 
                className="px-8 py-4 border border-blue-400 rounded-lg font-medium hover:bg-blue-500/10 transition-all duration-300 text-lg flex items-center justify-center"
              >
                <FaHeadset className="mr-2" /> Call for Advice
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}