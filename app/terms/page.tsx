import { MolecularBackground } from "@/components/molecular-background"
import { NavHeader } from "@/components/nav-header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <>
      <MolecularBackground />
      <div className="relative z-10">
        <NavHeader />
        <main className="container mx-auto px-4 py-24">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-8">Terms of Service</h1>
            <p className="text-sm text-muted-foreground mb-12">Last updated: January 2025</p>

            <div className="space-y-8 prose prose-slate dark:prose-invert max-w-none">
              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-bold">1. Acceptance of Terms</h2>
                <p className="leading-relaxed text-muted-foreground">
                  By accessing and using Purr-Hydrate.com, you accept and agree to be bound by the terms and provisions
                  of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-bold">2. Use License</h2>
                <p className="leading-relaxed text-muted-foreground">
                  Permission is granted to temporarily view the materials (information or software) on Purr-Hydrate.com
                  for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer
                  of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or public display (commercial or non-commercial)</li>
                  <li>Attempt to decompile or reverse engineer any software contained on Purr-Hydrate.com</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-bold">3. Affiliate Disclosure</h2>
                <p className="leading-relaxed text-muted-foreground">
                  Purr-Hydrate.com is a participant in the Amazon Services LLC Associates Program, an affiliate
                  advertising program designed to provide a means for sites to earn advertising fees by advertising and
                  linking to Amazon.com. We may earn commissions from qualifying purchases made through links on our
                  site.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-bold">4. Product Information</h2>
                <p className="leading-relaxed text-muted-foreground">
                  We strive to provide accurate product information and reviews. However, we do not guarantee the
                  accuracy, completeness, or reliability of any product descriptions, pricing, or other information.
                  Prices and availability are subject to change without notice.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-bold">5. Disclaimer</h2>
                <p className="leading-relaxed text-muted-foreground">
                  The materials on Purr-Hydrate.com are provided on an 'as is' basis. Purr-Hydrate.com makes no
                  warranties, expressed or implied, and hereby disclaims and negates all other warranties including,
                  without limitation, implied warranties or conditions of merchantability, fitness for a particular
                  purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-bold">6. Limitations</h2>
                <p className="leading-relaxed text-muted-foreground">
                  In no event shall Purr-Hydrate.com or its suppliers be liable for any damages (including, without
                  limitation, damages for loss of data or profit, or due to business interruption) arising out of the
                  use or inability to use the materials on Purr-Hydrate.com.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-bold">7. Contact Information</h2>
                <p className="leading-relaxed text-muted-foreground">
                  If you have any questions about these Terms of Service, please contact us at support@purr-hydrate.com.
                </p>
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
