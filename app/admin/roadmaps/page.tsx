"use client"

import { Plus, GripVertical, ChevronRight, BookOpen, ExternalLink, MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

const ROADMAPS = [
  {
    id: 1,
    title: "Full-Stack Development",
    steps: 8,
    students: 245,
    status: "Published",
    color: "blue",
  },
  {
    id: 2,
    title: "Cloud & DevOps",
    steps: 6,
    students: 120,
    status: "Published",
    color: "green",
  },
  {
    id: 3,
    title: "AI & Machine Learning",
    steps: 12,
    students: 85,
    status: "Draft",
    color: "purple",
  },
]

export default function RoadmapsManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Learning Roadmaps</h1>
          <p className="text-slate-400 mt-1">Design and manage curated professional learning paths.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="mr-2 h-4 w-4" /> Create Roadmap
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {ROADMAPS.map((roadmap) => (
          <Card
            key={roadmap.id}
            className="bg-slate-900 border-slate-800 text-white hover:border-slate-700 transition-colors"
          >
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-bold">{roadmap.title}</CardTitle>
              <Badge
                className={
                  roadmap.status === "Published"
                    ? "bg-green-500/10 text-green-400 border-green-500/20"
                    : "bg-slate-500/10 text-slate-400 border-slate-500/20"
                }
              >
                {roadmap.status}
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm text-slate-400 mt-4">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" /> {roadmap.steps} Stages
                </div>
                <div className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4" /> {roadmap.students} Students
                </div>
              </div>
              <div className="flex gap-2 mt-6">
                <Button variant="outline" className="flex-1 bg-transparent border-slate-700 hover:bg-slate-800">
                  Edit Track
                </Button>
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 space-y-4">
        <h2 className="text-xl font-bold text-white">Track Editor: Full-Stack Development</h2>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <ScrollArea className="h-[400px] pr-4">
            <div className="space-y-4">
              {[
                { title: "HTML/CSS Mastery", type: "Core", resources: 4 },
                { title: "JavaScript Fundamentals", type: "Core", resources: 6 },
                { title: "React & Next.js", type: "Framework", resources: 8 },
                { title: "Backend with Node.js", type: "Server", resources: 5 },
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
                  <GripVertical className="h-5 w-5 text-slate-500 cursor-move" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold">
                        {i + 1}
                      </span>
                      <h4 className="font-bold text-slate-200">{step.title}</h4>
                      <Badge variant="outline" className="text-[10px] border-slate-600">
                        {step.type}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-slate-400">
                    <span>{step.resources} Resources</span>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-400">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full border-dashed border-slate-700 bg-transparent text-slate-400">
                <Plus className="h-4 w-4 mr-2" /> Add Next Step
              </Button>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}
