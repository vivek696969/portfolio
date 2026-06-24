'use client'

import { Shield, Terminal, Globe, Code2 } from 'lucide-react'
import { motion } from 'framer-motion'
import SpotlightCard from './SpotlightCard'

const skillCategories = [
  {
    icon: Shield,
    title: 'SOC Operations',
    skills: [
      'Log Analysis',
      'Alert Triage',
      'Threat Detection',
      'Incident Response Basics',
      'Log Monitoring',
    ],
  },
  {
    icon: Terminal,
    title: 'Linux & Command-Line',
    skills: [
      'File Permissions',
      'Process Monitoring',
      'grep / find / SSH',
      'netcat / tar / base64',
      'Log File Analysis',
    ],
  },
  {
    icon: Globe,
    title: 'Networking Fundamentals',
    skills: [
      'TCP/IP & OSI Model',
      'DNS & HTTP/HTTPS',
      'Firewalls & IDS/IPS',
      'Network Protocols',
    ],
  },
  {
    icon: Code2,
    title: 'Programming & Other',
    skills: [
      'Python Scripting',
      'Security Automation',
      'Web Development (HTML/CSS)',
      '80 WPM Typing @ 99%',
    ],
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  }),
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills &amp; <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Core competencies built through hands-on labs, independent projects, and
            continuous learning
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <SpotlightCard className="p-6 flex flex-col h-full">
                  {/* Card header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 bg-accent/10 border border-accent/20 rounded-lg">
                      <Icon size={22} className="text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills as pill tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-300 bg-white/5 border border-gray-700/50 rounded-full transition-all duration-300 hover:border-accent/50 hover:text-white hover:shadow-[0_0_12px_rgba(14,165,233,0.15)] cursor-default"
                      >
                        <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
