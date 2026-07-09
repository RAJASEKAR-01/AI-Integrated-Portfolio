import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function TiltCard({ children, className = '' }) {
  const ref = useRef(null)
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)

  const spx = useSpring(px, { stiffness: 150, damping: 18 })
  const spy = useSpring(py, { stiffness: 150, damping: 18 })

  const rotateX = useTransform(spy, [0, 1], [8, -8])
  const rotateY = useTransform(spx, [0, 1], [-8, 8])
  const glowX = useTransform(px, [0, 1], ['10%', '90%'])
  const glowY = useTransform(py, [0, 1], ['10%', '90%'])

  function handleMove(e) {
    const rect = ref.current.getBoundingClientRect()
    px.set((e.clientX - rect.left) / rect.width)
    py.set((e.clientY - rect.top) / rect.height)
  }

  function handleLeave() {
    px.set(0.5)
    py.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={`tilt-card ${className}`}
    >
      <motion.div
        className="tilt-card-glow"
        style={{ background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(229,57,125,0.16), transparent 60%)` }}
      />
      {children}
    </motion.div>
  )
}
