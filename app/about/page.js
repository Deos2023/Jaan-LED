"use client"

import { motion } from 'framer-motion';
import { FaUsers, FaAward, FaLightbulb, FaHandshake } from 'react-icons/fa';
import { FaDiagramProject } from 'react-icons/fa6';
import Link from 'next/link';

export default function AboutPage() {
  const stats = [
    { value: "8+", label: "Years Experience", icon: <FaAward className="text-3xl" /> },
    { value: "500+", label: "Events Served", icon: <FaUsers className="text-3xl" /> },
    { value: "100+", label: "Clients", icon: <FaHandshake className="text-3xl" /> },
    { value: "50+", label: "Projects", icon: <FaDiagramProject className="text-3xl" /> }
  ];

  const team = [
    {
      name: "Founder",
      role: "CEO & Lead Technician",
      bio: "With over a decade in the AV industry, our founder brings technical expertise and creative vision to every project."
    },
    {
      name: "Creative Director",
      role: "Photography & Design",
      bio: "Our creative lead ensures every visual element meets the highest standards of quality and impact."
    },
    {
      name: "Operations Manager",
      role: "Client Relations",
      bio: "Dedicated to seamless event execution and client satisfaction from planning to completion."
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
              About Jaan 
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Pioneering LED wall and audiovisual solutions in Kolkata since 2015
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                  Our Story
                </span>
              </h2>
              <div className="space-y-6 text-blue-100">
                <p>
                  Jaan  was founded in 2015 with a vision to revolutionize event experiences in Kolkata through cutting-edge LED technology. What began as a small operation with a single LED screen has grown into one of the region's most trusted AV solution providers.
                </p>
                <p>
                  Our journey has been fueled by a passion for technology and a commitment to helping clients communicate their messages with maximum impact. From corporate conferences to grand weddings, we've had the privilege of enhancing hundreds of events across West Bengal.
                </p>
                <p>
                  Today, we combine years of experience with the latest equipment to deliver audiovisual solutions that set new standards for quality and reliability.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative aspect-video bg-gray-700 rounded-xl overflow-hidden border border-blue-400/20 shadow-lg"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-900/20 to-purple-900/20">
                <span className="text-blue-300 text-lg">Our Journey</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
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
                Our Mission & Values
              </span>
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Guiding principles that define how we work and serve our clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 p-8 rounded-xl border border-blue-900 hover:border-blue-400/30 transition-all duration-300"
            >
              <div className="text-blue-400 mb-4">
                <FaLightbulb className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-blue-100">
                To transform ordinary events into extraordinary experiences through innovative LED technology and professional audiovisual solutions. We strive to help our clients communicate their messages with clarity, impact, and visual brilliance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 p-8 rounded-xl border border-blue-900 hover:border-blue-400/30 transition-all duration-300"
            >
              <div className="text-blue-400 mb-4">
                <FaHandshake className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Values</h3>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span><strong>Quality:</strong> We never compromise on equipment or service standards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span><strong>Innovation:</strong> Continuously adopting new technologies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span><strong>Reliability:</strong> Delivering what we promise, every time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span><strong>Customer Focus:</strong> Tailored solutions for each client's unique needs</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-900/50 rounded-xl border border-blue-900 hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="text-blue-400 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                  {stat.value}
                </h3>
                <p className="text-blue-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
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
                Meet Our Team
              </span>
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              The skilled professionals behind Jaan 's success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 p-8 rounded-xl border border-blue-900 hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="aspect-square bg-gray-700 rounded-full mb-6 overflow-hidden mx-auto flex items-center justify-center">
                  <span className="text-blue-300 text-xl">Photo</span>
                </div>
                <h3 className="text-xl font-bold text-center mb-1">{member.name}</h3>
                <p className="text-blue-400 text-center mb-4">{member.role}</p>
                <p className="text-blue-100 text-center">{member.bio}</p>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Discuss Your Project?</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Whether you need an LED wall for an event or professional photography services, our team is ready to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 text-lg"
              >
                Contact Us
              </Link>
              <Link 
                href="/services" 
                className="px-8 py-4 border border-blue-400 rounded-lg font-medium hover:bg-blue-500/10 transition-all duration-300 text-lg"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}