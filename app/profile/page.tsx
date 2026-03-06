import { DashboardNav } from "@/components/dashboard-nav"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Briefcase, Mail, Globe, MapPin, Calendar, Edit2 } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-white font-bold">SN</div>
            
          </div>
          <Button variant="ghost" size="sm" className="gap-2">
            <Edit2 className="h-4 w-4" />
            Edit Profile
          </Button>
        </div>
      </header>

      <div className="container mx-auto flex flex-1 px-4">
        <DashboardNav />

        <main className="flex-1 space-y-6 p-6">
          {/* Profile Header Card */}
          <Card className="overflow-hidden border-none shadow-md">
            <div className="h-32 bg-gradient-to-r from-primary via-primary/80 to-secondary/80"></div>
            <CardContent className="relative px-6 pb-6 pt-0">
              <div className="relative -top-12 flex flex-col items-start gap-4 sm:flex-row sm:items-end">
                <Avatar className="h-32 w-32 border-4 border-background shadow-lg">
                  <AvatarImage src="/placeholder.svg?height=128&width=128" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1 pb-2">
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold">Jane Doe</h1>
                    <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">Alumni</Badge>
                  </div>
                  <p className="text-muted-foreground font-medium">Software Engineer at Google</p>
                  <div className="flex flex-wrap gap-4 pt-1">
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" /> Mountain View, CA
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <GraduationCap className="h-3.5 w-3.5" /> Class of 2021
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" /> Joined Jan 2026
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 pb-2">
                  <Button size="sm" variant="outline" className="h-9 gap-2 bg-transparent">
                    <Globe className="h-4 w-4" /> Portfolio
                  </Button>
                  <Button size="sm" className="h-9 gap-2 bg-primary">
                    <Mail className="h-4 w-4" /> Contact
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* About Section */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">About</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Passionate software engineer with a strong foundation in distributed systems and cloud architecture.
                Graduated from the Software Engineering Department in 2021. Always looking to mentor current students
                and collaborate on interesting open-source projects.
              </p>
            </CardContent>
          </Card>

          {/* Experience Section */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                {
                  role: "Software Engineer",
                  company: "Google",
                  period: "2021 - Present",
                  desc: "Working on the Google Cloud Platform, specifically focused on Kubernetes engine scalability.",
                  icon: Briefcase,
                },
                {
                  role: "Junior Developer Intern",
                  company: "Microsoft",
                  period: "2020 - 2021",
                  desc: "Developed internal tooling for the Azure DevOps team using C# and .NET Core.",
                  icon: Briefcase,
                },
              ].map((exp, i) => (
                <div key={i} className="relative flex gap-4 pl-2">
                  {i < 1 && <div className="absolute left-4 top-8 bottom-[-24px] w-px bg-border"></div>}
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-muted border border-border">
                    <exp.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1 pt-1">
                    <h4 className="text-sm font-semibold">{exp.role}</h4>
                    <p className="text-xs font-medium text-primary">{exp.company}</p>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{exp.period}</p>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{exp.desc}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Skills Section */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">Skills & Interests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {[
                  "Distributed Systems",
                  "Cloud Computing",
                  "Go",
                  "Python",
                  "Kubernetes",
                  "React",
                  "Mentorship",
                  "Open Source",
                ].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-secondary/10 text-secondary border-secondary/20 font-normal"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>

        <DashboardSidebar />
      </div>
    </div>
  )
}
