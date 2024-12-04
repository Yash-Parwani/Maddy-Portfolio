'use client'

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRef } from "react"
import { ProjectsSection } from "../ProjectSection"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Paper, PaperCard} from "../PaperCard"
import { Footer } from "../Footer"
import Link from "next/link"

export function HeroSection() {
    const papers: Paper[] = [
        {
          id: "01",
          title: "Example Research Paper",
          authors: "Gayatri Malladi, et al.",
          conference: "International Conference on Computer Science",
          year: "2023",
          link: "https://example.com/paper",
          abstract: "This paper presents a novel approach to..."
        },
        {
          id: "02",
          title: "Example Research Paper",
          authors: "Gayatri Malladi, et al.",
          conference: "International Conference on Computer Science",
          year: "2023",
          link: "https://example.com/paper",
          abstract: "This paper presents a novel approach to..."
        },
        // Add more papers here
      ]
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const leftX = useTransform(scrollYProgress, [0, 0.2], [0, -1000])
  const rightX = useTransform(scrollYProgress, [0, 0.2], [0, 1000])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  const projectsOpacity = useTransform(scrollYProgress, [0.4, 0.7], [0.75, 1])
  const projectsY = useTransform(scrollYProgress, [0.4, 0.7], [100, 0])
  const papersOpacity = useTransform(scrollYProgress, [0.8, 0.9], [0.75, 1])
  const papersY = useTransform(scrollYProgress, [0.8, 0.9], [100, 0])

  return (
    <div ref={containerRef} className="min-h-[400vh]">
      <div className="sticky top-0 min-h-screen flex items-center justify-center p-12 overflow-hidden">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="grid grid-cols-[auto,1fr] gap-8">

            {/* Main Content */}
            <div className="grid grid-cols-[500px,1fr] gap-12">
              {/* Profile Card */}
              <motion.div 
                style={{ x: leftX, opacity }}
                className="relative"
              >
                <motion.div 
                  className="bg-[#7B6EF6] rounded-[32px] p-10 relative h-[600px]"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* About Me Label */}
                  <div className="absolute -top-4 -left-4 z-10">
                    <div className="flex items-center">
                      <div className="bg-black/90 text-white flex items-center gap-2 h-12 px-4 rounded-l-[24px]">
                        <span className="text-xl">✤</span>
                        <span className="text-sm font-medium tracking-wide">About Me</span>
                      </div>
                      <div 
                        className="h-12 w-12 bg-black/90 rounded-tr-[24px]"
                        style={{
                          clipPath: 'polygon(0 0, 100% 0, 0 100%)'
                        }}
                      />
                    </div>
                  </div>

                  {/* Profile Content */}
                  <div className="flex flex-col justify-between h-full">
                    <div className="mt-12 space-y-8">
                      <div className="w-48 h-48 mx-auto relative">
                        <Avatar className="w-48 h-48">
                          <AvatarImage 
                            src="/your-profile-image.jpg" 
                            alt="Profile" 
                            className="object-cover"
                          />
                          <AvatarFallback className="bg-[#FFB1E6]">GM</AvatarFallback>
                        </Avatar>
                        <div className="absolute inset-[-4px] border-4 border-white/30 rounded-full" />
                      </div>
                      
                      <div className="space-y-0 mt-12">
                        <h1 className="text-[64px] font-light leading-[1.1] text-white/95">I am,</h1>
                        <h2 className="text-[64px] font-light leading-[1.1] text-white/95">Gayatri</h2>
                        <h2 className="text-[64px] font-light leading-[1.1] text-white/95">Malladi</h2>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Content */}
              <motion.div 
                style={{ x: rightX, opacity }}
                className="space-y-8"
              >
                <h1 className="text-8xl font-light">Overview</h1>
                
                <div className="grid grid-cols-[1.5fr,1fr] gap-6">
                  <div className="relative aspect-[16/10] rounded-[24px] overflow-hidden bg-sky-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-white/90">
                        ▶
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-[#B4EDD4] rounded-[24px] p-8">
                      <div className="text-6xl font-light text-black">A</div>
                      <div className="text-lg font-light text-black/70">Projects</div>
                    </div>
                    
                    <div className="bg-[#7B6EF6] rounded-[24px] p-8">
                      <div className="text-6xl font-light">B</div>
                      <div className="text-lg font-light text-white/70">Papers</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <Link href="/chat" className="block">
                    <div className="bg-zinc-800 rounded-[24px] p-8 group transition-colors hover:bg-zinc-800/80">
                      <div className="text-2xl font-light">Portfolio Concierge</div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Chat with AI to learn more about my work
                      </p>
                    </div>
                  </Link>
                  
                  <div className="bg-black rounded-[24px] p-8 relative overflow-hidden">
                    <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[#FFB800]" />
                    <div className="relative z-10">
                      <div className="text-5xl font-light">C</div>
                      <div className="text-lg font-light">Awards.</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <motion.div 
        className="min-h-[120vh] py-32"
        style={{ 
          opacity: projectsOpacity,
          y: projectsY
        }}
      >
        <div className="max-w-[1400px] mx-auto px-12">
          <h1 className="text-8xl font-light mb-20">Projects</h1>
          <ProjectsSection />
        </div>
      </motion.div>

      {/* Papers Section */}
      <motion.div 
        className="min-h-[120vh] py-32"
        style={{ 
          opacity: papersOpacity,
          y: papersY
        }}
      >
        <div className="max-w-[1400px] mx-auto px-12">
          <h1 className="text-8xl font-light mb-20">Papers</h1>
          <div className="grid gap-8">
            {papers.map((paper) => (
              <PaperCard key={paper.id} paper={paper} />
            ))}
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  )
}