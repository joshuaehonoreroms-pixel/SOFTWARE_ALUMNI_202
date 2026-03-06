import { DashboardNav } from "@/components/dashboard-nav"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search, MoreVertical, Phone, Video, Send, Smile, Paperclip } from "lucide-react"
import { cn } from "@/lib/utils"
import { Suspense } from "react" // added Suspense

const contacts = [
  {
    id: 1,
    name: "John Doe",
    role: "Senior SWE at Google",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Thanks for the advice!",
    time: "2h ago",
    unread: 0,
    online: true,
  },
  {
    id: 2,
    name: "Sarah Miller",
    role: "Tech Lead at Meta",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Are you free for a call tomorrow?",
    time: "5h ago",
    unread: 2,
    online: false,
  },
  {
    id: 3,
    name: "Alex Kim",
    role: "SDE I at Amazon",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "I'll check those resources, thanks!",
    time: "1d ago",
    unread: 0,
    online: true,
  },
]

const currentChat = {
  name: "John Doe",
  role: "Senior SWE at Google",
  avatar: "/placeholder.svg?height=40&width=40",
  online: true,
}

const messages = [
  { id: 1, text: "Hello! I saw your profile on the alumni network.", sender: "other", time: "10:00 AM" },
  { id: 2, text: "Hi John! Thanks for reaching out. It's an honor.", sender: "me", time: "10:05 AM" },
  {
    id: 3,
    text: "I noticed you're interested in distributed systems. I'm actually looking for a mentee.",
    sender: "other",
    time: "10:10 AM",
  },
  { id: 4, text: "That would be incredible! I'd love to learn from your experience.", sender: "me", time: "10:12 AM" },
  {
    id: 5,
    text: "Great! Let's start with some basics. Have you read the Dynamo paper?",
    sender: "other",
    time: "10:15 AM",
  },
]

function MessagesContent() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-white font-bold">SN</div>
            <span className="font-bold tracking-tight">SN</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto flex flex-1 px-4 overflow-hidden">
        <DashboardNav />

        <main className="flex flex-1 overflow-hidden">
          {/* Conversation List */}
          <div className="w-80 border-r border-border bg-card flex flex-col">
            <div className="p-4 border-b border-border space-y-4">
              <h2 className="text-lg font-bold">Messages</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input className="pl-9 h-9 bg-muted/50 border-none" placeholder="Search messages..." />
              </div>
            </div>
            <ScrollArea className="flex-1">
              <div className="flex flex-col">
                {contacts.map((contact) => (
                  <button
                    key={contact.id}
                    className={cn(
                      "flex items-center gap-3 p-4 text-left transition-colors hover:bg-accent/50",
                      contact.id === 1 && "bg-accent/50",
                    )}
                  >
                    <div className="relative">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={contact.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{contact.name[0]}</AvatarFallback>
                      </Avatar>
                      {contact.online && (
                        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-card bg-fresh-green"></span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm truncate">{contact.name}</span>
                        <span className="text-[10px] text-muted-foreground">{contact.time}</span>
                      </div>
                      <p className="text-xs text-muted-foreground truncate">{contact.lastMessage}</p>
                    </div>
                    {contact.unread > 0 && (
                      <div className="h-4 w-4 rounded-full bg-primary text-[10px] font-bold text-white flex items-center justify-center">
                        {contact.unread}
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Chat Window */}
          <div className="flex-1 flex flex-col bg-background">
            {/* Chat Header */}
            <div className="h-16 border-b border-border flex items-center justify-between px-6 bg-card">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={currentChat.avatar || "/placeholder.svg"} />
                  <AvatarFallback>{currentChat.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-sm font-bold">{currentChat.name}</h3>
                  <p className="text-xs text-muted-foreground">{currentChat.online ? "Online" : "Away"}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground">
                  <Video className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Messages Area */}
            <ScrollArea className="flex-1 p-6">
              <div className="space-y-6">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn("flex flex-col", message.sender === "me" ? "items-end" : "items-start")}
                  >
                    <div
                      className={cn(
                        "max-w-[70%] rounded-2xl px-4 py-2 text-sm",
                        message.sender === "me"
                          ? "bg-primary text-primary-foreground rounded-tr-none"
                          : "bg-muted text-foreground rounded-tl-none",
                      )}
                    >
                      {message.text}
                    </div>
                    <span className="text-[10px] text-muted-foreground mt-1 px-1">{message.time}</span>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Message Input */}
            <div className="p-4 bg-card border-t border-border">
              <div className="flex items-center gap-2 bg-muted/50 rounded-xl px-4 py-2 ring-1 ring-border">
                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                  <Paperclip className="h-4 w-4" />
                </Button>
                <Input
                  className="flex-1 border-none bg-transparent focus-visible:ring-0 shadow-none text-sm h-9"
                  placeholder="Type a message..."
                />
                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                  <Smile className="h-4 w-4" />
                </Button>
                <Button size="icon" className="h-9 w-9 rounded-lg bg-primary hover:bg-primary/90">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default function MessagesPage() {
  return (
    <Suspense>
      <MessagesContent />
    </Suspense>
  )
}
