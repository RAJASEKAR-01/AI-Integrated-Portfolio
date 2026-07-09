import Magnetic from './Magnetic.jsx'

export default function ResumeButton({ className = 'btn btn-ghost' }) {
  return (
    <Magnetic strength={0.3}>
      <a
        className={className}
        href="/resume/Rajasekar-Resume.pdf"
        download="Rajasekar-Resume.pdf"
        target="_blank"
        rel="noreferrer"
      >
        Download resume ↓
      </a>
    </Magnetic>
  )
}