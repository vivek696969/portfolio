'use client'

import { Code2, Shield, BarChart3, Database } from 'lucide-react'
import SpotlightCard from './SpotlightCard'

export default function Skills() {
  const skillCategories = [
    {
      icon: Shield,
      title: 'Security Tools',
      skills: ['Splunk', 'ELK Stack', 'Wireshark', 'Suricata'],
    },
    {
      icon: BarChart3,
      title: 'SIEM & Monitoring',
      skills: ['Event Correlation', 'Log Analysis', 'Alert Tuning', 'Baseline Analysis'],
    },
    {
      icon: Code2,
      title: 'Technical Skills',
      skills: ['Python', 'Bash/PowerShell', 'SQL', 'Regex', 'Linux/Windows'],
    },
    {
      icon: Database,
      title: 'Frameworks & Standards',
      skills: ['NIST', 'ISO 27001', 'CIS Controls', 'MITRE ATT&CK'],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Core competencies as a cybersecurity SOC analyst
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <SpotlightCard
                key={index}
                className="p-6 flex flex-col h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/20 rounded-lg">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="text-gray-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            )
          })}
        </div>

        {/* Proficiency Chart */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8">Technical Proficiency</h3>
          <div className="space-y-4">
            {[
              { name: 'SIEM Tools', level: 85 },
              { name: 'Python & Scripting', level: 75 },
              { name: 'Network Analysis', level: 80 },
              { name: 'Linux/Windows Administration', level: 70 },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-accent">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-700/30 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-accent to-cyan-400 h-2 rounded-full"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
