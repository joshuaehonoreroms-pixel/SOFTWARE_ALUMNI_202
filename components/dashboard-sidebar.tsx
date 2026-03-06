import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, TrendingUp, Users } from "lucide-react"

export function DashboardSidebar() {
  return (
    <aside className="sticky top-16 h-[calc(100vh-4rem)] w-80 flex-shrink-0 space-y-4 overflow-y-auto p-4">
      {/* Upcoming Events */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Calendar className="h-4 w-4 text-primary" />
            Upcoming Events
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-1">
            <p className="text-sm font-medium">Tech Talk: AI in Software</p>
            <p className="text-xs text-muted-foreground">Tomorrow, 2:00 PM</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium">Alumni Mixer</p>
            <p className="text-xs text-muted-foreground">Friday, 6:00 PM</p>
          </div>
        </CardContent>
      </Card>

      {/* Featured Alumni */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <TrendingUp className="h-4 w-4 text-secondary" />
            Featured Alumni
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder.svg?height=40&width=40" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-muted-foreground">Senior SWE at Google</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder.svg?height=40&width=40" />
              <AvatarFallback>SM</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium">Sarah Miller</p>
              <p className="text-xs text-muted-foreground">Tech Lead at Meta</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Suggested Connections */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Users className="h-4 w-4 text-secondary" />
            Suggested Connections
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder.svg?height=40&width=40" />
              <AvatarFallback>AK</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium">Alex Kim</p>
              <p className="text-xs text-muted-foreground">Class of 2023</p>
            </div>
            <Button size="sm" variant="outline" className="text-xs bg-transparent">
              Connect
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Department News */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Department News</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Badge variant="secondary" className="text-xs">
              New
            </Badge>
            <p className="text-sm">New AI Lab Opening Soon</p>
          </div>
        </CardContent>
      </Card>
    </aside>
  )
}
