import { useEffect } from 'react'
import './ProjectModal.css'

export default function ProjectModal({ project, onClose }) {
   useEffect(() => {
    if (!project) return

    function handleEsc(e) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  if (!project) return null
  const cs = project.caseStudy


  return (
    <div className="pm-overlay" onClick={onClose}>
      <div className="pm-panel" onClick={(e) => e.stopPropagation()}>
        <button className="pm-close" onClick={onClose} aria-label="Close case study">✕</button>

        <p className="pm-tag">{project.tag}</p>
        <h3 className="pm-title">{project.name}</h3>
        {project.image && (
  <img src={project.image} alt={`${project.name} screenshot`} style={{ width: '100%', borderRadius: '12px', marginBottom: '24px' }} />
)}

        <div className="pm-stack">
          {project.stack.map((s) => <span className="pm-chip" key={s}>{s}</span>)}
        </div>

        {cs && (
          <div className="pm-body">
            <section>
              <p className="pm-label">The problem</p>
              <p className="pm-text">{cs.problem}</p>
            </section>
            <section>
              <p className="pm-label">Approach</p>
              <p className="pm-text">{cs.approach}</p>
            </section>
            <section>
              <p className="pm-label">Key decisions</p>
              <ul className="pm-list">
                {cs.decisions.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </section>
            <section>
              <p className="pm-label">Outcome</p>
              <p className="pm-text">{cs.outcome}</p>
            </section>
          </div>
        )}

        <div className="pm-links">
          <a className="btn btn-primary" href={project.live} target="_blank" rel="noreferrer">Visit live →</a>
          <a className="btn btn-ghost" href={project.repo} target="_blank" rel="noreferrer">Source</a>
        </div>
      </div>
    </div>
  )
}