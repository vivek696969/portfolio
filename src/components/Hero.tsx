'use client'

import { ArrowRight, Shield, Download } from 'lucide-react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import CyberCanvas from './CyberCanvas'
import ThreatSimulator from './ThreatSimulator'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden max-w-full">
        <CyberCanvas />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-primary to-black opacity-90 pointer-events-none" />
        <div
          className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 max-w-full bg-accent rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse pointer-events-none"
        />
        <div
          className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 max-w-full bg-cyan-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse pointer-events-none"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[600px] h-[90vw] max-h-[600px] bg-accent/5 rounded-full filter blur-[100px] pointer-events-none"
        />
        {/* Hex grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSI0OSIgdmlld0JveD0iMCAwIDI4IDQ5Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMzMiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzkgMjZsLTIyIDE0LTIyLTE0di0yOGwyMi0xNGwyMiAxNHYyOHptLTIyIDEybDE4LTExdi0yMmwtMTgtMTFsLTE4IDExdjIybDE4IDExeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20 pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* Left — Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8 w-full max-w-full overflow-hidden"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 bg-accent/10 border border-accent/30 rounded-full backdrop-blur-md"
          >
            <Shield size={16} className="text-accent shrink-0" />
            <span className="text-accent text-xs sm:text-sm font-medium tracking-wide uppercase text-center">
              SOC Analyst Aspirant | BCA Final Year
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            Vivek{' '}
            <span className="relative inline-block bg-gradient-to-r from-accent via-cyan-300 to-blue-500 bg-clip-text text-transparent group cursor-pointer hover:brightness-125 transition-all">
              Dhawan
            </span>
          </motion.h1>

          {/* Typing subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="h-8"
          >
            <TypeAnimation
              sequence={[
                'SOC Analyst Aspirant',
                2000,
                'Cybersecurity Enthusiast',
                2000,
                'Threat Hunter in Training',
                2000,
                'Python Security Scripter',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-xl md:text-2xl font-mono text-accent"
            />
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg text-gray-400 max-w-lg leading-relaxed"
          >
            BCA final year student with hands-on experience in Linux log analysis,
            network fundamentals, and threat detection through practical Python
            security tools. Skilled in incident response workflows, log monitoring,
            and security operations.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#projects"
              className="group relative px-8 py-3 bg-accent text-primary font-bold rounded-lg overflow-hidden flex items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent to-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2">
                View My Work
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </a>
            <a
              href="/Vivek_Dhawan_Resume.pdf"
              download
              className="px-8 py-3 border border-accent/50 text-accent hover:bg-accent/10 font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2"
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-700/50"
          >
            {[
              { value: '2', label: 'Projects' },
              { value: '1', label: 'Certification' },
              { value: 'BCA', label: 'Final Year' },
            ].map((stat, i) => (
              <div key={i} className="group cursor-default">
                <p className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent group-hover:from-accent group-hover:to-cyan-300 transition-colors duration-300">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — Live SOC L1 Threat Simulator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="w-full flex items-center justify-center"
        >
          <ThreatSimulator />
        </motion.div>
      </div>
    </section>
  )
}
