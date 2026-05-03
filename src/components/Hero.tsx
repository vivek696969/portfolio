'use client'

import { ArrowRight, Shield, Zap, Lock } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* AI Futuristic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-primary to-black opacity-90" />
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse" />
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
        {/* Hexagon grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSI0OSIgdmlld0JveD0iMCAwIDI4IDQ5Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMzMiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzkgMjZsLTIyIDE0LTIyLTE0di0yOGwyMi0xNGwyMiAxNHYyOHptLTIyIDEybDE4LTExdi0yMmwtMTgtMTFsLTE4IDExdjIybDE4IDExeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full backdrop-blur-md"
          >
            <Shield size={16} className="text-accent" />
            <span className="text-accent text-sm font-medium tracking-wide uppercase">AI-Enhanced Security Analyst</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            Securing the <br />
            <span className="bg-gradient-to-r from-accent via-cyan-300 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
              Digital Frontier
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl text-gray-400 max-w-lg leading-relaxed"
          >
            meow Leveraging modern intelligence to detect threats, orchestrate incident response, and architect unbreakable systems.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="group relative px-8 py-3 bg-accent text-primary font-bold rounded-lg overflow-hidden flex items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent to-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative flex items-center gap-2">
                Deploy Defenses
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="px-8 py-3 border border-accent/50 text-accent hover:bg-accent/10 font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm">
              Access Credentials
            </button>
          </motion.div>

          {/* Quick Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-700/50"
          >
            {[
              { value: "5+", label: "Projects" },
              { value: "3", label: "Certifications" },
              { value: "100%", label: "Uptime focus" }
            ].map((stat, i) => (
              <div key={i} className="group cursor-default">
                <p className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent group-hover:from-accent group-hover:to-cyan-300 transition-colors duration-300">{stat.value}</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right side - Interactive Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="hidden md:flex items-center justify-center relative"
        >
          <div className="relative w-96 h-96">
            {/* Rotating glowing rings */}
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-accent/20 border-t-accent/60" 
            />
            <motion.div 
              animate={{ rotate: -360 }} 
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              className="absolute inset-8 rounded-full border border-cyan-400/20 border-b-cyan-400/60" 
            />
            
            {/* Center Core */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-4 bg-accent/20 rounded-full blur-xl group-hover:bg-accent/40 transition-colors duration-500" />
                <div className="relative w-32 h-32 bg-primary/80 backdrop-blur-xl rounded-full border-2 border-accent/50 flex items-center justify-center z-10 shadow-[0_0_30px_rgba(14,165,233,0.3)] group-hover:shadow-[0_0_50px_rgba(14,165,233,0.6)] transition-all duration-300">
                  <Shield size={50} className="text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
            </div>

            {/* Orbiting Elements */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="absolute inset-0"
            >
              <div className="absolute top-0 left-1/2 -ml-4 -mt-4 w-8 h-8 bg-primary rounded-full border border-accent flex items-center justify-center shadow-[0_0_15px_rgba(14,165,233,0.5)]">
                <Lock size={12} className="text-accent" />
              </div>
            </motion.div>

            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              className="absolute inset-8"
            >
              <div className="absolute bottom-0 right-1/4 w-6 h-6 bg-primary rounded-full border border-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                <Zap size={10} className="text-cyan-400" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
