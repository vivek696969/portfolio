'use client'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate cybersecurity professional with a strong foundation in security operations and threat analysis
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image placeholder */}
          <div className="bg-gradient-to-br from-accent/20 to-cyan-400/20 rounded-lg h-96 flex items-center justify-center border border-accent/30">
            <p className="text-gray-400">Profile Image</p>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              I'm a cybersecurity enthusiast starting my career as a SOC Analyst. With hands-on experience in security monitoring, threat detection, and incident response, I'm committed to protecting organizations from cyber threats.
            </p>

            <p className="text-gray-300 leading-relaxed">
              My journey in cybersecurity includes practical lab work with SIEM tools, vulnerability assessment, and security compliance frameworks. I'm eager to apply my knowledge in a professional environment and continuously develop expertise in the security field.
            </p>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-accent">What I Focus On:</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">→</span>
                  <span>Security Operations Center (SOC) activities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">→</span>
                  <span>Threat detection and incident response</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">→</span>
                  <span>Log analysis and SIEM platforms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">→</span>
                  <span>Security best practices and compliance</span>
                </li>
              </ul>
            </div>

            <button className="px-6 py-2 border-2 border-accent text-accent hover:bg-accent/10 font-semibold rounded-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
