"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import image1 from "../../../public/image1.jpg"
import data from "@/data/data.json"
import image2 from "../../../public/image2.jpg"
import image3 from "../../../public/image3.jpg"

interface Project {
  id: string
  number: string
  category: string
  title: string
  description: string
  image: string
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()
  const getImage = (image: string) => {
    switch (image) {
      case "image1": return image1;
      case "image2": return image2;
      case "image3": return image3;
      default: return image1;
    }
  }
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.8,
            delay: index * 0.2 
          }
        }
      }}
    >
      <Card className="bg-background border-none shadow-none overflow-hidden mb-32">
        <CardContent className="p-0">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 p-6">
              <div className="flex justify-between items-center text-muted-foreground">
                <span>{project.category}</span>
                <span className="text-2xl">{project.number}</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-light">{project.title}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <motion.div
                initial={{ scale: 1.2 }}
                animate={isInView ? { scale: 1 } : { scale: 1.2 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-full h-full"
              >
                <Image src={getImage(project.image)} alt={project.title} width={800} height={600} className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function ProjectsSection() {
  return (
    <section className="py-20 space-y-20">
      <div className="container">
        {data.projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

