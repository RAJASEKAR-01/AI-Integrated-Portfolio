import { useState, useRef } from 'react'
import { projects, clientWork } from '../data/content.js'
import ProjectCard from './ProjectCard.jsx'
import ProjectModal from './ProjectModal.jsx'
import Reveal from './Reveal.jsx'
import './Projects.css'

const allItems = [...projects, ...clientWork]

export default function Projects() {
  const [selected, setSelected] = useState(null)
  const trackRef = useRef(null)
  const trackItems = [...allItems, ...allItems]

  function pause() {
    if (trackRef.current) trackRef.current.style.animationPlayState = 'paused'
  }

  function resume() {
    if (trackRef.current) trackRef.current.style.animationPlayState = 'running'
  }

  return (
    <section id="projects">
      <div className="container">
        <Reveal><p className="eyebrow">03 — Projects</p></Reveal>
        <Reveal delay={0.05}><h2>Deployed, <span className="gradient-text">not just prototyped.</span></h2></Reveal>
        <Reveal delay={0.1}>
          <div className="section-intro">
            <p>Personal builds and client work, shipped end-to-end. Hover to pause and look closer.</p>
          </div>
        </Reveal>
      </div>

      <div
        className="projects-carousel"
        onMouseEnter={pause}
        onMouseLeave={resume}
        onTouchStart={pause}
        onTouchEnd={resume}
      >
        <div className="projects-track" ref={trackRef}>
          {trackItems.map((p, i) => (
            <div className="projects-item" key={`${p.id}-${i}`}>
              <ProjectCard
                project={p}
                onOpenCaseStudy={p.caseStudy ? () => setSelected(p) : undefined}
              />
            </div>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}