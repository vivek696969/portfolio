'use client';
import { useState } from 'react';
import { BookOpen, Clock, ArrowRight, ShieldCheck, Tag, Terminal, Zap, TrendingUp } from 'lucide-react';
import BlogPostModal from './BlogPostModal';

export default function Blog() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="blog" className="py-24 relative bg-primary/60 border-t border-gray-800/60">
      {/* Background glow accents */}
      <div className="absolute top-1/3 left-1/4 h-72 w-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3.5 py-1 text-xs font-semibold text-accent">
            <BookOpen className="h-3.5 w-3.5" />
            Cybersecurity Blog & Career Insights
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Latest <span className="bg-gradient-to-r from-accent to-cyan-400 bg-clip-text text-transparent">Articles & Guides</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            In-depth guides, career roadmaps, and technical breakdowns designed to help aspiring cybersecurity professionals land their first role.
          </p>
        </div>

        {/* Featured Blog Card */}
        <div className="max-w-4xl mx-auto">
          <div className="group relative rounded-2xl border border-gray-800 bg-secondary/30 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10">
            
            {/* Top badges */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-accent/15 border border-accent/30 px-3 py-1 text-xs font-semibold text-accent">
                  <Tag className="h-3 w-3" /> SOC Analyst
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 px-3 py-1 text-xs font-semibold text-cyan-400">
                  Career Guide
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/15 border border-blue-500/30 px-3 py-1 text-xs font-semibold text-blue-400">
                  Blue Team
                </span>
              </div>
              <span className="flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                <Clock className="h-3.5 w-3.5 text-cyan-400" /> 8 min read
              </span>
            </div>

            {/* Title & Preview */}
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-white transition-colors group-hover:text-accent leading-snug">
                Why SOC Roles Are the Best Starting Point for Any Fresher Entering Cybersecurity
              </h3>
              
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Struggling to break into Cybersecurity because every "entry-level" job demands 3+ years of experience? 
                Discover why starting as a Tier-1 SOC Analyst breaks the experience barrier, equips you with real-world threat visibility, and opens doors to Pentesting, IR, and Security Engineering.
              </p>
            </div>

            {/* Highlighted Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6 pt-4 border-t border-gray-800/80">
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <ShieldCheck className="h-4 w-4 text-accent shrink-0" />
                <span>Real-World siem & EDR Threat Analysis</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <Zap className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>Includes Interactive SOC Triage Simulator</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <TrendingUp className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>4-Step - Entry Roadmap and Certifications</span>
              </div>
            </div>

            {/* Read Article Action */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-800/80">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-accent to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                  VD
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Vivek Dhawan</div>
                  <div className="text-xs text-gray-400">Cybersecurity Specialist</div>
                </div>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-dark hover:gap-3 shadow-lg shadow-accent/20"
              >
                Read Full Article
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* Article Reader Modal */}
      <BlogPostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
