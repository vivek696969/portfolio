'use client'

import { motion } from 'framer-motion'
import { MapPin, GraduationCap, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const focusAreas = [
  'Backend Development & REST API Concepts',
  'Linux Command-Line & System Administration',
  'Network & Security Engineering Fundamentals',
  'Python Scripting, Debugging & QA Fundamentals',
]

const education = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    period: '2024 – 2027',
    institution: 'Sri Sai University, Palampur, HP',
    grade: 'CGPA: 7.11',
  },
  {
    degree: 'Diploma in Modern Computer Applications (DMCA)',
    period: '',
    institution: 'CDAC',
    grade: 'Grade A',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' as const },
  }),
}

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
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
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building practical development skills with a foundation in networks,
            security, and structured problem solving
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Avatar card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center"
          >
            {/* Profile Image */}
            <div className="relative group mb-6">
              <div className="absolute -inset-1 bg-gradient-to-br from-accent to-cyan-400 rounded-2xl blur-lg opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="relative w-48 h-48 bg-secondary/80 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden border-2 border-accent/30">
                <Image
                  src="/profile.png"
                  alt="Vivek Dhawan"
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-1">Vivek Dhawan</h3>
            <div className="flex items-center gap-1.5 text-gray-400 text-sm">
              <MapPin size={14} className="text-accent" />
              <span>Baijnath, Himachal Pradesh</span>
            </div>

            {/* Education timeline */}
            <div className="mt-10 w-full max-w-sm space-y-5">
              <h4 className="text-lg font-semibold text-accent flex items-center gap-2">
                <GraduationCap size={20} />
                Education
              </h4>

              <div className="relative border-l-2 border-accent/30 pl-6 space-y-6">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {/* Dot on timeline */}
                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary border-2 border-accent shadow-[0_0_8px_rgba(14,165,233,0.5)]" />
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-white font-semibold">{edu.degree}</span>
                      {edu.period && (
                        <span className="text-xs text-accent/80 font-mono bg-accent/10 px-2 py-0.5 rounded-full">
                          {edu.period}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm">{edu.institution}</p>
                    <p className="text-accent text-sm font-medium">{edu.grade}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-6"
          >
            <p className="text-gray-300 leading-relaxed">
              I&apos;m a BCA student at Sri Sai University, Palampur (2024–2027),
              with a CGPA of 7.11. I&apos;m developing Python and web skills alongside
              networking and security fundamentals that support backend systems.
              My practical learning includes Linux, Wazuh alert review, Windows
              security-log analysis, and rule-based log parsing.
            </p>

            <p className="text-gray-300 leading-relaxed">
              I&apos;m seeking an entry-level Backend Developer, Full Stack Developer,
              QA/Software Tester, or technical support role, including opportunities
              at Paras Technologies. I bring a hardworking, self-directed approach,
              attention to detail when reviewing logs and documenting findings, and
              adaptability when learning new tools, frameworks, and team workflows.
            </p>

            {/* Focus areas */}
            <div className="space-y-4 pt-2">
              <h3 className="text-lg font-semibold text-accent">What I Focus On:</h3>
              <ul className="space-y-3">
                {focusAreas.map((area, i) => (
                  <motion.li
                    key={i}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-start gap-3 text-gray-300 group"
                  >
                    <ArrowRight
                      size={18}
                      className="text-accent mt-0.5 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-200"
                    />
                    <span className="group-hover:text-white transition-colors duration-200">
                      {area}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
