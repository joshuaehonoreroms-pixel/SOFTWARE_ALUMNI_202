"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useSignIn } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Loader2 } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const { isLoaded, signIn, setActive } = useSignIn()
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [error, setError] = React.useState<string | null>(null)
  const [isLoading, setIsLoading] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isLoaded) return
    setIsLoading(true)
    setError(null)

    try {
      const result = await signIn.create({
        identifier: email,
        password: password,
      })

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId })
        router.push("/dashboard")
      } else {
        console.log(result)
      }
    } catch (err: any) {
      setError(err.errors?.[0]?.message || "Invalid email or password")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-24 lg:px-32 relative">
        <Link
          href="/"
          className="absolute top-12 left-8 md:left-24 text-sm font-mono text-muted-foreground hover:text-primary flex items-center gap-2 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> .back to home
        </Link>

        <div className="max-w-md w-full mx-auto">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Welcome Back.</h1>
          <p className="text-muted-foreground mb-12">Log in to the software engineering network collective.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@university.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-card border-border h-12 focus-visible:ring-primary"
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="text-xs text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-card border-border h-12 focus-visible:ring-primary"
                disabled={isLoading}
              />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Button type="submit" className="w-full h-12 bg-primary text-primary-foreground font-mono" size="lg" disabled={isLoading}>
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : ".sign in"}
            </Button>
          </form>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/register" className="text-primary font-bold hover:underline">
              Join the network
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Visual */}
      <div className="hidden lg:flex flex-1 bg-muted relative overflow-hidden items-center justify-center p-24">
        <div className="absolute inset-0 z-0">
          <img
            src="/abstract-tech-pattern.jpg"
            alt="Tech Pattern"
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background/80" />
        </div>
        <div className="relative z-10 text-center">
          <div className="mb-8 inline-block p-4 rounded-3xl bg-background/10 backdrop-blur-xl border border-white/10 shadow-2xl">
            <h2 className="text-6xl font-black tracking-tighter text-primary">.SE</h2>
          </div>
          <h3 className="text-4xl font-bold mb-6 text-balance">The professional hub for engineers.</h3>
          <p className="text-xl text-muted-foreground max-w-md mx-auto leading-relaxed">
            Connect with peers, learn from alumni, and find your next breakthrough opportunity.
          </p>
        </div>
      </div>
    </div>
  )
}
