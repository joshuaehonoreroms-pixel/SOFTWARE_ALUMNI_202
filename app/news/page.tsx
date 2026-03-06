import { PublicNav } from "@/components/public-nav"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"

export default function NewsPage() {
  const articles = [
    {
      date: "02 Oct, 2025",
      category: "Research",
      title: "Breakthrough in Sustainable Cloud Computing Architectures",
      desc: "Our research team has published a new framework for reducing energy consumption in data centers by 40%.",
    },
    {
      date: "25 Sep, 2025",
      category: "Innovation",
      title: "The Collective Wins Global Hackathon for AI in Healthcare",
      desc: "A group of our software engineering students took home the top prize for their diagnostic assistant tool.",
    },
    {
      date: "14 Sep, 2025",
      category: "Department",
      title: "New Partnership with Global Tech Giant for Internship Program",
      desc: "Expanding opportunities for our students to gain real-world experience at the forefront of the industry.",
    },
    {
      date: "01 Sep, 2025",
      category: "Community",
      title: "Annual Alumni Meetup: Bridging the Gap Between Generations",
      desc: "Over 200 graduates returned to share insights and mentor current students in our software engineering network.",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <PublicNav />

      <main className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <header className="mb-20">
          <p className="text-sm font-mono text-primary mb-4">/ press & insights</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Latest News</h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Stay updated with the latest breakthroughs, department achievements, and stories from our software
            engineering collective.
          </p>
        </header>

        {/* Featured News */}
        <section className="mb-24 relative group cursor-pointer border border-border rounded-3xl overflow-hidden bg-card">
          <div className="grid md:grid-cols-2">
            <div className="aspect-video md:aspect-auto overflow-hidden">
              <img
                src="/modern-ai-research-laboratory-with-computers.jpg"
                alt="Featured News"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="p-12 flex flex-col justify-center">
              <Badge variant="outline" className="w-fit mb-6 border-primary text-primary">
                Featured Article
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-primary transition-colors">
                The Future of AI: How our Department is Leading the Conversation
              </h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Exploring the ethical implications and technical possibilities of generative models in sustainable
                software development environments.
              </p>
              <div className="flex items-center gap-2 text-primary font-mono text-sm group-hover:translate-x-2 transition-transform">
                READ MORE <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </section>

        {/* News List */}
        <section className="space-y-px bg-border border border-border rounded-2xl overflow-hidden">
          {articles.map((article, i) => (
            <div
              key={i}
              className="bg-card p-8 md:p-12 hover:bg-accent/50 transition-colors flex flex-col md:flex-row gap-8 items-start cursor-pointer group"
            >
              <div className="w-40 shrink-0">
                <p className="text-sm font-mono text-muted-foreground mb-2">{article.date}</p>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-none text-[10px] uppercase">
                  {article.category}
                </Badge>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{article.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-3xl">{article.desc}</p>
              </div>
              <div className="self-center md:self-auto group-hover:translate-x-2 transition-transform text-primary">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}
