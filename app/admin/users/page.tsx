"use client"

import { cn } from "@/lib/utils"
import { Suspense } from "react"
import { Search, MoreHorizontal, Shield, User, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const USERS = [
  { id: 1, name: "Admin User", email: "admin@sn.edu", role: "Admin", status: "Active" },
  { id: 2, name: "Jane Cooper", email: "jane.c@example.com", role: "Alumni", status: "Active" },
  { id: 3, name: "Guy Hawkins", email: "guy.h@student.sn.edu", role: "Student", status: "Active" },
  { id: 4, name: "Leslie Alexander", email: "leslie.a@student.sn.edu", role: "Student", status: "Inactive" },
]

function UsersContent() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Users & Roles</h1>
          <p className="text-slate-400 mt-1">Manage platform access and permissions for all accounts.</p>
        </div>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Search all users..."
              className="pl-10 bg-slate-800 border-slate-700 text-white max-w-md"
            />
          </div>
        </div>

        <div className="rounded-lg border border-slate-800 overflow-hidden">
          <Table>
            <TableHeader className="bg-slate-800/50">
              <TableRow className="hover:bg-transparent border-slate-800">
                <TableHead className="text-slate-400">User</TableHead>
                <TableHead className="text-slate-400">Role</TableHead>
                <TableHead className="text-slate-400">Status</TableHead>
                <TableHead className="text-right text-slate-400">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {USERS.map((user) => (
                <TableRow key={user.id} className="border-slate-800 hover:bg-slate-800/30">
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-medium text-slate-200">{user.name}</span>
                      <span className="text-xs text-slate-500">{user.email}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={cn(
                        "font-semibold",
                        user.role === "Admin"
                          ? "bg-red-500/10 text-red-500 border-red-500/20"
                          : user.role === "Alumni"
                            ? "bg-green-500/10 text-green-500 border-green-500/20"
                            : "bg-blue-500/10 text-blue-500 border-blue-500/20",
                      )}
                    >
                      {user.role === "Admin" && <Shield className="h-3 w-3 mr-1" />}
                      {user.role === "Alumni" && <GraduationCap className="h-3 w-3 mr-1" />}
                      {user.role === "Student" && <User className="h-3 w-3 mr-1" />}
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div
                        className={cn(
                          "h-1.5 w-1.5 rounded-full",
                          user.status === "Active" ? "bg-green-500" : "bg-slate-500",
                        )}
                      />
                      <span className="text-sm text-slate-400">{user.status}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-slate-800 border-slate-700 text-white">
                        <DropdownMenuItem className="focus:bg-slate-700 focus:text-white">Change Role</DropdownMenuItem>
                        <DropdownMenuItem className="focus:bg-slate-700 focus:text-white">
                          Reset Password
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-400 focus:bg-slate-700 focus:text-red-400">
                          Suspend Account
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

export default function UserDirectory() {
  return (
    <Suspense fallback={null}>
      <UsersContent />
    </Suspense>
  )
}
