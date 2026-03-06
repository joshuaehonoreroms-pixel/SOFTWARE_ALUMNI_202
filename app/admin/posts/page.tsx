"use client"

import { cn } from "@/lib/utils"
import { Suspense } from "react"

import { useState } from "react"
import { Plus, Search, MoreVertical, Edit2, Trash2, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

const POSTS = [
  {
    id: 1,
    title: "Welcome to our new Alumni Network!",
    category: "Announcement",
    status: "Published",
    author: "Admin",
    date: "2024-05-20",
  },
  {
    id: 2,
    title: "Summer Internship Opportunities 2024",
    category: "Opportunities",
    status: "Published",
    author: "Career Office",
    date: "2024-05-18",
  },
  {
    id: 3,
    title: "New Lab Equipment Arrival",
    category: "News",
    status: "Draft",
    author: "Department Head",
    date: "2024-05-15",
  },
  {
    id: 4,
    title: "Maintenance Window: Site Update",
    category: "Alert",
    status: "Scheduled",
    author: "IT Support",
    date: "2024-05-22",
  },
]

function PostsContent() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Posts & Announcements</h1>
          <p className="text-slate-400 mt-1">Manage community content and system-wide announcements.</p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Plus className="mr-2 h-4 w-4" /> Create New Post
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-slate-900 border-slate-800 text-white sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Create New Post</DialogTitle>
              <DialogDescription className="text-slate-400">
                Draft a new announcement or update for the community.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-6 py-4">
              <div className="space-y-2">
                <Label htmlFor="title">Post Title</Label>
                <Input id="title" placeholder="Enter post title..." className="bg-slate-800 border-slate-700" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger className="bg-slate-800 border-slate-700">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-700 text-white">
                      <SelectItem value="announcement">Announcement</SelectItem>
                      <SelectItem value="news">News</SelectItem>
                      <SelectItem value="alert">Alert</SelectItem>
                      <SelectItem value="opportunity">Opportunity</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Initial Status</Label>
                  <Select defaultValue="draft">
                    <SelectTrigger className="bg-slate-800 border-slate-700">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-700 text-white">
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Publish Now</SelectItem>
                      <SelectItem value="scheduled">Schedule</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  placeholder="Write your post content here..."
                  className="bg-slate-800 border-slate-700 min-h-[150px]"
                />
              </div>
              <div className="flex items-center justify-between rounded-lg border border-slate-800 p-4">
                <div className="space-y-0.5">
                  <Label>Featured Post</Label>
                  <p className="text-sm text-slate-400">Display this post at the top of the home feed.</p>
                </div>
                <Switch />
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <Button variant="ghost" className="text-slate-400 hover:text-white hover:bg-slate-800">
                Cancel
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Save Post</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Filter posts by title or author..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-slate-800 border-slate-700 text-white max-w-md"
            />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px] bg-slate-800 border-slate-700 text-white">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-slate-700 text-white">
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="announcement">Announcements</SelectItem>
              <SelectItem value="news">News</SelectItem>
              <SelectItem value="alert">Alerts</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="rounded-lg border border-slate-800">
          <Table>
            <TableHeader className="bg-slate-800/50">
              <TableRow className="hover:bg-transparent border-slate-800">
                <TableHead className="text-slate-400">Post Title</TableHead>
                <TableHead className="text-slate-400">Category</TableHead>
                <TableHead className="text-slate-400">Status</TableHead>
                <TableHead className="text-slate-400">Author</TableHead>
                <TableHead className="text-slate-400">Date</TableHead>
                <TableHead className="text-right text-slate-400">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {POSTS.map((post) => (
                <TableRow key={post.id} className="border-slate-800 hover:bg-slate-800/30">
                  <TableCell className="font-medium text-slate-200">{post.title}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="border-slate-700 text-slate-300">
                      {post.category}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={cn(
                        "font-semibold",
                        post.status === "Published"
                          ? "bg-green-500/10 text-green-400 border-green-500/20"
                          : post.status === "Draft"
                            ? "bg-slate-500/10 text-slate-400 border-slate-500/20"
                            : "bg-blue-500/10 text-blue-400 border-blue-500/20",
                      )}
                    >
                      {post.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-slate-300">{post.author}</TableCell>
                  <TableCell className="text-slate-400">{post.date}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-slate-800 border-slate-700 text-white">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator className="bg-slate-700" />
                        <DropdownMenuItem className="focus:bg-slate-700 focus:text-white">
                          <Eye className="mr-2 h-4 w-4" /> View
                        </DropdownMenuItem>
                        <DropdownMenuItem className="focus:bg-slate-700 focus:text-white">
                          <Edit2 className="mr-2 h-4 w-4" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="bg-slate-700" />
                        <DropdownMenuItem className="text-red-400 focus:bg-slate-700 focus:text-red-400">
                          <Trash2 className="mr-2 h-4 w-4" /> Delete
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

export default function PostsManagement() {
  return (
    <Suspense fallback={null}>
      <PostsContent />
    </Suspense>
  )
}
