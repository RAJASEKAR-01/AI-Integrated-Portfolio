import { useEffect, useRef, useState } from 'react'
import { profile, projects } from '../data/content.js'
import './InteractiveTerminal.css'

const COMMANDS = {
  help: () => [
    'available commands:',
    '  about       — who I am',
    '  projects    — what I have shipped',
    '  skills      — my stack',
    '  contact     — how to reach me',
    '  clear       — clear the terminal',
  ],
  about: () => [
    `${profile.name} — full stack developer, cyber security graduate.`,
    'Building MERN products with LLMs wired into the architecture, not bolted on.',
  ],
  projects: () => projects.flatMap((p) => [`${p.name} — ${p.tag}`, `  live: ${p.live}`, '']),
  skills: () => ['React · Node.js · Express · MongoDB · Gemini API · RAG · Prompt Engineering'],
  contact: () => [`email: ${profile.email}`, `github: ${profile.github}`, `linkedin: ${profile.linkedin}`],
  whoami: () => [profile.role.toLowerCase()],
}

export default function InteractiveTerminal() {
  const [history, setHistory] = useState([
    { type: 'output', text: `Welcome. Type 'help' to see what I can do.` },
  ])
  const [input, setInput] = useState('')
  const bodyRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight })
  }, [history])

  function runCommand(raw) {
    const cmd = raw.trim().toLowerCase()
    if (!cmd) return
    const entry = { type: 'command', text: raw }

    if (cmd === 'clear') {
      setHistory([])
      return
    }

    const handler = COMMANDS[cmd]
    const output = handler
      ? handler().map((text) => ({ type: 'output', text }))
      : [{ type: 'error', text: `command not found: ${cmd} — type 'help'` }]

    setHistory((h) => [...h, entry, ...output])
  }

  function handleSubmit(e) {
    e.preventDefault()
    runCommand(input)
    setInput('')
  }

  return (
    <div className="iterm" onClick={() => inputRef.current?.focus()}>
      <div className="iterm-bar">
        <span className="dot dot-a" /><span className="dot dot-b" /><span className="dot dot-c" />
        <span className="iterm-title">rajasekar@portfolio ~</span>
      </div>
      <div className="iterm-body" ref={bodyRef}>
        {history.map((line, i) => (
          <p key={i} className={`iterm-line iterm-${line.type}`}>
            {line.type === 'command' ? <><span className="prompt">$</span> {line.text}</> : line.text}
          </p>
        ))}
        <form onSubmit={handleSubmit} className="iterm-input-row">
          <span className="prompt">$</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            
            spellCheck={false}
            aria-label="Terminal command input"
          />
        </form>
      </div>
    </div>
  )
}