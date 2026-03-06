import { DashboardNav } from "@/components/dashboard-nav"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Server, Layout, Database, Terminal, ChevronRight } from "lucide-react"

const roadmaps = [
  {
    title: "Frontend Engineering",
    icon: Layout,
    progress: 65,
    modules: 12,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Backend Architecture",
    icon: Server,
    progress: 30,
    modules: 15,
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    title: "DevOps & Infrastructure",
    icon: Terminal,
    progress: 0,
    modules: 10,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    title: "Data Engineering",
    icon: Database,
    progress: 0,
    modules: 8,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
]

export default function LearningPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-white font-bold">SN</div>
            <span className="font-bold tracking-tight">SN</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto flex flex-1 px-4">
        <DashboardNav />

        <main className="flex-1 p-6 space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">Learning Roadmaps</h1>
            <p className="text-sm text-muted-foreground">
              Curated industry-standard paths for your engineering journey.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {roadmaps.map((roadmap) => (
              <Card key={roadmap.title} className="group overflow-hidden transition-all hover:shadow-md">
                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${roadmap.bg}`}>
                    <roadmap.icon className={`h-6 w-6 ${roadmap.color}`} />
                  </div>
                  <div className="space-y-1">
                    <CardTitle className="text-lg">{roadmap.title}</CardTitle>
                    <CardDescription>{roadmap.modules} comprehensive modules</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-muted-foreground">Your Progress</span>
                      <span>{roadmap.progress}%</span>
                    </div>
                    <Progress value={roadmap.progress} className="h-2" />
                  </div>
                  <Button
                    variant="ghost"
                    className="w-full justify-between px-2 text-primary hover:bg-primary/5 hover:text-primary"
                  >
                    {roadmap.progress > 0 ? "Continue Learning" : "Start Roadmap"}
                    <ChevronRight className="h-4 w-4" />
                  </Button>
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
