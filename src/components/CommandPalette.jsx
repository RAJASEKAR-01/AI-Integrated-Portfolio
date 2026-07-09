import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/content.js'
import './CommandPalette.css'

const ACTIONS = [
  { id: 'about', label: 'Go to About', hint: 'section', run: () => scrollTo('about') },
  { id: 'skills', label: 'Go to Skills', hint: 'section', run: () => scrollTo('skills') },
  { id: 'projects', label: 'Go to Projects', hint: 'section', run: () => scrollTo('projects') },
  { id: 'experience', label: 'Go to Experience', hint: 'section', run: () => scrollTo('experience') },
  { id: 'contact', label: 'Go to Contact', hint: 'section', run: () => scrollTo('contact') },
  { id: 'github', label: 'Open GitHub', hint: 'external', run: () => window.open(profile.github, '_blank') },
  { id: 'linkedin', label: 'Open LinkedIn', hint: 'external', run: () => window.open(profile.linkedin, '_blank') },
  {
    id: 'email',
    label: `Copy email (${profile.email})`,
    hint: 'action',
    run: (setToast) => {
      navigator.clipboard.writeText(profile.email)
      setToast('Email copied to clipboard')
    },
  },
  { id: 'top', label: 'Back to top', hint: 'section', run: () => scrollTo('top') },
]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const [toast, setToast] = useState(null)
  const inputRef = useRef(null)

  const filtered = ACTIONS.filter((a) =>
    a.label.toLowerCase().includes(query.toLowerCase())
  )

  useEffect(() => {
    function handleGlobalKey(e) {
      const isK = e.key.toLowerCase() === 'k'
      if ((e.metaKey || e.ctrlKey) && isK) {
        e.preventDefault()
        setOpen((o) => !o)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handleGlobalKey)
    return () => window.removeEventListener('keydown', handleGlobalKey)
  }, [])

  useEffect(() => {
    if (open) {
      setQuery('')
      setActiveIndex(0)
      setTimeout(() => inputRef.current?.focus(), 10)
    }
  }, [open])

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 1800)
    return () => clearTimeout(t)
  }, [toast])

  function handleKeyDown(e) {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1))
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((i) => Math.max(i - 1, 0))
    }
    if (e.key === 'Enter' && filtered[activeIndex]) {
      filtered[activeIndex].run(setToast)
      setOpen(false)
    }
  }

  return (
    <>
      {toast && <div className="cp-toast">{toast}</div>}

      {!open && (
        <button className="cp-trigger" onClick={() => setOpen(true)} aria-label="Open command palette">
          <span>⌘K</span>
        </button>
      )}

      {open && (
        <div className="cp-overlay" onClick={() => setOpen(false)}>
          <div className="cp-panel" onClick={(e) => e.stopPropagation()}>
            <input
              ref={inputRef}
              className="cp-input"
              placeholder="Type a command or search..."
              value={query}
              onChange={(e) => { setQuery(e.target.value); setActiveIndex(0) }}
              onKeyDown={handleKeyDown}
            />
            <div className="cp-list">
              {filtered.length === 0 && <p className="cp-empty">No matching commands</p>}
              {filtered.map((a, i) => (
                <button
                  key={a.id}
                  className={`cp-item ${i === activeIndex ? 'cp-item-active' : ''}`}
                  onMouseEnter={() => setActiveIndex(i)}
                  onClick={() => { a.run(setToast); setOpen(false) }}
                >
                  <span>{a.label}</span>
                  <span className="cp-hint">{a.hint}</span>
                </button>
              ))}
            </div>
            <div className="cp-footer">
              <span>↑↓ navigate</span>
              <span>↵ select</span>
              <span>esc close</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}