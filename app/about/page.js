"use client"

import { motion } from 'framer-motion';
import { FaUsers, FaAward, FaLightbulb, FaHandshake, FaBrush, FaCut } from 'react-icons/fa';
import { FaDiagramProject } from 'react-icons/fa6';
import Link from 'next/link';

export default function AboutPage() {
  const stats = [
    { value: "8+", label: "Years Experience", icon: <FaAward className="text-3xl" /> },
    { value: "500+", label: "Events Served", icon: <FaUsers className="text-3xl" /> },
    { value: "100+", label: "Brides Transformed", icon: <FaBrush className="text-3xl" /> },
    { value: "200+", label: "AV Projects", icon: <FaDiagramProject className="text-3xl" /> }
  ];

  const team = [
    {
      name: "Founder",
      role: "CEO & Lead Technician",
      bio: "With over a decade in beauty and AV industries, our founder brings technical expertise and creative vision to every project."
    },
    {
      name: "Makeup Director",
      role: "Bridal Beauty Specialist",
      bio: "Our lead makeup artist creates stunning bridal looks that enhance natural beauty and last all day."
    },
    {
      name: "Creative Director",
      role: "Photography & Styling",
      bio: "Oversees all visual elements from hair styling to LED wall setups, ensuring perfect results."
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-600">
              About Jaan
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Kolkata's premier destination for bridal beauty and cutting-edge AV solutions since 2015
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
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-600">
                  Our Story
                </span>
              </h2>
              <div className="space-y-6 text-blue-100">
                <p>
                  Jaan began in 2015 with a dual passion - transforming brides into their most beautiful selves and revolutionizing events through LED technology. What started as a small beauty and AV service has grown into Kolkata's most trusted name for complete wedding solutions.
                </p>
                <p>
                  Our journey has been fueled by a commitment to excellence in both beauty and technology. From the first brush stroke to the final LED pixel, we ensure every detail is perfect for your special day.
                </p>
                <p>
                  Today, we combine artistic beauty expertise with technical AV mastery to create unforgettable wedding experiences across West Bengal.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative aspect-video bg-gray-700 rounded-xl overflow-hidden border border-pink-400/20 shadow-lg"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-pink-900/20 to-purple-900/20">
                <span className="text-pink-300 text-lg">Our Beauty & AV Journey</span>
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-600">
                Our Mission & Values
              </span>
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              The principles that guide our beauty and technology services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 p-8 rounded-xl border border-pink-900 hover:border-pink-400/30 transition-all duration-300"
            >
              <div className="text-pink-400 mb-4">
                <FaLightbulb className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-blue-100">
                To create magical wedding experiences by combining artistic bridal beauty with cutting-edge AV technology. We help every bride look her best while creating stunning visual backdrops for her special day.
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
                  <span className="text-pink-400 mr-2">•</span>
                  <span><strong>Beauty Excellence:</strong> Only premium makeup and hair products</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span><strong>Technical Mastery:</strong> State-of-the-art AV equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span><strong>Bridal Focus:</strong> Personalized beauty consultations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span><strong>Event Perfection:</strong> Flawless execution from makeup to LED walls</span>
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
                className={`text-center p-6 bg-gray-900/50 rounded-xl border ${index === 2 ? 'border-pink-900 hover:border-pink-400/30' : 'border-blue-900 hover:border-blue-400/30'} transition-all duration-300`}
              >
                <div className={`mb-4 flex justify-center ${index === 2 ? 'text-pink-400' : 'text-blue-400'}`}>
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-600">
                Meet Our Experts
              </span>
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              The talented professionals who make your wedding dreams come true
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
                className={`bg-gray-800/50 p-8 rounded-xl border ${index === 1 ? 'border-pink-900 hover:border-pink-400/30' : 'border-blue-900 hover:border-blue-400/30'} transition-all duration-300`}
              >
                <div className={`aspect-square rounded-full mb-6 overflow-hidden mx-auto flex items-center justify-center ${index === 1 ? 'bg-pink-900/20' : 'bg-blue-900/20'}`}>
                  <span className={`text-xl ${index === 1 ? 'text-pink-300' : 'text-blue-300'}`}>Photo</span>
                </div>
                <h3 className="text-xl font-bold text-center mb-1">{member.name}</h3>
                <p className={`text-center mb-4 ${index === 1 ? 'text-pink-400' : 'text-blue-400'}`}>{member.role}</p>
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
            className="bg-gradient-to-r from-pink-900/50 to-purple-900/50 rounded-xl p-8 md:p-12 border border-pink-400/20 text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Ready for Your Dream Wedding?</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              From bridal makeup to stunning LED backdrops, we'll make your wedding unforgettable.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg font-medium hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 text-lg"
              >
                Book Consultation
              </Link>
              <Link 
                href="/services" 
                className="px-8 py-4 border border-pink-400 rounded-lg font-medium hover:bg-pink-500/10 transition-all duration-300 text-lg"
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