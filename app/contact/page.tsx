"use client"

import type React from "react"

import { PublicNav } from "@/components/public-nav"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Contact form submitted")
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PublicNav />
      <main className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <header className="mb-16 text-center max-w-3xl mx-auto">
          <p className="text-sm font-mono text-primary mb-4">/ reach out</p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Have questions about SN? We're here to help. Reach out to our team and we'll get back to you as soon as
            possible.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" placeholder="Jane" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" placeholder="Doe" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="jane@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="How can we help?" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell us more..." rows={6} required />
              </div>
              <Button type="submit" className="w-full h-12">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-bold mb-1">Email</p>
                    <p className="text-muted-foreground">contact@sn.edu</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-bold mb-1">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-bold mb-1">Office</p>
                    <p className="text-muted-foreground">
                      Software Engineering Department
                      <br />
                      University Campus, Building 3<br />
                      Room 305
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="font-bold mb-4">Office Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-mono">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday - Sunday</span>
                  <span className="font-mono">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
