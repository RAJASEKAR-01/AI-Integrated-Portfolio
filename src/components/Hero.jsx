import { motion } from 'framer-motion'
import { profile } from '../data/content.js'
import Magnetic from './Magnetic.jsx'
import './Hero.css'
import ResumeButton from './ResumeButton.jsx'
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}

const word = {
  hidden: { y: '110%', opacity: 0 },
  show: { y: '0%', opacity: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

function AnimatedTitle({ text, className }) {
  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      animate="show"
      style={{ display: 'inline-block' }}
    >
      {text.split(' ').map((w, i) => (
        <span className="word-mask" key={i}>
          <motion.span variants={word} style={{ display: 'inline-block' }}>
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          Available for entry-level roles
        </motion.p>

        <h1 className="hero-title">
          <AnimatedTitle text={`${profile.name},`} />
          <br />
          <AnimatedTitle text="AI-integrated" className="gradient-text" />
          <br />
          <AnimatedTitle text="full stack developer." />
        </h1>

        <motion.p
          className="hero-desc"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Building MERN products out of {profile.location}, with Gemini API wired into
          the architecture — not stapled on as a chat widget.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
        >
          <Magnetic>
            <a className="btn btn-primary" href="#projects">See the work →</a>
          </Magnetic>
          <Magnetic>
            <a className="btn btn-ghost" href="#contact">Get in touch</a>
          </Magnetic>
          <Magnetic>
             <ResumeButton />
          </Magnetic>
        </motion.div>
        
      </div>
      

      <motion.div
        className="hero-scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="scroll-line" />
        scroll
      </motion.div>
    </section>
  )
}
