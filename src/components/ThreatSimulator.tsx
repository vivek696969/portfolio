'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShieldAlert, ShieldCheck, Terminal, Play, RotateCcw, AlertTriangle, Cpu } from 'lucide-react'

export default function ThreatSimulator() {
  const [status, setStatus] = useState<'threat' | 'mitigating' | 'secured'>('threat')
  const [logs, setLogs] = useState<string[]>([
    '[08:24:12] WARNING: 45 failed SSH login attempts from 192.168.1.105',
    '[08:24:14] ALERT: High frequency port scan detected on port 22',
  ])

  const handleMitigate = () => {
    setStatus('mitigating')
    setLogs((prev) => [...prev, '[08:24:16] > Running Python script: demo_firewall_rule --block 192.168.1.105'])

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        '[08:24:17] > Firewall rule added: DROP all traffic from 192.168.1.105',
        '[08:24:18] SUCCESS: Threat neutralized! Example block applied; further review required.',
      ])
      setStatus('secured')
    }, 1200)
  }

  const handleReset = () => {
    setStatus('threat')
    setLogs([
      '[08:24:12] WARNING: 45 failed SSH login attempts from 192.168.1.105',
      '[08:24:14] ALERT: High frequency port scan detected on port 22',
    ])
  }

  return (
    <div className="w-full max-w-md mx-auto rounded-2xl border border-accent/30 bg-secondary/80 p-5 shadow-[0_0_40px_rgba(14,165,233,0.15)] backdrop-blur-xl transition-all duration-300 hover:border-accent/60">
      {/* Widget Header */}
      <div className="flex items-center justify-between border-b border-gray-800 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <Cpu className="h-4 w-4 text-accent animate-pulse" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-gray-200">
            Network Security Demo
          </span>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-red-500/10 px-2 py-0.5 text-[10px] font-semibold text-red-400 border border-red-500/20">
          <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-ping" />
          SIMULATED
        </span>
      </div>

      {/* Threat Status Card */}
      <AnimatePresence mode="wait">
        {status === 'secured' ? (
          <motion.div
            key="secured"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3.5 mb-4"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-emerald-400 uppercase tracking-wide">
                SIMULATED RESPONSE COMPLETE
              </p>
              <p className="text-[11px] text-gray-300">
                Example response only; no real system is modified.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="threat"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex items-center gap-3 rounded-xl border border-amber-500/30 bg-amber-500/10 p-3.5 mb-4"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400">
              <ShieldAlert className="h-6 w-6 animate-pulse" />
            </div>
            <div>
              <p className="text-xs font-bold text-amber-400 uppercase tracking-wide">
                BRUTE-FORCE DETECTED (HIGH)
              </p>
              <p className="text-[11px] text-gray-300">
                Target: SSH Port 22 | Source: 192.168.1.105
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Terminal Mini Console */}
      <div className="rounded-lg border border-gray-800 bg-primary/90 p-3 mb-4 font-mono text-[11px] h-28 overflow-y-auto space-y-1">
        <div className="text-gray-500 flex items-center gap-1 mb-1">
          <Terminal className="h-3 w-3 text-accent" />
          <span>network-security-demo.log</span>
        </div>
        {logs.map((log, i) => (
          <p
            key={i}
            className={
              log.includes('SUCCESS')
                ? 'text-emerald-400 font-semibold'
                : log.includes('WARNING') || log.includes('ALERT')
                ? 'text-amber-400'
                : 'text-cyan-300'
            }
          >
            {log}
          </p>
        ))}
      </div>

      {/* Action Button */}
      {status === 'secured' ? (
        <button
          onClick={handleReset}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gray-800 border border-gray-700 px-4 py-2.5 text-xs font-semibold text-gray-200 hover:bg-gray-700 hover:text-white transition-all"
        >
          <RotateCcw className="h-3.5 w-3.5 text-accent" />
          Simulate New Threat Attack
        </button>
      ) : (
        <button
          onClick={handleMitigate}
          disabled={status === 'mitigating'}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-cyan-400 px-4 py-2.5 text-xs font-bold text-primary shadow-lg shadow-accent/20 hover:opacity-95 transition-all active:scale-[0.98] disabled:opacity-50"
        >
          {status === 'mitigating' ? (
            <>
              <span className="h-3 w-3 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              Simulating response...
            </>
          ) : (
            <>
              <Play className="h-3.5 w-3.5 fill-primary" />
              SIMULATE NETWORK RESPONSE
            </>
          )}
        </button>
      )}
    </div>
  )
}
