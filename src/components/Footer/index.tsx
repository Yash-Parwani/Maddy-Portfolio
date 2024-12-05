import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import data from "@/data/data.json"
export function Footer() {
  const { github, linkedin, email, phone } = data;
  return (
    <footer className="border-t border-border/50">
      <div className="max-w-[1400px] mx-auto px-12 py-8">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © 2024 Gayatri Malladi. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <Link
              href={github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cursor-pointer hover:scale-110 active:scale-95 transition-transform z-10"
            >
              <Github className="w-5 h-5" />
            </Link>

            <Link
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cursor-pointer hover:scale-110 active:scale-95 transition-transform z-10"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href={email} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cursor-pointer hover:scale-110 active:scale-95 transition-transform z-10"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}