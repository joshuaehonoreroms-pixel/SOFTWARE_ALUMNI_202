import { DashboardNav } from "@/components/dashboard-nav"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, MapPin, GraduationCap } from "lucide-react"
import { Suspense } from "react" // added Suspense

const alumni = [
  {
    id: 1,
    name: "John Doe",
    year: "2020",
    company: "Google",
    role: "Senior Engineer",
    location: "USA",
    skills: ["Cloud", "AI"],
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Sarah Miller",
    year: "2019",
    company: "Meta",
    role: "Tech Lead",
    location: "UK",
    skills: ["React", "Systems"],
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Alex Kim",
    year: "2022",
    company: "Amazon",
    role: "SDE I",
    location: "Germany",
    skills: ["Backend", "AWS"],
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

function AlumniDirectoryContent() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-white font-bold">SN</div>
            
          </div>
          <Input className="max-w-sm" placeholder="Search alumni by name, skills, or company..." />
        </div>
      </header>

      <div className="container mx-auto flex flex-1 px-4">
        <DashboardNav />

        <main className="flex-1 p-6 space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold">Alumni Directory</h1>
              <p className="text-sm text-muted-foreground">Find and connect with graduates from your department</p>
            </div>
            <Button variant="outline" className="gap-2 bg-transparent">
              <Filter className="h-4 w-4" /> Filters
            </Button>
          </div>

          {/* Search/Filter Bar */}
          <div className="grid gap-4 md:grid-cols-4">
            <div className="relative md:col-span-2">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input className="pl-10" placeholder="Search by name or keyword..." />
            </div>
            <Input placeholder="Location" />
            <Input placeholder="Graduation Year" />
          </div>

          {/* Alumni Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {alumni.map((person) => (
              <Card key={person.id} className="group overflow-hidden transition-all hover:shadow-md">
                <div className="h-20 bg-gradient-to-r from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20"></div>
                <CardContent className="relative px-6 pb-6 pt-0 text-center">
                  <Avatar className="mx-auto -mt-10 h-20 w-20 border-4 border-background shadow-sm ring-1 ring-border">
                    <AvatarImage src={person.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{person.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="mt-3 space-y-1">
                    <h3 className="font-bold text-sm">{person.name}</h3>
                    <p className="text-xs text-muted-foreground font-medium">
                      {person.role} at {person.company}
                    </p>
                  </div>

                  <div className="mt-4 flex flex-col gap-2 border-t border-border/50 pt-4">
                    <div className="flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground">
                      <MapPin className="h-3 w-3" /> {person.location}
                    </div>
                    <div className="flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground">
                      <GraduationCap className="h-3 w-3" /> Class of {person.year}
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                    {person.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-[10px] h-5 px-1.5 font-normal">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <Button className="mt-6 w-full h-9 bg-primary/90 hover:bg-primary">Connect</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>

        <DashboardSidebar />
      </div>
    </div>
  )
}

export default function AlumniDirectoryPage() {
  return (
    <Suspense>
      <AlumniDirectoryContent />
    </Suspense>
  )
}
