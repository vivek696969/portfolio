'use client';
import { motion } from 'framer-motion';
import {
  Award,
  CheckCircle,
  Clock,
  BookOpen,
  Brain,
  MessageSquare,
} from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

const certifications = [
  {
    title: 'Google Cybersecurity Professional Certificate',
    subtitle: 'Python for Cybersecurity',
    issuer: 'Google / Coursera',
    status: 'Completed',
    statusColor: 'text-emerald-400',
    badgeBg: 'bg-emerald-400/10 border-emerald-400/20',
    StatusIcon: CheckCircle,
    iconColor: 'text-emerald-400',
    description:
      'Comprehensive training covering SIEM tools, incident response, Python for security automation, and security operations fundamentals.',
  },
  {
    title: 'CompTIA Security+',
    subtitle: null,
    issuer: 'CompTIA',
    status: 'Planned (2026-2027)',
    statusColor: 'text-amber-400',
    badgeBg: 'bg-amber-400/10 border-amber-400/20',
    StatusIcon: Clock,
    iconColor: 'text-amber-400',
    description:
      'Industry-standard certification covering IT security fundamentals, network security, threat management, and compliance.',
  },
];

const qualities = [
  {
    Icon: BookOpen,
    title: 'Self-Learning',
    description:
      'Built cybersecurity foundation independently through online courses and practical labs.',
  },
  {
    Icon: Brain,
    title: 'Problem-Solving',
    description:
      'Strong analytical and logical reasoning skills applied to security challenges.',
  },
  {
    Icon: MessageSquare,
    title: 'Communication',
    description:
      'Effective English communication with ability to explain technical concepts clearly.',
  },
];

export default function Certifications() {
  return (
    <section id="certs" className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-1/3 h-[400px] w-[600px] rounded-full bg-accent/5 blur-[120px]" />
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
              Certifications &amp; Training
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            Professional certifications and continuous learning in cybersecurity.
          </p>
        </motion.div>

        {/* ── Certification cards ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mb-20 grid gap-8 md:grid-cols-2"
        >
          {certifications.map((cert) => {
            const { StatusIcon } = cert;
            return (
              <motion.div key={cert.title} variants={itemVariants}>
                <SpotlightCard className="h-full p-1">
                  <div className="flex h-full flex-col rounded-lg bg-secondary/60 p-6 sm:p-8">
                    {/* Icon + status badge row */}
                    <div className="mb-5 flex items-start justify-between gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <Award className="h-6 w-6" />
                      </div>
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${cert.badgeBg} ${cert.statusColor}`}
                      >
                        <StatusIcon className="h-3.5 w-3.5" />
                        {cert.status}
                      </span>
                    </div>

                    {/* Title & issuer */}
                    <h3 className="mb-1 text-lg font-bold text-white">
                      {cert.title}
                    </h3>
                    {cert.subtitle && (
                      <p className="mb-2 text-sm font-medium text-accent/80">
                        {cert.subtitle}
                      </p>
                    )}
                    <p className="mb-4 text-xs text-gray-500">{cert.issuer}</p>

                    {/* Description */}
                    <p className="flex-1 text-sm leading-relaxed text-gray-400">
                      {cert.description}
                    </p>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Learning Journey ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h3 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
            Self-Taught Foundation
          </h3>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-400">
            Built cybersecurity knowledge independently through online courses,
            practical labs, and hands-on projects. Continuously expanding skills
            through platforms like TryHackMe and cybersecurity communities.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-6 sm:grid-cols-3"
        >
          {qualities.map((q) => {
            const { Icon } = q;
            return (
              <motion.div key={q.title} variants={itemVariants}>
                <SpotlightCard className="h-full p-1">
                  <div className="flex h-full flex-col items-center rounded-lg bg-secondary/60 p-6 text-center sm:p-8">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h4 className="mb-2 text-base font-semibold text-white">
                      {q.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-400">
                      {q.description}
                    </p>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
