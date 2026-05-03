'use client'

import { ExternalLink, Github } from 'lucide-react'
import SpotlightCard from './SpotlightCard'

export default function Projects() {
  const projects = [
    {
      title: 'SIEM Lab Environment',
      description: 'Built a complete SIEM lab using Splunk with log ingestion from multiple sources, created custom dashboards for security monitoring, and developed detection rules for common attack patterns.',
      tags: ['Splunk', 'SIEM', 'Log Analysis', 'Detection Rules'],
      links: {
        github: '#',
        external: '#',
      },
    },
    {
      title: 'Network Traffic Analysis',
      description: 'Analyzed network traffic using Wireshark and Suricata, identified suspicious activities, created IDS signatures, and documented findings for incident response procedures.',
      tags: ['Wireshark', 'Suricata', 'Network Security', 'IDS/IPS'],
      links: {
        github: '#',
        external: '#',
      },
    },
    {
      title: 'Python Security Automation',
      description: 'Developed Python scripts for automated log parsing, threat intelligence integration, and alert automation. Improved incident response time by 40% through automation.',
      tags: ['Python', 'Automation', 'Threat Intelligence', 'APIs'],
      links: {
        github: '#',
        external: '#',
      },
    },
    {
      title: 'Incident Response Playbook',
      description: 'Created comprehensive incident response playbooks for various attack scenarios including malware infections, data exfiltration, and ransomware attacks with step-by-step mitigation.',
      tags: ['IR', 'Playbooks', 'Best Practices', 'Documentation'],
      links: {
        github: '#',
        external: '#',
      },
    },
    {
      title: 'Vulnerability Assessment',
      description: 'Conducted vulnerability assessments using Nessus and OpenVAS, prioritized findings using CVSS scoring, and tracked remediation efforts with detailed reports.',
      tags: ['Vulnerability Management', 'Nessus', 'CVSS', 'Remediation'],
      links: {
        github: '#',
        external: '#',
      },
    },
    {
      title: 'Security Awareness Training',
      description: 'Developed and delivered security awareness training modules focusing on phishing detection, social engineering, and security best practices for end-users.',
      tags: ['Training', 'Awareness', 'Compliance', 'Best Practices'],
      links: {
        github: '#',
        external: '#',
      },
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Practical cybersecurity projects demonstrating hands-on expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <SpotlightCard
              key={index}
              className="p-6 flex flex-col h-full"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4 border-t border-gray-700">
                <a
                  href={project.links.github}
                  className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors"
                >
                  <Github size={16} />
                  <span className="text-sm">Code</span>
                </a>
                <a
                  href={project.links.external}
                  className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors"
                >
                  <ExternalLink size={16} />
                  <span className="text-sm">Details</span>
                </a>
              </div>
            </SpotlightCard>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-accent text-accent hover:bg-accent/10 font-semibold rounded-lg transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}
