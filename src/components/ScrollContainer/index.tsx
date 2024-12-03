'use client'

import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"

export default function ScrollContainer({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const x = useTransform(scrollYProgress, [0, 1], [0, -300])

  return (
    <motion.div
      ref={containerRef}
      style={{ x }}
      className="min-h-[200vh]"
    >
      {children}
    </motion.div>
  )
}