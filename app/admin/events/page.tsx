"use client"

import { Plus, Search, Calendar, MapPin, MoreHorizontal, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Suspense } from "react"

const EVENTS = [
  {
    id: 1,
    title: "Alumni Networking Night 2024",
    type: "Alumni",
    date: "June 15, 2024",
    time: "18:00 - 21:00",
    location: "Main Hall / Online",
    status: "Upcoming",
    attendees: 124,
  },
  {
    id: 2,
    title: "Intro to Cloud Computing Workshop",
    type: "Department",
    date: "June 20, 2024",
    time: "10:00 - 14:00",
    location: "Lab 402",
    status: "Upcoming",
    attendees: 45,
  },
  {
    id: 3,
    title: "Annual Hackathon Finals",
    type: "Social",
    date: "May 25, 2024",
    time: "09:00 - 18:00",
    location: "Tech Center",
    status: "Ongoing",
    attendees: 210,
  },
  {
    id: 4,
    title: "Career Guidance Webinar",
    type: "Association",
    date: "May 10, 2024",
    time: "15:00 - 16:30",
    location: "Zoom",
    status: "Completed",
    attendees: 88,
  },
]

function EventsContent() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Events Management</h1>
          <p className="text-slate-400 mt-1">Schedule and manage departmental events and webinars.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="mr-2 h-4 w-4" /> Create New Event
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 bg-slate-900 border border-slate-800 p-4 rounded-xl">
        <div className="relative flex-1 min-w-[300px]">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input placeholder="Search events..." className="pl-10 bg-slate-800 border-slate-700 text-white" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[160px] bg-slate-800 border-slate-700 text-white">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent className="bg-slate-800 border-slate-700 text-white">
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="upcoming">Upcoming</SelectItem>
            <SelectItem value="ongoing">Ongoing</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all">
          <SelectTrigger className="w-[160px] bg-slate-800 border-slate-700 text-white">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent className="bg-slate-800 border-slate-700 text-white">
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="department">Department</SelectItem>
            <SelectItem value="alumni">Alumni</SelectItem>
            <SelectItem value="social">Social</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Events Grid/List */}
      <div className="grid gap-4">
        {EVENTS.map((event) => (
          <Card
            key={event.id}
            className="bg-slate-900 border-slate-800 text-white hover:border-slate-700 transition-colors"
          >
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row md:items-center gap-6 p-6">
                {/* Date Badge */}
                <div className="flex flex-col items-center justify-center w-20 h-20 rounded-lg bg-slate-800 border border-slate-700 shrink-0">
                  <span className="text-xs font-bold text-blue-400 uppercase">
                    {event.date.split(",")[0].split(" ")[0]}
                  </span>
                  <span className="text-2xl font-black">{event.date.split(",")[0].split(" ")[1]}</span>
                </div>

                {/* Event Info */}
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="outline"
                      className={
                        event.status === "Upcoming"
                          ? "border-blue-500/50 text-blue-400 bg-blue-500/5"
                          : event.status === "Ongoing"
                            ? "border-green-500/50 text-green-400 bg-green-500/5 animate-pulse"
                            : "border-slate-700 text-slate-400"
                      }
                    >
                      {event.status}
                    </Badge>
                    <span className="text-xs text-slate-500">•</span>
                    <span className="text-xs font-medium text-slate-400">{event.type} Event</span>
                  </div>
                  <h3 className="text-xl font-bold">{event.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-1.5 font-medium text-blue-400">
                      <Search className="h-4 w-4" />
                      {event.attendees} Registered
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 sm:self-center md:self-auto">
                  <Button variant="outline" className="bg-transparent border-slate-700 text-white hover:bg-slate-800">
                    Manage Roster
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                        <MoreHorizontal className="h-5 w-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-slate-800 border-slate-700 text-white">
                      <DropdownMenuItem className="focus:bg-slate-700 focus:text-white">Edit Details</DropdownMenuItem>
                      <DropdownMenuItem className="focus:bg-slate-700 focus:text-white">Duplicate</DropdownMenuItem>
                      <DropdownMenuItem className="focus:bg-slate-700 focus:text-white">Cancel Event</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default function EventsManagement() {
  return (
    <Suspense fallback={null}>
      <EventsContent />
    </Suspense>
  )
}
