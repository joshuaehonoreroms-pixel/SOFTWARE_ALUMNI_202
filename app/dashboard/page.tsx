import { DashboardNav } from "@/components/dashboard-nav"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageSquare, Share2, MoreHorizontal, ImageIcon, Send } from "lucide-react"

const posts = [
  {
    id: 1,
    author: {
      name: "Sarah Miller",
      role: "Alumni",
      title: "Tech Lead at Meta",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "Excited to share that I'll be back on campus next week for a guest lecture on 'Scaling Distributed Systems'. Hope to see many students there!",
    timestamp: "2 hours ago",
    likes: 24,
    comments: 5,
    tag: "Event",
  },
  {
    id: 2,
    author: {
      name: "Alex Chen",
      role: "Student",
      title: "Final Year SE Student",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "Just finished my internship at Amazon! Grateful for the mentorship from the alumni network that helped me prepare for the technical interviews. 🚀",
    timestamp: "5 hours ago",
    likes: 42,
    comments: 12,
    tag: "Achievement",
    image: "/internship-office.jpg",
  },
]

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Top Header - Shared with dashboard nav layout */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-white font-bold">SN</div>
            
          </div>
          <div className="flex items-center gap-4">
            <Input className="w-64 h-9 hidden md:block" placeholder="Search the network..." />
            <Avatar className="h-9 w-9 border">
              <AvatarImage src="/placeholder.svg?height=36&width=36" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="container mx-auto flex flex-1 px-4">
        <DashboardNav />

        <main className="flex-1 space-y-6 p-6">
          {/* Create Post Card */}
          <Card className="shadow-sm">
            <CardContent className="p-4">
              <div className="flex gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-4">
                  <Input
                    placeholder="Share an update, question, or achievement..."
                    className="border-none bg-muted/50 focus-visible:ring-0 text-base"
                  />
                  <div className="flex items-center justify-between border-t border-border pt-3">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="h-8 gap-2 text-muted-foreground">
                        <ImageIcon className="h-4 w-4 text-primary" />
                        Media
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 gap-2 text-muted-foreground">
                        <Send className="h-4 w-4 text-secondary" />
                        Poll
                      </Button>
                    </div>
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                      Post
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Feed Content */}
          <div className="space-y-4">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden shadow-sm transition-shadow hover:shadow-md">
                <CardHeader className="flex flex-row items-start justify-between space-y-0 p-4">
                  <div className="flex gap-3">
                    <Avatar className="h-10 w-10 ring-2 ring-background">
                      <AvatarImage src={post.author.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm">{post.author.name}</span>
                        <Badge
                          variant={post.author.role === "Alumni" ? "default" : "secondary"}
                          className="text-[10px] h-4 px-1"
                        >
                          {post.author.role}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{post.author.title}</p>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{post.timestamp}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent className="px-4 py-2 space-y-4">
                  <p className="text-sm leading-relaxed">{post.content}</p>
                  {post.image && (
                    <div className="relative aspect-video rounded-xl overflow-hidden border border-border">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt="Post attachment"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )}
                  {post.tag && (
                    <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">
                      #{post.tag}
                    </Badge>
                  )}
                </CardContent>
                <CardFooter className="px-4 py-3 border-t border-border flex justify-between">
                  <div className="flex gap-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 gap-1.5 text-muted-foreground hover:text-primary hover:bg-primary/5"
                    >
                      <Heart className="h-4 w-4" />
                      <span className="text-xs">{post.likes}</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 gap-1.5 text-muted-foreground hover:text-secondary hover:bg-secondary/5"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span className="text-xs">{post.comments}</span>
                    </Button>
                  </div>
                  <Button variant="ghost" size="sm" className="h-8 gap-1.5 text-muted-foreground">
                    <Share2 className="h-4 w-4" />
                    <span className="text-xs">Share</span>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </main>

        <DashboardSidebar />
      </div>
    </div>
  )
}
