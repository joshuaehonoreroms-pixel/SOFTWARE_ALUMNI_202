import { DashboardNav } from "@/components/dashboard-nav"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Briefcase, MapPin, Building2, Search, Filter, Bookmark, ExternalLink } from "lucide-react"
import { Suspense } from "react" // added Suspense

const jobs = [
  {
    id: 1,
    title: "Full Stack Engineer",
    company: "Stripe",
    location: "Remote / Dublin, IE",
    type: "Full-time",
    posted: "2 days ago",
    logo: "S",
    isNew: true,
  },
  {
    id: 2,
    title: "Frontend Engineering Intern",
    company: "Vercel",
    location: "Remote",
    type: "Internship",
    posted: "5 days ago",
    logo: "V",
    isNew: false,
  },
  {
    id: 3,
    title: "Backend Developer (Graduate)",
    company: "GoCardless",
    location: "London, UK",
    type: "Full-time",
    posted: "1 week ago",
    logo: "G",
    isNew: false,
  },
]

function OpportunitiesContent() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-white font-bold">SN</div>
            
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden sm:flex bg-transparent">
              Post a Job
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto flex flex-1 px-4">
        <DashboardNav />

        <main className="flex-1 p-6 space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">Opportunities</h1>
            <p className="text-sm text-muted-foreground">Career-defining roles shared by alumni and partners.</p>
          </div>

          {/* Search & Filter */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input className="pl-10" placeholder="Search roles, companies, or keywords..." />
            </div>
            <Button variant="outline" className="gap-2 bg-transparent">
              <Filter className="h-4 w-4" /> Filters
            </Button>
          </div>

          {/* Job List */}
          <div className="space-y-4">
            {jobs.map((job) => (
              <Card key={job.id} className="group transition-shadow hover:shadow-md">
                <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-lg font-bold text-muted-foreground ring-1 ring-border group-hover:ring-primary/20">
                    {job.logo}
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-sm sm:text-base">{job.title}</h3>
                      {job.isNew && (
                        <Badge
                          variant="secondary"
                          className="bg-fresh-green/10 text-fresh-green border-fresh-green/20 text-[10px] h-4"
                        >
                          New
                        </Badge>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Building2 className="h-3 w-3" /> {job.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-3 w-3" /> {job.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pt-2 sm:pt-0">
                    <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-primary">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                    <Button size="sm" className="bg-primary hover:bg-primary/90 h-9 px-4 gap-2">
                      Apply <ExternalLink className="h-3 w-3" />
                    </Button>
                  </div>
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

export default function OpportunitiesPage() {
  return (
    <Suspense>
      <OpportunitiesContent />
    </Suspense>
  )
}
