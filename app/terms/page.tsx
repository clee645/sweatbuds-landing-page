import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use — Sweatbuds",
  description: "The terms governing your use of the Sweatbuds app.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen px-6 sm:px-10 lg:px-16 pt-12 sm:pt-16 pb-24">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-3 mb-10 group">
          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-sm">
            <Image
              src="/app-icon.png"
              alt="Sweatbuds app icon"
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-ink group-hover:opacity-80 transition">
            Sweatbuds
          </span>
        </Link>

        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-ink">
          Terms of Use
        </h1>
        <p className="mt-3 text-muted">Last updated: May 1, 2026</p>

        <div className="mt-12 space-y-12 text-ink">
          <Section title="1. Acceptance of Terms">
            <p>
              These Terms of Use (&ldquo;Terms&rdquo;) constitute a legally
              binding agreement between you and{" "}
              <strong>Sweatbuds</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
              or &ldquo;our&rdquo;) regarding your use of the Sweatbuds mobile
              application (the &ldquo;App&rdquo;).
            </p>
            <p>
              By downloading, installing, or using the App, you agree to these
              Terms. If you do not agree, do not use the App.
            </p>
          </Section>

          <Section title="2. Description of Service">
            <p>
              Sweatbuds is a mobile application designed to help individuals
              stay consistent with fitness by partnering with another person
              for accountability.
            </p>
            <p>Features may include:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Logging workouts with photo-based check-ins</li>
              <li>Sharing workout images and updates with a partner</li>
              <li>Weekly activity tracking and streaks</li>
              <li>Accountability systems (e.g., wagers, challenges)</li>
              <li>Notifications and reminders</li>
              <li>Social and partner-based interactions</li>
              <li>Premium features available via subscription</li>
            </ul>
            <p>
              Sweatbuds is intended for{" "}
              <strong>personal motivation and accountability</strong>, not
              professional fitness coaching.
            </p>
          </Section>

          <Section title="3. Eligibility">
            <p>
              You must be at least 13 years old (or the minimum age required
              in your jurisdiction).
            </p>
            <p>
              If you are under 18, you confirm that you have parental or
              guardian consent.
            </p>
          </Section>

          <Section title="4. License Grant and Restrictions">
            <h3 className="font-semibold text-ink mt-2">License</h3>
            <p>
              We grant you a limited, non-exclusive, non-transferable,
              revocable license to use the App for personal, non-commercial
              purposes.
            </p>

            <h3 className="font-semibold text-ink mt-6">Restrictions</h3>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Reverse engineer, modify, or copy the App</li>
              <li>Use the App for illegal, abusive, or harmful purposes</li>
              <li>Harass, exploit, or harm other users</li>
              <li>Attempt to gain unauthorized access to systems</li>
              <li>Use bots or automation to manipulate the App</li>
              <li>Upload malicious code or harmful content</li>
              <li>Impersonate another person or misrepresent identity</li>
            </ul>
          </Section>

          <Section title="5. User Accounts and Data">
            <h3 className="font-semibold text-ink mt-2">
              Account Responsibility
            </h3>
            <p>
              You are responsible for maintaining the confidentiality of your
              account and all activity under it.
            </p>

            <h3 className="font-semibold text-ink mt-6">User Data</h3>
            <p>
              You retain ownership of your data (e.g., workout logs, images,
              profile information). By using the App, you grant us permission
              to process your data in accordance with our Privacy Policy.
            </p>

            <h3 className="font-semibold text-ink mt-6">Accuracy</h3>
            <p>You agree to provide accurate and up-to-date information.</p>
          </Section>

          <Section title="6. Social Features & User Content">
            <h3 className="font-semibold text-ink mt-2">Shared Content</h3>
            <p>
              Sweatbuds allows you to share content (e.g., workout photos,
              captions) with your partner.
            </p>
            <p>You understand that:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Content you share may be viewed by your partner</li>
              <li>You are solely responsible for what you upload</li>
            </ul>

            <h3 className="font-semibold text-ink mt-6">Prohibited Content</h3>
            <p>You agree not to upload or share:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Offensive, abusive, or illegal content</li>
              <li>Explicit or inappropriate material</li>
              <li>Content that violates others&rsquo; rights</li>
            </ul>
            <p>
              We reserve the right to remove content or restrict access if
              violations occur.
            </p>

            <h3 className="font-semibold text-ink mt-6">
              Accountability &amp; Wagers
            </h3>
            <p>
              Sweatbuds may allow users to set{" "}
              <strong>personal accountability agreements or wagers</strong>{" "}
              with partners.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                These are{" "}
                <strong>user-defined and not enforced by Sweatbuds</strong>
              </li>
              <li>
                We are{" "}
                <strong>
                  not responsible for outcomes, disputes, or obligations
                </strong>{" "}
                between users
              </li>
            </ul>
          </Section>

          <Section title="7. Health & Fitness Disclaimer">
            <h3 className="font-semibold text-ink mt-2">Not Medical Advice</h3>
            <p>
              Sweatbuds is not a medical or fitness professional. All content
              is for informational purposes only and should not replace
              professional advice.
            </p>

            <h3 className="font-semibold text-ink mt-6">Use at Your Own Risk</h3>
            <p>You acknowledge that:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Physical activity involves risk of injury</li>
              <li>You are responsible for your own health and safety</li>
              <li>You should consult a doctor before starting a fitness program</li>
            </ul>

            <h3 className="font-semibold text-ink mt-6">Emergencies</h3>
            <p>
              If you experience a medical emergency, call emergency services
              immediately (e.g., 911 in the United States).
            </p>
          </Section>

          <Section title="8. Premium Subscriptions">
            <h3 className="font-semibold text-ink mt-2">Subscription Terms</h3>
            <p>
              Certain features may require a paid subscription
              (&ldquo;Premium&rdquo;).
            </p>

            <h3 className="font-semibold text-ink mt-6">Billing</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Payments are processed through Apple&rsquo;s App Store</li>
              <li>Subscriptions automatically renew unless canceled</li>
              <li>
                Renewal occurs within 24 hours before the billing period ends
              </li>
              <li>You can manage subscriptions in your Apple ID settings</li>
            </ul>

            <h3 className="font-semibold text-ink mt-6">Free Trials</h3>
            <p>
              Free trials may be offered. You will be charged after the trial
              unless canceled before it ends.
            </p>

            <h3 className="font-semibold text-ink mt-6">Pricing Changes</h3>
            <p>We may update pricing with prior notice.</p>
          </Section>

          <Section title="9. Intellectual Property">
            <h3 className="font-semibold text-ink mt-2">Ownership</h3>
            <p>
              All App content—including design, branding, code, and
              features—belongs to Sweatbuds and is protected by intellectual
              property laws.
            </p>

            <h3 className="font-semibold text-ink mt-6">User Content</h3>
            <p>
              You own your content but grant us a license to use it to operate
              and improve the App.
            </p>
          </Section>

          <Section title="10. Disclaimer of Warranties">
            <p>
              The App is provided &ldquo;as is&rdquo; and &ldquo;as
              available&rdquo; without warranties of any kind.
            </p>
            <p>We do not guarantee:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Accuracy or reliability of activity tracking</li>
              <li>Continuous or error-free service</li>
              <li>That you will achieve fitness results</li>
              <li>That partner participation will be consistent</li>
            </ul>
          </Section>

          <Section title="11. Limitation of Liability">
            <p>
              To the maximum extent permitted by law, we are not liable for:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Injuries or health issues resulting from App use</li>
              <li>Disputes between users or partners</li>
              <li>Missed workouts, failed wagers, or unmet goals</li>
              <li>Loss of data or inaccuracies</li>
              <li>Indirect or consequential damages</li>
            </ul>
            <p>
              Our total liability will not exceed the amount you paid (if any)
              in the past 12 months.
            </p>
          </Section>

          <Section title="12. Third-Party Services">
            <p>The App may rely on third-party tools such as:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Analytics (e.g., PostHog)</li>
              <li>Error monitoring (e.g., Sentry)</li>
              <li>Backend infrastructure (e.g., Supabase)</li>
              <li>Subscription management (e.g., RevenueCat)</li>
            </ul>
            <p>We are not responsible for third-party services.</p>
          </Section>

          <Section title="13. Modifications">
            <h3 className="font-semibold text-ink mt-2">App Changes</h3>
            <p>We may modify or discontinue features at any time.</p>

            <h3 className="font-semibold text-ink mt-6">Terms Changes</h3>
            <p>We may update these Terms. Continued use means acceptance.</p>
          </Section>

          <Section title="14. Termination">
            <h3 className="font-semibold text-ink mt-2">By You</h3>
            <p>You may stop using the App at any time.</p>

            <h3 className="font-semibold text-ink mt-6">By Us</h3>
            <p>
              We may suspend or terminate your access if you violate these
              Terms.
            </p>
          </Section>

          <Section title="15. Geographic Availability">
            <p>
              The App is operated from the United States. Use in other regions
              is at your own risk.
            </p>
          </Section>

          <Section title="16. Feedback">
            <p>
              If you provide feedback, you grant us the right to use it
              without compensation.
            </p>
          </Section>

          <Section title="17. Apple App Store Terms">
            <p>If you downloaded the App via Apple:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Apple is not responsible for the App</li>
              <li>Apple provides no maintenance or support obligations</li>
              <li>Apple is a third-party beneficiary of these Terms</li>
            </ul>
          </Section>

          <Section title="18. Contact Us">
            <p>If you have questions regarding these Terms:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:support@sweatbuds.app"
                  className="text-brand hover:underline"
                >
                  support@sweatbuds.app
                </a>
              </li>
              <li>
                <strong>App:</strong> Sweatbuds
              </li>
            </ul>
          </Section>

          <Section title="19. Acknowledgment">
            <p>By using Sweatbuds, you confirm that you:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Have read these Terms</li>
              <li>Understand them</li>
              <li>Agree to be bound by them</li>
            </ul>
          </Section>
        </div>

        <div className="mt-16 pt-8 border-t border-black/5">
          <Link href="/" className="text-muted hover:text-ink transition">
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink mb-4">
        {title}
      </h2>
      <div className="space-y-4 text-muted leading-relaxed">{children}</div>
    </section>
  );
}
