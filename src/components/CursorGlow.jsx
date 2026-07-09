import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorGlow() {
  const x = useMotionValue(-200)
  const y = useMotionValue(-200)
  const sx = useSpring(x, { stiffness: 120, damping: 22, mass: 0.5 })
  const sy = useSpring(y, { stiffness: 120, damping: 22, mass: 0.5 })

  useEffect(() => {
    function handleMove(e) {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('pointermove', handleMove)
    return () => window.removeEventListener('pointermove', handleMove)
  }, [x, y])

  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 420,
        height: 420,
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 0,
        x: sx,
        y: sy,
        translateX: '-50%',
        translateY: '-50%',
        background: 'radial-gradient(circle, rgba(229,57,125,0.14) 0%, rgba(255,184,0,0.08) 45%, transparent 70%)',
        mixBlendMode: 'multiply',
      }}
    />
  )
}
