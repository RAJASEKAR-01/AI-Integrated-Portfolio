import { credentials } from '../data/content.js'
import Reveal from './Reveal.jsx'
import './About.css'
import GitHubStats from './GitHubStats.jsx'
export default function About() {
  return (
    <section id="about">
      <div className="container about-grid">
        <div>
          <Reveal><p className="eyebrow">01 — About</p></Reveal>
          <Reveal delay={0.05}>
            <h2>Cyber security roots, <span className="gradient-text">full stack build habits.</span></h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="about-body">
              I came up through a Cyber Security degree, which means I default to asking
              "what breaks this" before "what does this look like" — a habit that carries
              over into how I structure APIs, handle auth, and think about data flow in
              the products I build. From there I taught myself the rest of the stack:
              React on the frontend, Node and Express on the backend, and LLM integration
              as a genuine architectural layer rather than an afterthought.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="about-body">
              Right now that means building and shipping two live products end-to-end,
              taking on freelance web and SEO work for real clients, and applying for
              entry-level developer roles where I can do this at a larger scale.
            </p>
          </Reveal>
          <Reveal delay={0.2}><GitHubStats /></Reveal>
        </div>
        <div className="credentials">
          {credentials.map((c, i) => (
            <Reveal delay={0.1 + i * 0.08} key={c.label}>
              <div className="credential-card">
                <p className="credential-label">{c.label}</p>
                <p className="credential-detail">{c.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
