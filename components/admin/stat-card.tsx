import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface StatCardProps {
  title: string
  value: string
  icon: LucideIcon
  description?: string
  trend?: {
    value: string
    positive: boolean
  }
  className?: string
  iconClassName?: string
}

export function StatCard({ title, value, icon: Icon, description, trend, className, iconClassName }: StatCardProps) {
  return (
    <Card className={cn("bg-slate-900 border-slate-800 text-white", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-slate-400">{title}</CardTitle>
        <div className={cn("p-2 rounded-lg bg-slate-800", iconClassName)}>
          <Icon className="h-4 w-4 text-slate-200" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && <p className="text-xs text-slate-500 mt-1">{description}</p>}
        {trend && (
          <p className={cn("text-xs mt-2 flex items-center gap-1", trend.positive ? "text-green-400" : "text-red-400")}>
            {trend.positive ? "↑" : "↓"} {trend.value}
            <span className="text-slate-500 font-normal ml-1">vs last month</span>
          </p>
        )}
      </CardContent>
    </Card>
  )
}
