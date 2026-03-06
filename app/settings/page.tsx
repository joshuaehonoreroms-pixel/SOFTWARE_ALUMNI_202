import { DashboardNav } from "@/components/dashboard-nav"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { SettingsForm } from "@/components/settings-form"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Top Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-4 mx-auto">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground font-bold">
              SN
            </div>
            <span className="font-bold tracking-tight">SN</span>
          </div>
          <div className="flex items-center gap-4">
            <Input className="w-64 h-9 hidden md:block" placeholder="Search the network..." />
            <Avatar className="h-9 w-9 border">
              <AvatarImage src="/placeholder.svg?height=36&width=36" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="container mx-auto flex flex-1 px-4">
        <DashboardNav />

        <main className="flex-1 p-6 overflow-y-auto">
          <SettingsForm />
        </main>

        <DashboardSidebar />
      </div>
    </div>
  )
}
