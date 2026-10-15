'use client';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Terminal, Globe } from 'lucide-react';
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
  title: 'Python Log Analyzer & Network Anomaly Detector',
  year: 'Analyzer completed · Anomaly extension in development',
  tags: ['Python', 'Rule-Based Detection', 'Log Parsing'],
  description:
    'Implemented rule-based parsing to identify repeated failed-login events and suspicious IP activity in system logs. The analyzer generates structured findings for review. A planned extension will flag unusual connection and authentication patterns in syslog or exported network data; its validation methodology and detection results are still in progress.',
  features: [
    'Rule-based system-log parsing',
    'Repeated failed-login detection',
    'Suspicious IP activity identification',
    'Structured findings for review',
    'Network anomaly extension: in development',
  ],
  github: 'https://github.com/vivek696969/log-analyzer',
  icon: Terminal,
};

const otherProjects = [
  {
    title: 'E-Commerce / Inventory Backend',
    year: 'Planned · Not yet implemented',
    tags: ['Django ORM or FastAPI + SQLAlchemy', 'REST API', 'Relational Data Modeling'],
    description:
      'Design target: product catalog, cart, and order-flow modules with separate Product, Cart, and Order models. Planned learning covers RESTful CRUD endpoints, request validation, authentication concepts, and ORM-based persistence. This project is not yet implemented; payment gateways, stock concurrency, and production features are outside the current work.',
    github: null,
    icon: Globe,
  },
  {
    title: 'Cybersecurity Home Lab',
    year: 'Hands-on practice environment',
    tags: ['Wazuh', 'Kali Linux', 'Ubuntu Server', 'Windows'],
    description:
      'Built a personal multi-system environment for authorized security practice. Reviewed Wazuh alerts and Windows security logs to connect events with triage, alert review, and basic incident investigation. The lab strengthens Linux administration, authentication-activity review, and security-monitoring fundamentals.',
    github: null,
    icon: Terminal,
  },
  {
    title: 'Personal Portfolio Website',
    year: 'Published',
    tags: ['HTML', 'CSS', 'Responsive Design', 'AI-Assisted Development'],
    description:
      'Designed and published a responsive personal website presenting projects, technical learning, and professional contact links. Clear project summaries and an accessible online profile help recruiters and collaborators explore my work. Used AI-assisted development to improve the site while retaining ownership of its content and presentation.',
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

                      {project.github && <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-accent transition-colors hover:text-cyan-300"
                      >
                        <Github className="h-4 w-4" />
                        View Source
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>}
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}


          </div>
        </motion.div>
      </div>
    </section>
  );
}
