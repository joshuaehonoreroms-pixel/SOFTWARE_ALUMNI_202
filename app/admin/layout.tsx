import type React from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { AdminTopbar } from "@/components/admin/admin-topbar"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-slate-950">
      <AdminSidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <AdminTopbar />
        <ScrollArea className="flex-1">
          <main className="p-6">{children}</main>
        </ScrollArea>
      </div>
    </div>
  )
}
