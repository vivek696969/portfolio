'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, ShieldCheck, Zap, FastForward, Lock } from 'lucide-react'

const bootLogs = [
  { text: '[SYS_INIT] Initializing Vivek Dhawan SOC Ops Matrix...', delay: 200 },
  { text: '[NET_CHECK] Verifying Secure Connection & TLS Handshake...', delay: 600 },
  { text: '[THREAT_SCAN] Scanning active vectors... 0 Anomalies Found.', delay: 1100 },
  { text: '[ACCESS_GRANTED] Security clearance level: RECRUITER_GUEST_1.', delay: 1600 },
]

export default function BootSequence() {
  const [visibleLogs, setVisibleLogs] = useState<string[]>([])
  const [progress, setProgress] = useState(0)
  const [isDone, setIsDone] = useState(false)
  const [showOverlay, setShowOverlay] = useState(true)

  useEffect(() => {
    // Check if already booted in session
    const hasBooted = sessionStorage.getItem('vd_soc_booted')
    if (hasBooted) {
      setShowOverlay(false)
      return
    }

    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, 40)

    // Log line triggers
    const timeouts = bootLogs.map((log) =>
      setTimeout(() => {
        setVisibleLogs((prev) => [...prev, log.text])
      }, log.delay)
    )

    // Complete boot sequence
    const finishTimeout = setTimeout(() => {
      setIsDone(true)
      sessionStorage.setItem('vd_soc_booted', 'true')
      setTimeout(() => setShowOverlay(false), 800)
    }, 2200)

    return () => {
      clearInterval(progressInterval)
      timeouts.forEach(clearTimeout)
      clearTimeout(finishTimeout)
    }
  }, [])

  const handleSkip = () => {
    setIsDone(true)
    sessionStorage.setItem('vd_soc_booted', 'true')
    setShowOverlay(false)
  }

  if (!showOverlay) return null

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary px-4 font-mono text-xs sm:text-sm text-gray-200 backdrop-blur-2xl"
        >
          {/* Cyber matrix grid background effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.15)_0%,_transparent_70%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSI0OSIgdmlld0JveD0iMCAwIDI4IDQ5Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMzMiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzkgMjZsLTIyIDE0LTIyLTE0di0yOGwyMi0xNGwyMiAxNHYyOHptLTIyIDEybDE4LTExdi0yMmwtMTgtMTFsLTE4IDExdjIybDE4IDExeiIvPjwvZz48L2c+PC9zdmc+')] opacity-25 pointer-events-none" />

          {/* Main Terminal Window */}
          <div className="relative w-full max-w-xl rounded-xl border border-accent/40 bg-secondary/90 shadow-[0_0_50px_rgba(14,165,233,0.25)] overflow-hidden">
            {/* Header bar */}
            <div className="flex items-center justify-between border-b border-gray-800 bg-primary/80 px-4 py-3">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-accent" />
                <span className="font-bold text-accent tracking-wider uppercase text-xs sm:text-sm">
                  SOC_OPS_TERMINAL // VIVEK_DHAWAN
                </span>
              </div>
              <button
                onClick={handleSkip}
                className="flex items-center gap-1 text-[11px] font-semibold text-gray-400 hover:text-accent transition-colors bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-md"
              >
                <span>SKIP</span>
                <FastForward className="h-3 w-3" />
              </button>
            </div>

            {/* Content output */}
            <div className="space-y-3 p-5 sm:p-6 min-h-[220px] flex flex-col justify-between">
              <div className="space-y-2">
                {visibleLogs.map((log, idx) => {
                  const isSuccess = log.includes('ACCESS_GRANTED')
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`flex items-start gap-2 ${
                        isSuccess ? 'text-emerald-400 font-bold' : 'text-cyan-300/90'
                      }`}
                    >
                      {isSuccess ? (
                        <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      ) : (
                        <Zap className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      )}
                      <span>{log}</span>
                    </motion.div>
                  )
                })}
              </div>

              {/* Progress bar */}
              <div className="space-y-2 pt-4 border-t border-gray-800/80">
                <div className="flex items-center justify-between text-xs font-semibold text-gray-400">
                  <span className="flex items-center gap-1.5 text-accent">
                    <Lock className="h-3.5 w-3.5 animate-pulse" />
                    DECRYPTING PORTFOLIO MATRIX...
                  </span>
                  <span className="text-cyan-400">{progress}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-primary border border-accent/30 p-0.5">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-accent via-cyan-400 to-emerald-400"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
