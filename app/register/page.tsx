"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, CheckCircle2, Loader2, User, GraduationCap, Building, ShieldCheck } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useSignUp } from "@clerk/nextjs"

export default function RegisterPage() {
  const router = useRouter()
  const { isLoaded, signUp, setActive } = useSignUp()
  const createUser = useMutation(api.users.createUser)
  const [step, setStep] = React.useState(1)
  const [isLoading, setIsLoading] = React.useState(false)
  const [role, setRole] = React.useState<"student" | "alumni" | null>(null)
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })
  const [error, setError] = React.useState<string | null>(null)
  const [verifying, setVerifying] = React.useState(false)
  const [code, setCode] = React.useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isLoaded) return
    setError(null)
    setIsLoading(true)

    try {
      if (!role) {
        throw new Error("Please select a role")
      }

      // Start Clerk sign up
      await signUp.create({
        emailAddress: formData.email,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
      })

      // Send verification email
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" })

      setVerifying(true)
    } catch (err: any) {
      setError(err.errors?.[0]?.message || "Registration failed")
    } finally {
      setIsLoading(false)
    }
  }

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isLoaded) return
    setError(null)
    setIsLoading(true)

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      })

      if (completeSignUp.status !== "complete") {
        console.log(JSON.stringify(completeSignUp, null, 2))
        throw new Error("Verification failed")
      }

      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId })

        // Create user in Convex after Clerk success
        await createUser({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          role: role as "student" | "alumni",
          // We no longer store password in Convex
        })

        router.push("/dashboard")
      }
    } catch (err: any) {
      setError(err.errors?.[0]?.message || "Verification failed")
    } finally {
      setIsLoading(false)
    }
  }

  if (verifying) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h1 className="text-3xl font-bold">Verify your email</h1>
            <p className="text-muted-foreground mt-2">We've sent a code to {formData.email}</p>
          </div>
          <form onSubmit={handleVerify} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="code">Verification Code</Label>
              <Input
                id="code"
                placeholder="000000"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
                className="h-12 text-center text-2xl tracking-[1em]"
              />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Button type="submit" disabled={isLoading} className="w-full h-12 font-mono">
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : ".verify"}
            </Button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex flex-col lg:flex-row">
      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Left Side - Visual & Context */}
      <div className="hidden lg:flex flex-1 bg-muted relative overflow-hidden items-center justify-center p-12 xl:p-24">
        <div className="absolute inset-0 z-0">
          <img
            src="/code-background-register.jpg"
            alt="Code Pattern"
            className="w-full h-full object-cover opacity-10 dark:opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-tl from-primary/20 via-background/50 to-background" />
        </div>
        <div className="relative z-10 text-left max-w-lg">
          <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            NETWORK IS LIVE
          </div>
          <h2 className="text-4xl xl:text-5xl font-bold mb-8 leading-tight">Start your journey in the collective.</h2>
          <div className="space-y-6">
            {[
              { text: "Connect with 5,000+ software engineers", icon: User },
              { text: "Access exclusive internship opportunities", icon: Building },
              { text: "Get mentored by industry-leading alumni", icon: GraduationCap },
              { text: "Showcase your projects to the community", icon: CheckCircle2 },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-center group">
                <div className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-lg text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 md:px-24 lg:px-32 relative">
        <Link
          href="/"
          className="absolute top-12 left-8 md:left-24 text-sm font-mono text-muted-foreground hover:text-primary flex items-center gap-2 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> .back
        </Link>

        <div className="max-w-md w-full mx-auto">
          <div className="mb-8">
            <div className="flex gap-2 mb-4">
              {[1, 2].map((s) => (
                <div
                  key={s}
                  className={`h-1 flex-1 rounded-full transition-colors ${step >= s ? "bg-primary" : "bg-muted"}`}
                />
              ))}
            </div>
            <h1 className="text-3xl font-bold tracking-tight">Join the Network.</h1>
            <p className="text-muted-foreground">
              {step === 1 ? "Tell us who you are." : "Complete your professional account."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 ? (
              <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="grid grid-cols-1 gap-4">
                  <button
                    type="button"
                    onClick={() => setRole("student")}
                    className={`flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all ${role === "student" ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"
                      }`}
                  >
                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold">I am a Student</div>
                      <div className="text-sm text-muted-foreground">Currently studying at the university.</div>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole("alumni")}
                    className={`flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all ${role === "alumni" ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"
                      }`}
                  >
                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                      <Building className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold">I am an Alumni</div>
                      <div className="text-sm text-muted-foreground">Working professional and graduate.</div>
                    </div>
                  </button>
                </div>
                <Button type="button" disabled={!role} onClick={() => setStep(2)} className="w-full h-12 font-mono">
                  .continue
                </Button>
              </div>
            ) : (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
                {error && (
                  <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                    {error}
                  </div>
                )}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input
                      id="firstName"
                      placeholder="Jane"
                      required
                      className="h-12"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      required
                      className="h-12"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      disabled={isLoading}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">University Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@university.edu"
                    required
                    className="h-12"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={isLoading}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    required
                    className="h-12"
                    value={formData.password}
                    onChange={handleInputChange}
                    disabled={isLoading}
                  />
                </div>
                <div className="flex items-center space-x-2 py-2">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="w-4 h-4 rounded border-border bg-card text-primary focus:ring-primary"
                    disabled={isLoading}
                  />
                  <label htmlFor="terms" className="text-xs text-muted-foreground">
                    I agree to the Terms of Service.
                  </label>
                </div>
                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="h-12 px-6"
                    disabled={isLoading}
                  >
                    Back
                  </Button>
                  <Button type="submit" disabled={isLoading} className="flex-1 h-12 font-mono">
                    {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : ".create account"}
                  </Button>
                </div>
              </div>
            )}
          </form>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Already a member?{" "}
            <Link href="/login" className="text-primary font-bold hover:underline transition-colors">
              Sign in
            </Link>
          </p>

          <div className="mt-8 pt-8 border-t border-border/50 text-center">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="gap-2 text-xs font-mono text-muted-foreground hover:text-primary border-dashed bg-transparent"
            >
              <Link href="/admin">
                <ShieldCheck className="w-3.5 h-3.5" />
                .admin_access
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
