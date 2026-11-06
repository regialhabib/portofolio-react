import { motion, useReducedMotion } from 'motion/react'

// Muncul (fade + naik) saat elemen masuk layar, sekali saja
export default function Reveal({ children, delay = 0, y = 24, className }) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  )
}
