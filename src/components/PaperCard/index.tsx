'use client'

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export interface Paper {
  id: string
  title: string
  authors: string
  conference: string
  year: string
  link: string
  abstract: string
}


export function PaperCard({ paper }: { paper: Paper }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      <Card className="bg-card/50 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-light">{paper.title}</h3>
            <p className="text-muted-foreground">{paper.authors}</p>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>{paper.conference}</span>
              <span>{paper.year}</span>
            </div>
            <p className="text-sm text-muted-foreground">{paper.abstract}</p>
            <Link 
              href={paper.link}
              className="inline-block text-primary hover:text-primary/80 transition-colors"
              target="_blank"
            >
              Read Paper →
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}