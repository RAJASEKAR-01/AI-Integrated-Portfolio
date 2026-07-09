import { useState } from 'react'
import { skillTree } from '../data/content.js'
import Reveal from './Reveal.jsx'
import './Skills.css'

export default function Skills() {
  const [openDir, setOpenDir] = useState(null)

  return (
    <section id="skills">
      <div className="container">
        <Reveal><p className="eyebrow">02 — Stack</p></Reveal>
        <Reveal delay={0.05}><h2>What's in the directory.</h2></Reveal>
        <Reveal delay={0.1}>
          <div className="section-intro">
            <p>Click a directory to see what I actually built with it.</p>
          </div>
        </Reveal>

        <div className="filetree">
          {skillTree.map((group, i) => {
            const isOpen = openDir === group.dir
            return (
              <Reveal delay={0.05 * i} key={group.dir}>
                <div className="filetree-group">
                  <button
                    className="filetree-dir"
                    onClick={() => setOpenDir(isOpen ? null : group.dir)}
                    aria-expanded={isOpen}
                  >
                    <span className="filetree-icon">{isOpen ? '▾' : '▸'}</span>{group.dir}
                  </button>
                  <ul className="filetree-items">
                    {group.items.map((item) => (
                      <li key={item.name}>
                        {item.name}
                        {isOpen && <span className="filetree-evidence">{item.evidence}</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}