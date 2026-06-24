'use client';
import { Github, Linkedin, Mail } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
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

export default function Footer() {
  return (
    <footer className="border-t border-gray-800/50 bg-primary">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand & subtitle */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="mb-2 inline-flex items-baseline gap-0.5 select-none"
            >
              <span className="bg-gradient-to-r from-accent to-cyan-400 bg-clip-text text-xl font-bold text-transparent">
                VD
              </span>
              <span className="text-sm font-medium text-gray-500">.sec</span>
            </a>
            <p className="text-sm text-gray-500">
              SOC Analyst Aspirant | Cybersecurity Enthusiast
            </p>
          </div>

          {/* Quick links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
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
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-white/5 hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-gray-800/50 pt-6 text-center">
          <p className="text-xs text-gray-600">
            &copy; 2026 Vivek Dhawan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
