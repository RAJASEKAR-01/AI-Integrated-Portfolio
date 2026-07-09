import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { timeline } from '../data/content.js'
import Reveal from './Reveal.jsx'
import './Experience.css'

export default function Experience() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.6'],
  })
  const height = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <section id="experience">
      <div className="container">
        <Reveal><p className="eyebrow">04 — Timeline</p></Reveal>
        <Reveal delay={0.05}><h2>How it's gone <span className="gradient-text">so far.</span></h2></Reveal>

        <div className="timeline" ref={ref}>
          <div className="timeline-rail">
            <motion.div className="timeline-progress" style={{ scaleY: height }} />
          </div>
          {timeline.map((item, i) => (
            <Reveal delay={0.06 * i} key={i} className="timeline-item">
              <div className="timeline-marker" />
              <span className="timeline-date">{item.date}</span>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-detail">{item.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
