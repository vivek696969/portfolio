'use client'

import { Award } from 'lucide-react'

export default function Certifications() {
  const certifications = [
    {
      title: 'CompTIA Security+',
      issuer: 'CompTIA',
      date: '2024',
      status: 'Achieved',
      description: 'Covers IT security fundamentals, network security, threat management, and more.',
    },
    {
      title: 'Google Cybersecurity Professional Certificate',
      issuer: 'Google / Coursera',
      date: '2024',
      status: 'Achieved',
      description: 'Hands-on training in SIEM tools, incident response, and security operations.',
    },
    {
      title: 'CISCO CCNA Cybersecurity Operations',
      issuer: 'CISCO',
      date: 'In Progress',
      status: 'Pursuing',
      description: 'Advanced training in SOC operations, threat analysis, and incident management.',
    },
    {
      title: 'CEH (Certified Ethical Hacker)',
      issuer: 'EC-Council',
      date: 'Planned',
      status: 'Planned',
      description: 'Comprehensive ethical hacking and penetration testing certification.',
    },
  ]

  return (
    <section id="certs" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications & <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Industry-recognized certifications validating expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass rounded-lg p-6 border border-gray-700/50 hover:border-accent/50 card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/20 rounded-lg flex-shrink-0">
                  <Award size={24} className="text-accent" />
                </div>
                <div className="flex-grow">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold">{cert.title}</h3>
                      <p className="text-sm text-gray-400">{cert.issuer}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        cert.status === 'Achieved'
                          ? 'bg-accent/20 text-accent'
                          : cert.status === 'Pursuing'
                          ? 'bg-yellow-500/20 text-yellow-400'
                          : 'bg-gray-700/20 text-gray-400'
                      }`}
                    >
                      {cert.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">{cert.description}</p>
                  <p className="text-xs text-gray-500">{cert.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Training & Learning */}
        <div className="mt-16 bg-secondary/50 rounded-lg p-8 border border-gray-700/50">
          <h3 className="text-2xl font-bold mb-6">Continuous Learning</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Online Courses',
                items: ['TryHackMe', 'HackTheBox', 'Coursera', 'Udemy'],
              },
              {
                title: 'Certifications Pursuing',
                items: ['CISSP', 'CISM', 'OSCP', 'GCIH'],
              },
              {
                title: 'Industry Resources',
                items: ['SANS', 'Offensive Security', 'Cybrary', 'LinkedIn Learning'],
              },
            ].map((section, idx) => (
              <div key={idx}>
                <h4 className="text-accent font-semibold mb-3">{section.title}</h4>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="text-gray-400 flex items-center gap-2">
                      <span className="w-1 h-1 bg-accent rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
