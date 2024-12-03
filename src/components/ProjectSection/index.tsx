"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import image1 from "../../../public/image1.jpg"
interface Project {
  id: string
  number: string
  category: string
  title: string
  description: string
  image: string
}

const projects: Project[] = [
  {
    id: "01",
    number: "01",
    category: "Web Development",
    title: "Prescient",
    description: "Technologies used: WordPress with a Theme Composer to accelerate the development process. However, this solution lacks flexibility and optimization. The site is planned to be rebuilt in the future using a headless CMS for improved performance and optimized maintenance.",
    image: "/placeholder.svg?height=600&width=800"
  },
  {
    id: "02",
    number: "02",
    category: "Mobile Development",
    title: "Health App",
    description: "A comprehensive health tracking application built with React Native. Features include workout tracking, meal planning, and progress visualization.",
    image: "/placeholder.svg?height=600&width=800"
  },
  {
    id: "03",
    number: "03",
    category: "AI/ML",
    title: "Smart Analytics",
    description: "An AI-powered analytics platform that provides insights from user behavior data. Built using Python and TensorFlow with a React frontend.",
    image: "/placeholder.svg?height=600&width=800"
  }
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

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
                <Image src={image1} alt={project.title} width={800} height={600} className="w-full h-full object-cover" />
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
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

