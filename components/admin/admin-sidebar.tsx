"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  FileText,
  Newspaper,
  Calendar,
  Users,
  UserCog,
  Map,
  FileEdit,
  Settings,
  ScrollText,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

const navigation = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Posts & Announcements", href: "/admin/posts", icon: FileText },
  { name: "News", href: "/admin/news", icon: Newspaper },
  { name: "Events", href: "/admin/events", icon: Calendar },
  { name: "Alumni Directory", href: "/admin/alumni", icon: Users },
  { name: "Users & Roles", href: "/admin/users", icon: UserCog },
  { name: "Learning Roadmaps", href: "/admin/roadmaps", icon: Map },
  { name: "Site Content", href: "/admin/content", icon: FileEdit },
  { name: "Settings", href: "/admin/settings", icon: Settings },
  { name: "Activity Logs", href: "/admin/logs", icon: ScrollText },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <div className="flex w-64 flex-col bg-slate-900 text-white">
      {/* Logo */}
      <div className="flex h-16 items-center gap-2 px-6">
        <Badge className="bg-gradient-to-r from-blue-600 to-green-600 text-white text-base font-bold px-3 py-1">
          SN
        </Badge>
        <span className="text-sm font-medium">Admin Panel</span>
      </div>

      <Separator className="bg-slate-700" />

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive ? "bg-slate-800 text-green-400" : "text-slate-300 hover:bg-slate-800 hover:text-white",
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
