import { PublicNav } from "@/components/public-nav"
import Link from "next/link"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PublicNav />
      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <header className="mb-12">
          <p className="text-sm font-mono text-primary mb-4">/ legal</p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: October 2025</p>
        </header>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to the Software Engineering Network (SEN). We are committed to protecting your personal
              information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you use our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We collect personal information that you voluntarily provide to us when you register on the platform,
              express an interest in obtaining information about us or our products and services, or otherwise contact
              us.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Name, email address, and university affiliation</li>
              <li>Professional information (graduation year, company, role)</li>
              <li>Profile information and photographs</li>
              <li>Communication data and messages within the platform</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Facilitate account creation and authentication</li>
              <li>Connect students with alumni and enable networking</li>
              <li>Send administrative information and platform updates</li>
              <li>Improve our services and user experience</li>
              <li>Protect against unauthorized access and maintain security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Data Sharing and Disclosure</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell your personal information. We may share your information only with verified members of the
              SEN community as part of the networking features, and with service providers who assist us in operating
              the platform under strict confidentiality agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Access, update, or delete your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of your data</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions or concerns about this Privacy Policy, please contact us at{" "}
              <Link href="/contact" className="text-primary hover:underline">
                privacy@sen.edu
              </Link>
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
