'use client'

import { useState } from 'react'
import { ChatMessage } from './chat-message'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: "Hello! I'm an AI assistant representing Gayatri's portfolio. How can I help you today?" 
    }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSend = async () => {
  if (input.trim() === '' || loading) return

  const userMessage: Message = { role: 'user', content: input }
  setMessages(prev => [...prev, userMessage])
  setInput('')
  setLoading(true)

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: input }),
    })

    if (!response.ok) throw new Error('Failed to fetch response')

    const data = await response.json()
    const assistantMessage: Message = { 
      role: 'assistant', 
      content: data.content 
    }
    setMessages(prev => [...prev, assistantMessage])
  } catch (error) {
    setMessages(prev => [
      ...prev,
      { 
        role: 'assistant', 
        content: "Sorry, I encountered an issue while fetching a response. Please try again." 
      }
    ])
  } finally {
    setLoading(false)
  }
}

  return (
    <div className="flex flex-col h-[80vh] bg-[#0A0A0A] rounded-lg overflow-hidden">
      <ScrollArea className="flex-grow">
        <div>
          {messages.map((message, index) => (
            <ChatMessage 
              key={index} 
              content={message.content} 
              role={message.role} 
              isFirstMessage={index === 0}
            />
          ))}
          {loading && <ChatMessage content="Thinking..." role="assistant" />}
        </div>
      </ScrollArea>
      <div className="p-4 bg-[#0A0A0A]">
        <div className="flex gap-2 items-center">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Message Gayatri's Portfolio Assistant..."
            className="flex-1 bg-[#1A1A1A] border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-white/90 rounded-lg"
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <Button 
            onClick={handleSend} 
            disabled={loading}
            size="icon"
            className="bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white/80 rounded-lg h-10 w-10 p-2"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}