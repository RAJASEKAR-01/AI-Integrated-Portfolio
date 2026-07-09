import TiltCard from './TiltCard.jsx'
import Magnetic from './Magnetic.jsx'
import './ProjectCard.css'

export default function ProjectCard({ project, onOpenCaseStudy }) {
  return (
    <TiltCard className="project-card">
      {project.image && (
        <div className="project-image-wrap">
          <img src={project.image} alt={`${project.name} screenshot`} className="project-image" />
        </div>
      )}

      <div className="project-head">
        <div>
          <p className="project-tag">{project.tag}</p>
          <h3 className="project-name">{project.name}</h3>
        </div>
        <span className="status">
          <span className="status-dot" /> {project.status}
        </span>
      </div>

      <p className="project-desc">{project.description}</p>

      <div className="stack-row">
        {project.stack.map((s) => (
          <span className="stack-chip" key={s}>{s}</span>
        ))}
      </div>

      <div className="project-links">
        <Magnetic strength={0.3}>
          <a className="btn btn-primary" href={project.live} target="_blank" rel="noreferrer">
            Visit live →
          </a>
        </Magnetic>
        {project.repo && (
          <Magnetic strength={0.3}>
            <a className="btn btn-ghost" href={project.repo} target="_blank" rel="noreferrer">
              Source
            </a>
          </Magnetic>
        )}
        {project.caseStudy && onOpenCaseStudy && (
          <Magnetic strength={0.3}>
            <button className="btn btn-ghost" onClick={onOpenCaseStudy}>
              Case study →
            </button>
          </Magnetic>
        )}
      </div>
    </TiltCard>
  )
}