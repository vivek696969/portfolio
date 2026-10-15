'use client'

import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { engineeringGuide } from '@/data/engineering-guide'

interface BlogPostModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BlogPostModal({ isOpen, onClose }: BlogPostModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!isOpen || !dialog) return
    const previousOverflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      dialog.close()
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="engineering-guide-title"
      onCancel={onClose}
      className="m-auto w-[calc(100%-2rem)] max-w-4xl max-h-[90vh] rounded-2xl border border-gray-700 bg-primary text-gray-300 p-0 backdrop:bg-slate-950/80"
    >
      <div className="flex items-center justify-between gap-4 border-b border-gray-700 p-5">
        <span className="font-mono text-xs uppercase tracking-wider text-accent">Development · Networks · Security</span>
        <button autoFocus onClick={onClose} aria-label="Close article" className="rounded-lg p-2 hover:bg-white/10 focus-visible:outline focus-visible:outline-accent">
          <X size={22} />
        </button>
      </div>
      <article className="space-y-8 p-6 sm:p-10">
        <h2 id="engineering-guide-title" className="text-3xl font-bold text-white">{engineeringGuide.title}</h2>
        <p className="leading-relaxed">{engineeringGuide.intro}</p>
        {engineeringGuide.sections.map(section => (
          <section key={section.title} className="space-y-3">
            <h3 className="text-xl font-semibold text-accent">{section.title}</h3>
            <p className="leading-relaxed">{section.body}</p>
          </section>
        ))}
        <a href="#projects" onClick={onClose} className="inline-block rounded-lg bg-accent px-5 py-3 font-semibold text-primary">Explore my project tracks</a>
      </article>
    </dialog>
  )
}
