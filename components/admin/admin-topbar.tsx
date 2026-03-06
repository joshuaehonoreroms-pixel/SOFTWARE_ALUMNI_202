"use client"

import { Search, Bell, LogOut } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function AdminTopbar() {
  return (
    <div className="flex h-16 items-center justify-between border-b border-slate-800 bg-slate-900 px-6">
      {/* Search */}
      <div className="relative w-96">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <Input
          type="search"
          placeholder="Search..."
          className="pl-10 bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
        />
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4">
        {/* Admin Mode Badge */}
        <Badge variant="outline" className="border-green-500 text-green-400">
          Admin Mode
        </Badge>

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative text-slate-300 hover:text-white hover:bg-slate-800">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
            3
          </span>
        </Button>

        {/* Profile dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center gap-2 text-slate-300 hover:text-white hover:bg-slate-800"
            >
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-blue-600 text-white text-xs">AD</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">Admin User</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 bg-slate-800 border-slate-700 text-white">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-slate-700" />
            <DropdownMenuItem className="focus:bg-slate-700 focus:text-white">Profile Settings</DropdownMenuItem>
            <DropdownMenuItem className="focus:bg-slate-700 focus:text-white">Switch to User View</DropdownMenuItem>
            <DropdownMenuSeparator className="bg-slate-700" />
            <DropdownMenuItem className="text-red-400 focus:bg-slate-700 focus:text-red-400">
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
