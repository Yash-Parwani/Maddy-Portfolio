import { ChatInterface } from "@/components/Chat/chat-interface"

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-foreground">
      <div className="max-w-[1400px] mx-auto px-12 py-7">
        <div className="space-y-4 mb-7 min-w-screen">
          <h1 className="flex justify-center items-center text-6xl font-light">Portfolio Concierge</h1>
        </div>
        <ChatInterface />
        <div className="flex justify-center items-center">
          <p className="text-muted-foreground text-lg">
            Chat with my AI assistant to learn more about my work and experience.
          </p>
        </div>
      </div>
    </div>
  )
}