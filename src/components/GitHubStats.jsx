import { useEffect, useState } from 'react'
import './GitHubStats.css'

const USERNAME = 'RAJASEKAR-01'

function useCountUp(target, duration = 1200) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    let start
    function step(ts) {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      setValue(Math.round(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target])
  return value
}

export default function GitHubStats() {
  const [stats, setStats] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function load() {
      try {
        const userRes = await fetch(`https://api.github.com/users/${USERNAME}`)
        const user = await userRes.json()
        const reposRes = await fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100`)
        const repos = await reposRes.json()
        const stars = Array.isArray(repos) ? repos.reduce((sum, r) => sum + r.stargazers_count, 0) : 0
        setStats({ repos: user.public_repos ?? 0, followers: user.followers ?? 0, stars })
      } catch {
        setError(true)
      }
    }
    load()
  }, [])

  const repos = useCountUp(stats?.repos ?? 0)
  const followers = useCountUp(stats?.followers ?? 0)
  const stars = useCountUp(stats?.stars ?? 0)

  if (error) return null

  return (
    <div className="ghstats">
      <div className="ghstat">
        <span className="ghstat-num">{stats ? repos : '—'}</span>
        <span className="ghstat-label">public repos</span>
      </div>
      <div className="ghstat">
        <span className="ghstat-num">{stats ? stars : '—'}</span>
        <span className="ghstat-label">stars earned</span>
      </div>
      <div className="ghstat">
        <span className="ghstat-num">{stats ? followers : '—'}</span>
        <span className="ghstat-label">followers</span>
      </div>
    </div>
  )
}