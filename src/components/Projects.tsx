'use client';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Terminal, Globe, Rocket } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

const featuredProject = {
  title: 'Log Analyzer & Intrusion Detector',
  year: 2026,
  tags: ['Python', 'Bash', 'Log Parsing', 'Threat Detection'],
  description:
    'Built a Python security tool that processes system log files, detects failed login attempts, identifies suspicious IPs performing brute-force attacks, and generates automated threat reports. Simulates core SOC L1 workflows: log parsing, anomaly detection, and threat escalation.',
  features: [
    'Automated log file parsing & analysis',
    'Brute-force attack detection',
    'Suspicious IP identification',
    'Automated threat report generation',
    'SOC L1 workflow simulation',
  ],
  github: 'https://github.com/vivek696969/log-analyzer',
  icon: Terminal,
};

const otherProjects = [
  {
    title: 'Personal Portfolio Website',
    year: 2026,
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    description:
      'Designed and deployed a responsive portfolio showcasing cybersecurity projects, technical skills, and professional background. Features interactive spotlight effects, smooth animations, and a dark cybersecurity theme.',
    github: 'https://github.com/vivek696969/portfolio',
    icon: Globe,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden max-w-full">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-full max-w-[800px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-r from-accent via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            Hands-on security tools and web projects demonstrating practical
            cybersecurity and development skills.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-8"
        >
          {/* ── Featured project (full-width) ── */}
          <motion.div variants={itemVariants}>
            <SpotlightCard className="p-1">
              <div className="rounded-lg bg-secondary/60 p-6 sm:p-8 md:p-10">
                <div className="flex flex-col gap-8 md:flex-row md:items-start">
                  {/* Left column */}
                  <div className="flex-1 space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                        <Terminal className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white sm:text-2xl">
                          {featuredProject.title}
                        </h3>
                        <span className="font-mono text-xs text-accent/70">
                          {featuredProject.year}
                        </span>
                      </div>
                    </div>

                    <p className="leading-relaxed text-gray-300">
                      {featuredProject.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1 font-mono text-xs text-accent"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* GitHub link */}
                    <a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-accent/10 px-5 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent/20"
                    >
                      <Github className="h-4 w-4" />
                      View on GitHub
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  {/* Right column — key features */}
                  <div className="w-full shrink-0 md:w-80">
                    <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {featuredProject.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-3">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <span className="text-sm text-gray-300">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* ── Other projects grid ── */}
          <div className="grid gap-8 md:grid-cols-2">
            {otherProjects.map((project) => {
              const Icon = project.icon;
              return (
                <motion.div key={project.title} variants={itemVariants}>
                  <SpotlightCard className="h-full p-1">
                    <div className="flex h-full flex-col rounded-lg bg-secondary/60 p-6 sm:p-8">
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="font-mono text-xs text-accent/70">
                          {project.year}
                        </span>
                      </div>

                      <h3 className="mb-3 text-lg font-bold text-white">
                        {project.title}
                      </h3>

                      <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-400">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="mb-5 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-accent/20 bg-accent/5 px-2.5 py-0.5 font-mono text-[11px] text-accent"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-accent transition-colors hover:text-cyan-300"
                      >
                        <Github className="h-4 w-4" />
                        View Source
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}

            {/* ── Coming soon teaser ── */}
            <motion.div variants={itemVariants}>
              <div className="flex h-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-700/50 bg-white/[0.02] p-6 text-center opacity-60 sm:p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-800/80 text-gray-500">
                  <Rocket className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-400">
                  More Projects Coming Soon
                </h3>
                <p className="max-w-xs text-sm leading-relaxed text-gray-500">
                  Currently working on new security tools and lab environments.
                  Stay tuned for SIEM lab setups, network analysis tools, and
                  more.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
