import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs"

export function PublicNav() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary">
              <span className="text-xl font-bold text-white">SN</span>
            </div>

          </Link>

          <div className="hidden items-center gap-6 md:flex">
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="/department"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Department
            </Link>
            <Link
              href="/alumni"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Alumni
            </Link>
            <Link
              href="/news"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              News
            </Link>
            <Link
              href="/events"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Events
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle /> {/* added global theme toggle */}
          <SignedOut>
            <Button variant="ghost" asChild>
              <Link href="/login">Log In</Link>
            </Button>
            <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Link href="/register">Join the Network</Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <Button variant="ghost" asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </nav>
  )
}
