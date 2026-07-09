import { useRef, useState } from 'react'
import { clientWork } from '../data/content.js'
import Reveal from './Reveal.jsx'
import Magnetic from './Magnetic.jsx'
import './ClientWork.css'

export default function ClientWork() {
  const [paused, setPaused] = useState(false)
  const trackItems = [...clientWork, ...clientWork]

  return (
    <section id="client-work">
      <div className="container">
        <Reveal><p className="eyebrow">Freelance & Client Work</p></Reveal>
        <Reveal delay={0.05}><h2>Built for <span className="gradient-text">real businesses.</span></h2></Reveal>
        <Reveal delay={0.1}>
          <div className="section-intro">
            <p>Client sites delivered end-to-end, separate from my personal AI-integrated builds.</p>
          </div>
        </Reveal>
      </div>

      <div
        className="cw-carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        <div className={`cw-track ${paused ? 'cw-paused' : ''}`}>
          {trackItems.map((c, i) => (
            <div className="clientwork-card" key={`${c.id}-${i}`}>
              {c.image && (
                <div className="clientwork-image-wrap">
                  <img src={c.image} alt={`${c.name} screenshot`} className="clientwork-image" />
                </div>
              )}
              <div className="clientwork-body">
                <h3 className="clientwork-name">{c.name}</h3>
                <p className="clientwork-desc">{c.description}</p>
                <div className="clientwork-stack">
                  {c.stack.map((s) => <span className="clientwork-chip" key={s}>{s}</span>)}
                </div>
                <Magnetic strength={0.3}>
                  <a className="btn btn-ghost" href={c.live} target="_blank" rel="noreferrer">
                    Visit site →
                  </a>
                </Magnetic>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}