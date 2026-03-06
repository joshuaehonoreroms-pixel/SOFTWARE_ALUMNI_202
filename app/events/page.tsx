import { PublicNav } from "@/components/public-nav"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, ArrowRight } from "lucide-react"

export default function EventsPage() {
  const events = [
    {
      month: "OCT",
      day: "15",
      title: "Tech Summit 2025",
      time: "09:00 AM - 05:00 PM",
      location: "Main Auditorium & Online",
      category: "Conference",
    },
    {
      month: "OCT",
      day: "22",
      title: "Workshop: Advanced System Design",
      time: "02:00 PM - 04:00 PM",
      location: "Lab Room 402",
      category: "Workshop",
    },
    {
      month: "NOV",
      day: "05",
      title: "Alumni Networking Night",
      time: "06:00 PM - 08:30 PM",
      location: "Campus Garden",
      category: "Social",
    },
    {
      month: "NOV",
      day: "12",
      title: "Career Fair: Software & Data",
      time: "10:00 AM - 03:00 PM",
      location: "Great Hall",
      category: "Career",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <PublicNav />

      <main className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <header className="mb-20 text-center max-w-3xl mx-auto">
          <p className="text-sm font-mono text-primary mb-4">/ upcoming encounters</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Events</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Join the SN collective for workshops, conferences, and networking sessions designed to push the boundaries
            of software engineering.
          </p>
        </header>

        {/* Featured Event */}
        <section className="mb-24 border border-border rounded-3xl overflow-hidden relative min-h-[400px] flex items-end">
          <img
            src="/technology-conference-stage-with-lighting.jpg"
            alt="Featured Event"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="relative p-8 md:p-16 w-full max-w-3xl">
            <div className="flex gap-4 mb-6">
              <span className="bg-primary px-3 py-1 rounded-full text-xs font-mono text-primary-foreground">
                NEXT BIG THING
              </span>
              <span className="bg-muted px-3 py-1 rounded-full text-xs font-mono border border-border">
                24 OCT, 2025
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Annual Engineering Hackathon</h2>
            <p className="text-lg text-muted-foreground mb-8">
              48 hours of non-stop building, innovating, and competing. Join 500+ students and alumni to solve
              real-world problems with deep tech solutions.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground">
              Register Now <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </section>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {events.map((event, i) => (
            <div
              key={i}
              className="bg-card border border-border p-8 rounded-2xl flex gap-8 items-center hover:bg-accent/50 transition-all group cursor-pointer"
            >
              <div className="w-24 h-24 shrink-0 bg-muted rounded-xl flex flex-col items-center justify-center border border-border group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <span className="text-xs font-mono opacity-80">{event.month}</span>
                <span className="text-3xl font-bold">{event.day}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-mono uppercase text-primary border border-primary/20 px-2 py-0.5 rounded">
                    {event.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
