'use client';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

const contactMethods = [
  {
    Icon: Mail,
    label: 'Email',
    value: 'vivekdhawan063@gmail.com',
    href: 'mailto:vivekdhawan063@gmail.com',
  },
  {
    Icon: Phone,
    label: 'Phone',
    value: '+91 7876246471',
    href: 'tel:+917876246471',
  },
  {
    Icon: MapPin,
    label: 'Location',
    value: 'Baijnath, Himachal Pradesh, India',
    href: null,
  },
];

const socials = [
  {
    Icon: Github,
    label: 'GitHub',
    href: 'https://github.com/vivek696969',
  },
  {
    Icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vivekdhawan69',
  },
  {
    Icon: Mail,
    label: 'Email',
    href: 'mailto:vivekdhawan063@gmail.com',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-accent/5 blur-[120px]" />
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
              Get In Touch
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            Open to SOC Analyst L1 opportunities at Deloitte, Accenture, and
            similar organizations.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* ── Left: Contact info cards ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-4"
          >
            {contactMethods.map((m) => {
              const { Icon } = m;
              const innerContent = (
                <>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                      {m.label}
                    </p>
                    <p className="text-sm font-medium text-white">
                      {m.value}
                    </p>
                  </div>
                </>
              );

              const cardClass = `flex items-center gap-4 rounded-xl border border-gray-700/50 bg-secondary/60 p-5 backdrop-blur-sm transition-colors ${
                m.href
                  ? 'cursor-pointer hover:border-accent/40 hover:bg-secondary/80'
                  : ''
              }`;

              return (
                <motion.div key={m.label} variants={itemVariants}>
                  {m.href ? (
                    <a
                      href={m.href}
                      target={m.href.startsWith('http') ? '_blank' : undefined}
                      rel={m.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={cardClass}
                    >
                      {innerContent}
                    </a>
                  ) : (
                    <div className={cardClass}>
                      {innerContent}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* ── Right: CTA, socials, availability, languages ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col gap-8"
          >
            {/* Send Email CTA */}
            <motion.div variants={itemVariants}>
              <a
                href="mailto:vivekdhawan063@gmail.com?subject=SOC%20Analyst%20Opportunity"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-accent px-8 py-4 text-base font-semibold text-white shadow-lg shadow-accent/20 transition-all hover:bg-accent-dark hover:shadow-accent/30"
              >
                <Send className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                Send Email
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center gap-4 lg:justify-start"
            >
              {socials.map((s) => {
                const { Icon } = s;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      s.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    aria-label={s.label}
                    className="flex h-11 w-11 items-center justify-center rounded-lg border border-gray-700/50 bg-white/5 text-gray-400 transition-all hover:border-accent/40 hover:text-accent"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </motion.div>

            {/* Availability badge */}
            <motion.div
              variants={itemVariants}
              className="rounded-xl border border-accent/20 bg-accent/5 p-5"
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                </span>
                <span className="text-sm font-semibold text-accent">
                  Open to Opportunities
                </span>
              </div>
              <p className="text-sm text-gray-400">
                Available for full-time SOC Analyst L1 positions.
              </p>
            </motion.div>

            {/* Languages */}
            <motion.div variants={itemVariants}>
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-500">
                Languages
              </p>
              <p className="text-sm text-gray-300">
                <span className="text-white">Hindi</span>
                <span className="mx-2 text-gray-600">•</span>
                <span className="text-gray-400">(Native)</span>
                <span className="mx-3 text-gray-700">|</span>
                <span className="text-white">English</span>
                <span className="mx-2 text-gray-600">•</span>
                <span className="text-gray-400">(Conversational)</span>
                <span className="mx-3 text-gray-700">|</span>
                <span className="text-white">Nepali</span>
                <span className="mx-2 text-gray-600">•</span>
                <span className="text-gray-400">(Learning)</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
