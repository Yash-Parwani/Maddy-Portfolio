import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="max-w-[1400px] mx-auto px-12 py-8">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © 2024 Gayatri Malladi. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => window.open('https://github.com', '_blank')}
              className="cursor-pointer hover:scale-110 active:scale-95 transition-transform"
            >
              <Github className="w-5 h-5" />
            </Button>

            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => window.open('https://linkedin.com', '_blank')}
              className="cursor-pointer hover:scale-110 active:scale-95 transition-transform"
            >
              <Linkedin className="w-5 h-5" />
            </Button>

            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => window.open('https://twitter.com', '_blank')}
              className="cursor-pointer hover:scale-110 active:scale-95 transition-transform"
            >
              <Twitter className="w-5 h-5" />
            </Button>

            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => window.open('mailto:example@email.com')}
              className="cursor-pointer hover:scale-110 active:scale-95 transition-transform"
            >
              <Mail className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}