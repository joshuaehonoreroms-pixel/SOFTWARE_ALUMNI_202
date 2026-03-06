"use client"

import { Plus, Search, MoreVertical, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Suspense } from "react"

const NEWS = [
  {
    id: 1,
    title: "Department Secures $2M Research Grant",
    type: "Academic",
    status: "Published",
    views: "1.2k",
    date: "2024-05-10",
  },
  {
    id: 2,
    title: "Upcoming Career Fair for SE Students",
    type: "Event",
    status: "Published",
    views: "850",
    date: "2024-05-12",
  },
  {
    id: 3,
    title: "Alumni Spotlight: Senior Dev at Google",
    type: "Alumni",
    status: "Draft",
    views: "0",
    date: "2024-05-18",
  },
]

function NewsContent() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">News Management</h1>
          <p className="text-slate-400 mt-1">Curate and publish official department news and updates.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="mr-2 h-4 w-4" /> Add News Article
        </Button>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Search news articles..."
              className="pl-10 bg-slate-800 border-slate-700 text-white max-w-md"
            />
          </div>
        </div>

        <div className="rounded-lg border border-slate-800 overflow-hidden">
          <Table>
            <TableHeader className="bg-slate-800/50">
              <TableRow className="hover:bg-transparent border-slate-800">
                <TableHead className="text-slate-400">Article Title</TableHead>
                <TableHead className="text-slate-400">Type</TableHead>
                <TableHead className="text-slate-400">Status</TableHead>
                <TableHead className="text-slate-400">Views</TableHead>
                <TableHead className="text-slate-400">Date</TableHead>
                <TableHead className="text-right text-slate-400">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {NEWS.map((item) => (
                <TableRow key={item.id} className="border-slate-800 hover:bg-slate-800/30">
                  <TableCell className="font-medium text-slate-200">{item.title}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="bg-slate-800 text-slate-300">
                      {item.type}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={
                        item.status === "Published"
                          ? "bg-green-500/10 text-green-400 border-green-500/20"
                          : "bg-slate-500/10 text-slate-400 border-slate-500/20"
                      }
                    >
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-slate-400">{item.views}</TableCell>
                  <TableCell className="text-slate-400 flex items-center gap-2">
                    <Calendar className="h-3 w-3" /> {item.date}
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-slate-800 border-slate-700 text-white">
                        <DropdownMenuItem className="focus:bg-slate-700 focus:text-white">Edit</DropdownMenuItem>
                        <DropdownMenuItem className="focus:bg-slate-700 focus:text-white">View Stats</DropdownMenuItem>
                        <DropdownMenuSeparator className="bg-slate-700" />
                        <DropdownMenuItem className="text-red-400 focus:bg-slate-700 focus:text-red-400">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default function NewsManagement() {
  return (
    <Suspense fallback={null}>
      <NewsContent />
    </Suspense>
  )
}
