import { PublicNav } from "@/components/public-nav"
import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PublicNav />
      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <header className="mb-12">
          <p className="text-sm font-mono text-primary mb-4">/ legal</p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: October 2025</p>
        </header>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using the Software Engineering Network (SEN) platform, you agree to be bound by these
              Terms of Service. If you disagree with any part of these terms, you may not access the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Eligibility</h2>
            <p className="text-muted-foreground leading-relaxed">
              The SEN platform is exclusively available to current students and alumni of the Software Engineering
              Department. You must use a verified university email address to register. You represent that all
              information you provide is accurate and current.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">As a member of SEN, you agree to:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Provide accurate and truthful information</li>
              <li>Respect other members and maintain professional conduct</li>
              <li>Not share, sell, or misuse other members' information</li>
              <li>Not post spam, offensive content, or engage in harassment</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              The platform, including its original content, features, and functionality, is owned by the Software
              Engineering Department and is protected by international copyright, trademark, and other intellectual
              property laws. You retain ownership of content you post, but grant us a license to use it for platform
              operations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Account Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to terminate or suspend your account immediately, without prior notice or liability,
              for any reason, including breach of these Terms. Upon termination, your right to use the service will
              immediately cease.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              The service is provided "as is" without warranties of any kind. We shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages resulting from your use or inability to use the
              service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify or replace these Terms at any time. We will provide notice of any
              significant changes. Your continued use of the platform after such changes constitutes acceptance of the
              new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these Terms, please contact us at{" "}
              <Link href="/contact" className="text-primary hover:underline">
                legal@sen.edu
              </Link>
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
