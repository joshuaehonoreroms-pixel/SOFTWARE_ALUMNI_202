import { PublicNav } from "@/components/public-nav"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Cpu, Code, Globe } from "lucide-react"

export default function DepartmentPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <PublicNav />

      <main className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        {/* Hero Section */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 border-primary text-primary">
                Academic Excellence
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance">
                Department of <span className="text-primary text-pretty">Software Engineering</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
                Where deep tech meets a human mindset. We are a collective of curious and passionate techies bound
                together by our pursuit of innovation.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Explore Programs
                </Button>
                <Button size="lg" variant="outline">
                  Meet the Faculty
                </Button>
              </div>
            </div>
            <div className="relative aspect-square md:aspect-video overflow-hidden rounded-3xl bg-muted border border-border">
              <img
                src="/modern-university-computer-lab.jpg"
                alt="Department Lab"
                className="object-cover w-full h-full opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </div>
        </section>

        {/* Core Domains */}
        <section className="mb-24">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-sm font-mono text-primary mb-2">/ what we do</p>
              <h2 className="text-3xl md:text-4xl font-bold">Academic Focus Areas</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border overflow-hidden rounded-2xl">
            {[
              {
                icon: Code,
                title: "Full-Stack Systems",
                desc: "Building scalable web and mobile architectures from end-to-end.",
              },
              {
                icon: Cpu,
                title: "AI & Data Science",
                desc: "Harnessing machine learning to solve complex computational challenges.",
              },
              {
                icon: Globe,
                title: "Cloud Engineering",
                desc: "Deploying and managing distributed systems in modern cloud environments.",
              },
              {
                icon: BookOpen,
                title: "Software Quality",
                desc: "Mastering testing, DevOps, and sustainable engineering practices.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-card p-8 hover:bg-accent/50 transition-colors group">
                <item.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{item.desc}</p>
                <Button variant="link" className="p-0 text-primary h-auto">
                  .read more
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Join Us Section */}
        <section className="relative overflow-hidden rounded-3xl bg-muted p-12 md:p-24 border border-border">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img src="/students-collaborating-on-code.jpg" alt="Student Life" className="object-cover w-full h-full" />
            </div>
            <div>
              <p className="text-sm font-mono text-primary mb-4">/ join the collective</p>
              <h2 className="text-4xl md:text-6xl font-bold mb-8">Want to be a techie too?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our department is more than just a place to study. It's a leading hub for innovation where curious minds
                collaborate to succeed in their most important strategic transformations.
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground font-mono">
                .apply to join
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <h2 className="text-4xl font-bold tracking-tighter mb-8">.the software network</h2>
          </div>
          <div>
            <h4 className="font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>Programs</li>
              <li>Research</li>
              <li>Faculty</li>
              <li>Alumni</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Contact</h4>
            <p className="text-sm text-muted-foreground mb-4">info@softwarenetwork.edu</p>
            <p className="text-sm text-muted-foreground">+45 52 21 64 00</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border flex justify-between text-xs text-muted-foreground">
          <p>© 2026 .the software network. All Rights Reserved</p>
          <p>Powered by SE Department</p>
        </div>
      </footer>
    </div>
  )
}
