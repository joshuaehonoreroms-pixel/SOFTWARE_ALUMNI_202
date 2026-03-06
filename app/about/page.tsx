import { PublicNav } from "@/components/public-nav"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <PublicNav />
      <main className="container mx-auto flex-1 px-4 py-16">
        <div className="mx-auto max-w-3xl space-y-8">
          <h1 className="text-4xl font-bold text-foreground">About SN</h1>
          <p className="text-xl text-muted-foreground">
            SN (Software Engineering Network) is dedicated to fostering a lifelong connection between the department and
            its graduates.
          </p>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <h2>Our Mission</h2>
            <p>
              We believe that the strength of our department lies in our community. By bringing together current
              students and experienced alumni, we create a powerful ecosystem of knowledge sharing, career support, and
              professional growth.
            </p>

            <h2>What We Offer</h2>
            <ul>
              <li>
                <strong>Networking:</strong> A searchable directory of alumni across the globe.
              </li>
              <li>
                <strong>Professional Growth:</strong> Exclusive job boards and career resources.
              </li>
              <li>
                <strong>Academic Excellence:</strong> Insights from industry experts to guide our curriculum.
              </li>
              <li>
                <strong>Mentorship:</strong> Structured programs for students to learn from professionals.
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
