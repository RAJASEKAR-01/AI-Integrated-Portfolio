import { profile } from '../data/content.js'
import Magnetic from './Magnetic.jsx'
import './Nav.css'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="nav-logo">
          {profile.name}<span className="gradient-text">.</span>
        </a>
        <nav className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <Magnetic strength={0.25}>
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-ghost nav-cta">
            GitHub ↗
          </a>
        </Magnetic>
      </div>
    </header>
  )
}
