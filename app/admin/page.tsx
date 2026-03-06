import { cn } from "@/lib/utils"
import { StatCard } from "@/components/admin/stat-card"
import { Users, UserCheck, Clock, FileText, Activity } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Dashboard Overview</h1>
        <p className="text-slate-400 mt-1">Platform performance and system health at a glance.</p>
      </div>

      {/* KPI Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Users"
          value="1,248"
          icon={Users}
          trend={{ value: "12%", positive: true }}
          iconClassName="bg-blue-500/10 text-blue-500"
        />
        <StatCard
          title="Registered Alumni"
          value="452"
          icon={UserCheck}
          trend={{ value: "5%", positive: true }}
          iconClassName="bg-green-500/10 text-green-500"
        />
        <StatCard
          title="Pending Approvals"
          value="24"
          icon={Clock}
          description="Awaiting admin verification"
          iconClassName="bg-amber-500/10 text-amber-500"
        />
        <StatCard title="Active Posts" value="86" icon={FileText} iconClassName="bg-purple-500/10 text-purple-500" />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        {/* Main Chart Placeholder */}
        <Card className="lg:col-span-4 bg-slate-900 border-slate-800 text-white">
          <CardHeader>
            <CardTitle>Platform Traffic</CardTitle>
            <CardDescription className="text-slate-400">User engagement over the last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full flex items-end justify-between gap-2 px-2 pb-4 pt-8">
              {[65, 45, 78, 52, 90, 85, 60, 40, 70, 55, 80, 75].map((h, i) => (
                <div key={i} className="flex-1 group relative">
                  <div
                    className="w-full bg-blue-600/40 rounded-t-sm transition-all group-hover:bg-blue-500/60"
                    style={{ height: `${h}%` }}
                  />
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all text-[10px] bg-slate-800 px-1 rounded border border-slate-700">
                    {h}%
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-slate-500 px-2 mt-2">
              <span>Jan</span>
              <span>Jun</span>
              <span>Dec</span>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="lg:col-span-3 bg-slate-900 border-slate-800 text-white">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Recent Activity</CardTitle>
              <Activity className="h-4 w-4 text-slate-400" />
            </div>
            <CardDescription className="text-slate-400">Latest system and user actions</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px] pr-4">
              <div className="space-y-4">
                {[
                  { user: "John Doe", action: "registered as alumni", time: "2 min ago", type: "alumni" },
                  { user: "Admin", action: "published new event", time: "1 hour ago", type: "system" },
                  { user: "Sarah Smith", action: "updated learning path", time: "3 hours ago", type: "student" },
                  { user: "System", action: "automated backup successful", time: "5 hours ago", type: "log" },
                  { user: "Mike Ross", action: "submitted clearance request", time: "8 hours ago", type: "student" },
                  { user: "Emma Watson", action: "approved alumni status", time: "Yesterday", type: "alumni" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm">
                    <div
                      className={cn(
                        "mt-1.5 h-2 w-2 rounded-full shrink-0",
                        item.type === "alumni"
                          ? "bg-green-500"
                          : item.type === "system"
                            ? "bg-blue-500"
                            : item.type === "student"
                              ? "bg-purple-500"
                              : "bg-slate-500",
                      )}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-slate-200">
                        {item.user} <span className="font-normal text-slate-400">{item.action}</span>
                      </p>
                      <p className="text-xs text-slate-500">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
