import { profile } from '../data/content.js'
import Reveal from './Reveal.jsx'
import Magnetic from './Magnetic.jsx'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact">
      <div className="container contact-box">
        <Reveal><p className="eyebrow">05 — Contact</p></Reveal>
        <Reveal delay={0.05}>
          <h2 className="contact-title">Let's ship <span className="gradient-text">something together.</span></h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="contact-desc">
            Looking for entry-level software development roles right now — happy to talk
            about a specific opening, a technical screen, or just trade notes on LLM-integrated products.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="contact-actions">
            <Magnetic>
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </Magnetic>
            <Magnetic>
              <a className="btn btn-ghost" href={`tel:${profile.phone.replace(/\s/g, '')}`}>
                {profile.phone}
              </a>
            </Magnetic>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="contact-links">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
