import { MolecularBackground } from "@/components/molecular-background"
import { NavHeader } from "@/components/nav-header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <>
      <MolecularBackground />
      <div className="relative z-10">
        <NavHeader />
        <main className="container mx-auto px-4 py-24">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-8">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground mb-12">Last updated: January 2025</p>

            <div className="space-y-8 prose prose-slate dark:prose-invert max-w-none">
              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-bold">1. Information We Collect</h2>
                <p className="leading-relaxed text-muted-foreground">
                  We collect information that you provide directly to us, including when you create an account, make a
                  purchase, subscribe to our newsletter, or contact us for support. This may include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Name and contact information</li>
                  <li>Email address</li>
                  <li>Payment information (processed securely through third parties)</li>
                  <li>Communication preferences</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-bold">2. How We Use Your Information</h2>
                <p className="leading-relaxed text-muted-foreground">We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Process your transactions and send related information</li>
                  <li>Send you technical notices, updates, and support messages</li>
                  <li>Respond to your comments, questions, and customer service requests</li>
                  <li>Send you promotional communications, such as information about new products and features</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                  <li>Detect, prevent, and address technical issues</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-bold">3. Cookies and Tracking</h2>
                <p className="leading-relaxed text-muted-foreground">
                  We use cookies and similar tracking technologies to track activity on our website and hold certain
                  information. Cookies are files with small amounts of data that are sent to your browser and stored on
                  your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
                  sent.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-bold">4. Third-Party Services</h2>
                <p className="leading-relaxed text-muted-foreground">
                  We may employ third-party companies and individuals to facilitate our service, provide the service on
                  our behalf, perform service-related services, or assist us in analyzing how our service is used. These
                  third parties have access to your personal information only to perform these tasks on our behalf and
                  are obligated not to disclose or use it for any other purpose.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-bold">5. Amazon Affiliate Program</h2>
                <p className="leading-relaxed text-muted-foreground">
                  As an Amazon Associate, we earn from qualifying purchases. When you click on links to products on
                  Amazon and make a purchase, we may receive a commission. This does not affect the price you pay.
                  Amazon's privacy policy applies to information collected through their platform.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-bold">6. Data Security</h2>
                <p className="leading-relaxed text-muted-foreground">
                  The security of your personal information is important to us, but remember that no method of
                  transmission over the Internet or method of electronic storage is 100% secure. While we strive to use
                  commercially acceptable means to protect your personal information, we cannot guarantee its absolute
                  security.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-bold">7. Your Rights</h2>
                <p className="leading-relaxed text-muted-foreground">
                  You have the right to access, update, or delete your personal information at any time. You can also
                  opt-out of marketing communications by following the unsubscribe link in our emails or contacting us
                  directly.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-bold">8. Changes to This Policy</h2>
                <p className="leading-relaxed text-muted-foreground">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-bold">9. Contact Us</h2>
                <p className="leading-relaxed text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us at privacy@purr-hydrate.com.
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
