import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface ChatMessageProps {
  content: string
  role: 'user' | 'assistant'
}

export function ChatMessage({ content, role }: ChatMessageProps) {
  return (
    <div className={cn(
        "flex",
        role === 'user' ? 'justify-end' : 'justify-start',
        "px-4 py-2"
      )}>
      <div className="max-w-3xl  flex gap-4 items-start">
        <Avatar className="w-8 h-8 shrink-0">
          <AvatarImage 
            src={role === 'assistant' ? "/assistant-avatar.png" : "/user-avatar.png"} 
            className={cn(
              "p-1",
              role === 'assistant' ? "bg-[#19C37D]" : "bg-[#747474]"
            )}
          />
          <AvatarFallback className={cn(
            "text-white",
            role === 'assistant' ? "bg-[#19C37D]" : ""
          )}>
            {role === 'assistant' ? 'A' : ''}
          </AvatarFallback>
        </Avatar>
        <div className={cn(
        "max-w-[80%] px-4 py-2 rounded-2xl text-sm",
        role === 'user' 
          ? "bg-blue-600 text-white" 
          : "bg-zinc-800 text-zinc-100"
      )}>
          {content}
        </div>
      </div>
    </div>
  )
}