import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Sweatbuds",
  description:
    "How Sweatbuds collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen px-6 sm:px-10 lg:px-16 pt-12 sm:pt-16 pb-24">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-3 mb-10 group"
        >
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
          Privacy Policy
        </h1>
        <p className="mt-3 text-muted">Last updated: May 1, 2026</p>

        <div className="mt-12 space-y-12 text-ink">
          <Section title="1. Introduction">
            <p>
              This Privacy Policy describes how Sweatbuds (&ldquo;we&rdquo;,
              &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, and shares
              information when you use our mobile application (the
              &ldquo;App&rdquo;).
            </p>
            <p>
              Sweatbuds is a fitness accountability app designed to help users
              stay consistent by logging workouts, sharing images with a
              partner, and tracking progress together. We are committed to
              protecting your privacy and being transparent about our data
              practices.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <h3 className="font-semibold text-ink mt-2">
              Information you provide directly
            </h3>
            <p>When you use Sweatbuds, we may collect:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Profile information:</strong> name, username, profile
                photo
              </li>
              <li>
                <strong>Account information:</strong> email, login credentials
              </li>
              <li>
                <strong>Partner information:</strong> invited partner&rsquo;s
                username/email
              </li>
              <li>
                <strong>Workout data:</strong> logged workouts, timestamps
              </li>
              <li>
                <strong>Images:</strong> photos you upload as proof of workouts
              </li>
              <li>
                <strong>Captions &amp; messages:</strong> text associated with
                workout posts
              </li>
              <li>
                <strong>Wager data:</strong> custom accountability stakes
                between users
              </li>
              <li>
                <strong>Subscription data:</strong> trial and subscription
                status
              </li>
            </ul>

            <h3 className="font-semibold text-ink mt-6">
              Information automatically collected
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Device information:</strong> device type, OS version,
                app version
              </li>
              <li>
                <strong>Usage analytics:</strong> interactions such as workouts
                logged, streaks completed, invites sent (via PostHog)
              </li>
              <li>
                <strong>Error &amp; performance data:</strong> crash logs and
                diagnostics (via Sentry)
              </li>
              <li>
                <strong>Session recordings:</strong> may be collected to
                improve UX
              </li>
              <li>
                <strong>Purchase information:</strong> handled via Apple and
                RevenueCat
              </li>
              <li>
                <strong>Advertising &amp; attribution data:</strong> device
                identifiers (e.g., IDFA, if permitted) and conversion events
              </li>
            </ul>

            <h3 className="font-semibold text-ink mt-6">
              Information stored locally on your device
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Cached workout images and history</li>
              <li>Streak progress</li>
              <li>App preferences and settings</li>
            </ul>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Provide core functionality:</strong> enable workout
                logging, image sharing, and partner accountability
              </li>
              <li>
                <strong>Facilitate partner interactions:</strong> allow
                sending/receiving workout updates
              </li>
              <li>
                <strong>Track consistency:</strong> calculate streaks and
                weekly completion
              </li>
              <li>
                <strong>Enable wagers:</strong> manage accountability stakes
                between users
              </li>
              <li>
                <strong>Personalize experience:</strong> tailor reminders and
                progress tracking
              </li>
              <li>
                <strong>Improve the app:</strong> analyze usage and optimize UX
              </li>
              <li>
                <strong>Manage subscriptions:</strong> process payments and
                premium features
              </li>
              <li>
                <strong>Customer support:</strong> respond to issues and
                feedback
              </li>
              <li>
                <strong>Ensure reliability:</strong> monitor errors and system
                performance
              </li>
            </ul>
          </Section>

          <Section title="4. Images & Social Sharing">
            <p>
              Sweatbuds allows users to upload and share workout images with
              their selected partner.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Images are only visible to you and your partner unless
                otherwise specified
              </li>
              <li>We do not sell or publicly distribute your images</li>
              <li>You are responsible for the content you upload</li>
            </ul>
          </Section>

          <Section title="5. Location Data">
            <p>
              Sweatbuds does not require location tracking for core
              functionality.
            </p>
            <p>If location is used in future features:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>It will be permission-based</li>
              <li>
                Used only to enhance workout context (e.g., gym vs outdoors)
              </li>
            </ul>
          </Section>

          <Section title="6. Third-Party Services">
            <p>We use the following third-party services:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>RevenueCat</strong> — subscription management (user ID,
                purchase data)
              </li>
              <li>
                <strong>Supabase</strong> — backend database (profile data,
                workout logs, images)
              </li>
              <li>
                <strong>PostHog</strong> — analytics and session recording
                (usage data, device info)
              </li>
              <li>
                <strong>Sentry</strong> — error monitoring (crash logs, device
                info)
              </li>
              <li>
                <strong>Apple App Store</strong> — payment processing
              </li>
              <li>
                <strong>Advertising platforms (e.g., TikTok)</strong> —
                conversion tracking (IDFA if permitted)
              </li>
            </ul>
          </Section>

          <Section title="7. Data Retention">
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Account data:</strong> retained while your account is
                active
              </li>
              <li>
                <strong>Workout &amp; image data:</strong> retained to provide
                history and partner visibility
              </li>
              <li>
                <strong>Analytics data:</strong> retained per third-party
                policies (typically 90 days–2 years)
              </li>
              <li>
                <strong>Local data:</strong> stored until app deletion or reset
              </li>
            </ul>
          </Section>

          <Section title="8. Data Security">
            <p>We use industry-standard security practices, including:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Encrypted data transmission (HTTPS/TLS)</li>
              <li>Secure backend infrastructure</li>
              <li>Access controls</li>
            </ul>
            <p>However, no system is completely secure.</p>
          </Section>

          <Section title="9. Your Privacy Rights">
            <p>
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access your data</li>
              <li>Correct inaccurate data</li>
              <li>Delete your data</li>
              <li>Export your data</li>
              <li>Opt out of analytics or marketing</li>
              <li>Withdraw consent</li>
            </ul>
            <p>To exercise these rights, contact us below.</p>
          </Section>

          <Section title="10. Children's Privacy">
            <p>
              Sweatbuds is not intended for children under 13, and we do not
              knowingly collect data from children.
            </p>
          </Section>

          <Section title="11. Push Notifications">
            <p>Sweatbuds may send notifications related to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Workout reminders</li>
              <li>
                Partner activity (e.g., &ldquo;Your buddy just worked
                out&rdquo;)
              </li>
              <li>Streak updates</li>
            </ul>
            <p>Notifications are optional and configurable.</p>
          </Section>

          <Section title="12. App Tracking Transparency (ATT)">
            <p>On iOS, you can control tracking permissions:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Go to Settings → Privacy &amp; Security → Tracking</li>
              <li>Disable tracking for Sweatbuds</li>
            </ul>
          </Section>

          <Section title="13. Changes to This Policy">
            <p>
              We may update this Privacy Policy periodically. Updates will be
              reflected by the revised date above.
            </p>
          </Section>

          <Section title="14. Contact Us">
            <p>
              If you have questions or requests regarding this Privacy Policy:
            </p>
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
        </div>

        <div className="mt-16 pt-8 border-t border-black/5">
          <Link
            href="/"
            className="text-muted hover:text-ink transition"
          >
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
