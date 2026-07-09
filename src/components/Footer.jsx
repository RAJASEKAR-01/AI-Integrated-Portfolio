import { profile } from '../data/content.js'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p className="footer-mono">built with react + vite</p>
      </div>
    </footer>
  )
}
